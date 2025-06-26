//import logo from './logo.svg';
import { useState } from 'react';
import './Appa.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react'
{/*import { 
     BrowserRouter as Router,
     Routes, // instead of switch,
     Route,
     Link
} from "react-router-dom";*/}



let name = "harry";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("alert","success");

  const handleAlert =(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(() => {
          setAlert(null);
       }, 1000);
  }

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#141d61';
      handleAlert(" Dark mode turned on","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      handleAlert(" Dark mode turned off","success");
    }

  }

  return (
          <>
         
              <Navbar title = "AravUtils" abouttext = "About Us" mode = {mode} toggleMode = {toggleMode}/>
              <Alert alert = {alert}/>
              <div className="container my-3">
                          <TextForm heading = 'Enter the text to analyze below' mode = {mode} handleAlert = {handleAlert}/>
              </div>
              
          </>
  );
}

export default App;
