import Axios from './caller.services';
// import httpClient from './http-connexion';

// {
//         headers: {
//           'Authorization': 'Bearer ' +'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmcxIiwiaWRQaGFybWFjaWUiOiIxIiwiZXhwIjoxNjkxNzMyNTcxLCJpYXQiOjE2OTE2OTY1NzF9.yKPVtiqTK35AS2FJ-9ZdP_8PuLBKScKGhJ4zqlvFauA',
//   'Content-Type': 'application/json'
//         }
//       }

//Ajouter une maladies 
const  malAdd = async (maladie) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/maladies/create', maladie);
}


//Afficher les Catégories
const getMal = () => {
    return Axios.get('/gestiondestockpharmacie/v1.O/maladies/all');
}

//Supprimer la maladie 
const getMalDel = (Mid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/maladies/delete/'+Mid);
}


//modifiction la maladie 
const updateMal = (Mid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/maladies/create/'+Mid);
}

//Afficher la maladie par son id
const getMalId = (Mid) => {
    return Axios.get('/gestiondestockpharmacie/v1.O/maladies/'+Mid);
}
// return httpClient.post('/gestiondestockpharmacie/v1.O/categories/all',{},{withCredentials : true});

//Afficher la Catégorie par son nom
// const getMalNom = (nomCat) => {
//     return httpClient.get('/gestiondestockpharmacie/v1.O/categories/'+nomCat, nomCat, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
// }
//Les exports
export const malServices = { getMal, getMalDel, malAdd, updateMal, getMalId };