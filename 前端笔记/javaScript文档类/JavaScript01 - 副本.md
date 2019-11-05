# JavaScript基础01

## 昨日回顾

1. bootstrap的使用 响应式 本质 媒体查询

2. bootstrap容器 container  container-fluid

3. bootstrap栅格系统 将容器页面平均分成12等分  row col 

   ```html
   <div class="container">
     <div class="row">
     	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
         <div class="row">
           <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-md-offset-2 col-md-pull-2 col-md-push-2 hidden-sm hidden=md hidden-lg">
           </div>
         </div>
       </div>
     </div>
   </div>
   ```

4. bootstrap列嵌套、列偏移、列排序

5. 阿里百秀首页案例

## 今日内容 

1. 计算机编程基础   
2. 初识JavaScript  
3. **变量**
4. **数据类型**

html -- 超文本标记语言 

css -- 层叠样式表

js -- 编程语言

### 计算机基础 （了解）

1. 硬件   鼠标 键盘 屏幕 音响  打印机      显卡  内存条  硬盘   CPU  
2. 软件 : LOL  浏览器 QQ   系统 --  mac    windows  
3. 单位  bit      1B=8bit   1kb=1024B    1MB=1024KB   1G=1024MB    1T=1024GB  
4. 处理： 硬盘   --》 内存  --》 cpu 计算能力

### js初识 （了解）

- 一个运行在客户端的脚本语言,解释性语言 ,轻量级的语言 , 随着技术的发展,可以运行在服务端

### 06-浏览器执行JS过程（了解）

浏览器分成两部分：渲染引擎和 JS 引擎

渲染引擎 --  内核--》html+css

js引擎 -- 读取网页中javascript代码

总结： 浏览器本身不会执行js代码，而是通过内置的javascript引擎(解释器)来执行js代码

### 07js组成（知道）

1. ECMAscript 规范了 js代码书写规范   -- **基础语法**
2. DOM 文档对象模型  Document Object Model 
3. BOM 浏览器对象模型  Browser  Object Model   -- 弹框，浏览器跳转

### 08书写位置

1. 行内式  

   ```js
   <input type="button" value="xxx" onclick="alert('花花')"/>
   ```

2. 内嵌式 

   ```js
   <script>alert(123);</script>
   ```

3. 外联式 

   ```
   1.先创建一个.js文件
   2.使用 <script src="文件.js"></script>
   注意：script标签中间不能再写js代码
   ```



### 09注释

- 当行注释  //    ---  ctrl+/
- 多行注释 /*注释 内容 */     ---  alt+shift+A

### 10输出语句

alert('')  ---  警示框  警告框 

prompt()  --- 可以输入的弹出框 

confirm() -- 确认框  

console.log()  ---在控制台打印  

注意：alert() 主要是来显示消息给用户看的

​		console.log() 用来给程序猿自己运行看的（调试）

### 12变量（重点）

#### 作用

存储数据   -- 存储在内存中

#### 13使用（重点）

- 1.先声明  2. 赋值        var  num;//声明      num=12;//赋值

- 初始化     ---- > 变量的声明 +  变量的赋值

```js
var num = 10;  意思是定义了一个变量名字叫num，然后给了一个初始值是10
```



- **16-- 语法拓展**

  - 变量值的更新  （**重点**）

    ```js
    var num = 10;//初始化的值
    console.log(num);//10
    num = 20;
    console.log(num);//20
    ```

  - 同时声明多个变量（**重点**）

    ```js
    1.声明  2.赋值
    var num1 = 10,num2 = 20,num3 = 30;
    ```

  - 变量的特殊情况（**知道**）

    - 直接打印未声明未赋值的变量, 直接报错   

      ```
      console.log(wuming);//不允许，会报错
      ```

    - **在谷歌浏览器中尽量不要定义变量名为name  ,直接打印打印的是一个空字符串**

    - 只声明，不赋值 打印结果为undefined

    - **不要没有声明直接赋值使用  ---  有问题  但是是可以运行的** 

- **17-命名规范语法规则**

  - 字母 数字 _  $  除此之外的任何特殊字符都不可以， 严格区分大小写
  - **不要使用数字开头**  
  - 不要使用关键字 和 保留字
  - **规范   驼峰命名法  camel命名法**     

### 数据类型

#### 21基本数据类型简介(简单数据类型)

- js是动态的，轻量级脚本语言  -- 当定义变量的时候不清楚是哪一种数据类型  var a;?
- 当变量赋值的那一刹那，才能知道变量是哪种数据类型  -- 数据类型可以随着更改的  var a=1;  a="世界";

#### 22数值型number（重点！）

- **整数 10**           **小数 10.1**    （**记住**）
- 八进制  --  0开头是八进制                十六进制 -- 0x 是十六进制 
- 最大值   Number.MAX_VALUE(**了解**)
- 最小值    Number.MIN_VALUE (**了解**)
- 无穷大   infinity (**了解**)
- 无穷小   -infinity (**了解**)  
- NaN  -- 本身表示不是一个数字（**重点**）
  - isNaN（判断的数据） -- 判断数据是不是一个数字，如果是数字返回假(false),如果不是数字返回真(true)


#### 字符串型 string(重点！)

- 使用引号包裹的数据就是字符串型  '字符串'   "字符串"  单双引号嵌套的时候 ,注意 **外单内双  外双内单** （**记住**）
- 转义字符  \ 转义  

  - \n  换行
  - \b  空格 
- 字符串长度  字符串.length  （**记住**）
- 字符串的拼接  （**记住**）
  - 注意：字符串与任意数据类型使用+操作的时候 就是做字符串拼接的
  - 如果都是数字 -- 结果会参与运算  12+12  //24
- 字符串拼接变量   -- 引引加加


#### 29布尔值

- true  真  1
- false  假  0 
- 布尔值在做数学运算的时候会做隐式转换

#### 29undefined 和 null  

- undefined 未定义  声明变量未赋值    做数学运算 NaN
- null 没有 空的  数学运算  0 

#### 30检测数据类型 -- typeof 

```javascript
var a = 10 ;
console.log(typeof a) //number
var str = 'abc' ;
console.log(typeof str) //string
var boo = true;
console.log(typeof boo);//boolean
var un = undefined;
console.log(typeof un);//undefined
var num = null;
console.log(typeof num);//object
```

#### 复杂数据类型 (包装数据类型) --- 以后再说

### 32转换为字符串



### 33转换为数值型



### 37转换成布尔型







 


