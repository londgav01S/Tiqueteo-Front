import React, { useState } from 'react';
import './Locality.css';

function Locality() {
    const [localities, setLocalities] = useState([]);
    const [formData, setFormData] = useState({
        eventName: '',
        price: '',
        capacity: ''
    });
    const [editingId, setEditingId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddLocality = () => {
        if (formData.eventName && formData.price && formData.capacity) {
            if (editingId) {
                // Actualizar localidad existente
                setLocalities(prevLocalities =>
                    prevLocalities.map(locality =>
                        locality.id === editingId
                            ? { ...locality, ...formData }
                            : locality
                    )
                );
                setEditingId(null);
            } else {
                // Agregar nueva localidad
                setLocalities(prevLocalities => [...prevLocalities, {
                    id: Date.now(),
                    ...formData
                }]);
            }
            // Limpiar el formulario
            setFormData({
                eventName: '',
                price: '',
                capacity: ''
            });
        }
    };

    const handleEditLocality = (locality) => {
        setFormData({
            eventName: locality.eventName,
            price: locality.price,
            capacity: locality.capacity
        });
        setEditingId(locality.id);
    };

    const handleCancelEdit = () => {
        setFormData({
            eventName: '',
            price: '',
            capacity: ''
        });
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
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleInputChange}
                        placeholder="High North"
                        className="input-L"
                    />
                </div>
                <div className="input-groupL">
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="2000"
                        className="input-L"
                    />
                </div>
                <div className="input-groupE">
                    <label>Capacity:</label>
                    <input
                        type="text"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
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