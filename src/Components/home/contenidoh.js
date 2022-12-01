import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bienvenida from "../../assets/img/bienvenida.jpg"

export const Contenidoh = () => {
    return (
        <div className="contenido p-4">
            <Row className='d-flex justify-content-center'>
                <Col xs={12} md={6}>
                    <img className="rounded fluid w-100 shadow p-3 my-2 bg-white rounded" src={Bienvenida} alt="Imagen bienvenida"></img>
                </Col>
                <Col xs={12} md={6}>
                    <div className='presentacion w-100'>
                    <h1>Bienvenid@ a <span style={{color:'orchid'}}>Inter</span><span style={{color:'darkmagenta'}}>Lingua</span></h1>
                    <h5>¡Aprender un idioma nunca fue tan cómodo!</h5>
                    <p className='texto mt-5'>La propuesta de InterLingua es muy sencilla: Aprendé idiomas dónde estés y cuándo más cómodo te resulte. Tenemos planes de estudio que se adaptan a necesidades y tiempos de aprendizaje específicos y te permitirán avanzar en el idioma que querés aprender al ritmo que vaya en harmonía con tus actividades.</p>
                    <p>La flexibilidad horaria es lo que nos caracteriza.</p>
                    <h6>Lo importante para nosotros es que disfrutes el aprendizaje.</h6>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Contenidoh