import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { lotsServices } from '../Zservices/lot.services';
import { Link } from 'react-router-dom';
// import Calculs from '../maison/_operations/operations';
import Calculator from '../maison/_operations/calculator';
import '../style/StyleLot.css'


const Lots = () => {


    const flag = useRef(false)
    const [lots, setLots] = useState([])

    // const { id } = useParams()

    const delLot = (Lid) => {
        console.log(Lid);
        lotsServices.lotDel(Lid)
            .then(res => {
                console.log(res);
                setLots((current) => current.filter(lot => lot.id !== Lid));
            })
            .catch(err => {
                console.log('Erreur...', err);
            })
    }


    // Récupération de la Liste de Lot à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            lotsServices.getLot()
                .then(res => {
                    console.log('Liste des Lots...', res.data);
                    setLots(res.data);
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
                <div className="antibio"><h3>Affichage Des Lots</h3></div>

                <Table striped bordered hover variant="blue">

                    <thead>
                        <tr>
                            <th> Cod eLots </th>
                            <th> Description </th>
                            <th> Date Fabrication </th>
                            <th> Date Peremtion </th>
                            <th> Prix Unitaire </th>
                            <th> Quantite </th>
                            <th> Prix total du lot </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            lots.map(l => (

                                <tr key={l.id} >
                                    <td>{l.code}</td>
                                    <td>{l.description}</td>
                                    <td>{l.dateFabrication}</td>
                                    <td>{l.datePeremtion}</td>
                                    <td>{l.prixUnitaire}</td>
                                    <td>{l.quantite}</td>
                                    <td><Calculator total={l} /></td>
                                    <td>

                                        <div className='div-btn'>
                                            <Link className='catupdate' to={`/element/admin/updateLot/${l.id}`}>update</Link>
                                            <Link className='catdelete' onClick={() => delLot(l.id)} to='#'>delete</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                Nombre total d'élément du tableau : {lots.length}
            </div>


        </>
    )
}

export default Lots;