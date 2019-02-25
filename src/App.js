import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Main from './Components/Main'
import Card from './Components/Card'
import Zhuce from './Components/login/Zhuce'
import Denglu from './Components/login/Denglu'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main}/>
          <Route path="/card" component={Card}/>
          <Route path="/zhuce" component={Zhuce}/>
          <Route path="/denglu" component={Denglu}/>
        </div>
      </Router>

    );
  }
}

export default App;
