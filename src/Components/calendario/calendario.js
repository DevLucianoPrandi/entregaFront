import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Inscripcion from './inscripcion.js';
import Exten from './exten.js';
import Inten from './inten.js';
import Conver from './conver.js';
import Liter from './liter.js';
import Container from 'react-bootstrap/Container';
import './calendario.css'


function Calendario() {
  return (
    <Container fluid className='contenedor w-100 p-4'>
    <Tab.Container id="calendarioAcademico" defaultActiveKey="#inscripcion" >
      <Row>
        <Col sm={4}>
          <ListGroup className='shadow'>
            <ListGroup.Item action href="#inscripcion">
              Inscripción
            </ListGroup.Item>
            <ListGroup.Item action href="#extensivos">
              Cursos extensivos
            </ListGroup.Item>
            <ListGroup.Item action href="#intensivos">
              Cursos intensivos
            </ListGroup.Item>
            <ListGroup.Item action href="#conversacion">
              Taller de conversación
            </ListGroup.Item>
            <ListGroup.Item action href="#literatura">
              Taller de literatura
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#inscripcion">
              <Inscripcion />
            </Tab.Pane>
            <Tab.Pane eventKey="#extensivos">
              <Exten />
            </Tab.Pane>
            <Tab.Pane eventKey="#intensivos">
              <Inten />
            </Tab.Pane>
            <Tab.Pane eventKey="#conversacion">
              <Conver />
            </Tab.Pane>
            <Tab.Pane eventKey="#literatura">
              <Liter />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  );
}

export default Calendario;