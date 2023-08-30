import { React, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usServices } from '../Zservices/us.services';
import '../style/StyleUser.css';
import { useEffect } from 'react';



const UpdateUser = () => {
    const [user, setUser] = useState([]);
    let navigate = useNavigate();
    const flag =useRef(false);
    const { idUser } = useParams();



    const saveData = (e) => {
        e.preventDefault()
        console.log(user)
        usServices.updateCreateUser(user)
        .then(res => {
            console.log(res)
            navigate('/admin/addUser')
        })
        .catch(err => {
            console.log('Erreur...', err);
        })
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

// Modification d'un 'Utilisateur pris à l'affichage
useEffect(() => {
    if (flag.current === false) {
        usServices.updateUser(idUser)
            .then(res => {
                console.log('readUsers...', res.data);
                setUser(res.data);
            })
            .catch(err => {
                console.log('Erreur...', err);
            })
    }
    return () => flag.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


    return (
        <div className='div-ajouterUser'>

            <div className="ajouttout"><h4>Modifier un médicament</h4></div>
            <form className='container newform'>
                <div className='form-user'>
                    <div className="ajoutparti">
                        <label>Nom :</label>
                        <input className="ajoutinput" type="text" name="libele" id='libele' value={user.nom} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>prenom :</label>
                        <input className="ajoutinput" type="text" name="codeCat" id='codeCat' value={user.prenom} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>adresse</label>
                        <input className="ajoutinput" type="text" name="codeCat" id='codeCat' value={user.adresse} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>telephone :</label>
                        <input className="ajoutinput" type="text" name="libele" id='libele' value={user.telephone} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>Email :</label>
                        <input className="ajoutinput" type="text" name="email" id='email' value={user.email} onChange={handleChange} />
                    </div>


                    <div className="ajoutparti">
                        <label>password :</label>
                        <input className="ajoutinput" type="password" name="password" id='password' placeholder='mot de passe...' value={user.password} onChange={handleChange} />
                    </div>
{/* 
                    <div  id='ajoutx2' className="ajoutparti">
                        <label>Rôle :</label>
                        <select className="ajoutinput" id='texta2' name='role' value={user.role} onChange={handleChange}>
                            <option className="ajoutinput" id='texta2' name='role' value="" >--Select one--</option>
                            <option className="ajoutinput" id='texta2' name='role' value="Employer">Employer</option>
                            <option className="ajoutinput" id='texta2' name='role' value="Admin">Admin</option>
                        </select>
                    </div> */}
                </div>
                <div>
                    <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
                </div>

            </form>

        </div>
    )
}
export default UpdateUser;