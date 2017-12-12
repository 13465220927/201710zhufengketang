import React, {Component} from 'react';
import './index.less';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
export default class HomeHeader extends Component {
  constructor() {
    super();
    this.state = {showList: false};
  }

  handleClick = () => {
    this.setState({showList: !this.state.showList});
  }
  getMenuList = () => (
      <CSSTransition classNames="fade" timeout={500}>
        <ul className="menu-list">
          <li data-type="">全部课程</li>
          <li data-type="react">React课程</li>
          <li data-type="vue">Vue课程</li>
        </ul>
      </CSSTransition>
)

  render() {
    return (
      <div className="home-header">
        <div className="home-logo">
          <img src={require('../../../images/logo.png')}/>
          <div onClick={this.handleClick}>
            {
              this.state.showList ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>
            }
          </div>
        </div>
        <TransitionGroup>
          {
            this.state.showList && this.getMenuList()
          }
        </TransitionGroup>
      </div>
    )
  }
}