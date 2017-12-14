import * as types from '../action-types';
import {reg,login,logout} from '../../api/session';
import {push} from 'react-router-redux';
export default {
  reg(user){
   return function(dispatch,getState){
     reg(user).then(result=>{
       let {code,success,error} = result;
       dispatch({
         type:types.REG,
         payload:{success,error}
       });
       if(code == 0){//code=0表示成功 成功后跳到登录页
         dispatch(push('/login'));
       }
     })
   }
  },
  login(){

  },
  logout(){

  }

}