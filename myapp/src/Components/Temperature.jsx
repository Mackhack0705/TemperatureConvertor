import React, { useState } from 'react'

const Temperature = () => {
    const [Data, setData] = useState('');
    const [FullData, setFullData] = useState('');
    const HandleChange = (e) => {
        const value  = e.target.value;
        setData(value);
        // console.log(value);
    }

    const HandleSubmit = () => {
        setFullData(Data);
    }
  return (
    <div>
      <div>Temperature Converter</div>
      <div>
        <label>Celcius: </label>
        <input type="text" onChange={HandleChange}/>
      </div>
      <div>
        <label>Farenhiet: </label>
        <input type="text" />
      </div>
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Temperature
