import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { empServices } from '../Zservices/emp.services';
import { Link } from 'react-router-dom';
import '../style/StyleCat.css'


const Employers = () => {

    
    const flag = useRef(false)
    const [employers, setEmployers] = useState([])

    // const { id } = useParams()

    const delEmp = (Eid) => {
        console.log(Eid);
        empServices.delEmpId(Eid)
                .then(res => {
                    console.log(res);
                    setEmployers((current) => current.filter(employer => employer.id !== Eid));
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
    }

    // Récupération de la Liste des Maladies à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            empServices.getEmp()
            .then(res => {
                console.log('Enregistrement employers reussit...', res.data);
                setEmployers(res.data);
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
                <div className="antibio"><h3>Affichage Des Employers</h3></div>

                <Table striped bordered hover variant="blue">

                    <thead className='table-Catégorie'>
                        <tr>
                            <th> Id employers </th>
                            <th> Nom employers </th>
                            <th> Prenom </th>
                            <th> Username </th>
                            <th> Adresse </th>
                            <th> Telephone </th>
                            <th> Pharmacie </th>
                            <th> Email </th>
                            <th> Photo </th>
                            <th> Descriptions </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employers.map(employer => (
                                    <tr>
                                        <td>{employer.id}</td>
                                        <td>{employer.nom}</td>
                                        <td>{employer.prenom}</td>
                                        <td>{employer.username}</td>
                                        <td>{employer.adresse}</td>
                                        <td>{employer.telephone}</td>
                                        <td>{employer.pharmacie}</td>
                                        <td>{employer.email}</td>
                                        <td>{employer.photo}</td>
                                        <td>{employer.description}</td>
                                        <td>
                                            <div className='div-btn'>
                                                {/* <button className='btn btn-info' to={`categorie/${categorie._id}`}> Modifier </button> */}
                                                <Link className='catupdate' to={`element/admin/updateEmployer/${employer.id}`}>update</Link>
                                                <Link className='catdelete' onClick={() => delEmp(employer.id)} to='#'>delete</Link>
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

export default Employers;