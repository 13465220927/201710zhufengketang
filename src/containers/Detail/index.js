import React, {Component} from 'react';
import NavHeader from "../../components/NavHeader/index";
import './index.less'
export default class Detail extends Component {
  render() {
    let lesson = this.props.location.state;
    if(!lesson){
      lesson = {};
    }
    return (
      <div className="lesson-detail">
        <NavHeader
          title="课程详情"/>
        <video src={lesson.video} poster={lesson.poster} controls={true}/>
        <p>{lesson.title}</p>
        <p>{lesson.price}</p>
      </div>
    )
  }
}