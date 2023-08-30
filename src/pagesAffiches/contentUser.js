import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { usServices } from '../Zservices/us.services';
import { Link } from 'react-router-dom';
import '../style/AffichagesUCM.css';


const ReadUsers = () => {
    const flag = useRef(false)
    const [readUsers, setReadUsers] = useState([])

    // const { id } = useParams()

    // Récupération de la liste des Utilisateurs à l'affichage
    useEffect(() => {
        if (flag.current === false) {
            usServices.getAff()
                .then(res => {
                    console.log('readUsers...', res.data);
                    setReadUsers(res.data);
                })
                .catch(err => {
                    console.log('Erreur...', err);
                })
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const uDelete =(readUserid)=>{
                console.log(readUserid);
                usServices.userDelete(readUserid)
                    .then(res => {
                        console.log(res)
                        setReadUsers((current) => current.filter(readUser => readUser.id !== readUserid))
                    })
                    .catch(err => console.log(err))
    }

    return (
        <div className='depos'>
            <div className="antibio"><h3>Affichage Des Utilisateurs</h3></div>

            <Table striped bordered hover variant="blue">
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Noms</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>adresse</th>
                        <th>Mot de passe</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        readUsers.map(readUser => (
                            <tr key={readUser.id}>
                                <td>{readUser.id}</td>
                                <td>{readUser.nom}</td>
                                <td>{readUser.prenom}</td>
                                <td>{readUser.email}</td>
                                <td>{readUser.telephone}</td>
                                <td>{readUser.adresse}</td>
                                <td>{readUser.motDePasse}</td>
                                <td>
                                <div className='div-btn'>
                                        <button className='usercupdate' onClick={()=>uDelete(readUser.id)}>update</button>
                                        <Link className='usercdelete' to={`/addUser/${readUser.id}`}>delete</Link>
                                        {/* <Link to="/suprimerA" onClick={(e) => handleDelete(medoc._id)}> delete </Link> */}
                                    </div>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default ReadUsers;