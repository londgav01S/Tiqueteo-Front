import React, {useContext, useState} from 'react';
import './Search.css'
import {EventContext} from "../../../Contexts/EventContex";

function Search() {

    const {events, setFilteredEvents, setIsSearch} = useContext(EventContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('All cities');
    const [date, setDate] = useState('');

    const colombia = {
        Amazonas: ["Leticia", "Puerto Nariño"],
        Antioquia: ["Medellín", "Bello", "Itagüí", "Envigado", "Rionegro", "Turbo"],
        Arauca: ["Arauca", "Arauquita", "Saravena", "Tame"],
        Atlantico: ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia"],
        Bolivar: ["Cartagena", "Magangué", "Turbaco", "Arjona"],
        Boyaca: ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá"],
        Caldas: ["Manizales", "Villamaría", "La Dorada", "Chinchiná"],
        Caqueta: ["Florencia", "San Vicente del Caguán", "Puerto Rico"],
        Casanare: ["Yopal", "Aguazul", "Villanueva", "Monterrey"],
        Cauca: ["Popayán", "Santander de Quilichao", "Puerto Tejada"],
        Cesar: ["Valledupar", "Aguachica", "Bosconia"],
        Choco: ["Quibdó", "Istmina", "Condoto"],
        Cordoba: ["Montería", "Lorica", "Cereté", "Sahagún"],
        Cundinamarca: ["Bogotá", "Soacha", "Chía", "Zipaquirá"],
        Guainia: ["Inírida"],
        Guaviare: ["San José del Guaviare"],
        Huila: ["Neiva", "Garzón", "Pitalito"],
        LaGuajira: ["Riohacha", "Maicao", "Uribia"],
        Magdalena: ["Santa Marta", "Ciénaga", "Fundación"],
        Meta: ["Villavicencio", "Acacías", "Granada"],
        Narino: ["Pasto", "Tumaco", "Ipiales"],
        NorteDeSantander: ["Cúcuta", "Ocaña", "Pamplona"],
        Putumayo: ["Mocoa", "Puerto Asís", "Puerto Leguízamo"],
        Quindio: ["Armenia", "Montenegro", "Quimbaya"],
        Risaralda: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal"],
        Santander: ["Bucaramanga", "Floridablanca", "Barrancabermeja", "Girón"],
        Sucre: ["Sincelejo", "Corozal", "San Marcos"],
        Tolima: ["Ibagué", "Espinal", "Melgar"],
        ValleDelCauca: ["Cali", "Palmira", "Tuluá", "Buenaventura"],
        Vaupes: ["Mitú"],
        Vichada: ["Puerto Carreño"],
    };

    const [selectedLocation, setSelectedLocation] = useState("");

    const performSearch = (searchTerm, selectedLocation, category, date) => {
        if (searchTerm || selectedLocation || category || date) {
            setIsSearch(true);
        } else {
            setIsSearch(false);
        }

        const filtered = events.filter((event) => {
            const cityMatch = selectedLocation
                ? selectedLocation.split(",")[0].trim().toLowerCase() === event.city.toLowerCase()
                : true;
            const typeMatch = category
                ? event.type?.toLowerCase() === category.toLowerCase()
                : true;
            const dateMatch = date
                ? event.eventDate.startsWith(date)
                : true;
            const nameMatch = searchTerm
                ? event.name.toLowerCase().includes(searchTerm.toLowerCase())
                : true;

            return nameMatch && cityMatch && typeMatch && dateMatch;
        });

        setFilteredEvents(filtered);
    };



    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        performSearch(value, selectedLocation, category, date);
    };

    const handleCategory = (e) => {
        const value = e.target.value;
        setCategory(value);
        performSearch(searchTerm, selectedLocation, value, date);
    };

    const handleDate = (e) => {
        const value = e.target.value;
        setDate(value);
        performSearch(searchTerm, selectedLocation, category, value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedLocation(value);
        performSearch(searchTerm, value, category, date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm('');
        setCategory('');
        setSelectedLocation('');
        setDate('');
    };

    return (
        <div className="searchContainer">
            <form onSubmit={handleSubmit} className="search-bar-container">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search for events, stages..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="search-options-container">
                    <select value={category} onChange={handleCategory}>
                        <option value="">Category</option>
                        <option value="Concert">Concert</option>
                        <option value="Sport">Sport</option>
                        <option value="Theater">Theater</option>
                        <option value="Festival">Festival</option>
                        <option value="Other">Other</option>
                    </select>
                    <select value={selectedLocation} onChange={handleChange}>
                        <option value="">Seleccione un departamento o ciudad</option>
                        {Object.entries(colombia).map(([department, cities]) => (
                            <optgroup key={department} label={department}>
                                {cities.map((city) => (
                                    <option key={city} value={`${city}, ${department}`}>
                                        {city}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    <input
                        type="date"
                        value={date}
                        onChange={handleDate}
                        placeholder="Select date"
                    />
                </div>
            </form>
        </div>
    );
}

export {Search};