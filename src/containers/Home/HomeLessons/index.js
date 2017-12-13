import React, {Component} from 'react';
import './index.less'
export default class HomeLessons extends Component {
  render() {
    return (
      <div className="home-lessons">
        <div className="lessons-title">
          <i className="iconfont icon-book"></i>
          <span>全部课程</span>
        </div>
        {
          this.props.lessons.map((item, index) => (
            <div key={item.id} className="lesson">
              <img src={item.url}/>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        }
      </div>
    )
  }
}