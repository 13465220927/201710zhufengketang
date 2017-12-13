import React, {Component} from 'react';
import './index.less'
import Loading from "../../../components/Loading/index";
import {Link} from 'react-router-dom';
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
            <Link to={{pathname:`/detail/${item.id}`,state:item}}>
              <div key={item.id} className="lesson">
                <img src={item.url}/>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          ))
        }
        {
          this.props.loading ? <Loading/> : (this.props.hasMore ?
            <div onClick={this.props.fetchLessons} className="load-more">
              加载更多
            </div> : <div className="load-more">
              别扯了，到底了
            </div>)

        }
      </div>
    )
  }
}