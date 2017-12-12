import React, {Component} from 'react';
import Tab from "./components/Tab/index";
import './style/comm.less'
import {HashRouter as Router} from 'react-router-dom';
//The prop `history` is marked as required in `Router`
//如果是HashRouter hash
//BrowserRouter html5 pushState
//Router本身需要外界传入history
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