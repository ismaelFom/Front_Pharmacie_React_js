import React, { useState } from 'react';
import Logout from '../../firstScreens/logout';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../style/Styles.css';
import { Button } from '@mui/material';

const HeaderAdmin = () => {
    const [showInfo, setShowInfo] = useState(false);

    function Btntoggle() {
        setShowInfo(!showInfo);
    }


    // const toggleInfo = (e) => {
    //     console.log(e)
    //     // toggle(open)
    // <p>Voici l'information à afficher.</p>
    // }

    return (
        <nav>
            {/* <header> </header> className='HeaderAdmin' */}
            <Button onClick={Btntoggle} className='btnAdmin'>Administrateur</Button>

            {showInfo && <p>
                <div className='laDivDuBtn'>
                    <NavDropdown className='classes' id="nav-dropdown-dark-example" title="AFFICHER">
                        <Link className='liens' to="/element/admin/categorie">Catégories</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/medicament">Médicaments</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/readUser">Utilisateurs</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/lot">Lots</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/maladies">Maladies</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/pharmacies">Pharmacies</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/showEmployers">Employers</Link>
                    </NavDropdown>

                    <NavDropdown className='classes' id="nav-dropdown-dark-example" title="AJOUTER">
                        <Link className='liens' to="/element/admin/ajoutercat">Catégories</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/addMedicament">Médicaments</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/addUser">Utilisateurs</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/addEmployer">Employer</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/addLots">Lots</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/addMaladies">Maladies</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/addPharmacies">Pharmacies</Link>
                    </NavDropdown>
{/* 
                    <NavDropdown className='classes' id="nav-dropdown-dark-example" title="Modifier">
                        <Link className='liens' to="/element/admin/updateMat/:Cid">UpDateUCatégories</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/updateMedicament/:Meid">UpDateUMédicaments</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/updateUser/:Uid">UpDateUtilisateurs</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/updateLot/:Lid">UpDateULots</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/updateMal/:Mid">UpDateMaladie</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/updatePharmacies/:Pid">updatePharmacies</Link>
                        <NavDropdown.Divider />
                        <Link className='liens' to="/element/admin/updateEmployer/:Eid">UpdateEmployer</Link>
                    </NavDropdown>

                    <Link to="/element/admin/lot" className='classes' id='inventaire'><h5>Lot</h5></Link> */}

                    <Link to="/element/employer/supression" className='classes' id='inventaire'><h5>Suppression</h5></Link>
                    <div className='drop+'><Logout /></div>


                </div>
            </p>}

            <div className='HeaderAdminUl'>

                <div className='drop'>
                    <Nav>
                        <NavDropdown className='classes' id="nav-dropdown-dark-example" title="AFFICHER">
                            <Link className='liens' to="/element/admin/categorie">Catégories</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/medicament">Médicaments</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/readUser">Utilisateurs</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/lot">Lots</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/maladies">Maladies</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/pharmacies">Pharmacies</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/showEmployers">Employers</Link>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <NavDropdown className='classes' id="nav-dropdown-dark-example" title="AJOUTER">
                            <Link className='liens' to="/element/admin/ajoutercat">Catégories</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/addMedicament">Médicaments</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/addUser">Utilisateurs</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/addEmployer">Employer</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/addLots">Lots</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/addMaladies">Maladies</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/addPharmacies">Pharmacies</Link>
                        </NavDropdown>
                    </Nav>

                    {/* <Nav>
                        <NavDropdown className='classes' id="nav-dropdown-dark-example" title="Modifier">
                            <Link className='liens' to="/element/admin/updateMat/:Cid">UpDateUCatégories</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/updateMedicament/:Meid">UpDateUMédicaments</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/updateUser/:Uid">UpDateUtilisateurs</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/updateLot/:Lid">UpDateULots</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/updateMal/:Mid">UpDateMaladie</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/updatePharmacies/:Pid">updatePharmacies</Link>
                            <NavDropdown.Divider />
                            <Link className='liens' to="/element/admin/updateEmployer/:Eid">UpdateEmployer</Link>
                        </NavDropdown>
                    </Nav>
                    <Link to="/element/admin/lot" className='classes' id='inventaire'><h5>Lot</h5></Link> */}

                    <Link to="/element/employer/supression" className='classes' id='inventaire'><h5>Suppression</h5></Link>
                </div>

                <div className='drop+'><Logout /></div>
            </div>
        </nav>
    )
}
export default HeaderAdmin;