// import React, { useEffect, useRef, useState } from 'react'
// import '../style/StyleClinton.css'
// import { catServices } from '../Zservices/cat.services'



// const Search = () => {
//     const flag = useRef(false)
//     const [datas, setDatas]=useState([]);
//     const [search, setSearch]=useState("");


//     useEffect(() => {
//         if (flag.current === false) {
//             catServices.getCatNom()
//                 .then(res => {
//                     console.log('Liste Categories...', res.data);
//                     setDatas(res.data);
//                 })
//                 .catch(err => {
//                     console.log('Erreur...', err);
//                 })
//         }
//         return () => flag.current = true
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     } , []);

//             console.log(datas);

//     const A = (e) => {
//         console.log(e.target.value)
//         let value = e.target.value;
//         value.length > 2 && setSearch(value);
//     }
//         // console.log(search);

//     return (
//         <>
//         <form>
//             <input className="div-search" type="search" placeholder="Recherche" onChange={A()} />
//         </form>
//         <div className='search-result'>
//             {datas.filter((val)=> {
//                 return val.nom.tolowercase().include(search.tolowercase());
//             })
//             .maq((val) => {
//                 return <div className='search-result' key={val.id}>{val.nom}</div>
//             })}
//         </div>
//         </>
//     )
// }
// export default Search;