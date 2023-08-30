import React from 'react';
import AddUser from '../pagesAjouts/ajouterUser';
import UpdateUser from '../pagesModifiers/modifierUser';
import ReadUsers from '../pagesAffiches/contentUser';

const Cusers = () => {

    return (
        <div className='depos'>
            <div className="antibio"><h3>Affichage Des Meedicaments</h3></div>
                <ReadUsers />

            <div className="ligne"></div>

            <div className="antibio"><h3>Ajouter / Modifier</h3></div>

            <div className="add-up-cat">
                <AddUser /> <UpdateUser />
            </div>

        </div>
              
    )
}
export default Cusers;