import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Index from './Components/Index'
export default class App extends Component {
  render(){
    return (
      <Router >
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </Router>
    );
  }
}
