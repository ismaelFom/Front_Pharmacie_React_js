import React, { useEffect, useRef, useState } from 'react'
// import '../style/StyleClinton.css'



const SearchBataData = ({lists, setLists, filterfield = item => item, ...props}) => {
    const flag = useRef(false)
    const [value, setValue] = useState("")


    const filterList = () => {
        return lists.filter(item => filterfield(item).toLowerCase().includes(value.toLocaleLowerCase()))
    }
    useEffect(()=> {
        if(flag.current === false) {
            setLists(filterList())
        }
        else {
            setLists(lists)
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <input type="text" placeholder="Recherche..." name="search" onChange={handleChange} value={value} {...props} className="div-search" />
    )
}
export default SearchBataData;