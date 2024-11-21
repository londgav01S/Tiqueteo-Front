import React, { useContext, useState } from 'react';
import { EventContext } from "../../../../../../Contexts/EventContex";
import './Locality.css';

function Locality() {
    const { localities, setLocalities, event } = useContext(EventContext); // Usamos el contexto directamente.

    // Estado para la localidad actual.
    const [locality, setLocality] = useState({
        name: '',
        price: '',
        maxCapacity: '',
    });

    const [editingId, setEditingId] = useState(null); // Estado local para identificar la edición.

    const handleAddLocality = () => {
        const { name, price, maxCapacity } = locality;

        if (name && price && maxCapacity) {
            if (editingId) {
                // Actualizar localidad existente
                setLocalities(prevLocalities =>
                    prevLocalities.map(item =>
                        item.id === editingId
                            ? { ...item, ...locality }
                            : item
                    )
                );
                setEditingId(null); // Limpiar ID de edición
            } else {
                // Agregar nueva localidad
                setLocalities(prevLocalities => [
                    ...prevLocalities,
                    { id: Date.now(), ...locality }
                ]);
            }

            event.localities = localities; // Actualizar localidades en el evento

            // Limpiar el estado de la localidad después de agregar o actualizar
            setLocality({ name: '', price: '', maxCapacity: '' });
        }
    };

    const handleEditLocality = (locality) => {
        setLocality({
            name: locality.name,
            price: locality.price,
            maxCapacity: locality.maxCapacity,
        });
        setEditingId(locality.id);
    };

    const handleCancelEdit = () => {
        setLocality({ name: '', price: '', maxCapacity: '' });
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
                        value={locality.name}
                        onChange={(e) => setLocality({ ...locality, name: e.target.value })}
                        placeholder="High North"
                        className="input-L"
                    />
                </div>
                <div className="input-groupL">
                    <label>Price:</label>
                    <input
                        type="text"
                        value={locality.price}
                        onChange={(e) => setLocality({ ...locality, price: e.target.value })}
                        placeholder="2000"
                        className="input-L"
                    />
                </div>
                <div className="input-groupE">
                    <label>Capacity:</label>
                    <input
                        type="text"
                        value={locality.maxCapacity}
                        onChange={(e) => setLocality({ ...locality, maxCapacity: e.target.value })}
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
                            <th>Locality Name</th>
                            <th>Price</th>
                            <th>Capacity</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {localities.map(item => (
                            <tr
                                key={item.id}
                                className={editingId === item.id ? 'editing' : ''}
                            >
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.maxCapacity}</td>
                                <td>
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEditLocality(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteLocality(item.id);
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
