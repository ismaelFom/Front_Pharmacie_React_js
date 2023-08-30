// import httpClient from './http-connexion';
import Axios from './caller.services';

// import { headerService } from './header.services';
// , {
//         headers: { headerService }
//       }


//Ajouter une Catégorie 
const photoAdd = (formaData) => {
    return Axios.post('/gestiondestockpharmacie/v1.O/photos/save', formaData);
}

export const photoServices = { photoAdd }

// /gestiondestockpharmacie/v1.O/photos/save/{id}/{title}/{context}