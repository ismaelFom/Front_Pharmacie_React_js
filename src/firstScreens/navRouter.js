import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Evenemen from './evenement';
import NosMedicamen from './nosMedicaments';
import AproposDeNo from './aproposDeNous';
import LayoutNav from './layoutNav';



const NavRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutNav />}>
                <Route path="/nosMedicamen" element={<NosMedicamen />} />
                <Route path="/evenemen" element={<Evenemen />} />
                <Route path="/AproposDeN" element={<AproposDeNo />} />
            </Route>
        </Routes>
    )
}

export default NavRouter;