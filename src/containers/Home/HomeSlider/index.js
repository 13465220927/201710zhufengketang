import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends Component {
  render() {
    return (
      <div className="home-sliders">
        <ReactSwipe>
          <div>面板1</div>
          <div>面板2</div>
          <div>面板3</div>
        </ReactSwipe>
      </div>
    )
  }
}