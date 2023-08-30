import React, { useState, useRef, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { catServices } from '../Zservices/cat.services';



const UpdateCat = () => {
     let navigate = useNavigate();
    const [categorie, setCategories] = useState({})

    const flag = useRef(false);
    const { Cid } = useParams();
    

    const handleChange = (e) => {
        setCategories({ ...categorie, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault()
        
            catServices.catAdd(categorie)
                .then(res => {
                    console.log(res.data);
                    alert('Modification de la catégorie Réussit...');
                    navigate('/element/admin/categorie', { replace: true })
                })
                .catch(err => console.log(err))
    }

    // Récupération de la catégorie par son Cid
    useEffect(() => {
        if (flag.current === false) {
            catServices.okCat(Cid)
                .then(res => {
                    console.log(res.data)
                    setCategories(res.data)
                })
                .catch(err => console.log(err))

        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const saveData = (e) => {
    //     e.preventDefault();

    //     catServices.updateCat(categorie)
    //         .then(res => {
    //             console.log(res);
    //             alert('Enregistrement categorie Réussit...', res.data)
    //             navigate("admin/categorie")
    //         }).catch(erreur => {
    //             console.log('Erreur...', erreur);
    //         })
    // }

    return (
        <div className='ajouterCat'>

            <div className="ajouttout"><h4>Modifier une categorie</h4></div>
            <form className='container form-categorie'>

                <div className="ajoutparti">
                    <label>Code categorie :</label>
                    <input className="ajoutinput" type="text" name="codeCat" id='codeCat' value={categorie.code} onChange={handleChange} />
                </div>

                <div className="ajoutparti">
                    <label>Libele Catégorie :</label>
                    <input className="ajoutinput" type="text" name="libele" id='libele' value={categorie.nom} onChange={handleChange} />
                </div>
                
                <div className="ajoutparti">
                    <label>Description</label>
                    <textarea id='texta3' className="ajoutinput" name='description' value={categorie.description} onChange={handleChange} placeholder="... ... ..."></textarea>
                </div>

                <div>
                    <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Modification</button>
                </div>

            </form>

        </div>
    )
}
export default UpdateCat;