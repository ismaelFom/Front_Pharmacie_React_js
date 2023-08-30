import React, { useState } from 'react';
import { photoServices } from '../Zservices/photo.services';

function ImageForm() {
    const [image, setImage] = useState({
        title: '',
        context: '',
        file: ''
    });

    const handleFileChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

      const saveData = (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('image', image)

        photoServices.photoAdd(formData)
            .then(res => {
                console.log(res);
                alert('Enregistrement photo Réussit...', res.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="imageInput">Choisissez le titre:</label><br />
                    <input type="text" id="titleInput" value={image.title} onChange={handleFileChange} />
                </div>
                <div>
                    <label htmlFor="imageInput">Choisissez le contexte:</label><br />
                    <input type="text" id="contextInput" value={image.context} onChange={handleFileChange} />
                </div>
                <div>
                    <label htmlFor="imageInput">Choisissez une image:</label><br />
                    <input type="file" id="imageInput" value={image.file} onChange={handleFileChange} />
                </div>


            </form>
            {image && <img src={image} alt="Image choisie par l'utilisateur" />}
        </div>
    );
}

export default ImageForm;