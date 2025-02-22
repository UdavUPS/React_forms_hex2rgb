import { useState, useRef } from 'react';
/* import reactLogo from '../../assets/react.svg'
import viteLogo from './vite.svg' */
import './App.css';
import { validateHEX, hexToDec } from './functionsForApp.ts'

function App() {
  const textRef: any = useRef();
  const labtRef: any = useRef();
  const [boxBGColor, setBoxBGColor] = useState<string>();
  const [labBGColor, setLabBGColor] = useState<string>();
  const [labColor, setLabColor] = useState<string>('black');

  



  function manualInput (e: React.ChangeEvent<HTMLInputElement>) {

    
    const { value } = e.target;
    let lastValue: any;
    lastValue = value.substring(0, value.length - 1);;


    if (value.length < 8) {
      if (value[0] !== "#") {
        textRef.current.value = "#" + value;
      }
    } else {
      if (value.length >= 7) {
        if (validateHEX(value)) {
          textRef.current.value = lastValue;
          let ch1: any = hexToDec(value[1] + value[2]);
          let ch2: any = hexToDec(value[3] + value[4]);
          let ch3: any = hexToDec(value[5] + value[6]);
          labtRef.current.innerHTML = `rgb(${ch1}, ${ch2}, ${ch3})`;
          setBoxBGColor(`rgb(${ch1}, ${ch2}, ${ch3})`);
          setLabBGColor(`rgb(${ch1 - 15}, ${ch2 - 15}, ${ch3 - 15})`);
          setLabColor('white');
        } else {
          textRef.current.value = '#привет';
          labtRef.current.innerHTML = 'Ошибка!';
          setBoxBGColor('rgb(255, 00, 00)');
          setLabBGColor('rgb(80, 3, 12)');     
          setLabColor('white');
        }
        
        
      }
    }
  }


  const styleForBox = {
    section: {
        backgroundColor: boxBGColor,
    }
  }

  const colorsForLab = {
    section: {
        backgroundColor: labBGColor,
        color: labColor
    }
  }
  
  

  return (
    <div className="box" style={styleForBox.section}>
      <input type="text" id="colorNum" className="box__input" onChange={manualInput} ref={textRef} />
      <div className="box__substrate" style={colorsForLab.section}>
        <label htmlFor="colorNum" className="box__substrate__label"  ref={labtRef}>rgb(__, __, __)</label>
      </div>
    </div>
  )
}

export default App
