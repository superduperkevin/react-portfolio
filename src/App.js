import React from 'react';
import './style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';
import Footer from './components/Footer';

//TODO: - Sticky navbar - Project on hover - navbar indicator -responsive - redesign about page
//DONE: - Footer - pdf download - 

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
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
