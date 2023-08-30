import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderEmployer from './headeremployer';
import Layouts from './layouts'
import Categories from '../../pagesAffiches/categories';
import Medicaments from '../../pagesAffiches/medicaments';
import Supression from '../../pagesAffiches/supression';
import Ajoutercat from '../../pagesAjouts/ajouterCat';
import AddMedicament from '../../pagesAjouts/ajoutMedicament';
import AjoutLot from '../../pagesAjouts/ajoutLot';
import Lots from '../../pagesAffiches/lots';


const EmployerRoutes = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layouts />}>
                    <Route index element={<HeaderEmployer />} />
                    <Route path="employer/medicament" element={<Medicaments />} />
                    <Route path="employer/catégorie" element={<Categories />} />
                    <Route path="employer/lot" element={<Lots />} />

                    <Route path="employer/supression" element={<Supression />} />
                    
                    <Route path="employer/addMedicament" element={<AddMedicament />} />
                    <Route path="employer/ajoutercat" element={<Ajoutercat />} />
                    <Route path="employer/ajoutLot" element={<AjoutLot />} />
                </Route>

            </Routes>
        </div>
    )
}
export default EmployerRoutes;