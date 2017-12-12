import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends Component {
  render() {
    let swipeOptions = {
      auto: 3000,//加载完成后等待多少毫秒开始轮播
      continuous: true,//是否启动无缝轮播
      callback: function(index, elem) {},//当动画完成后执行回调函数
    };
    return (
      <div className="home-sliders" >
        <ReactSwipe swipeOptions={swipeOptions}>
          <div>面板1</div>
          <div>面板2</div>
          <div>面板3</div>
        </ReactSwipe>
      </div>
    )
  }
}