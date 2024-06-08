import './css/Outcomes.css';
import React, { useState } from "react";
function App({data}) {
    return (
        
        <div className='Paragraph'>
            <h3>ACTIVITIES ANALYSIS</h3>

            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' className='bg-green' readOnly disabled value={data.name}/> <br />
            <label htmlFor="age">Age:</label>
            <input type="number" id='age' name='age' className='bg-green' readOnly disabled value={data.age}/> <br />
            <label htmlFor="height">Height:</label>
            <input type="number" id='height' name='height' className='bg-green' readOnly disabled value={data.height}/> <br/>
            <label htmlFor="weight">Weight:</label>
            <input type="number" id='weight' name='weight' className='bg-green' readOnly disabled value={data.weight}/> <br />

            <label htmlFor="steps">Total steps taken: </label>
            <input type="text" id='steps' name='steps' value={(data?data.Steps:0)} readOnly/><br />
            <label htmlFor="distance">Total distance travelled:</label>
            <input type="text" id='distance' name='distance' value={(data?data.Distance+" km":0)} readOnly /><br />
            <label htmlFor="calories">Total calories burnt: </label>
            <input type="text" id='calories' name='calories' value={(data?data.CalorieBurnt+" kcal":0)} readOnly/> <br />
            <label htmlFor="steps">Duration: </label>
            <input type="text" id='steps' name='steps' value={(data?(data.Duration)/60 + " min":0)} readOnly/><br />
        </div>
    );
}
export default App;