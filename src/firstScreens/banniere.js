import React from 'react';
// import { Link } from 'react-router-dom';
import '../style/Style.css';
// import p2 from '../images/p2.jpg';
// import p3 from '../images/p3.jpg';
// import p6 from '../images/p6.jpg';
import CarrouselUn from '../caroussel/caroussel1';
import CarrouselDeux from '../caroussel/carousel2';
import CarrouselTrois from '../caroussel/caroussel3';
import CarrouselQuatre from '../caroussel/caroussel4';



const Banniere = () => {

    return (
        <div className="espace">

            <div className="banniere" id="banniere">
                <div className="contenu">
                    <h2>LA PHARMACIE DE CHEZ VOUS</h2><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</p>

                </div>
            </div>
            <div className="surlaligne" >
                <h6>Home</h6>
                <h6>||</h6>
                <h6>Nos médicaments</h6>
                <h6>||</h6>
                <h6>Nos évènements</h6>
                <h6>||</h6>
                <h6>A propos de nous</h6>
            </div>
            <div>
            </div>
{/* 
            <div className="antibio"><h3>Les Antibiotiques</h3></div>

            
            <section className="main">


                <div className="objets">
                    <div className="objet">
                        <img src={p2} alt='image1' />
                        <div className="objet-header">
                            <h4 className='title'>Comprimé 2</h4>
                            <h4 className='title'>Comprimé 2</h4>
                        </div>
                    </div>

                    <div className="objet">
                        <img src={p3} alt='image2' />
                        <div className="objet-header">
                            <h4 className='title'>Comprimé 4</h4>
                            <h4 className='title'>Comprimé 4</h4>
                        </div>
                    </div>

                    <div className="objet">
                        <img src={p6} alt='image3' />
                        <div className="objet-header">
                            <h4 className='title'>Comprimé 8</h4>
                            <h4 className='title'>Comprimé 8</h4>
                        </div>
                    </div>
                </div>


            </section> */}

            <div className="anti-in"><h3>Les Vaccins</h3></div>
            <section className="main">
                <div className="objet-header">
                    <CarrouselUn />
                </div>
            </section>

            <div className="anti-in"><h3>Les Comprimés</h3></div>

            <section className="main">
                <div className="objet-header">
                    <CarrouselDeux />
                </div>
            </section>

            <div className="anti-in"><h3>Les Antibiotiques</h3></div>

            <section className="main">
                <div className="objet-header">
                    <CarrouselTrois/>
                </div>
            </section>


            <div className="anti-in"><h3>Les Solutés injectables</h3></div>

            <section className="main">
                <div className="objet-header">
                    <CarrouselQuatre/>
                </div>
            </section>
{/* 
            <section className="mainplus">


                <div className="objetsplus1">
                    <h3>ICI JE VAIS METTRE DU TEXTE</h3><br /><br />
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</h3>
                </div>

                <div className="objetsplus2">
                    <div className="objet">
                        <h3>ICI CA SERA UNE BELLE IMAGE DE MEDICAMENTS</h3><br /><br />
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</h3>
                    </div>
                </div>

            </section> */}

        </div>
    )
}

export default Banniere;