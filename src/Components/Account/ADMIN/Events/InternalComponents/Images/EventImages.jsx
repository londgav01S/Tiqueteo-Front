import { useContext, useState } from "react";
import './EventImages.css';
import { EventContext } from "../../../../../../Contexts/EventContex";
import { appFirebase } from "../../../../../../Services/Credencials";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(appFirebase);

function EventImages() {
    const { event, setEvent } = useContext(EventContext); // Obtenemos `event` del contexto.
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUploadFirebase = async (e) => {
        const file = e.target.files[0]; // Solo una imagen permitida.
        if (!file) return;

        try {
            // Subir la imagen a Firebase Storage.
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);

            // Obtener la URL de descarga de la imagen.
            const imageUrl = await getDownloadURL(storageRef);

            // Actualizar el atributo `event.image` con la URL de la imagen desde el contexto.
            setEvent((prevEvent) => ({ ...prevEvent, image: imageUrl }));

            // Mostrar la imagen cargada como vista previa.
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        } catch (error) {
            console.error("Error uploading image to Firebase:", error);
        }

        // Resetear el input después de subir la imagen.
        e.target.value = null;
    };

    const handleRemoveImage = () => {
        // Eliminar la URL de la imagen del contexto y la vista previa.
        setEvent((prevEvent) => ({ ...prevEvent, image: "" }));
        setImagePreview(null);
    };

    return (
        <div className="upload-container">
            <div className="upload-area">
                <div className="upload-content">
                    <h3 className="upload-title">Event Image:</h3>
                    <div className="image-grid">
                        {imagePreview ? (
                            <div className="image-container">
                                <img
                                    src={imagePreview}
                                    alt="Uploaded Preview"
                                    className="uploaded-image"
                                />
                                <button
                                    onClick={handleRemoveImage}
                                    className="remove-button"
                                >
                                    <svg
                                        className="remove-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <label className="upload-label">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUploadFirebase}
                                    className="file-input"
                                />
                                <div className="upload-placeholder">
                                    <svg
                                        className="upload-icon"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    <span className="upload-text">Choose a file</span>
                                </div>
                            </label>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { EventImages };
