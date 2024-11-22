import { useState } from "react";
import { appFirebase } from "../../../Services/Credencials";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './MyProfile.css';

const storage = getStorage(appFirebase);

function MyProfile({ user }) {
    const [userData, setUserData] = useState({ ...user }); // Copiamos los datos iniciales del usuario
    const [imagePreview, setImagePreview] = useState(user.image || "");

    const handleImageUploadFirebase = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const storageRef = ref(storage, `profile_images/${file.name}`);
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);

            console.log("URL obtenida de Firebase:", imageUrl);

            // Actualizar la previsualización y los datos del usuario
            setImagePreview(imageUrl);
            setUserData((prevData) => ({ ...prevData, image: imageUrl }));
        } catch (error) {
            console.error("Error uploading image to Firebase:", error);
        }


        e.target.value = null;// Resetea el input
    };

    const sendImage = () => {
        console.log(userData)
        fetch('http://localhost:8080/api/client/updateClient', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Enviamos el estado actualizado
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Actualización exitosa:", data);
                alert("Datos actualizados correctamente");
            })
            .catch((error) => {
                console.error("Error en la actualización:", error);
            });
    };

    return (
        <div className="form-container3">
            <div className="form-left3">
                <div className="form-section3">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <h2>User Information</h2>
                    <div className="input-group3">
                        <label>User:</label>
                        <input type="text" value={userData.name} readOnly className="name-user3" />
                    </div>
                    <div className="input-group3">
                        <label>Email:</label>
                        <input type="email" value={userData.email} readOnly className="email-user3" />
                    </div>
                </div>

                <div className="form-section3">
                    <h2>Personal Information</h2>
                    <div className="input-row23">
                        <div className="input-group13">
                            <label className="name-p3">Name:</label>
                            <input className="input-name-p3" type="text" value={userData.name} readOnly />
                        </div>
                        <div className="input-group23">
                            <label className="id-p3">ID:</label>
                            <input type="text" value={userData.id} readOnly />
                        </div>
                    </div>
                    <div className="input-group3">
                        <label>Phone Number:</label>
                        <input type="tel" value={userData.phone} readOnly className="input-tel3" />
                    </div>
                </div>
            </div>

            <div className="image-section3">
                <div className="image-placeholder3">
                    <div>

                        <label className="upload-label">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUploadFirebase}
                                className="file-input"
                            />
                            <img src={imagePreview} alt={userData.name} className="Profile-image3"/>
                        </label>
                    </div>

                    <button className={"button-save"} onClick={sendImage}>Save</button>
                </div>
            </div>
        </div>
    );
}

export {MyProfile};
