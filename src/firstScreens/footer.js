import React from 'react';
import { Link } from 'react-router-dom';
import insta from '../images/insta.png';
import logo from '../images/logo.png';
import what from '../images/what.png'

function Footer() {
    return (
        <div className='div-footer'>
            
                <p className='p-footer'>&copy; contactez-nous 699 99 99 99 </p>
                <div className='medias'>
                    <Link to='#'><img src={logo} alt='Facebook' className='img-icon'/></Link>
                    <Link to='#'><img src={what} alt='whatsapp' className='img-icon'/></Link>
                    <Link to='#'><img src={insta} alt='instagram' className='img-icon'/></Link>
                </div>

            
        </div>
    )
}

export default Footer;