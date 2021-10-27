import React from 'react';
import { Switch, Route } from 'react-router-dom';


import '../App.css'

const App = () => {
  
  return (
    <div id="app" > 
    
     <SearchBar />
     <NavBar />
      

      <Switch> 
        <Route exact path="/"> 
          <Home />
        </Route>
        
        <Route exact path="/ctapi/allcomputers"> 
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
