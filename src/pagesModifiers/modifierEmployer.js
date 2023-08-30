import React, { useRef, useState, useEffect } from 'react';
import { usServices } from '../Zservices/us.services';
import { useNavigate, useParams } from 'react-router-dom';
import { empServices } from '../Zservices/emp.services';



const UpdateEmployer = () => {
    const flag = useRef(false)
    const { Eid } = useParams();
    let navigate = useNavigate();

    const [employer, setEmployer] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        password: ''
        // role: ''
    });

    const handleChange = (e) => {
        setEmployer({ ...employer, [e.target.name]: e.target.value });
    }

    // Récupération de l'employer à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            empServices.modifEmp(Eid)
                .then(res => {
                    console.log(res.data)
                    setEmployer(res.data)
                })
                .catch(err => console.log(err))

        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const saveData = (e) => {
        // toast('OK');
        e.preventDefault();

        usServices.create(employer).then(res => {
            console.log('Enregistrement Réussit...', res.data)
            alert('L\'utilisateur a été créé...');
            navigate("/admin/addEmployer")
        }).catch(erreur => {
            console.log('Erreur...', erreur);
            alert('Erreur de création d\'un utilsateur...');
        });

    }


    return (
        <div className='div-ajouterEmp'>

            <div className="ajouttout"><h4>Modifier un Employer</h4></div>
            <form className='container newform'>

                <div className="div1">
                    {/* <div className='form-user'> */}
                    <div className="ajoutparti">
                        <label>Nom :</label>
                        <input className="ajoutinput" type="text" name="nom" id='libele' value={employer.nom} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>prenom :</label>
                        <input className="ajoutinput" type="text" name="prenom" id='codeCat' value={employer.prenom} onChange={handleChange} />
                    </div>
                </div>

                <div className="div2">
                    <div className="ajoutparti">
                        <label>adresse</label>
                        <input className="ajoutinput" type="text" name="adresse" id='codeCat' value={employer.adresse} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>telephone :</label>
                        <input className="ajoutinput" type="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" name="telephone" id='libele' value={employer.telephone} onChange={handleChange} />
                    </div>
                </div>

                <div className="div3">
                    <div className="ajoutparti">
                        <label>Email :</label>
                        <input className="ajoutinput" type="text" name="email" id='email' value={employer.email} onChange={handleChange} />
                    </div>


                    <div className="ajoutparti">
                        <label>password :</label>
                        <input className="ajoutinput" type="password" name="password" id='password' placeholder='mot de passe...' value={employer.password} onChange={handleChange} />
                    </div>

                    {/* <div  id='ajoutx2' className="ajoutparti">
                    <label>Rôle :</label>
                    <select className="ajoutinput" id='texta2' name='role' value={user.role} onChange={handleChange}>
                        <option className="ajoutinput" id='texta2' name='role' value="" >--Select one--</option>
                        <option className="ajoutinput" id='texta2' name='role' value="Employer">Employer</option>
                        <option className="ajoutinput" id='texta2' name='role' value="Admin">Admin</option>
                    </select>
                </div> */}
                </div>

            </form>

            <div>
                <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
            </div>
        </div>
    )
}
export default UpdateEmployer;