import React,{useState, useEffect} from "react";
import './App.scss'
import {cleanup} from "@testing-library/react";

function App() {
  
  const [frame, setFrame] = useState(0)
  let intervalId = null;
  console.log(frame)
  
  useEffect(() => {

intervalId = setInterval(() => {
  if (frame < 299) {
    setFrame(frame + 1)
  }
}, 1000/15)

return() => window.clearInterval(intervalId)

  }, [frame]);
  

  
  return (
  <div className="orzech">
    <img src={process.env.PUBLIC_URL + `/images/ORZECH_KLATKI/JURASIC_BAKADELIO_${frame.toString().padStart(5,'0')}.png`} alt=""/>
  </div>
  );
}

export default App;
