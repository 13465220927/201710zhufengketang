import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import './index.less'
import HomeSlider from "./HomeSlider/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeLessons from "./HomeLessons/index";
class Home extends Component {
  componentDidMount(){
    this.props.fetchSliders();
    this.props.fetchLessons();
  }
  render() {
    return (
      <div className="home">
        <HomeHeader/>
        <div className="main-content">
            <HomeSlider sliders={this.props.sliders.list}/>
            <HomeLessons
              lessons={this.props.lessons.list}/>
        </div>
      </div>
    )
  }
}
export default connect(
  state=>state.home,//把仓库中的状态对象映射为组件的属性对象
  actions
)(Home);