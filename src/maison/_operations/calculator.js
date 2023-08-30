import React, { useState, useEffect, useRef } from 'react';
// import { lotsServices } from '../Zservices/lot.services';



const Calculator = ({ total }) => {
    //   const [data, setData] = useState(null);
    const flag = useRef(false)
    const [result, setResult] = useState('');


    //   useEffect(() => {
    //     // Appeler l'API pour obtenir les données
    //         if (flag.current === false) {
    //             lotsServices.getLot()
    //       .then(response => setData(response.data))
    //       .catch(error => console.log(error));
    //     }
    //       return () => flag.current = true
    //       // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, []);


    //   const calculate = () => {

    useEffect(() => {
        if (total && flag.current === false) {
            // Effectuer les opérations numériques
            const multiplication = total.prixUnitaire * total.quantite;

            // Mettre à jour le résultat
            setResult({ multiplication });
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {result ? (
                <div>
                    <p>{result.multiplication}</p>
                </div>
            ) : (
                <p>Chargement des données...</p>
            )}
            {/* <button onClick={calculate}>Calculer</button> */}
        </div>
    );
};

export default Calculator;
