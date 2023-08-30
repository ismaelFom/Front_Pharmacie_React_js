import React from 'react';
import Categories from '../pagesAffiches/categories';
import Ajoutercat from '../pagesAjouts/ajouterCat';
import UpdateCat from '../pagesModifiers/modifierCategorie';

const Ccategorie = () => {
    
        return (
            <>
                <div>
                    <div className="antibio">
                        <h3>Affichage Des Categories</h3>
                    </div>
                    
                    <Categories />
                </div>
    
                <div className="ligne"></div>
    
                    <div className="antibio"><h3>Ajouter / Modifier</h3></div>
    
                <div className="add-up-cat">
                    <Ajoutercat /> <UpdateCat />
                </div>
                
                
    
            </>
    )
}
export default Ccategorie;