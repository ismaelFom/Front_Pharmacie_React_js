import React from 'react';
import { useState } from 'react';
import { medocsServices } from '../Zservices/medocs.services';
import '../style/StyleMedocs.css';

const AddMedicament = () => {

    const [ajoutmedoc, setAjoutmedoc] = useState({
        lot:3,
        nom: '',
        marque: '',
        dosage: '',
        forme: '',
        description: ''
        // photo:'',
        // appartenances:'',
        // soins: ''
    })

    const handleChange = (e) => {
        setAjoutmedoc({ ...ajoutmedoc, [e.target.name]: e.target.value });
    }


    const saveData = (e) => {
        e.preventDefault();
        console.log('ajoutmedoc');

        
        let ajoutmedocs = JSON.stringify(ajoutmedoc);
        console.log(ajoutmedocs);


        medocsServices.getEdit(ajoutmedocs)
            .then(res => {
                console.log(res.data);
                alert('Medicaments enregistrés');
            }).catch(erreur => {
                console.log('Erreur...', erreur);
                alert("Erreur d'enregistrés de medicament");
            })
    }

    
    return (
        <div className='div-ajouterMedocs'>

            <div className= "ajouttout">
                <h4>Ajouter un médicament</h4>
            </div>
            <form className='container form-ajoutmedoc'>

<div className="div1">
                <div className="ajoutparti">
                    <label className= "label">Nom médicament :</label>
                    <input className="ajoutinput" type="text" name="nom" value={ajoutmedoc.nom} onChange={handleChange}></input>
                </div>

                <div className="ajoutparti">
                    <label className= "label">Dosage Catégorie :</label>
                    <input className="ajoutinput" type="num" name="dosage" value={ajoutmedoc.dosage} onChange={handleChange}></input>
                </div>
</div>                

                {/* <div className="ajoutparti">
                         <label value={newArticle.n_categorie} >n_categorie :</label>
                         <select name='n_categorie' id='n_categorie' value={newArticle.n_categorie} onChange={handleChange}>
                             <option value="" >--Select one--</option>
                             <option value="6">Médicaments oral</option>
                             <option value="5">Médicaments injectable</option>
                             <option value="4">Soluté de perfusin</option>
                             <option value="3">Vaccins/Immunoglobuline/Serum</option>
                             <option value="2">Désinfectant</option>
                             <option value="1">Anticeptique</option>
                        </select>
                    </div> */}

<div className="div2">
                <div className="ajoutparti">
                    <label className= "label">Description</label>
                    <textarea id='texta' name="description" onChange={handleChange} value={ajoutmedoc.description} className="ajoutinput" placeholder="... ... ..."></textarea>
                </div>

                <div className="ajoutparti">
                    <label className= "label">Marque :</label>
                    <input className="ajoutinput" type="text" name="marque" value={ajoutmedoc.marque} onChange={handleChange}></input>
                </div>
</div>

<div className="div3">

                <div className="ajoutparti">
                    <label className= "label">Lot :</label>
                    <input className="ajoutinput" type="text" name="lot" value={ajoutmedoc.lot} onChange={handleChange}></input>
                </div>

                <div className="ajoutparti">
                    <label className= "label">Forme :</label>
                    <input className="ajoutinput" type="text" name="forme" value={ajoutmedoc.forme} onChange={handleChange}></input>
                </div>
</div>


            </form>

                <div>
                    <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
                </div>
        </div>
    )
}
export default AddMedicament;