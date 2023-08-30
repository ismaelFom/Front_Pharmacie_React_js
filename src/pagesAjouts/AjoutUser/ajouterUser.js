import { React, useState } from 'react';
import { usServices } from '../../Zservices/us.services';
import '../../style/StyleUser.css';
// import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    // let navigate = useNavigate();
    //  const {id} =useParams();

    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        password: ''
        // role: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    const saveData = (e) => {
        e.preventDefault();

        
        let u = JSON.stringify(user);
        console.log(u);



        usServices.create(u)
        .then(res => {
            console.log('Enregistrement Réussit...', res.data)
            alert('L\'utilisateur a été créé...');

        }).catch(erreur => {
            console.log('Erreur...', erreur);
            alert('Erreur de création d\'un utilsateur...');
        });
    }


    return (
        <div className='div-ajouterUser'>

            <div className="ajouttout"><h4>Modifier un médicament</h4></div>
            <form className='container newform'>

<div className="div1">
                {/* <div className='form-user'> */}
                    <div className="ajoutparti">
                        <label>Nom :</label>
                        <input className="ajoutinput" type="text" name="libele" id='libele' value={user.nom} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>prenom :</label>
                        <input className="ajoutinput" type="text" name="codeCat" id='codeCat' value={user.prenom} onChange={handleChange} />
                    </div>
</div>
                    
<div className="div2">
                    <div className="ajoutparti">
                        <label>adresse</label>
                        <input className="ajoutinput" type="text" name="codeCat" id='codeCat' value={user.adresse} onChange={handleChange} />
                    </div>

                    <div className="ajoutparti">
                        <label>telephone :</label>
                        <input className="ajoutinput" type="text" name="libele" id='libele' value={user.telephone} onChange={handleChange} />
                    </div>
</div>

<div className="div3">
                    <div className="ajoutparti">
                        <label>Email :</label>
                        <input className="ajoutinput" type="text" name="email" id='email' value={user.email} onChange={handleChange} />
                    </div>


                    <div className="ajoutparti">
                        <label>password :</label>
                        <input className="ajoutinput" type="password" name="password" id='password' placeholder='mot de passe...' value={user.password} onChange={handleChange} />
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
export default AddUser;