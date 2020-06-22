import React from 'react';
import './App.css';
import Nav from './components/navbar/nav'
import Search from './components/search/search'
import Prod from './components/displaysongs/displaysongs'
import {BrowserRouter , Route } from 'react-router-dom'
import Detailedview from './components/detailedview/detailedview'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav /> 
      <Route path="/" exact component={Search}></Route>
      
      <Route path="/songs" exact component={Prod} ></Route>
      <Route path="/songs/:id" exact component={Detailedview} ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
