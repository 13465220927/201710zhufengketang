import {get, post} from './index';
//获取轮播图
export function getSliders() {
  return get('/api/sliders');
}
//获取课程列表
export function getLessons(type,offset,limit) {
  return get(`/api/lessons?type=${type}&offset=${offset}&limit=${limit}`);
}