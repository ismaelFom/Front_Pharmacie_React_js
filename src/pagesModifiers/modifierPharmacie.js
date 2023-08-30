import React, { useState, useRef, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { pharmaServices } from '../Zservices/pharma.service';



const UpdatePharmacies = () => {
     let navigate = useNavigate();
    const [pharmacie, setpharmacies] = useState({})

    const flag = useRef(false);
    const { Pid } = useParams();
    

    const handleChange = (e) => {
        setpharmacies({ ...pharmacie, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault()
        
            pharmaServices.pharmaAdd(pharmacie)
                .then(res => {
                    console.log(res.data);
                    alert('Modification de la pharmacie Réussit...');
                    navigate('/element/admin/pharmacies', { replace: true })
                })
                .catch(err => console.log(err))
    }

    // Récupération de la catégorie par son Cid
    useEffect(() => {
        if (flag.current === false) {
            pharmaServices.pharmaId(Pid)
                .then(res => {
                    console.log(res.data)
                    setpharmacies(res.data)
                })
                .catch(err => console.log(err))

        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='ajouterCat'>

            <div className="ajouttout"><h4>Modifier une pharmacie</h4></div>
            <form className='container form-pharmacie'>

                <div className="ajoutparti">
                    <label>Code pharmacie :</label>
                    <input className="ajoutinput" type="text" name="codeCat" id='codeCat' value={pharmacie.code} onChange={handleChange} />
                </div>

                <div className="ajoutparti">
                    <label>Libele Catégorie :</label>
                    <input className="ajoutinput" type="text" name="libele" id='libele' value={pharmacie.nom} onChange={handleChange} />
                </div>
                
                <div className="ajoutparti">
                    <label>Description</label>
                    <textarea id='texta3' className="ajoutinput" name='description' value={pharmacie.description} onChange={handleChange} placeholder="... ... ..."></textarea>
                </div>

                <div>
                    <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Modification</button>
                </div>

            </form>

        </div>
    )
}
export default UpdatePharmacies;