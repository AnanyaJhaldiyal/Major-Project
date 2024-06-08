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
import axios from "axios";

function App() {
  const [color] = useState("#282828	")

  useEffect(()=>{document.body.style.backgroundColor= color },[color] )

   const [selectedFile, setSelectedFile] = useState(null);
   const [data,setData] = useState()
   const [name,setName] = useState()
   const [height,setHeight] = useState()
   const [weight, setWeight] = useState()
   const [age, setAge] = useState()
   const [loading, setLoading] = useState(false)

   const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
   };
   

   const handleUpload = async()=>{
    setLoading(true)
    try{
      const formData = new FormData()
      formData.append('weight',weight)
      formData.append('name',name)
      formData.append('height',height)
      formData.append('age',age)
      formData.append('activityRawFile',selectedFile);
      const response = await axios.post("http://127.0.0.1:5000/api/analysis",formData, {
        headers: {
          'Content-Type':"multipart/form-data"
        }
      })
      if(response.status === 200){
        console.log(response)
        setData(response.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
   }

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
    {/* <TextAnalysis/> */}
    <div className='Texts'>
      <h2>ENTER YOUR DETAILS</h2>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id='name' name='name' onChange={(e)=>setName(e.target.value)}/><br />
      <label htmlFor="age">Enter your age:</label>
      <input type="number" id='age' name='age' onChange={(e)=>setAge(e.target.value)}/><br />
      <label htmlFor="height">Enter your height:</label>
      <input type="number" id='height' name='height' onChange={(e)=>setHeight(e.target.value)}/> 
      <select name="height" id="height">
          <option value="cm">cm</option>
          <option value="inch">inch</option>
      </select> <br />
      <label htmlFor="weight">Enter your weight:</label>
      <input type="number" id='weight' name='weight' onChange={(e)=>setWeight(e.target.value)}/> 
      <select name="w1" id="w1">
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
      </select><br />
      {/* <input type="submit" name="submit" id="submit" /> */}
      {/* <input type="reset" name="reset" id="reset" /><br /> */}
      <h2 className='heading'>UPLOAD YOUR REPORT</h2>
      <input type="file" onChange={handleFileChange} />
      <button className='button' onClick={handleUpload}>Submit</button>
      {loading && <h1 className='textwhite'>Calculating...</h1>}
    </div>
    {data &&<PieChart analysisData={data}/>}
    {data &&<Outcomes data={data}/> }
    </>

  );
}
export default App;
