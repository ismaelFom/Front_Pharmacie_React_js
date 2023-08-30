import React, { useState } from 'react';
import '../style/StyleLot.css'
import { pharmaServices } from '../Zservices/pharma.service';


const AjoutPharmacie = () => {
    // let navigate = useNavigate();
    const [pharmacies, setPharmacies] = useState({
        adresse: '',
        nom: '',
        siteWeb: '',
        description: '',
        email: '',
        // photo:'',
        telephone: ''
    })

    const handleChange = (e) => {
        setPharmacies({ ...pharmacies, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();

        console.log(pharmacies);

        pharmaServices.pharmaAdd(pharmacies)
            .then(res => {
                console.log(res.config.data);
                alert('Enregistrement de la pharmacies Réussit...', res.config.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })
    }

    return (

        <div className='div-ajouterLot'>

            <div className="ajouttout">
                <h4>Ajouter D'une pharmacie</h4>
            </div>
            <form className='container newplus'>

                <div className="div1">

                    <div id='ajoutx1' className="ajoutparti">
                        <label>Adresse pharmacie :</label>
                        <input id='texta1' className="ajoutinput" type="text" name="adresse" value={pharmacies.adresse} onChange={handleChange} />
                    </div>

                    <div id='ajoutx1' className="ajoutparti">
                        <label>SiteWeb pharmacie :</label>
                        <input onChange={handleChange} value={pharmacies.siteWeb} name="siteWeb" className="ajoutinput" id='texta1' type="text" />
                    </div>
                </div>

                <div className="div2">
                    <div id='ajoutx2' className="ajoutparti">
                        <label>Nom pharmacie:</label>
                        <input id='texta1' className="ajoutinput" onChange={handleChange} value={pharmacies.nom} name="nom" type="text" />
                    </div>

                    <div id='ajoutx2' className="ajoutparti">
                        <label>Email pharmacie :</label>
                        <input id='texta1' className="ajoutinput" type="email" name="email" value={pharmacies.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="div3">
                    <div id='ajoutx2' className="ajoutparti">
                        <label>Tèl pharmacie :</label>
                        <input id='texta1' className="ajoutinput" type="tel" name="telephone" value={pharmacies.telephone} onChange={handleChange} />
                    </div>

                    <div id='ajoutx3' className="ajoutparti">
                        <label>Description</label>
                        <textarea id='texta3' className="ajoutinput" name='description' value={pharmacies.description} onChange={handleChange} placeholder="... ... ..."></textarea>
                    </div>
                </div>


            <div>
                <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
            </div>
            </form>

        </div>
    )
}

export default AjoutPharmacie;