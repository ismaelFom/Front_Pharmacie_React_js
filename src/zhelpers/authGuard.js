import { accountServices } from '../Zservices/account.services';
import { Navigate } from 'react-router-dom';
// import Authid from './authcontrole';


const AuthGuard = ({children}) => {
    
    if(!accountServices.isLogged()){

        return ( accountServices.catch(err => {
            console.log(err)
            alert("vous n'avez pas les bons identifiants")
            Navigate("/")
          }))
    }
    return children;
};
export default AuthGuard;