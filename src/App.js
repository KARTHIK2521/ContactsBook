import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Contacts from './Component/Contacts';


const  App = () => {
  return (
    <>
     
     <Router>

        <Navbar/>
         <Contacts/>
        <Switch>
          
          <Route path='/'  exact component={Home}/>
          <Route path='/setting'  component={Setting}/>
         
        </Switch>
     </Router>
      
    </>
  )
}

export default App;

