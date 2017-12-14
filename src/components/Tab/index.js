import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';
import actions from '../../store/actions/session';
import {connect} from 'react-redux';
class Tab extends Component {
  componentDidMount(){
    //this.props.validate();
  }
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">
          <i className="iconfont icon-xingqiu"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to="/course" activeClassName="active">
          <i className="iconfont icon-react"></i>
          <span>我的课程</span>
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <i className="iconfont icon-xiaolian"></i>
          <span>个人中心</span>
        </NavLink>
      </nav>
    )
  }
}
export default connect(
  state=>state.session,
  actions
)(Tab);