
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Nav from './component/Nav';
import Home from './component/Home';


const App = ()  => { 
  return(
    <>
    <Nav />
  <Router>
    <div>
        
        <Route exact path="/" component={Home} />
      
    </div>
  </Router>
  
  </>
);
}

export  default App;