import React, {Component} from 'react';
import Tab from "./components/Tab/index";
import './style/comm.less'
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from "./containers/Home/index";
import Course from "./containers/Course/index";
import Profile from "./containers/Profile/index";
//The prop `history` is marked as required in `Router`
//如果是HashRouter hash
//BrowserRouter html5 pushState
//Router本身需要外界传入history
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/course" component={Course}/>
          <Route path="/profile" component={Profile}/>
          <Tab/>
        </div>
      </Router>
    )
  }
}