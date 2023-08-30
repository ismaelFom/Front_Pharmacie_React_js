import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AffichagesUCM.css';
import { accountServices } from '../Zservices/account.services';


const Logout = () => {
    let navigate = useNavigate()

    const Logout = () => {
        accountServices.logout()
        navigate('/')
    }

    return (
        <div>
            <button className='logout' onClick={Logout}>Logout</button>
        </div>
    )
}

export default Logout;