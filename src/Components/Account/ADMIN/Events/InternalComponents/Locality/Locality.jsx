import React, {useContext, useState} from 'react';
import { EventContext} from "../../../../../../Contexts/EventContex";
import './Locality.css';

function Locality() {
    const { localityName, setLocalityName, price, setPrice, capacity, setCapacity } = useContext(EventContext);
    const [localities, setLocalities] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const handleAddLocality = () => {
        if (localityName && price && capacity) {
            if (editingId) {
                // Actualizar localidad existente
                setLocalities(prevLocalities =>
                    prevLocalities.map(locality =>
                        locality.id === editingId
                            ? { ...locality, localityName, price, capacity }
                            : locality
                    )
                );
                setEditingId(null);
            } else {
                // Agregar nueva localidad
                setLocalities(prevLocalities => [
                    ...prevLocalities,
                    { id: Date.now(), localityName, price, capacity }
                ]);
            }
            // Limpiar los campos
            setLocalityName('');
            setPrice('');
            setCapacity('');
        }
    };

    const handleEditLocality = (locality) => {
        setLocalityName(locality.eventName);
        setPrice(locality.price);
        setCapacity(locality.capacity);
        setEditingId(locality.id);
    };

    const handleCancelEdit = () => {
        setLocalityName('');
        setPrice('');
        setCapacity('');
        setEditingId(null);
    };

    const handleDeleteLocality = (id) => {
        setLocalities(prevLocalities =>
            prevLocalities.filter(locality => locality.id !== id)
        );
        if (editingId === id) {
            handleCancelEdit();
        }
    };

    return (
        <div className="locationContainer">
            <h2>Information on Locations</h2>
            <div className="row-Locality-info">
                <div className="input-groupL">
                    <label>Event Name:</label>
                    <input
                        type="text"
                        value={localityName}
                        onChange={(e) => setLocalityName(e.target.value)}
                        placeholder="High North"
                        className="input-L"
                    />
                </div>
                <div className="input-groupL">
                    <label>Price:</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="2000"
                        className="input-L"
                    />
                </div>
                <div className="input-groupE">
                    <label>Capacity:</label>
                    <input
                        type="text"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        placeholder="10000"
                        className="input-L"
                    />
                </div>
                <div className="input-groupE buttons-container">
                    <button
                        className={`btn-AddLocality ${editingId ? 'update' : ''}`}
                        onClick={handleAddLocality}
                    >
                        {editingId ? 'Update Locality' : 'Add Locality'}
                    </button>
                    {editingId && (
                        <button
                            className="btn-CancelEdit"
                            onClick={handleCancelEdit}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            {localities.length > 0 && (
                <div className="localities-table-container">
                    <table className="localities-table">
                        <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Price</th>
                            <th>Capacity</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {localities.map(locality => (
                            <tr
                                key={locality.id}
                                className={editingId === locality.id ? 'editing' : ''}
                                onClick={() => handleEditLocality(locality)}
                            >
                                <td>{locality.eventName}</td>
                                <td>${locality.price}</td>
                                <td>{locality.capacity}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteLocality(locality.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export { Locality };
