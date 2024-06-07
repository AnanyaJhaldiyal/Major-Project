import './css/Outcomes.css';
import React, { useState } from "react";
function App() {
    return (
        
        <div className='Paragraph'>
            <h3>ACTIVITIES</h3>
            <label htmlFor="steps">Total steps taken: </label>
            <input type="text" id='steps' name='steps' /><br />
            <label htmlFor="distance">Total distance travelled:</label>
            <input type="text" id='distance' name='distance'  /><br />
            <label htmlFor="calories">Total calories burnt: </label>
            <input type="text" id='calories' name='calories' /> <br />
        </div>
    );
}
export default App;