//import Axios from "./caller.services"; 
// import Axios from "./caller.services";
import httpClient from "./http-connexion";

//Connection
const login = (data) => {
    return httpClient.post('/gestiondestockpharmacie/v1.O/auth/authenticate', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
}

//Enregistrement du Token
let saveToken =(token)=> {
    localStorage.setItem('token', token)
}

//Déconnection
let logout =()=> {
    localStorage.removeItem('token')
}

//Récupération du Token
let getToken = () => {
    return localStorage.getItem('token')
}

//Savoir si on est connecté
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !! token
}

//Exportation 
export const accountServices = {
    // login, 
    saveToken, logout, isLogged, getToken, login
}