
import React, { useRef, useEffect, useState } from 'react';
import AffCard from './structureCards';
import { catServices } from '../../Zservices/cat.services';
import './Cardstyle.css';


const AfficheCards = () => {


    const flag = useRef(false)
    const [categories, setCategories] = useState([])

    // const { id } = useParams()


    // Récupération de la Liste des Categories à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            catServices.getCat()
                .then(res => {
                    console.log('Liste Categories...', res.data);
                    setCategories(res.data);
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='card-list'>
           
                    {categories.map(categorie => (
                            <AffCard key={categorie.id} data={categorie} />
                    ))}
        </div >
    )
}
export default AfficheCards;