import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import "../style/Corrousel.css";
import injectable1 from "./img/injectable1.png";
import injectable2 from "./img/injectable2.png";
import injectable3 from "./img/antibiotique3.png";


function CarrouselQuatre() {

    return (

        <div className="globale">
            <div className="car">

                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                    <div className="sleder">
                        <img src={injectable1} alt="injectable1" />
                    </div>

                    <div className="sleder">
                        <img src={injectable2} alt="injectable2" />
                    </div>

                    <div className="sleder">
                        <img src={injectable3} alt="injectable3" />
                    </div>
                </Carousel>

            </div>
            <div className="box">

                <h1>Les injectables<br /></h1>

                <p> Grosse Description
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</h3></p>

            </div>

        </div>
    )

}


export default CarrouselQuatre;