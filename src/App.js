//import logo from './logo.svg';
import { useState } from 'react';
import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react'
import { 
     BrowserRouter as Router,
     Routes, // instead of switch,
     Route,
     Link
} from "react-router-dom";



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
              <Router>
              <Navbar title = "AravUtils" abouttext = "About Us" mode = {mode} toggleMode = {toggleMode}/>
              <Alert alert = {alert}/>
              <div className="container my-3">
                  
                    <Routes>
                          {/*/users --> Component 1
                          /users/home--> --> Component2*/}
                          <Route path="/" exact element={<TextForm heading = 'Enter the text to analyze below' mode = {mode} handleAlert = {handleAlert}/>} />
                          <Route path="/about" exact element={<About />} />
                    </Routes>
                  
                  

              </div>
              </Router>
          </>
  );
}

export default App;
