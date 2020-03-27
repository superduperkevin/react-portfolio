import React from 'react';
import './style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
// import Header2 from './components/Header2';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';


function App() {
  return (
      <BrowserRouter> 
      <Header/>     
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
