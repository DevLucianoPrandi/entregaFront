import React, {useState} from 'react';
import {Document, Page,} from 'react-pdf/dist/esm/entry.webpack';
import Libro from '../../assets/Lenguas.pdf';
import Container from 'react-bootstrap/Container';
import './niveles.css'

function Niveles() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSucess({numPages}) {
      setNumPages(numPages);
    }
    return (
      <Container fluid className='contenedor w-100 p-4'>
        <center>
                <Document file={Libro} onLoadSuccess={onDocumentLoadSucess}>
                {Array.from(
                        new Array(numPages),
                    (el,index) => (
                        <Page
                        key={`page_${index+1}`}
                        pageNumber={index+1}
                        />
                    )
                    )}
                    </Document>
        </center>
      </Container>
    );
  }
  export default Niveles