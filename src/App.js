import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Footer from './components/Footer';
import Desert from './Desert';
import Home from './Home';
import Menu from './Menu';
import Checkout from './Checkout';


function App() {

   
  return (
    <Router>
      <GlobalStyle />
 
      <Switch>
            <Route path="/desert">
              <Desert />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
 
          </Switch>
          
    </Router>
    
     
  );
}

export default App;
