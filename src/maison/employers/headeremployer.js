import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../firstScreens/logout';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../style/Styles.css'

const HeaderEmployer = () => {
    return (
        <header>
            <nav className='HeaderEmployer'>
                <div className='HeaderEmployerUl'>
                        <div className='drop'>
                            <Nav>
                                <NavDropdown className='classes' id="nav-dropdown-dark-example" title="AFFICHER">
                                    <Link to="/categorie">Catégories</Link>
                                    <NavDropdown.Divider />
                                    <Link to="/medicament">Médicaments</Link>
                                </NavDropdown>
                            </Nav>

                            <Nav>
                                <NavDropdown className='classes' id="nav-dropdown-dark-example" title="AJOUTERr">
                                    <Link to="/ajoutercat">Catégories</Link>
                                    <NavDropdown.Divider />
                                    <Link to="/addMedicament">Médicaments</Link>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                            </Nav>
                            <Link to="/inventaire" className='classes' id='inventaire'><h5>Inventaire</h5></Link>
                    </div>
                    <div className='drop+'><Logout /></div>
                </div>
            </nav>
        </header>

    )
}
export default HeaderEmployer;