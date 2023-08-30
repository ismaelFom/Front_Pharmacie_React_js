import React, { useEffect, useRef, useState } from 'react'
// import '../style/StyleClinton.css'
import { lotsServices } from '../Zservices/lot.services'
import SearchBataData from './searchBarData'



const SearchData = () => {
    const flag = useRef(false)
    const [datas, setDatas]=useState([]);
    // const [search, setSearch]=useState([]);


    useEffect(() => {
        if (flag.current === false) {
            lotsServices.getLot()
                .then(res => {
                    console.log('Liste lot...', res.data);
                    setDatas(res.data);
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);



    return (
        <>
        <div>
            <h1>Datas de lot</h1>
            {/* <SearchBataData list={datas} setLists={setDatas} /> */}
            <SearchBataData placeholder={"filter by code"} filterfield={(item) => item.code} lists={datas} setLists={setDatas} />
            {datas.map((item, index)=> <p key={index}> {item.code} || {item.quantite} </p> )}
        </div>
        </>
    )
}
export default SearchData;