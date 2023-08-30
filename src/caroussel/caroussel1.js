import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import "../style/Corrousel.css";
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"


 const CarrouselUn = () => {

  return (

    <div className="globale">

      <div className="car">

        <Carousel className="caro"  autoPlay={true} infiniteLoop={true} showThumbs={false} >
          <div className="sleder">
            <img src={img1} alt="img1" />
          </div>

          <div className="sleder">
            <img src={img2} alt="img2" />
          </div>

          <div className="sleder">
            <img src={img3} alt="img3" />
          </div>

        </Carousel>

      </div>

      <div className="box">

        <h1>Les vaccins<br/></h1>
        
         <p> Grosse Description
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br /> ut aliquip ex ea commodo consequat.</h3></p>
        
      </div>

    </div>
  )


}


export default CarrouselUn;