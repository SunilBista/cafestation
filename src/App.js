import React from 'react';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Service from './components/Service';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
          <Route exact path="/services">
            <Service />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
        </Switch>
    </>
  );
}

export default App;
