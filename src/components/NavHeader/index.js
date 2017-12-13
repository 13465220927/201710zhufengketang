import React, {Component} from 'react';
import './index.less'
export default class NavHeader extends Component {
  render() {
    return (
      <div className="nav-header">
        {this.props.title}
        <i className="iconfont icon-fanhui"></i>
      </div>
    )
  }
}
