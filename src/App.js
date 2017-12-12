import React, {Component} from 'react';
import Tab from "./components/Tab/index";
import {HashRouter as Router} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Tab/>
        </div>
      </Router>
    )
  }
}