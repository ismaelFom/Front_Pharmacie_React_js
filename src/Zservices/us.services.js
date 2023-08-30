import Axios from "./caller.services";
// import httpClient from "./http-connexion"; 


//Creation d'un utilisateur
const create = (u) => {
    return Axios.post('​/gestiondestockpharmacie​/v1.O​/utilisateurFinals​/create', u);
}

//trouver de tous les utilisateurs par son id
const updateUser = (Uid) => {
    return Axios.post('​/gestiondestockpharmacie​/v1.O​/utilisateurFinals/​'+Uid);
}

//Affichage de tous les utilisateurs
const getAff = () => {
    return Axios.get('/gestiondestockpharmacie/v1.O/utilisateurFinals/all');
}

//Suppression d'un' utilisateur
let userDelete =(Uid)=> {
    return Axios.delete('/gestiondestockpharmacie/v1.O/utilisateurFinals/delete/'+Uid);
}

//modification d'un utilisateur
const updateCreateUser = (Uid) => {
    return Axios.post('​/gestiondestockpharmacie​/v1.O​/utilisateurFinals​/create/'+Uid);
}


// let getUser = (id) => {
//     return httpClient.get(`/user/updateUser`, id);
//     }


export  const usServices = {
    create, getAff, updateUser, userDelete, updateCreateUser
}