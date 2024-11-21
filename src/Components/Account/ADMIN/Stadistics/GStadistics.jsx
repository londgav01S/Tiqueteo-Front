import React, {useContext, useRef, useState} from 'react';
import {Search} from "../../../Home/SearchInHome/Search";
import './index.css';
import {LineGraph} from "./Graphics/LineGraph";
import {BarGraph} from "./Graphics/BarGraph";
import {PieGraph} from "./Graphics/PieGraph";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import {useNavigate} from "react-router-dom";
import {EventContext} from "../../../../Contexts/EventContex";


const RangeDate = {
    startDate: "",
    endDate: "",
};

function GStadistics() {


    const barGraphRef = useRef(null);
    const lineGraphRef = useRef(null);
    const pieGraphRef = useRef(null);
    const [rangeDate, setRangeDate] = useState(RangeDate);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {setReports} = useContext(EventContext);

    async function handleGeneratePDF() {
        const pdf = new jsPDF();

        // Captura y añade el gráfico de barras
        const barCanvas = await html2canvas(barGraphRef.current);
        const barImageData = barCanvas.toDataURL('image/png');
        pdf.addImage(barImageData, 'PNG', 10, 10, 180, 100);

        // Añade una nueva página para el siguiente gráfico
        pdf.addPage();

        // Captura y añade el gráfico de líneas
        const lineCanvas = await html2canvas(lineGraphRef.current);
        const lineImageData = lineCanvas.toDataURL('image/png');
        pdf.addImage(lineImageData, 'PNG', 10, 10, 180, 100);

        // Añade una nueva página para el siguiente gráfico
        pdf.addPage();

        // Captura y añade el gráfico de pie
        const pieCanvas = await html2canvas(pieGraphRef.current);
        const pieImageData = pieCanvas.toDataURL('image/png');
        pdf.addImage(pieImageData, 'PNG', 10, 10, 180, 100);

        // Guarda el PDF
        pdf.save('graficas.pdf');
    }

    const handleDateChange = (event) => {
        const { name, value } = event.target;

        setRangeDate((prevRangeDate) => ({
            ...prevRangeDate,
            [name]: value,
        }));

        if (name === "startDate" && new Date(value) > new Date(rangeDate.endDate)) {
            setError("La fecha de inicio debe ser antes que la fecha de fin.");
        } else if (name === "endDate" && new Date(value) < new Date(rangeDate.startDate)) {
            setError("La fecha de fin debe ser después que la fecha de inicio.");
        } else {
            setError(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (new Date(rangeDate.startDate) > new Date(rangeDate.endDate)) {
            setError("La fecha de inicio debe ser antes que la fecha de fin.");
            return;
        }

        setError(null);

        // Lógica para manejar el rango de fechas seleccionado
        console.log("Rango de fechas:", rangeDate);
        navigate("/results", { state: { rangeDate } });
    };

    function handleGenerateStd(e) {
        e.preventDefault();

        if (new Date(rangeDate.startDate) > new Date(rangeDate.endDate)) {
            setError("La fecha de inicio debe ser anterior a la fecha de fin.");
            return;
        }

        setError(null);

        // Lógica para enviar el rango de fechas al backend
        fetch("http://localhost:8080/api/admin/report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rangeDate),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al generar el reporte");
                }
                return response.json();
            })
            .then((data) => {
                setReports(data);// Asume que el backend devuelve un objeto ReportDto
                console.log(data);
            })
            .catch((err) => {
                setError(err.message);
            });
        //TODO: pasar lo castear el reporte para hacer las graficas
    }

    return (
        <div className="GstadisticsContainer">
            <div className="Gstadistics">
                <h2>Generate reports</h2>
                <div>
                    <style>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <h4>Encuentra eventos por rango de fechas:</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="Rangedates">
                            <label htmlFor="startDate">Fecha de inicio:</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={rangeDate.startDate}
                                onChange={handleDateChange}
                                required
                            />
                        </div>
                        <div className="Rangedates">
                            <label htmlFor="endDate">Fecha de fin:</label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                value={rangeDate.endDate}
                                onChange={handleDateChange}
                                required
                            />
                        </div>
                        {error && alert(error)}
                    </form>
                </div>
                <div className="BtnGenerateContainer">
                    <button className="BtnGeneratePDF" onClick={handleGenerateStd}>Generate Statistics</button>
                    <button onClick={handleGeneratePDF} className="BtnGeneratePDF">Generate PDF</button>
                </div>
            </div>
            <div ref={barGraphRef}>
                <BarGraph/>
            </div>
            <div ref={lineGraphRef}>
                <LineGraph/>
            </div>
            <div ref={pieGraphRef}>
                <PieGraph/>
            </div>
        </div>
    );

}

export {GStadistics};