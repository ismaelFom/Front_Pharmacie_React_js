import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { malServices } from '../Zservices/mal.services';
import { Link } from 'react-router-dom';
import '../style/StyleCat.css'


const Maladies = () => {


    const flag = useRef(false)
    const [maladies, setMaladies] = useState([])

    // const { id } = useParams()

    const delMal = (Mid) => {
        console.log(Mid);
        malServices.getMalDel(Mid)
            .then(res => {
                console.log(res);
                setMaladies((current) => current.filter(maladie => maladie.id !== Mid));
            })
            .catch(err => {
                console.log('Erreur...', err);
            })
    }

    // Récupération de la Liste des Maladies à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            malServices.getMal()
                .then(res => {
                    console.log('Liste Maladies...', res.data);
                    setMaladies(res.data);
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
                <div className="antibio"><h3>Affichage Des Maladies</h3></div>

                <Table striped bordered hover variant="blue">

                    <thead className='table-Catégorie'>
                        <tr>
                            <th> Id Maladies </th>
                            <th> Nom Maladies </th>
                            <th> Descriptions </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            maladies.map(maladie => (
                                <tr>
                                    <td>{maladie.id}</td>
                                    <td>{maladie.nom}</td>
                                    <td>{maladie.description}</td>
                                    <td>
                                        <div className='div-btn'>
                                            {/* <button className='btn btn-info' to={`categorie/${categorie._id}`}> Modifier </button> */}
                                            <Link className='catupdate' to={`/element/admin/updateMal/${maladie.id}`}>update</Link>
                                            <Link className='catdelete' onClick={() => delMal(maladie.id)} to='#'>delete</Link>
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

export default Maladies;