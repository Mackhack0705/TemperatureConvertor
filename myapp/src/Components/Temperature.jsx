import React, { useState } from 'react'

const Temperature = () => {
    // const [Data, setData] = useState({
    // Celcius:"",
    // Farenhiet:""
    // });
    // const HandleChange = (e) => {
    //     const { name,value }  = e.target;
    //     setData((preData) => ({
    //       ...preData,
    //       [name]: value,
    //     }));
    // }

    const [Celcius,setCelcius] = useState("0");
    const [Farenhiet,setFarenhiet] = useState("32");
    const HandleCelcius = (e) => {
        const value  = e.target.value;
        setCelcius(value);
        setFarenhiet(ctof(value));
    }
    const HandleFarenhiet = (e) => {
        const value  = e.target.value;
        setFarenhiet(value);
        setCelcius(ftoc(value));
    }

    const ftoc = (Farenhiet) =>{
      return ((Farenhiet - 32) * 5) / 9;
    }

    const ctof = (Celcius) => {
      return ((Celcius * 9) / 5) + 32;
    }

    // const HandleSubmit = (e) => {
    //     e.preventDefault();
    //     // setFullData(Data);
    //   // console.log(Data);
    // }
  return (
    <div>
      <div>Temperature Converter</div>

      {/* <form onSubmit={HandleSubmit}> */}
      <div>
        <label>Celcius: </label>
        <input type="text" name='Celcius' value={Celcius} onChange={HandleCelcius}/> 
        {/* value={Data.Celcius} */}
      </div>
      <div>
        <label>Farenhiet: </label>
        <input type="text" name='Farenhiet' value={Farenhiet} onChange={HandleFarenhiet}/>
        {/* value={Data.Farenhiet} */}
      </div>
      {/* <button type='submit'>Submit</button> */}
      {/* </form> */}
    </div>
  )
}

export default Temperature
