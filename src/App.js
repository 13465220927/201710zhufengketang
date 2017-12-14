import React, {Component} from 'react';
import Tab from "./components/Tab/index";
import './style/comm.less'
import {Route} from 'react-router-dom';
import Home from "./containers/Home/index";
import Course from "./containers/Course/index";
import Profile from "./containers/Profile/index";
import Detail from "./containers/Detail/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import history from './store/history';
//ConnectedRouter这个组件实现redux仓库和本组件连接
import {ConnectedRouter} from 'react-router-redux';
//The prop `history` is marked as required in `Router`
//如果是HashRouter hash
//BrowserRouter html5 pushState
//Router本身需要外界传入history
export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/course" component={Course}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}