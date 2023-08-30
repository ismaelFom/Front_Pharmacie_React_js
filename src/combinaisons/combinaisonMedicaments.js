import React from 'react';
import Medicaments from '../pagesAffiches/medicaments';
import AddMedicament from '../pagesAjouts/ajoutMedicament';
import Updatemedicament from '../pagesModifiers/modifierMedicament';

const Cmedicament = () => {

    return (
        <div className='depos'>
            <div className="antibio"><h3>Affichage Des Meedicaments</h3></div>

                <Medicaments />

            <div className="ligne"></div>

            <div className="antibio"><h3>Ajouter / Modifier</h3></div>

            <div className="add-up-cat">
                <AddMedicament /> <Updatemedicament />
            </div>

        </div>
    )
}
export default Cmedicament;