import React, {Component} from 'react';
import './index.less'
export default class Alert extends Component {
  static defaultProps = {
    level:'default'
  }
  render() {
    return (
      <div
        className={"alert "+(this.props.level)}>
        {
          this.props.children
        }
      </div>
    )
  }
}