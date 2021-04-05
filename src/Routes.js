import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './pages/About';
import App from './App';
import Contact from './pages/Contact';
import Projects1 from './pages/Projects';
import React from 'react';
import Services from './pages/Services';

const Routes = () => {
    return (
     
       <BrowserRouter>
        <Switch>
          
            <Route exact path="/" component={App}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects1}/>
            <Route exact path="/services" component={Services}/>
        </Switch>
        </BrowserRouter> 
       
    );
};

export default Routes;