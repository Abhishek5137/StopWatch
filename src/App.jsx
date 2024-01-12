import { useState,useRef } from 'react'

import './App.css'

function App() {
  const [startTime, setStartTime] = useState(null)
  const [now,setNow ]= useState(null)
  const intervalRef =useRef(null)

  function handleStart(){
    // start counting 
    setStartTime(Date.now());
    setNow(Date.now());


    clearInterval(intervalRef.current);
    intervalRef.current =setInterval(()=>{
       // update the current time every 10 ms
       setNow(Date.now());
    },10);

  }

   function handleStop(){
    clearInterval(intervalRef.current);

   }

   let secondPassed =0;
   if(startTime!=null && now !=null){
    secondPassed=(now-startTime)/1000;
   }

  return (
    <>
    <div className='container'>
      <h1>Time Passed :{secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      </div>
    </>
  )
}

export default App
