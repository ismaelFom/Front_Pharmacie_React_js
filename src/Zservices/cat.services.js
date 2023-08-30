// import httpClient from './http-connexion';
import Axios from './caller.services';

// import { headerService } from './header.services';
// , {
//         headers: { headerService }
//       }


//Ajouter une Catégorie 
const catAdd = (categorie) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/categories/create', categorie);
}

//modifier une Catégorie 
const updateCat = (Cid) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/categories/create/'+Cid);
}
const okCat = (Cid) => {
    return Axios.get('/gestiondestockpharmacie/v1.O/categories/'+Cid);
}

//Afficher les Catégories
const getCat = () => {
    return Axios.get('/gestiondestockpharmacie/v1.O/categories/all');
}

//Supprimer la Catégorie 
const getCatDel = (Cid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/categories/delete/'+Cid);
}


// return httpClient.post('/gestiondestockpharmacie/v1.O/categories/all',{},{withCredentials : true});

//Afficher la Catégorie par son nom
// const getCatNom = (nomCat) => {
//     return Axios.get('/gestiondestockpharmacie/v1.O/categories/'+{nomCat});
// }

//Afficher la Catégorie par son id
// const getCatId = (idCat) => {
//     return Axios.get('/gestiondestockpharmacie/v1.O/categories/'+idCat.id, idCat);
// }


//Les exports
export const catServices = { okCat, getCat, updateCat, getCatDel, catAdd };