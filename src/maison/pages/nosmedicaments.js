import React, { useEffect, useRef, useState } from 'react';
import { catServices } from '../../Zservices/cat.services';
import Cartes from './cartes';

const NosMedicament = () => {
  const [cadres, setCadres] = useState([]);
  const [isload, setload] = useState(false);
  const flag = useRef(false);
  const cleaner= flag.current === true;

  useEffect(() => {
    if (flag.current === false) {
      catServices.getCat()
        .then(res => {
          setTimeout(() => {
            setCadres(res.data);
            setload(true);
          }, 1000)

        })
        .catch(err => {
          console.log('Erreur...', err);
      })
    }
    return () => (cleaner)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isload) {
    return <div>Loading...</div>
  }

  return (
    <div className='NosMedicaments'>
      <h2>Ici ca sera la Nos Médicaments !!!</h2>

      {cadres.map((cadre, id) => {
        return (
          <Cartes key={id} cadre={cadre} />
        )
      })}
    </div>
  )
};

export default NosMedicament;