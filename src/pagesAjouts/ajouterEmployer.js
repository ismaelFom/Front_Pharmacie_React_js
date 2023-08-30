import { React, useState } from 'react';
import { empServices } from '../Zservices/emp.services';
import '../style/StyleEmp.css';
// import { useNavigate } from 'react-router-dom';

const AddEmployer = () => {
    // let navigate = useNavigate();
    //  const {id} =useParams();

    const [employer, setEmployer] = useState({
        nom: '',
        prenom: '',
        username: '',
        adresse: '',
        telephone: '',
        pharmacie: 1,
        email: '',
        // photo: '',
        description: '',
        // photo: '',
        password: ''
        // role: ''
    });

    const handleChange = (e) => {
        setEmployer({ ...employer, [e.target.name]: e.target.value });
    }

    const saveData = (e) => {
        e.preventDefault();


        let emp = JSON.stringify(employer);
        console.log('emp:', emp);



        empServices.createEmp(emp)
            .then(res => {
                console.log('Enregistrement Réussit...', res.data)
                alert('L\'employer a été créé...');

            }).catch(erreur => {
                console.log('Erreur...', erreur);
                alert('Erreur de création d\'un employer...');
            });
    }


    return (
        <div className='div-ajouterEmp'>

            <div className="ajouttout"><h4>Ajouter un Employer</h4></div>
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

                    <div className="ajoutparti">
                        <label>Username :</label>
                        <input className="ajoutinput" type="text" name="username" id='libele' value={employer.username} onChange={handleChange} />
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

                    <div className="ajoutparti">
                        <label>pharmacie :</label>
                        <input className="ajoutinput" type="text" name="pharmacie" id='libele' value={employer.pharmacie} onChange={handleChange} />
                    </div>
                </div>

                <div className="div3">
                    <div className="ajoutparti">
                        <label>Email :</label>
                        <input className="ajoutinput" type="text" name="email" id='email' value={employer.email} onChange={handleChange} />
                    </div>

                    {/* 
                    <div className="ajoutparti">
                        <label>Pharmaacie :</label>
                        <input className="ajoutinput" type="num" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" name="" id='libele' value={employer.telephone} onChange={handleChange} />
                    </div> */}

                    <div className="ajoutparti">
                        <label>password :</label>
                        <input className="ajoutinput" type="text" name="password" id='password' placeholder='mot de passe...' value={employer.password} onChange={handleChange} />
                    </div>


                    <div id='ajoutx3' className="ajoutparti">
                        <label>Description</label>
                        <textarea id='texta3' className="ajoutinput" name='description' value={employer.description} onChange={handleChange} placeholder="... ... ..."></textarea>
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
export default AddEmployer;