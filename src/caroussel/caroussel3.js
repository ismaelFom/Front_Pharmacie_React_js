import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import "../style/Corrousel.css";
import antibiotique1 from "./img/antibiotique1.png";
import antibiotique2 from "./img/antibiotique2.png";
import antibiotique3 from "./img/antibiotique3.png";


function CarrouselTrois() {

  return (

    <div className="globale">
      <div className="car">

        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
          <div className="sleder">
            <img src={antibiotique1} alt="antibiotique1" />
          </div>

          <div className="sleder">
            <img src={antibiotique2} alt="antibiotique2" />
          </div>

          <div className="sleder">
            <img src={antibiotique3} alt="antibiotique3" />
          </div>
        </Carousel>

      </div>
      <div className="box">

                <h1>Les antibiotiques<br /></h1>

                <p> Grosse Description
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</h3></p>

            </div>

    </div>
  )


}


export default CarrouselTrois;