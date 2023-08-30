// import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { medocsServices } from '../../Zservices/medocs.services';
import Cartes from './cartes';

const Trimedicament = () => {
    const [tries, setTrie] = useState([]);
    const flag = useRef(false);


    useEffect(() => {
        if (flag.current === false) {
            medocsServices.getArt()
                .then(res => {
                    setTrie(res.data);
                }).catch(err => {
                    console.log('Erreur...', err);
                })
        }
        return () => flag.current === true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <article className='div-Trimedicament'>
            <Link to="#">
            {tries.map((trie) => {
        return (
            console.log(trie)
        )
      })}
            </Link>
        </article>
    )
};

export default Trimedicament;