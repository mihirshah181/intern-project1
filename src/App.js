import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/overview';
import Reports from './pages/Reports';
import Products from './pages/Products';
import PaientsList from './pages/paitentslist';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/paitentslist' component={PaientsList} />
          
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
