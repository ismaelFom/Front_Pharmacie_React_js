import Axios from './caller.services';
// import httpClient from './http-connexion';


//Créer un lot 
const lotAdd = (lots) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/lots/create', lots)
}
// , {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//Afficher les lots
const getLot = () => {
    return Axios.get('/gestiondestockpharmacie/v1.O/lots/all')
}

//Supprimer la lot 
const lotDel = (Lid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/lots/delete/'+Lid);
}

//Modifier le lot par son id
const updateLotId = (Lid) => {
    return Axios.get('/gestiondestockpharmacie/v1.O/lots/'+Lid);
}

// return httpClient.post('/gestiondestockpharmacie/v1.O/categories/all',{},{withCredentials : true});


//Les exports
export const lotsServices = { getLot, lotDel, lotAdd, updateLotId};