import React from 'react';
import './StyleComp.css';
import Medicaments from './medicaments';


const AssossiationMedocs = () => {
    return (
        <div className='container-fluid'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 bg1'>
                        <h1>Médicaments</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 bg2'>
                        <h1>Médicaments</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 bg'>
                        <h1>Médicaments</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Medicaments />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssossiationMedocs;
