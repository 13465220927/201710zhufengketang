import React, {Component} from 'react';
import NavHeader from '../../components/NavHeader';
import {Link} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
import Alert from "../../components/Alert/index";
class Login extends Component {
  handleClick = ()=>{
    let username = this.username.value;
    let password = this.password.value;
    this.props.login({username,password});
  }
  render() {
    return (
      <div className="login-panel">
        <NavHeader title="登录"/>
        <div className="login-logo">
          <img src={require('../../images/profile.png')} alt=""/>
        </div>
        <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
        <input ref={input=>this.password=input} type="text" placeholder="密码"/>
        <Link to="/reg">前往注册</Link>
        <div
          onClick={this.handleClick}
          className="login-btn">登&nbsp;录</div>
        <Alert/>
      </div>
    )
  }
}
export default  connect(
  state=>state.session,
  actions
)(Login);