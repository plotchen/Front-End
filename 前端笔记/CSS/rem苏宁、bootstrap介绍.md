# rem布局

## 知识复习

1. 携程网首页案例制作
2. rem基础   
   - rem  html标签的字体大小 
   - em 自身的字体
3. 媒体查询
4. Less基础

## 今日内容

1. rem 适配方案
2. 苏宁首页案例制作
3. 响应式开发
4. Bootstrap前端开发框架

### em与rem 

- em与rem都是相对长度单位  
- **em 参考的自身的字体大小, 如果自身未设置字体大小 ,默认参考父元素的字体大小, 父元素也没有设置 一直往上找  html** 
- **rem 始终参考的是html标签的字体大小**

### 媒体查询

media 可以针对不同的屏幕尺寸设置不同的样式

媒体查询书写规则 --- 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写

### 05-媒体查询+rem实现元素动态大小变化

媒体查询作用，根据屏幕尺寸的范围，来切换html的font-size （界面元素的参照物跟着屏幕改变）

界面元素的大小都以rem为单位（rem代表参照物html的font-size）

### 06-媒体查询引入资源

link标签+media属性，就是媒体引入资源

### 07-CSS的弊端

原生的css代码没有函数逻辑等，代码比较冗余，随意懒散

没有很好的计算能力

### 08-LESS简介以及使用变量

是一门 **CSS扩展语言**，也成为CSS预处理器

内部引入了变量，Mixin（混入），运算等功能

主要学习变量 -- 先定义  后使用

​			注意：变量不要以数字开头命名

**问题：**html文件只认识.css文件  --》不能直接识别less文件 --》需要用工具转换

变量：

​	-必须先定义后使用

​	- 变量不能以纯数字和特殊符号开头

### 09-less编译easy less插件

less --    Easy Less 插件的安装

### 10-less嵌套

注意  -- 伪类和伪元素在less文件的书写 ，需要加上&符号

### 11-less运算

在less中变量使用@定义

在less找那个也可以进行加减乘除运算 

- 注意在+-*/ **两边敲一个空格**，不然有可能出问题
- 对于两个不同的单位的值之间的运算，**运算结果的值取第一个值的单位** -- 82rem + 5px(取值单位为rem)
- 如果两个值之间**只有一个值有单位，则运算结果就取该单位**

### 12-rem适配方案原理

### 13-rem最终适配方案


### 适配原理

- 读取设备的宽度,修改html标签的字体大小,从而实现元素在不同终端的正常的缩放展示

### 适配方案

### 方案一

- 技术点 : less  rem  媒体查询   
- 设计稿           分份数 10 份  15 份  20份               设置html的标签字体大小
- **一个元素（宽或高）的rem值   =   设计稿中量取的px值  /   html标签的字体大小   ( 设计稿的的宽度 / 份数)** 

### 苏宁

1. 新建文件夹  css文件夹  图片文件夹  index.html

2. 创建common.less   处理的媒体查询  设计稿750px  分割了15份   媒体设备的宽度除去15  修改html的字体大小

3. 新建index.less文件   在index.less文件中使用@import导入 common.less文件   最终页面中引入编译好的index.css文件   这个文件中就包含了 common.less中 写的媒体查询

   ```less
   @import 'common.less'
   ```

4. body样式设置  居中 width不再给具体像素值  15rem  背景色 字体  min-width:320px 

#### 头部

- 因为固定定位 必须设置宽高  15rem   left:50%  transform:translate(-50%)    设置display:flex
- 结构  
  - 3个盒子
  - 1 和 3  固定宽度 rem   设置  margin    盒子  2 flex:1 
  - 盒子1 直接放置背景图  修改背景图 大小 background-size :    固定宽度 rem    固定宽度 rem  
  - 盒子3  文字  修改文字大小  字体大小 / html标签字体大小 
  - 盒子2  输入框 width:100%  height: 量取 px 值 /    html标签字体大小     圆角  placeholder  背景颜色 边框  轮廓线  上下间距

### banner图与广告 

1. 结构 div  >  a   > img   flex 布局 处理 

#### 导航 nav 

1. 结构  nav  >a *10 > img + span  
2. 设置a的大小 150rem /   html标签字体大小     图片大小   82 /   html标签字体大小     处理span标签的字体 

### 方案二  flexible 和 rem 

1. flexible.js  使用js动态获取 设备的宽度  分成了10   动态设置html标签的字体大小

#### 初始化

1. 新建文件夹  css  img  js  
2. 设置视口  引入css初始化   
3. 引入flexible.js   <script src="flexible.js"></script>    
4. flexible 将页面划分成了10等分  body  width:10rem   设置body的最大宽度  max-width: 750px;
5. px 转 rem  插件   
   - 插件配置  左下角 设置   搜索 cssroot(点击复制到设置) 在右边修改字体大小 75


设置当设备的宽度大于750使用媒体查询强制设置html 的字体大小 为 75px 

```css

@media screen and (min-width: 750px) {
    html {
        font-size: 75px!important;
    }
}
```

### 响应式

- 只需要一套代码 适配多个终端   提高开发效率  
- 本质 还是使用媒体查询 

#### 设备分类

- 小于 768px    超小屏幕  xs    -- extra small 
- 768px -- 992px    小屏幕  sm     ----small  
- 992px -- 1200px  中等屏幕  md   --- middle  
- 大于1200px   超大屏幕  lg    ----   large 

#### bootstrap

- 2 3  4  这些版本 都依赖于jquery   
- 5 不再依赖jquery 

