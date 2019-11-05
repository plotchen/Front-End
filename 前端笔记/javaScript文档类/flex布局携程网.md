# flex布局

## 知识复习

1. flex 布局体验
2. flex 布局原理
3. flex 布局父项常见属性
4. flex布局子项常见属性
5. 携程网首页案例制作

## 今日内容

1. 携程网首页案例制作
2. rem基础  
3. 媒体查询
4. Less基础
5. rem 适配方案
6. 苏宁首页案例制作

### 携程案例

#### 轮播图  

- img 设置width 100% 

### local-nav 

- ul  嵌套了5个li   记得清楚ul的默认内外边距  设置 display:flex   
- 每一个li的flex : 1    li中嵌套a标签  a设置 display:flex  ;    背景图与 文字 会变为伸缩项   
- 为a 设置修改主轴方向  flex-direction:column ;  设置 在侧轴方向 居中  align-items:center
- 使用伪类选择器修改背景图的位置

#### nav导航 

- nav标签 添加圆角  放置3个div 
- 每个div 高度设置88px  设置display:felx   再放置3个div   这3个div flex:1  前两个 div添加有边框 
- 设置3个div 后两个的设置
  - 嵌套两个a   a设置display:flex  修改主轴方向 flex-direction:column;  	 
  - 设置上边框  水平垂直居中 
- 3个div中第一个     水平居中   垂直居中 line-height:44px   添加背景图  注意缩放三分之一  放置到底部 

#### subnav 

- ul  中放置10 li   ul设置 display:felx   li 的 flex:20%(相对于父亲来说的); 换行显示  
- li 背景图   文字   修改主轴方向  水平垂直居中  

### 热门活动标题

1. h2    背景图  2倍图处理  定位方式 处理背景图  left  top 

#### 更多福利

1. 子绝父相     宽度  高度  背景渐变  圆角  
2. 伪元素  2d旋转实现三角  

#### 活动内容

- div 两个a   放置 img    100%

### em与rem 

- em与rem都是相对长度单位  
- **em 参考的自身的字体大小, 如果自身未设置字体大小 ,默认参考父元素的字体大小, 父元素也没有设置 一直往上找  html** 
- **rem 始终参考的是html标签的字体大小**

### 媒体查询

- 识别设备的宽度渲染对应的css样式 

- 语法

  ```css
  @media screen and (判定条件px) {
    设置的css颜色
  }
  and 两侧必须有空格   判定调教一定记得加单位
  判定条件  max-width  min-width  min-device-width  
  推荐使用从小到大 判定条件使用min-width  min-width:320px   min-width:360px    
  如果要使用max-width  判定条件从大到小写
  ```

#### 使用媒体查询加载css样式表 

使用媒体查询判断屏幕的宽度 加载对应的css样式文件

```html
<link rel=“stylesheet” href="1.css" media=" screen and (判定条件px)"/>
```

### less 

- css的预处理器 更方便的来书写css 
- 安装
  - 安装node   检测node版本  node -v
  - 全局安装less   npm  install   less  -g  
  - 检测 less        lessc  -v

#### less语法

- less 不会编译单行注释的   会编译多行注释 

##### 变量

1. 新建.less 文件 

2.  @开头    不要使用数字开头 特殊字符开头  汉字   严格区分大小写  

   ```less
   @变量名：变量值；
   如 @basecolor：red;
   ```

   


##### 嵌套

```css
div p {} ---css
less写法
div {
  p{
  }
}
div > p {}
div {
  > p {
  }
}


伪元素  伪类 
a:hover {}

a{
  &:hover{}
  &::before,&::after{}
}
```

#### 计算

- ```css
  +  -  *  / ()   
  单位只有一个的话   结果就是参与运算的单位 
  单位不一致的话   结果是以第一个单位为准
  ```

#### easy less 插件安装

- 因为浏览器不能直接加载less文件   需要安装一个工具将less 转换成css文件  将css文件引入 html页面 
- vscode  安装easy less 
- sublime  安装less2css 

### 扩展

#### 线性渐变

```css
为background设置，不能是background-color
linear-gradient( 方向 , 开始渐变颜色 位置, 结束渐变的颜色 位置) 
                方向 默认值   to bottom  180deg  可以写方位词 也可以写角度 
                             to top    0 deg 
                             to right   90deg 
                             to left  270deg

background: linear-gradient( to right, red 0%, red 50%, green 50%, green)
```





