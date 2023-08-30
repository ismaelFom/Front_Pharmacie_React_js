import React, { useState, useRef, useEffect } from 'react';
import { malServices } from '../Zservices/mal.services';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/StyleLot.css'

const Updatemaladie = () => {
    let navigate = useNavigate();
    const [maladie, setMaladies] = useState({})


    const flag = useRef(false);
    const { Mid } = useParams();
    

    const handleChange = (e) => {
        setMaladies({ ...maladie, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault()
        
            malServices.malAdd(maladie)
                .then(res => {
                    console.log(res.data);
                    alert('Modification du lot Réussit...');
                    navigate('/element/admin/maladie', { replace: true })
                })
                .catch(err => console.log(err))
    }

     // Récupération de l'utilisateur à l'affichage
     useEffect(() => {
        if (flag.current === false) {
            malServices.getMalId(Mid)
                .then(res => {
                    console.log(res.data)
                    alert('Modification de Maladie est Réussit...');
                    navigate('/element/admin/maladies', { replace: true });
                })
                .catch(err => console.log(err))

        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <input id='texta1' className="ajoutinput" type="text" name="nom" value={maladie.nom} onChange={handleChange} />
                    </div>

                    <div id='ajoutx3' className="ajoutparti">
                        <label>Description</label>
                        <textarea id='texta3' className="ajoutinput" name='description' value={maladie.description} onChange={handleChange} placeholder="... ... ..."></textarea>
                    </div>
                </div>


            <div>
                <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
            </div>
            </form>

        </div>
    )
}

export default Updatemaladie;