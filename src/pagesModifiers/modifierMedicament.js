import React from 'react';
import { usServices } from '../Zservices/us.services';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';




const Updatemedicament = () => {
    // const flag = newmedicamentef(false)
    const {id} =useParams();
    let navigate = useNavigate();

   const [newmedicament, setNewmedicament] = useState ({
       nom:'',
       prenom:'',
       email:'',
       role:'',
       password:''
   });

   const handleChange =(e)=>{
       setNewmedicament({...newmedicament, [e.target.name]: e.target.value});
   }
    
   // Soumission du formulaire
//  const onSubmit = (e) => {
//     e.preventDefault()
//     console.log(newmedicament)
//     usService.updatenewmedicament(id)
//         .then(res => {
//             console.log(res)
//             navigate('./newmedicaments')
//         })
//         .catch(err => console.log(err))
// }

// Récupération de l'utilisateur à l'affichage
useEffect (()=> {
   usServices.getNewmedicament(id)
           .then(res => {
               console.log(res.data)
               setNewmedicament(res.data)
           })
           .catch(err => console.log(err))    

   // if (flag.current === false) {
       
   // }

   // return () => flag.current = true
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


   const saveData = (e) => {
       // toast('OK');
        e.preventDefault();
       
           usServices.create(newmedicament).then(res =>{
                   console.log('Enregistrement Réussit...', res.data)
               alert('L\'utilisateur a été créé...' );
               navigate("/admin/indexU")
            }).catch (erreur => {
               console.log('Erreur...', erreur);
               alert('Erreur de création d\'un utilsateur...' );
            });
        
   }

    
    return (
        <div className='ajouterCat'>

            <div className= "ajouttout"><h4>Modifier un médicament</h4></div>
            <form className='container form-newmedicament'>

                <div className="ajoutparti">
                    <label>Nom médicament :</label>
                    <input className="ajoutinput" type="text" name="libele" id='libele' value={newmedicament.libele} onChange={handleChange} />
                </div>

                <div className="ajoutparti">
                    <label>Libele Catégorie :</label>
                    <input className="ajoutinput" type="num" name="codeCat" id='codeCat' value={newmedicament.codeCat} onChange={handleChange}>gramme(s)</input>
                </div>
                
                <div className="ajoutparti">
                    <label>Description</label>
                    <textarea className="ajoutinput" placeholder="... ... ..."></textarea>
                </div>

                <div className="ajoutparti">
                    <label>Marque :</label>
                    <input className="ajoutinput" type="text" name="libele" id='libele' value={newmedicament.marque} onChange={handleChange} />
                </div>

                <div className="ajoutparti">
                    <label>Forme :</label>
                    <input className="ajoutinput" type="text" name="libele" id='libele' value={newmedicament.forme} onChange={handleChange} />
                </div>

                <div>
                    <button type="submit" className="ajoutbtn" onClick={(e) => saveData(e)}>Validation</button>
                </div>

            </form>

        </div>
    )
}
export default Updatemedicament;