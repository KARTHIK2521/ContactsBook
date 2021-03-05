import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Contacts from './Component/Contacts';
import NotFound from './pages/NotFound'
import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUsers';
import View from './users/View';


const  App = () => {
  return (
    <>
    <Router>
     <div className="row">
       <div className="col-md-12">
     

        <Navbar/>
        <Contacts/>

        <Switch>
         <Route  exact path='/' component={Home}/>
         <Route  exact path='/contacts' component={Contacts}/>
         <Route  exact path='/setting' component={Setting}/>
         <Route  exact path='/users/add' component={AddUsers}/>
         <Route  exact path='/users/edit/:id' component={EditUsers}/>
         <Route  exact path='/users/:id' component={View}/>

         <Route  component={NotFound}/>
        </Switch>
    
     </div>
     </div>
     </Router>
    </>
  )
}

export default App;

