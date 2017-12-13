import * as types from '../action-types';
import {getSliders,getLessons} from '../../api/home';
export default {
  fetchSliders(){
    //正常的action只能使用纯对象，如果需要派发函数的话需要使用中间件，redux-thunk
    return function(dispatch,getState){
      //派发action 开始请求轮播图数据的action
      dispatch({
        type:types.FETCH_SLIDERS
      })
      //调用后台接口获取数据，然后派发请求轮播图数据结束的action
      //{home:{sliders:{loading,list:[.....]}}}
      //如果一个action对象是一个promise,那么 redux-promise中间件会等待这个promise完成后再次派发相同 type的action
      dispatch({
        type:types.FETCH_SLIDERS_SUCCESS,
        payload:getSliders()//放的就是轮播数组了
      })
    }
  },
  fetchLessons(){
    return function(dispatch,getState){
      let {lessons:{
        loading,
        offset,
        limit,
        hasMore
      }} = getState().home;
      //如果已经在获取数据了，则重复点击不要再获取了
      if(hasMore && !loading){
        dispatch({type:types.FETCH_LESSONS});
        dispatch({type:types.FETCH_LESSONS_SUCCESS,payload:getLessons(offset,limit)});
      }
    }
  },
  //下拉刷新
  refreshLessons(){
    return function(dispatch,getState){
      let {
        lessons:{
          loading,offset,limit,hasMore
        }
      } = getState().home;
      if(!loading){
         dispatch({type:});
         dispatch({type:,payload:});
      }
    }
  }
}