//main file app.js
import { useState, useEffect } from 'react';
import './App.css';
import './components/LiveClockUpdate';
import UploadFiles from  './components/UploadFiles';
import Outcomes from './components/Outcomes';
import PieChart from  './components/PieChart';
import Navbar2 from  './components/Navbar2';
import TextAnalysis from  './components/TextAnalysis';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LiveClockUpdate from './components/LiveClockUpdate';

function App() {
  const [color] = useState("#282828	")
  useEffect(()=>{document.body.style.backgroundColor= color },[color] )
  return (
  <>
  <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <h2 className='Title'>FITNESS TRACKER</h2>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <LiveClockUpdate/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar2/>
    <TextAnalysis/>
    <UploadFiles/>
    <Outcomes/>
    <PieChart/>
    </>

  );
}
export default App;
