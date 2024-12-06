
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'; //you have to import usestate  before using it
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light'); //whether a dark mode is enabled or not
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
   setAlert({
     msg: message,
     type: type
   })
     setTimeout(() => {
       setAlert(null);
     }, 1500);

   }
   const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('success')
   }

  const toggleMode = (cls) =>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)     //it helps to chnage the backgroundColr using same like add.avent.Listener
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils -Dark Mode';             //it is a JS func which changes the title when we enable darkmode
   // setInterval(() => {
    //  document.title = 'TextUtils is amazing';
   // }, 2000);                                          //This all trick is used to advertise the app or software
    //setInterval(() => {
     // document.title = 'Install textUtils Now';
   // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils -Light Mode';            //it changes the title when we enable Lightmode
  } 
   }

  return (
   <>
   <Router>
   <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>  {/*first we need to make func to write props.mode*/}
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
     {/*users -->component 1 
     //to render home we have to go through users that's we use exact before path
     usere/home --> component 2
      */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces"  mode={mode}/>

          </Route>
        </Switch>
        </div>
        </Router>
 { /* <About/>*/}
  
   
   </>
  );
}

export default App;
