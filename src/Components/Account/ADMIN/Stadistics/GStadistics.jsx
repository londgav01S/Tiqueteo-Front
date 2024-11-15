import React, {useRef} from 'react';
import {Search} from "../../../Search/Search";
import './index.css';
import {LineGraph} from "./Graphics/LineGraph";
import {BarGraph} from "./Graphics/BarGraph";
import {PieGraph} from "./Graphics/PieGraph";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

function GStadistics() {

    const barGraphRef = useRef(null);
    const lineGraphRef = useRef(null);
    const pieGraphRef = useRef(null);

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

    function handleGenerateStd() {
        //TODO: traer los datos del back para generar los graficos
    }

    return (
        <div className="GstadisticsContainer">
            <div className="Gstadistics">
                <h2>Generate reports</h2>
                <Search/>
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