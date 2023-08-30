import Axios from './caller.services';
import httpClient from './http-connexion';

//Ajouter une pharmacie 
const  pharmaAdd = async (pharmacie) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/pharmacies/create', pharmacie);
}


//Afficher les pharmacie
const getPharma = () => {
    return httpClient.get('/gestiondestockpharmacie/v1.O/pharmacies/all');
}

//Supprimer la pharmacie
const pharmaDel = (Pid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/pharmacies/delete/'+Pid);
}


//Afficher la pharmacie par son id
const pharmaId = (Pid) => {
    return Axios.get('/gestiondestockpharmacie/v1.O/pharmacies/'+Pid);
}


//modifiction la pharmacie 
const updatePharma = (Pid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/maladies/create/'+Pid);
}

// return httpClient.post('/gestiondestockpharmacie/v1.O/categories/all',{},{withCredentials : true});

//Afficher la Catégorie par son nom
// const getPharmaNom = (nomCat) => {
//     return httpClient.get('/gestiondestockpharmacie/v1.O/categories/'+nomCat, nomCat, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
// }
//Les exports
export const pharmaServices = { getPharma, pharmaDel, pharmaAdd, updatePharma, pharmaId };