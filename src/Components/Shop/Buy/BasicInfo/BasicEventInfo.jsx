import { IoTicketOutline } from "react-icons/io5";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { VscListSelection } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import {LoginContext} from "../../../../Contexts/LoginContext";
import './BasicEinfo.css';


function BasicEventInfo({ event }) {

    const {userLogged, isLoged} = useContext(LoginContext);
    const navigate = useNavigate();

    // Estado para rastrear selección de boletas y total
    const [selectedTickets, setSelectedTickets] = useState(
        event.localities.map(() => 0) // Inicialmente, 0 boletas para cada localidad
    );
    const [total, setTotal] = useState(0);

    // Manejar cambios en la selección de boletas
    const handleTicketSelection = (index, value) => {
        const ticketCount = parseInt(value, 10) || 0;

        // Actualizamos las boletas seleccionadas
        const updatedTickets = [...selectedTickets];
        updatedTickets[index] = ticketCount;

        setSelectedTickets(updatedTickets);

        // Recalculamos el total
        const newTotal = updatedTickets.reduce((acc, count, i) => {
            return acc + count * event.localities[i].price;
        }, 0);

        setTotal(newTotal);
    };

    // Enviar datos al backend
    const handleGoToBuy = () => {
        if(isLoged === false){
            alert("You must be logged in to buy tickets.");
            navigate("/login");
            return;
        }

        const purchases = selectedTickets
            .map((count, index) => {
                if (count > 0) {
                    return {
                        eventId: event.id,
                        clientId: userLogged.id,
                        cant: count,
                        totalPrice: count * event.localities[index].price,
                        localityId: event.localities[index].id,
                        date: new Date().toISOString(), // Formato ISO para LocalDateTime
                    };
                }
                return null;
            })
            .filter((item) => item !== null); // Eliminamos entradas nulas

        if (purchases.length === 0) {
            alert("No has seleccionado ninguna boleta.");
            return;
        }

        fetch("http://localhost:8080/api/client/buyTicket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchases),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al comprar boletas");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Compra exitosa:", data);
                alert("Compra realizada con éxito.");
            })
            .catch((error) => {
                console.error("Error en la compra:", error);
                alert("Hubo un error al procesar la compra.");
            });
    };

    return (
        <div className="BasicInfoContainer">
            <div className="generalInfoI">
                <div className="eventInfoI">
                    <h2 className="titleInfoE">General Information</h2>
                    <div className="SeparatorI" />
                    <div className="infoE">
                        <div className="info">
                            <IoTicketOutline size={50} />
                            <h3>Name: {event.name}</h3>
                        </div>
                        <div className="info">
                            <CiLocationOn size={50} />
                            <h3>Location: {event.address}</h3>
                        </div>
                        <div className="info">
                            <CiCalendarDate size={50} />
                            <h3>Date: {event.eventDate}</h3>
                        </div>
                        <div className="info">
                            <VscListSelection size={50} />
                            <h3>Type of event: {event.type}</h3>
                        </div>
                    </div>
                </div>
                <img src={event.image} alt="" className="eventImageI" />
            </div>
            <p className="eventDescriptionI">{event.description}</p>
            <div className="tableInfoE1">
                <h2 className="titleInfoE">Location and Prices</h2>
                <div className="SeparatorI" />
                <div className="localitiesContainer">
                    <div className="tableContainer">
                        <table className="localitiesTable">
                            <thead>
                            <tr>
                                <th>Locality</th>
                                <th>Price</th>
                                <th>Capacity</th>
                                <th>Tickets to buy</th>
                                <th>Subtotal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {event.localities.map((locality, index) => (
                                <tr key={index}>
                                    <td>{locality.name}</td>
                                    <td>{locality.price}</td>
                                    <td>{locality.maxCapacity}</td>
                                    <td>
                                        <select
                                            className={"ticketSelect"}
                                            defaultValue=""
                                            onChange={(e) =>
                                                handleTicketSelection(index, e.target.value)
                                            }
                                        >
                                            <option value="" disabled>
                                                Select
                                            </option>
                                            {[...Array(3).keys()].map((num) => (
                                                <option key={num + 1} value={num + 1}>
                                                    {num + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        ${selectedTickets[index] * locality.price || 0}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="totalContainer">
                            <h3>Total: ${total}</h3>
                        </div>
                    </div>
                    <button onClick={handleGoToBuy} className="BtnGoBuy">
                        BUY TICKET
                    </button>
                </div>
            </div>
        </div>
    );
}

export { BasicEventInfo };
