import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/StyleLot.css'
import { lotsServices } from '../Zservices/lot.services';


const UpdateLot = () => {
    let navigate = useNavigate();
    const [lots, setLots] = useState({})

    const flag = useRef(false);
    const { Lid } = useParams();


    const handleChange = (e) => {
        setLots({ ...lots, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault()

        lotsServices.lotAdd(lots)
            .then(res => {
                console.log(res.data);
                alert('Modification du lot Réussit...');
                navigate('/element/admin/lot', { replace: true })
            })
            .catch(err => console.log(err))
    }

    // Récupération du lot par son Lit
    useEffect(() => {
        if (flag.current === false) {
            lotsServices.updateLotId(Lid)
                .then(res => {
                    console.log(res.data)
                    setLots(res.data)
                })
                .catch(err => console.log(err))

        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <input onChange={handleChange} value={lots.dateFabrication} name="dateFabrication" className="ajoutinput" id='texta1' type="text" />
                    </div>
                </div>

                <div className="div2">
                    <div id='ajoutx2' className="ajoutparti">
                        <label>Date Peremtion lot:</label>
                        <input id='texta1' className="ajoutinput" onChange={handleChange} value={lots.datePeremtion} name="datePeremtion" type="text" />
                    </div>

                    <div id='ajoutx2' className="ajoutparti">
                        <label>Prix Unitaire :</label>
                        <input id='texta1' className="ajoutinput" type="text" name="prixUnitaire" value={lots.prixUnitaire} onChange={handleChange} />
                    </div>
                </div>
                <div className="div3">
                    <div id='ajoutx2' className="ajoutparti">
                        <label>Quantite :</label>
                        <input id='texta1' className="ajoutinput" type="num" name="quantite" value={lots.quantite} onChange={handleChange} />
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

export default UpdateLot;