import {get, post} from './index';
//获取轮播图
export function getSliders() {
  return get('/api/sliders');
}
//获取课程列表
export function getLessons() {
  return get('/api/lessons');
}