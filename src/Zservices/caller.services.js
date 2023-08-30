import axios from "axios";
import { accountServices } from "./account.services";

const Axios = axios.create({
    baseURL: 'https://gestion-de-stock-pharmacies-v1-0.onrender.com'
})
// http://192.168.1.122:8081 

/*intercepte le token*/
Axios.interceptors.request.use(config => {
        config.headers.Authorization = 'Bearer ' +accountServices.getToken();
        config.headers['Content-Type'] = 'application/json';
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );


export default Axios


// config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');

// (request) => {
//     if (accountServices.isLogged()) {
//         request.headers.comon['Content-Type'] = 'application/json';
//         request.headers.comon['Authorization'] = 'Bearer '+accountServices.getToken();
//     }
//     return request
// })



    // if (accountServices.isLogged()) {
    //     request.headers.Authorization = 'Bearer '+accountServices.getToken();
    // }
    // return request