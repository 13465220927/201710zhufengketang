import * as types from '../action-types';
//会话
let initState = {
  error: '',//错误消息
  success: '',//成功消息
  user,//如果登录成功的话，需要给此属性赋值为登录用户
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.REG:///注册方法调用完成后
      //不需要解构老状态
     return {
       ...action.payload
    };
    case types.LOGIN:///注册方法调用完成后
      return {
        ...action.payload
      };
  }
}