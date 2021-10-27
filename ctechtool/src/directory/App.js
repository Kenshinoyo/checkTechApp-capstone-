import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../Components/NavBar';
// import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';
import Results from '../Components/Results';

import Home from './Home';
import Computers from './Computers';

//CRUD Components
import AddComputer from '../Components/AddComputer';
import UpdateComputer from '../Components/UpdateComputer';
import DeleteComputer from '../Components/DeleteComputer';
import ViewComputer from '../Components/ViewComputer';

import '../App.css';


const App = () => {
  
  return (
    <div id="app" > 
    
     {/* <SearchBar /> */}
     <NavBar />
      

      <Switch> 
        <Route exact path="/"> 
          <Home />
        </Route>
        
        <Route exact path="/allcomputers"> 
          <Computers />
        </Route>

        <Route exact path="/results"> 
          <Results />
        </Route>

        <Route exact path="/add-computer" component = {AddComputer}/> 
        <Route exact path="/update-computer/:id" component = {UpdateComputer}/> 
        <Route exact path="/delete-computer/:id" component = {DeleteComputer}/>
        <Route exact path="/view-computer/:id" component = {ViewComputer}/>

      </Switch>

      <Footer />
      
    </div >
  );
}

export default App;
