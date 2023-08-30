import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderAdmin from './headeradmin';
import LayoutAdmin from './layoutadmin';
import Supression from '../../pagesAffiches/supression';
import Medicaments from '../../pagesAffiches/medicaments';
import Categories from '../../pagesAffiches/categories';
import ReadUsers from '../../pagesAffiches/contentUser';
// import AddEmployer from '../../pagesAjouts/ajouterEmployer';
// import AjouterMaladies from '../../pagesAjouts/ajouterMaladies';
// import AddMedicament from '../../pagesAjouts/ajoutMedicament';
// import Ajoutercat from '../../pagesAjouts/ajouterCat';
// import AddUser from '../../pagesAjouts/ajouterUser';
// import AjoutLot from '../../pagesAjouts/ajoutLot';
// import AjoutPharmacie from '../../pagesAjouts/ajouterPharmacies';
import Lots from '../../pagesAffiches/lots';
import UpdateUser from '../../pagesModifiers/modifierUser';
import Updatemedicament from '../../pagesModifiers/modifierMedicament';
import UpdateCat from '../../pagesModifiers/modifierCategorie';
import UpdateLot from '../../pagesModifiers/modifierLot';
import Maladies from '../../pagesAffiches/maladies';
import Employers from '../../pagesAffiches/employers';
import UpdateEmployer from '../../pagesModifiers/modifierEmployer';
import Updatemaladie from '../../pagesModifiers/modifierMaladie';
import Pharmacies from '../../pagesAffiches/pharmacies';
import UpdatePharmacies from '../../pagesModifiers/modifierPharmacie';
import CheckLot from '../../pagesAjouts/AjoutLot/checkLot';
import CheckMal from '../../pagesAjouts/AjoutMaladie/CheckMal';
import CheckMedocs from '../../pagesAjouts/AjoutMedicament/checkMedocs';
import CheckPharmatie from '../../pagesAjouts/AjoutPharmacie/CheckPharmatie';
import CheckEmployer from '../../pagesAjouts/AjoutEmployer/checkEmployer';
import CheckUser from '../../pagesAjouts/AjoutUser/Checkout';
import CheckCat from '../../pagesAjouts/AjoutCat/CheckCat';

const AdminRoutes = () => {
    return (
        <div>
            <Routes>
                <Route element={<LayoutAdmin />}>
                    <Route index element={<HeaderAdmin />} />
                    <Route path="admin/medicament" element={<Medicaments />} />
                    <Route path="admin/categorie" element={<Categories />} />
                    <Route path="admin/readUser" element={<ReadUsers />} />
                    <Route path="admin/lot" element={<Lots />} />
                    <Route path="admin/maladies" element={<Maladies />} />
                    <Route path="admin/showEmployers" element={<Employers/>} />
                    <Route path="admin/pharmacies" element={<Pharmacies />} />
                    
                    <Route path="admin/supression" element={<Supression />} />


                    <Route path="admin/addMedicament" element={<CheckMedocs/>} />
                    <Route path="admin/ajoutercat" element={<CheckCat />} />
                    <Route path="admin/addUser" element={<CheckUser />} />
                    <Route path="admin/addEmployer" element={<CheckEmployer />} />
                    <Route path="admin/addLots" element={<CheckLot />} />
                    <Route path="admin/addMaladies" element={<CheckMal />} />
                    <Route path="admin/addPharmacies" element={<CheckPharmatie />} />
                    

                    <Route path="admin/updateMedicament/:Meid" element={<Updatemedicament />} />
                    <Route path="admin/updateMat/:Cid" element={<UpdateCat />} />
                    <Route path="admin/updateUser/:Uid" element={<UpdateUser />} />
                    <Route path="admin/updateLot/:Lid" element={<UpdateLot />} />
                    <Route path="admin/updatePharmacies:Pid" element={<UpdatePharmacies />} />
                    <Route path="admin/updateEmployer/:Eid" element={<UpdateEmployer />} />
                    <Route path="admin/updateMal/:Mid" element={<Updatemaladie />} />
                </Route>

            </Routes>
        </div>
    )
}
export default AdminRoutes;