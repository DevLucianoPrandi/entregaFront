import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import './contenidoh.js'
import Img1 from "../../assets/img/imagen1.jpg"
import Img2 from "../../assets/img/imagen2.jpg"
import Img3 from "../../assets/img/imagen3.jpg"
import Img4 from "../../assets/img/imagen4.jpg"
import Contenidoh from './contenidoh.js';


function Home() {
  return (
    <><Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel><Contenidoh /></>
  );
}

export default Home;