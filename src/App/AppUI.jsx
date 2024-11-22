import {HeadBar} from "../Components/Home/HeadBar/HeadBar";
import {BackG} from "../Services/Path";
import React, {useContext, useEffect, useState} from "react";
import {EventContext} from "../Contexts/EventContex";

function AppUI() {

    const {setEvents} = useContext(EventContext);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        findEvents();
    }, []);

    function findEvents() {
        fetch("http://localhost:8080/api/admin/allEvents", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los eventos");
                }
                return response.json();
            })
            .then((data) => {
                setEvents(data); // Guarda los eventos obtenidos
                setError(null); // Limpia cualquier error previo
            })
            .catch((err) => {
                setError(err.message); // Maneja errores en la solicitud
            });
    }
    


    return (
        <>
            <HeadBar/>
            <BackG/>
        </>
    )
}

export {AppUI}