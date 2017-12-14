# 初始化项目
```
npm init -y
```
# 安装依赖的模块
## 后端的模块
```
npm install body-parser connect-mongo ejs express express-session mongoose -S
```
## 生产依赖
```
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux@next react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
## 开发依赖
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader url-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin  -D
```
## 资源文件
- images 图片


## 目录规划
### container
容器组件，每个组件对应一个页面
### components
放置着可复用的组件
### store
放着我们的redux仓库

## 一个完整的redex流程
1. 写一个后台接口 /api/lessons
2. 在前台的api里增加获取此接口数据的方法
3. 定义新的动作类型action-type
4. 在reducer里添加两个case以处理这两种动作类型
5. 在actions里添加一个新的方法
6. 在组件里调用action的方法
7. 在组件用最新的属性进行渲染

## 如何使用react-router-redux
目的只有一个，就是在actions里跳转路径

1. 创建history
2. 使用ConnectedRouter
3. 合并reducer的时候，增加一个子reducer
4. 应用中间件
5. 使用push进行跳转


