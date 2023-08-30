import { accountServices } from '../Zservices/account.services';
import AdminRoutes from '../maison/admin/adminroutes';
import EmployerRoutes from '../maison/employers/employerroutes';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Authid = () => {
    let navigate = useNavigate();

    if(accountServices.login({login: "string1", password: "string"})){

       
        return (
            
    
        <Routes>
                 <Route exact path="admin/*" element={<AdminRoutes />} />
        </Routes>
      
     
        )
    } else
    navigate("/employer/ajoutercat", {replace: true})
    return (
            
            <Routes>
                     <Route exact path="employer/*" element={<EmployerRoutes/>} />
            </Routes>
          
         
            )
};
export default Authid;