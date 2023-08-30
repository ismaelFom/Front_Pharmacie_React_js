import React from 'react'
import '../style/StyleLogin.css'
// import React, { useEffect, useRef, useState } from 'react'
// import { catServices } from '../Zservices/cat.services'



const SearchBar = () => {
    //     const flag = useRef(false)
    //     const [data, setData] = useState([]);
    //     const [filterData, setFilterData] = useState("");


    //     useEffect(() => {
    //         if (flag.current === false) {
    //             catServices.getCatNom(data)
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     setData(data);
    //                     setFilterData(data);
    //                 })
    //                 .catch(err => console.log('Erreur...', err))
    // }
    // return () => flag.current = true
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, []);

    // const handlefilter = (value) => {
    //     const res = filterData.filter(f => f.name.toLowerCase().includes(value))
    //     setData(res);
    //     if (value === "") {
    //        setData([])
    //     }
    // }

    return (
        <div className="search-top">
            {/* <div>
                <input className="div-search" type="search" placeholder="Recherche" onChange={e => handlefilter(e.target.value)} />
            </div>
            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i}>
                        {d.nom}
                    </div>
                ))}

            </div> */}
        </div>
    )
}
export default SearchBar;