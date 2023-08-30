import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Style.css';
import logpharma from './logpharma.png';
import Clinton from './login';
import SearchBar from './searchbar';
// import Search from '../style/search';

function BarDeNavigation() {


 
    return (
    <>
        <nav>
            <span className="navbar-brand"><img src={logpharma} alt="Logo de la pharmacie" className="photo" /><h1>HOPITAL Biyem-Assi</h1></span>

            <div className="Onglets">
                <Link className="classe" to="/"><p>Home</p></Link>
                <Link className="classe" to="/nosMedicamen"><p>Nos médicaments</p></Link>
                <Link className="classe" to="/evenemen"><p>Nos évènements</p></Link>
                <Link className="classe" to="/aproposDeN"><p>A propos de nous</p></Link>
                {/* <Search /> */}
                <SearchBar />
                <div className="div-imagesHome"><Clinton /></div>

            </div>

        </nav>
    </>
    )

}

export default BarDeNavigation;