import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../style/StyleLot.css'
import { lotsServices } from '../Zservices/lot.services';


const AjoutLot = () => {
    // let navigate = useNavigate();
    const [lots, setLots] = useState({
        code: '',
        dateFabrication: '',
        datePeremtion: '',
        description: '',
        id:1,
        prixUnitaire: '',
        quantite: '',
    })

    let dateF;
    let dateP;
    const handleChange = (e) => {
        setLots({ ...lots, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();
        // lots.dateFabrication = new Date(dateF);
        // lots.datePeremtion = new Date(dateP);
        // let lot = JSON.stringify(lots);
        console.log(lots);

        lotsServices.lotAdd(lots)
            .then(res => {
                console.log(res.config.data);
                alert('Enregistrement du lot Réussit...', res.config.data)

            }).catch(erreur => {
                console.log('Erreur...', erreur);
            })
    }

    return (

        <div className='div-ajouterLot'>

            <div className="ajouttout">
                <h4>Ajouter D'un Lot</h4>
            </div>
            <form className='container newplus'>

                <div className="div1">
                    {/* <div className='newform-lots'> */}

                    <div id='ajoutx1' className="ajoutparti">
                        <label>Code lot :</label>
                        <input id='texta1' className="ajoutinput" type="text" name="code" value={lots.code} onChange={handleChange} />
                    </div>

                    <div id='ajoutx1' className="ajoutparti">
                        <label>Date Fabrication lot :</label>
                        <input onChange={handleChange} value={dateF} name="dateFabrication" className="ajoutinput" id='texta1' type="text" />
                    </div>
                </div>

                <div className="div2">
                    <div id='ajoutx2' className="ajoutparti">
                        <label>Date Peremtion lot:</label>
                        <input id='texta1' className="ajoutinput" onChange={handleChange} value={dateP} name="datePeremtion" type="text" />
                    </div>

                    <div id='ajoutx2' className="ajoutparti">
                        <label>Prix Unitaire :</label>
                        <input id='texta1' className="ajoutinput" type="text" name="prixUnitaire" value={lots.prixUnitaire} onChange={handleChange} />
                    </div>
                </div>
                <div className="div3">
                    <div id='ajoutx2' className="ajoutparti">
                        <label>Quantite :</label>
                        <input id='texta1' className="ajoutinput" type="num" min={0} name="quantite" value={lots.quantite} onChange={handleChange} />
                    </div>

                    <div id='ajoutx3' className="ajoutparti">
                        <label>Description</label>
                        <textarea id='texta3' className="ajoutinput" name='description' value={lots.description} onChange={handleChange} placeholder="... ... ..."></textarea>
                    </div>
                </div>


            <div>
                <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
            </div>
            </form>

        </div>
    )
}

export default AjoutLot;