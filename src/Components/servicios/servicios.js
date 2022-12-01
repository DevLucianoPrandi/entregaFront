import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Extensivos from './extensivos.js';
import Intensivos from './intensivos.js';
import Particulares from './particulares.js';
import Conversacion from './conversacion.js';
import Literatura from './literatura.js';
import'./servicios.css';

function Servicios() {
  const [key, setKey] = useState('extensivos');

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)}>

      <Tab eventKey="extensivos" title="Cursos extensivos">
        <Extensivos />
      </Tab>
      <Tab eventKey="intensivos" title="Cursos intensivos">
        <Intensivos />
      </Tab>
      <Tab eventKey="particulares" title="Clases particulares">
        <Particulares />
      </Tab>
      <Tab eventKey="conversacion" title="Talleres de conversación">
        <Conversacion />
      </Tab>
      <Tab eventKey="literatura" title="Literatura en grupo">
        <Literatura />
      </Tab>
    </Tabs>
  );
}

export default Servicios;