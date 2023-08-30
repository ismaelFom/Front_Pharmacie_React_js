import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import BarDeNavigation from './firstScreens/navbar';
import NavRouter from './firstScreens/navRouter';
import Banniere from './firstScreens/banniere';
import AuthGuard from './zhelpers/authGuard';
import ResponsiveAppBar from './ecransUn/formnavBarMUI';
// import Authid from './zhelpers/authcontrole';
import NoPage from './firstScreens/nopage';
import AdminRoutes from './maison/admin/adminroutes';
// import Checkout from './teletemplate/Checkout';
// import Review from './teletemplate/Review';
// import AddressForm from './teletemplate/AddressForm';
// import Ajoutercat from './pagesAjouts/ajouterCat';
// import SearchBataData from './recherches/searchBarData';
// import EmployerRoutes from './maison/employers/employerroutes';
// import HeaderAdmin from './maison/admin/headeradmin';


function App() {
  return (
      <BrowserRouter>
        <ResponsiveAppBar />
        {/* <BarDeNavigation/> */}
        {/* Ajoutercat */}
        <Routes>
          <Route exact path="/" element={<Banniere />} />
          <Route path="/*" element={<NavRouter />} />
          <Route path="/element/*" element={
            <AuthGuard>
              <AdminRoutes />
            </AuthGuard>
          } />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App;
