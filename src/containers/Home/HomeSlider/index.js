import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import {getSliders} from '../../../api/home';
export default class HomeSlider extends Component {
  render() {
    let swipeOptions = {
      auto: 3000,//加载完成后等待多少毫秒开始轮播
      continuous: true,//是否启动无缝轮播
      callback: function(index, elem) {},//当动画完成后执行回调函数
    };
    let swipe = (
      <ReactSwipe swipeOptions={swipeOptions}>
        {
          this.props.sliders.map((item,index)=>(
            <div key={index}>
              <img src={item}/>
            </div>
          ))
        }
      </ReactSwipe>
    )
    return (
      <div className="home-sliders" >
        {
          this.props.sliders.length>0?swipe:null
        }
      </div>
    )
  }
}