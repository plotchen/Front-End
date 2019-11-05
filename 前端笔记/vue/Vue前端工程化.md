# Vue前端工程化

1. 模块化的相关规范介绍
2. webpack
3. Vue单文件组件
4. Vue脚手架
5. Element-UI的使用 

## 模块化规范

### 浏览器端

- AMD
- CMD

### 服务端

- commonjs 导入 require  导出 module.exports 

### es6 

- 导入 import export default

## node中使用es6模块语法配置babel

1. 安装`npm i -D @babel/core @babel/cli @babel/preset-env @babel/node ` 

2. 安装 ` npm i -S @babel/polyfill`

3. 在**文件夹根目录**新建**babel.config.js**

   ```js
   const presets = [
     [
       '@babel/env',
       {
         targets: {
           edge: '17',
           firefox: '60',
           chrome: '67',
           safari: '11.1'
         }
       }
     ]
   ]
   module.exports = { presets }
   ```

4. 新建index.js 文件 运行该文件  npx babel-node index.js

### 默认导入与导出

- 默认导入 ` import 变量名 form '路径'`
- 默认导出 export default 

### 按需导入与按需导出

- 按需导入` import {} from '路径'`
- 按需导出 export 导出的数据

### 按需与默认注意点

1. 按需导出可以导出n次,默认导出只能默认导出一次
2. 导入的模块 后缀名可以省略

## webpack ★

- 案例学习webpack  
- 前端构建工具

### 案例 ★

1. 新建文件夹 pro  初始化项目 生成package.json  `npm init -y`

2. pro文件夹下**新建 src文件夹**  新建index.html  index.js

3. index.html中 创建ul li列表

4. pro文件夹下 下载jquery ` npm i jquery -S`

5. index.js中写隔行变色的代码,将index.js文件  script标签引入到index.html

   ```js
   import $ from 'jquery'
   $(function() {
     $('li:odd').css('backgroundColor', 'blue')
     $('li:even').css('backgroundColor', 'lightblue')
   })
   浏览器不识别高级语法
   ```
   
6. pro文件夹下 安装webpack `npm i webpack webpack-cli -D`

7. pro文件夹下 新建 文件  webpack.config.js 

   ```js
   module.exports = {
    	mode: 'development'// 开发模式 开发模式编译之后的代码是未压缩的
   }
   ```

8. package.json文件中 scripts节点中 新建 节点  "dev":"webpack"

9. 执行命令行 `npm run dev` 会在pro文件夹下生成dist文件夹 ,文件夹中的main.js就是我们需要的js文件

10. 将index.html文件中的index.js替换成dist文件下的main.js

### 配置入口和出口★

```js
1.在webpack.config.js中配置入口和出口
const path = require('path')
module.exports = {
  mode: 'development', //编译模式 production
  entry: path.join(__dirname, 'src/index.js'), //入口
  output: { // 出口
    path: path.join(__dirname, 'dist'), //dist文件夹不存在会自动创建
    filename: 'abc.js'
  }
}
2.更换index.html页面中引入的js文件名
```

### 配置自动打包★

1. 安装 ` npm i webpack-dev-server -D`
2. 修改package.json中scripts节点 将原来的webpack  改为 webpack-dev-server 
3. 将index.html页面引入的js文件 换为绝对路径

### 配置html-webpack-plugin★

1. 安装`npm i html-webpack-plugin -D`

2. 修改webpack.config.js 

   ```js
   在当前文件最上面 导入包 
   const htmlplu = require('html-webpack-plugin') // 构造函数
    //htmlplugin实例
   const htmlplugin = new htmlplu({
   	  template: './src/index.html', //复制的模板
     	  filename: 'index.html' // 输出的文件名,输出的文件会放在项目根目录中,该html文件会默认在最后引入index.js
   })
   //最后将 htmlplugin 在 module.exports 中挂载
    module.exports = {
        plugins:[htmlplugin]
    }
   ```

### 样式loader★

1. 安装

   1. css loader `npm i css-loader style-loader -D`
   2. less loader ` npm i less-loader less -D`
   3. sass loader ` npm i sass-loader node-sass -D`

2. 在webpack.config.js文件中添加配置项

   ```js
   module.exports = {
       module:{
       	rules: [
       		{test:/\.css$/,use:['style-loader','css-loader']},
               {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
               {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
       	]
       }
   }
   ```

3. 新建css文件,将css文件|less文件 | scss文件 引入到index.js中

### 浏览器样式兼容处理

1. 安装 `npm i postcss-loader autoprefixer -D`

2. 在项目根目录中新建 postcss.config.js

   ```js
   const autoprefixer  = require('autoprefixer ')
   module.exports = {
   	plugins:[autoprefixer]
   }
   ```

3. webpack.config.js 

   ```js
   module.exports = {
       module:{
       	rules: [
       		{test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
               {test:/\.less$/,use:['style-loader','css-loader','less-loader','postcss-loader']},
               {test:/\.scss$/,use:['style-loader','css-loader','sass-loader','postcss-loader']}
       	]
       }
   }
   ```

### url处理★

- 样式中涉及到url 背景图 字体图 

- 安装loader ` npm i url-loader file-loader -D`

- ```js
  module.exports = {
  	module:{
  	rules:[
  		{test:/\.png|jpg|gif|bmp|svg|eot|ttf|woff|woff2$/,use:'url-loader?limit=字节数'}
  	]
  	}
  }
  limit 后面跟的字节数 小于 设置的值的时候会将图片转为base64编码 
  ```

### js高级语法处理

1. 安装 ` npm i babel-loader @babel/core @babel/runtime -D`

2. 安装` npm  i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D  `

3. 新建babel.config.js

   ```js
   module.exports = {
     presets: ['@babel/preset-env'],
     plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
   }
   ```

4. 在webpack.config.js中配置规则

   ```js
   module.exports = {
   	moudle : {
   	    rules:[
   	    		{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
   	    ]
   	 }
   }
   ```

### Vue单文件组件★

```vue
<template></template>  --结构

<script>
	export default {
		//行为
	}
</script>

<style scoped><style> //样式
```

### 配置.vue文件loader

1. 安装` npm i vue-loader vue-template-compiler -D`

2. webpack.config.js配置

   ```js
   1.导入 const vueplugin = require('vue-loader/lib/plugin.js')
   2.module.exports = {
       plugins:[htmlPlguin, new VueLoaderPlugin()],
       module:{
           rules:[
               {test:/\.vue$/, use:'vue-loader'}
           ]
       }
   }
   ```

### 渲染.vue文件

1. 安装vue ` npm i vue -S`

2. 将vue导入到index.js中,.vue单文件组件

   ```js
   import Vue from 'vue'
   import App from './App.vue'
   new Vue({
   	el:'#app',
   	render:c=>c(App)
   })
   ```

3. 在index.html页面中新建id为app的标签

## 脚手架的安装

` npm i @vue/cli -g`

### 创建项目

1. 命令行交互的方式 ` vue create 项目名`
2. vue ui视图

### vue脚手架项目单独配置

1. package.json
2. 根目录中新建vue.config.js

### vue组件库

- element-ui    iview  PC端
- vant   mint-ui 移动端
- mui 

## render函数

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
        <!-- <com></com> -->
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
    <script>
      const com = {
        template: "<h1>我是组件</h1>"
      }
      new Vue({
        el: "#app",
        data: {},
        methods: {},
        // components:{
        //     com
        // }
        // render: function(createElement){ //render 函数会将#app的容器直接替换掉
        //     return createElement(com)
        // }
        //  render: c =>c(com)
        render: c => c(com)
      })
    </script>
  </body>
</html>

```

