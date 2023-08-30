import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { catServices } from '../Zservices/cat.services';
import { Link } from 'react-router-dom';
import '../style/StyleCat.css'


const Categories = () => {


    const flag = useRef(false)
    const [categories, setCategories] = useState([])

      // const { id } = useParams()

      const delCat = (Cid) => {
        console.log(Cid);
        catServices.getCatDel(Cid)
                .then(res => {
                    console.log(res);
                    setCategories((current) => current.filter(categorie => categorie.id !== Cid));
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
    }


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
        <>
            <div>
                <div className="antibio"><h3>Affichage Des Categories</h3></div>

                <Table striped bordered hover variant="blue">

                    <thead className='table-Catégorie'>
                        <tr>
                            <th> nombre Catéggorie </th>
                            <th> Id Catéggories </th>
                            <th> Code Catéggories </th>
                            <th> Nom Catéggories </th>
                            <th> photos Catéggories </th>
                            <th> Descriptions </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            categories.map((categorie, index) => (
                                    <tr key={index+1}>
                                        <td>key={index+1}</td>
                                        <td>{categorie.id}</td>
                                        <td>{categorie.code}</td>
                                        <td>{categorie.nom}</td>
                                        <td><img src={categorie.photo} alt='categorie' /></td>
                                        <td>{categorie.description}</td>
                                        <td>
                                            <div className='div-btn'>
                                                {/* <button className='btn btn-info' to={`categorie/${categorie._id}`}> Modifier </button> */}
                                                <Link className='catupdate' to={`/element/admin/updateCat/${categorie.id}`}>update</Link>
                                                <Link className='catdelete' onClick={() => delCat(categorie.id)} to='#'>delete</Link>
                                            </div>
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>

            {/* <div className="ligne"></div>

                <div className="antibio"><h3>Ajouter / Modifier</h3></div>

            <div className="add-up-cat">
                <Ajoutercat /> <UpdateCat />
            </div> */}



        </>
    )
}

export default Categories;