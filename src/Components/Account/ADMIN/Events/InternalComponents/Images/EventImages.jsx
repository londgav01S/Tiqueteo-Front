import {useContext, useState} from "react";
import './EventImages.css';
import {EventContext} from "../../../../../../Contexts/EventContex";
import {appFirebase} from "../../../../../../Services/Credencials";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {getStorage,ref, uploadBytes, getDownloadURL} from "firebase/storage";

const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);

function EventImages() {

    const [event, setEvent] = useState("");
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imagePromises = files.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then(results => {
            setImages(prevImages => [...prevImages, ...results]);
        });
        {/*event.images = images;*/}

    };

    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
        {/*event.images = images;*/}
    };

    return (
        <div className="upload-container">
            <div className="upload-area">
                <div className="upload-content">
                    <h3 className="upload-title">Event Images:</h3>
                    <div className="image-grid">
                        {images.map((image, index) => (
                            <div key={index} className="image-container">
                                <img
                                    src={image}
                                    alt={`Upload ${index + 1}`}
                                    className="uploaded-image"
                                />
                                <button
                                    onClick={() => removeImage(index)}
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
                        ))}
                        <label className="upload-label">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
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
                                <span className="upload-text">
                                  Choose files
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {EventImages};