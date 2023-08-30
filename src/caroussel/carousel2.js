import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import "../style/Corrousel.css";
import comprimés1 from "./img/comprimés1.png";
import comprimés2 from "./img/comprimés2.png";
import comprimés3 from "./img/comprimés3.png";
import comprimés4 from "./img/comprimés4.png";


function CarrouselDeux() {

    return (

        <div className="globale">
            <div className="car">

                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                    <div className="sleder">
                        <img src={comprimés1} alt="comprimés1" />
                    </div>

                    <div className="sleder">
                        <img src={comprimés2} alt="comprimés2" />
                    </div>

                    <div className="sleder">
                        <img src={comprimés3} alt="comprimés3" />
                    </div>

                    <div className="sleder">
                        <img src={comprimés4} alt="comprimés4" />
                    </div>
                </Carousel>

            </div>
            <div className="box">

                <h1>Les Comprimés<br /></h1>

                <p> Grosse Description
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</h3></p>

            </div>

        </div>
    )
}


export default CarrouselDeux;