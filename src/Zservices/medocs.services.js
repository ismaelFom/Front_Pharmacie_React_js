import Axios from './caller.services';
// import httpClient from './http-connexion';

//Affichage les médicaments
const getMedicament = () => {
    return Axios.post('/gestiondestockpharmacie/v1.O/medicaments/all');
}

//Ajouter un médicament
const getEdit = (ajoutmedocs) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/medicaments/create', ajoutmedocs);
}

//Suppression d'un médicament
const delMedId = (Medid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/medicaments/delete/'+Medid);
}

//modifier un médicament
const updateMedicamentId = (Medid) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/medicaments/create/'+Medid);
}


// //Afficher un médicament
// const getMedicamentId = () => {
//     return httpClient.post('/gestiondestockpharmacie/v1.O/medicaments/all');
// }


export const medocsServices = { updateMedicamentId, getMedicament, getEdit, delMedId };