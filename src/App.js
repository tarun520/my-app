import './App.css';
import Navbar from './components/Navbar';
import Area from './components/Area';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light')
  const togglemode = ()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor('black');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor('white');
    }
  }
  return (
    <>
    <Navbar title="TextConverter" mode={mode} togglemode={togglemode}/>
    <div class="container">
    <Area heading="Enter your text here"/>
    </div>
    
    </>
  );
}

export default App;
