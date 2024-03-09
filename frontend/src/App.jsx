
import React from 'react';
import Home from './home';
import {BrowserRouter} from "react-router-dom" 

//import { BrowserRouter as Router , Route ,Switch, BrowserRouter} from 'react-router-dom';

function App()  {
 
  return (
    <div>
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;

