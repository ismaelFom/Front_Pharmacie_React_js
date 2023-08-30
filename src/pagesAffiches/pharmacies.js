import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import '../style/StyleCat.css'
import { pharmaServices } from '../Zservices/pharma.service';


const Pharmacies = () => {


    const flag = useRef(false)
    const [pharmacies, setPharmacies] = useState([])

      // const { id } = useParams()

      const delpharmacie = (Pid) => {
        console.log(Pid);
        pharmaServices.pharmaDel(Pid)
                .then(res => {
                    console.log(res);
                    setPharmacies((current) => current.filter(pharmacie => pharmacie.id !== Pid));
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
    }


    // Récupération de la Liste des Categories à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            pharmaServices.getPharma()
                .then(res => {
                    console.log('Liste Pharmacies...', res.data);
                    setPharmacies(res.data);
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
                            <th> Id Pharmacie </th>
                            <th> Adresse Pharmacie </th>
                            <th> Nom Pharmacie </th>
                            <th> photos Pharmacie </th>
                            <th> Descriptions </th>
                            <th> Telephone </th>
                            <th> SiteWeb Pharmacie </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pharmacies.map(pharmacie => (
                                    <tr>
                                        <td>{pharmacie.id}</td>
                                        <td>{pharmacie.adresse}</td>
                                        <td>{pharmacie.nom}</td>
                                        <td><img src={pharmacie.photo} alt='pharmacie' /></td>
                                        <td>{pharmacie.description}</td>
                                        <td>{pharmacie.telephone}</td>
                                        <td>{pharmacie.siteWeb}</td>
                                        <td>
                                            <div className='div-btn'>
                                                {/* <button className='btn btn-info' to={`categorie/${categorie._id}`}> Modifier </button> */}
                                                <Link className='catupdate' to={`/element/admin/updatePharmacies/${pharmacie.id}`}>update</Link>
                                                <Link className='catdelete' onClick={() => delpharmacie(pharmacie.id)} to='#'>delete</Link>
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

export default Pharmacies;