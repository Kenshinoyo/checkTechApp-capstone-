import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../Components/NavBar';
// import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';
import Results from '../Components/Results';

import Home from './Home';
import Computers from './Computers';

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

      </Switch>

      <Footer />
      
    </div >
  );
}

export default App;
