
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Dashboard from './Pages/Dashboard';
import './index.css';




ReactDOM.render(
  <BrowserRouter>
  <switch>
      <Route exact path="/" component={Home} />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/Dashboard" component={Dashboard} />
  </switch>
  </BrowserRouter>,
  document.getElementById('root')
);




