export function upLoadMore(dom,callback){
  //给DOM绑定滚动事件
  let timer;
  dom.addEventListener('scroll',function(event){
    //如果以前设置过定时器则取消定时器
    if(timer)clearTimeout(timer);
    timer = setTimeout(function(){
      let height = dom.clientHeight;
      let scrollHeight = dom.scrollHeight;
      let scrollTop = dom.scrollTop;
      //如果本身的高度+向上卷去的高度已经大于等于内容的高度
      if(scrollTop+height+10>=scrollHeight){
        callback();
      }
    },100);
  });
}