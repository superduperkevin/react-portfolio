import React from 'react';
import './style/App.css';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Header from './components/Header';
import Header2 from './components/Header2';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';


function App() {
  return (
    <div className="container">

      <BrowserRouter>      
      <Switch>
        <Route exact path="/" render={() => 
          <div>
            <Header />
            <Home />
          </div> 
        } />
        <Route exact path="/portfolio" render={() => 
          <div>
            <Header2/>
            <Portfolio/>
          </div>
        }/>
        <Route path="/about" component={About} />
        <Route exact path="/experience" render={() => 
          <div>
            <Header2/>
            <Experience/>
          </div>
        }/>

      </Switch>
      {/* <Home></Home> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
