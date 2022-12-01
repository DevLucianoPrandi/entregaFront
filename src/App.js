import React from 'react';
import Barra from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Home from "./Components/home/home";
import Servicios from "./Components/servicios/servicios";
import Idiomas from './Components/idiomas/idiomas';
import Niveles from "./Components/niveles/niveles";
import Calendario from './Components/calendario/calendario';
import Contacto from "./Components/contacto/contacto";
import Reserva from "./Components/reserva/reserva";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes, BrowserRouter} from "react-router-dom";



function App () {
  return (
    <div className="main">
<BrowserRouter>
<Barra />
<Routes>
<Route path="/" element={<Home />} />
<Route index element={<Home />} />
<Route path="servicios" element= {<Servicios />} />
<Route path="idiomas" element= {<Idiomas />} />
<Route path="niveles" element= {<Niveles />} />
<Route path="calendario" element= {<Calendario />} />
<Route path="contacto" element= {<Contacto />} />
<Route path="reserva" element= {<Reserva />} />
</Routes>
<Footer />

</BrowserRouter>
    </div>
    )
}
export default App;