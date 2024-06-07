//taking inputs from user
import './css/TextAnalysis.css';
import React, { useState } from "react";
function App() {
    return (
        
        <div className='Texts'>
            <h2>ENTER YOUR DETAILS</h2>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" id='name' name='name' /><br />
            <label htmlFor="age">Enter your age:</label>
            <input type="number" id='age' name='age' /><br />
            <label htmlFor="height">Enter your height:</label>
            <input type="number" id='height' name='height' /> 
            <select name="height" id="height">
  <option value="cm">cm</option>
  <option value="inch">inch</option>
</select> <br />
            <label htmlFor="weight">Enter your weight:</label>
            <input type="number" id='weight' name='weight' /> 
            <select name="w1" id="w1">
  <option value="kgs">kgs</option>
  <option value="lbs">lbs</option>
</select><br />
            <input type="submit" name="submit" id="submit" />
            <input type="reset" name="reset" id="reset" /><br />
        </div>
    );
}
export default App;