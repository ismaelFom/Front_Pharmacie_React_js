import Axios from './caller.services';
import httpClient from './http-connexion';


// , {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }



//Ajouter un employer
const createEmp = (emp) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/employes/create', emp);
}

// ru.creap = (emp) => {
//     return httpClient.post('/gestiondestockpharmacie/v1.O/employes/create', emp, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
// }

//Affichage les employer
const getEmp = () => {
    return httpClient.post('/gestiondestockpharmacie/v1.O/employes/all', {
              headers: {
                'Content-Type': 'application/json'
              }
            });
}

// const getEmp = () => {
//   return Axios.post('/gestiondestockpharmacie/v1.O/employes/all');
// }


// //Ajouter un médicament
// const getEdit = (ajoutmedocs) => {
//     return httpClient.post('/gestiondestockpharmacie/v1.O/medicaments/create', ajoutmedocs, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
// }

//Suppression d'un employer
const delEmpId = (Eid) => {
    return Axios.delete('/gestiondestockpharmacie/v1.O/employes/delete/'+Eid);
}

//Affichage d'un employer
const getMedicamentId = (Eid) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/medicaments/all/categories/'+Eid);
}

const modifEmp = (Eid) => {
  return Axios.post('/gestiondestockpharmacie/v1.O/employes/create'+Eid);
}


export const empServices = { createEmp, getEmp, modifEmp, getMedicamentId, delEmpId };