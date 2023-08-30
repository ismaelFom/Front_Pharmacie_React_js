import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { medocsServices } from '../Zservices/medocs.services';
import '../style/StyleMedocs.css';


const Medicaments = () => {
    const flag = useRef(false)
    const [Medicaments, setMedicaments] = useState([])


    // Récupération de la liste des Medicaments à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            console.log('Medicaments')
            medocsServices.getMedicament()
                .then(res => {
                    console.log('Suppression faite...', res);
                    setMedicaments(res)
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='depos'>
            <div className="antibio"><h3>Affichage Des Médicaments</h3></div>

            <Table striped bordered hover variant="blue">
                <thead>
                    <tr>
                        <th>Noms</th>
                        <th>dosage</th>
                        <th>description</th>
                        <th>marque</th>
                        <th>forme</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Medicaments.map(Medicament => (
                            <tr>
                                <td>{Medicament.id}</td>
                                <td>{Medicament.nom}</td>
                                <td>{Medicament.dosage}</td>
                                <td>{Medicament.description}</td>
                                <td>{Medicament.marque}</td>
                                <td>{Medicament.forme}</td>
                                <td>
                                    <div className='div-btn'>
                                        <Link className='medocupdate' to={`/medicament/${Medicament.id}`}>update</Link>
                                        <Link className='medocdelete' to={`medicament/${Medicament.id}`}>delete</Link>
                                        <Link to="#">update</Link>
                                        {/* <Link to="#" onClick={(e) => handleDelete(Medicament.id)}> delete </Link> */}
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default Medicaments;