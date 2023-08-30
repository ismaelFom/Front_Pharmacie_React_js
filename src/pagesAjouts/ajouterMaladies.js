import React, { useState } from 'react';
import { malServices } from '../Zservices/mal.services';
// import { useNavigate } from 'react-router-dom';
import '../style/StyleLot.css'

const AjouterMaladies = () => {
    // let navigate = useNavigate();
    const [maladies, setMaladies] = useState({
        description: '',
        nom: ''
    })

    const handleChange = (e) => {
        setMaladies({ ...maladies, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();

        let maladie = JSON.stringify(maladies);
        console.log("mal:", maladie);

        malServices.malAdd(maladie)
            .then(response => {
                console.log(response);
                alert('Enregistrement du maladie Réussit...', response.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })
    }

    return (

        <div className='div-ajouterLot'>

            <div className="ajouttout">
                <h4>Ajouter une maladie</h4>
            </div>
            <form className='container newplus'>

                <div className="div1">
                    {/* <div className='newform-lots'> */}

                    <div id='ajoutx1' className="ajoutparti">
                        <label>Code maladie :</label>
                        <input id='texta1' className="ajoutinput" type="text" name="nom" value={maladies.nom} onChange={handleChange} />
                    </div>

                    <div id='ajoutx3' className="ajoutparti">
                        <label>Description</label>
                        <textarea id='texta3' className="ajoutinput" name='description' value={maladies.description} onChange={handleChange} placeholder="... ... ..."></textarea>
                    </div>
                </div>


            <div>
                <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
            </div>
            </form>

        </div>
    )
}

export default AjouterMaladies;