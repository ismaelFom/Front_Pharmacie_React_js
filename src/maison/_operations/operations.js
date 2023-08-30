// import React, { useState } from 'react';
// // import { lotsServices } from '../Zservices/lot.services';
// // import Table from 'react-bootstrap/Table';




// function Calculs({total}) {
//     // const flag = useRef(false)
//     const [ce, setCe] = useState('0');
//     const [ces, setCes] = useState('0');
//     const [cest, setCest] = useState();

//     // Récupération de la Liste des Lots à l'affichage
//     // useEffect(() => {
//     //     if (flag.current === false) {
//     //         lotsServices.getLot()
//     //             .then(res => {
//     //                 console.log('Liste Lots...', res.data).filter(obj => console.log(obj.code, obj.quantite))
//     //                 setMaladies(obj.code);
//     //             })
//     //             .catch(err => {
//     //                 console.log('Erreur...', err);
//     //             })
//     //     }
//     //     return () => flag.current = true
//     //     // eslint-disable-next-line react-hooks/exhaustive-deps
//     // }, []);

//     // if (obj.code) {
//     //     return alert("Ils n'est plus possible d'effectuer les réductions")
//     // }


//     function handleSubmit() {
//         // let ce = {total.prixUnitaire}
//         // let ces = {total.quantite}
//         if (Number(ce) < Number(ces)) {
//             return alert("Ils n'est plus possible d'effectuer les réductions")
//         } else {
//             let res = ce + ces;
//             setCest(Number(ce) + Number(ces));
//             console.log(res);
//         }

//     }


//     return (
//         <div>
//             <h1>Agissons</h1>

//             {/* <button onClick={() => info()} className='btn btn-info' >Addition</button>
//             <button onClick={() => infos} className='btn btn-danger' >Soustraction</button> */}
//             {/* <input type='number' name='nom' value={ces} onChange={onChange} /> */}


//             <label for="exampleDropdownFormEmail2" class="form-label">appel</label>
//             <input class="form-control" type='number' onChange={e => setCe(e.target.value)} />

//             <label for="exampleDropdownFormPassword2" class="form-label">saisie</label>
//             <input class="form-control" type='number' name='nom' onChange={e => setCes(e.target.value)} />

//             <button onClick={handleSubmit} class="btn btn-primary">Validation</button>

//             <div class="mb-3">
//                 <label for="exampleDropdownFormPassword2" class="form-label">resultat</label>
//                 <h2>{cest}</h2>{total.prixUnitaire}


                
//             <input class="form-control" type='number' onChange={e => setCe({total.prixUnitaire})} />
//             </div>
//         </div>
//     )
// }
// export default Calculs;