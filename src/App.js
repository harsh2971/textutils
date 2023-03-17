//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './Alert'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



function App() {

  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },3000)

  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
    }
  }

  return (
    <>
    <Navbar title="Textutils2" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}

    />
    <div className="container my-3">
     <Textform heading="Enter text here" showAlert={showAlert} mode={mode}/> 
    {/* <About/> */}
    </div>
    
    </>
   
  );
}

export default App;
