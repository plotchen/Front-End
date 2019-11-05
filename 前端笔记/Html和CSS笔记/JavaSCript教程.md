#                        JavaScript教程

[TOC]



## 01-JavaScript介绍

### 简介

​	原名：ECMAScript。这个标准由 ECMA组织发展和维护。

​	诞生于 --Netscape网景公司

```
JavaScript程序是用Unicode字符集编写的，16位的Unicode编码可以表示地球上通用的每一种语言。

ECMAScript v3标准允许Unicode字符出现在JavaScript程序中的任何地方，但是该标准的第一版和第二版
都只允许Unicode字符出现在注释或引用括起的字符串直接量中，所有的元素智能用ASCII字符集。ECMAScript标准化之前的JavaScript版本通常根本不支持Unicode编码。
```



##### JS是脚本语言，不需要编译，通过浏览器的JS引擎解释执行



##### 浏览器起执行JS

> ##### 	浏览器引擎分为渲染引擎和JS引擎

1. 渲染引擎

   ​	用来解析HTML+ CSS，俗称内核，比如chrome的blink内核，老版本的webkit

2. JS引擎

   ​	也称为JS解释器。用来读取网页中的JS代码，对其处理后运行，比如chrome的V8


#### JavaScript的特点

 **(1).一种解释性执行的脚本语言。**

​	 同其他脚本语言一样，JavaScript也是一种解释性语言，其提供了一个非常方便的开发过程。JavaScript的语法基本结构形式与C、C++、Java十分类似。但在使用前，不像这些语言需要先编译，而是在程序运行过程中被逐行地解释。JavaScript与HTML标识结合在一起，从而方便用户的使用操作。 



**(2).一种基于对象的脚本语言。** 

​	其也可以被看作是一种面向对象的语言，这意味着JavaScript能运用其已经创建的对象。因此，许多功能可以来自于脚本环境中对象的方法与脚本的相互作用。 



**(3).一种简单弱类型脚本语言。**

​	 其简单性主要体现在：首先，JavaScript是一种基于Java基本语句和控制流之上的简单而紧凑的设计，从而对于使用者学习Java或其他C语系的编程语言是一种非常好的过渡，而对于具有C语系编程功底的程序员来说，JavaScript上手也非常容易；其次，其变量类型是采用弱类型，并未使用严格的数据类型。 



**(4).一种相对安全脚本语言。**

​	 JavaScript作为一种安全性语言，不被允许访问本地的硬盘，且不能将数据存入服务器，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。从而有效地防止数据的丢失或对系统的非法访问。



**(5).一种事件驱动脚本语言。** 

​	JavaScript对用户的响应，是以事件驱动的方式进行的。在网页（Web Page）中执行了某种操作所产生的动作，被称为“事件”（Event）。例如按下鼠标、移动窗口、选择菜单等都可以被视为事件。当事件发生后，可能会引起相应的事件响应，执行某些对应的脚本，这种机制被称为“事件驱动”。

 

**(6).一种跨平台性脚本语言。**

​	 JavaScript依赖于浏览器本身，与操作环境无关，只要计算机能运行浏览器，并支持JavaScript的浏览器，就可正确执行，从而实现了“编写一次，走遍天下”的梦想。 因此，JavaScript是一种新的描述语言，其可以被嵌入到HTML文件中。JavaScript语言可以做到响应使用者的需求事件（例如表单的输入），而不需要任何的网络来回传输资料。所以当一位使用者输入一项资料时，此资料数据不用经过传给服务器（server）处理再传回来的过程，而直接可以被客户端（client）的应用程序所处理。 

```javascript
/*
*   javaScript简介
*       --是基于对象和时间驱动的语言，应用于客户端
*       --基于对象
*           提供了很多对象，可以直接用
*       --事件驱动
*           html做静态效果，js动态效果
*       --客户端
*           浏览器
*       --特点
*           1、交互性(信息的动态交互)
*           2、安全性(js不能访问本地磁盘文件)
*           3、跨平台性(浏览器支持)
*       --js的组成
*           1、ECMAScript
*               -ECMA ： 欧洲计算机协会
*               -由ECMA组织制定的js语法，语句..
*           2、BOM
*               -broswer object model : 浏览器对象模型
*           3、DOM
*               -Document Object Model 文档对象模型 ,是用于访问 HTML 元素的正式 W3C 标准。
*
*      js结合HTML的方式
*           --使用标签
*               <script type="text/javascript">
                        code...
*               </script>
*           --使用script标签，引入js文件
*               引入外部文件时，不能再script标签写代码，不会执行。
*
        JavaScript 是一种轻量级的编程语言。
        JavaScript 是可插入 HTML 页面的编程代码。
        JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
        JavaScript 很容易学习。
* */
```



​	语言类型可以省略，遵循h5标准、

```javascript
 	*      -- type="text/JavaScript"
    *
    *      -- language="JavaScript"
    *
    * script 标签一般放在body的底部
    *
    * 如果script 标签是引入外部js文件，那么不要在该标签里面写任何内容，而是应该另写一个标签
```



#### JS的作用

- 表单动态校验（密码强度检测）  （ JS 产生最初的目的 ）

- 网页特效
- 服务端开发(Node.js)
- 桌面程序(Electron)
- App(Cordova) 
- 控制硬件-物联网(Ruff)
- 游戏开发(cocos2d-js)



JS组成

​	ECMAScript	-- 	制定标准

​	DOM		--	文档对象模型

```
文档对象模型（DocumentObject Model，简称DOM），是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）
```

​	BOM		--	浏览器对象模型

```
浏览器对象模型(Browser Object Model，简称BOM) 是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。
```



### 1.1-JavaScript是弱类型语言

​	js中很多地方和c/c++/ JAVA等强类型编程语言有较大的区别，比如 

```
 var num = 11/2;	//num的值为5.5  
 /*
 	在java中定义的变量num要指定数据类型，在js中如果 11/2 为5.5 那么num默认为浮点类型
 */
```



### 1.2-JS中的数据类型

```javascript
   <!--
        js的原始类型和声明变量
            java的基本数据类型：byte、int、char、bit、long、float、double、boolean

        js的原始数据类型 5个
            -string：字符串
                var str = "";
            -number：数字类型
                var m = 12；
            -boolean：true & false
                var flag = true;
            -null : null被认为是对象的占位符
                var date = new date;
                获取对象的引用，null表示对象引用为空，所有对象的引用也是object
            -undefined：
                定义一个变量，但是没有赋值
                var vi;
        	typeof(); 查看当前变量类型
            typeof(varName);
    -->
```



## 02 -变量

### 2.1 - 概念

​	变量是用于存放数据的容器，通过变量名获取数据，数据可以修改。



```javascript
 *变量的声明：
    *       --  可以不初始化  每行代码结束 使用 分号 结束语句; ; ; ;
    *       --var varName;
    *       -- var name = "yangxiuqian";
    *       -- JS中区分大小写
    *           --var name !=  var namE
    *
    * 变量名注意问题：
    *          1、取名尽量见名知意
    *          2、遵循编码规范：以字母或者 $  下划线 _ 开头,中间或者后面可以有 $ 符号，字母或者数字
    *               -- 遵循驼峰命名法
```

###2.2 - 变量的数据类型

- 数据类型的分类

  JS 把数据类型分为两类：

- 简单数据类型 （Number,String,Boolean,Undefined,Null）

  - 复杂数据类型 （object)

###2.3 - 获取变量的数据类型

获取检测变量的数据类型

​		typeof 可用来获取检测变量的数据类型

```javascript
var num = 18;
console.log(typeof num) // 结果 number      
```

### 2.4 - 关键字和保留字

#### 2.4.1 - 标识符

```js
标识(zhi)符：就是指开发人员为变量、属性、函数、参数取的名字。

标识符不能是关键字或保留字。
```

####2.4.2 - 关键字

```js
关键字：是指 JS本身已经使用了的字，不能再用它们充当变量名、方法名。

包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with 等。
```

#### 2.4.3 -  保留字

```js
保留字：实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字，同样不能使用它们当变量名或方法名。

包括：boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile 等。

注意：如果将保留字用作变量名或函数名，那么除非将来的浏览器实现了该保留字，否则很可能收不到任何错误消息。当浏览器将其实现后，该单词将被看做关键字，如此将出现关键字错误。
```





## 03-函数

函数：就是**封装了一段可被重复调用执行的代码块**。通过此代码块可以**实现大量代码的重复使用**。  

### 3.1-函数定义

```html
<!--    函数的参数列表不需要写 var 直接写参数名
    定义方法有三种
        1、使用关键字function
            --function 方法名 (参数列表){
                返回值可有可无
            }
        2、匿名函数
            --var add2 = function(m, n ){
                 return m + n;
              }
        3、用的很少 动态函数
            --使用js的内置对象Function
            var funcName = new Function(“参数列表”“方法体和返回值”)
-->
```

### 3.2-函数的定义和调用

```javascript
<script type="text/javascript">
    //方式一
    function printNum(){
        alert("ad");
    }
    //调用
    printNum();
    //定义有参数的function
    function add(a, b) {
        return a+b;
    }
    //
    alert(add(2,12));

    //方式二
    var add2 = function(m, n ){
        return m + n;
    }
    alert(add2(4,6));

    //方式三
    var add3 = new Function("a , b",
        "return a + b;");
    alert("add3 ； "+add3(4,7));

    var canshu = "a, b";
    var fnagfati = "return a + b;"
    var add4 = new Function(canshu,fnagfati);
    alert("动态函数:"+add4(2,0));
</script>
```



### 3.3-JS中作用域的问题：

```javascript
/**
     * js没有块级作用域，函数除外
     *              ---也就是说在for 里面定义的变量，在外面也可以使用
     * var 定义的变量是不可以被删除的
     *
     * 没有使用var声明的变量是隐式全局变量
     */
```

### 3.4-函数也是一种数据类型

```javascript
function f1() {
        console.log("function");
    }

    //
    console.log(typeof f1());   //undefined
    console.log(typeof f1);     //function
```



### 3.5-函数作为参数使用

```javascript
<script>
    function  f1(x, y) {
        console.log(x+y);
        return x+y;
    }

    console.log( f1( f1(123,34), 234 ) );
</script>
```



### 3.6-函数可以作为返回值使用

```javascript
<script>
    function  f1() {
        return new function(){
            console.log("函数作为返回值使用");
        };
    }

    var f2 = f1();
    console.log(f2);    //Uncaught TypeError: f2 is not a function  --> f2 is a variable
    f2();
</script>
```

### 3.7 - 参数

#### 函数参数语法

- 形参：函数定义时设置接收调用时传入
- 实参：函数调用时传入小括号内的真实数据

##### 参数的作用 : 在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。

函数参数的运用：

```js
// 带参数的函数声明
function 函数名(形参1, 形参2 , 形参3...) { // 可以定义任意多的参数，用逗号分隔
  // 函数体
}
// 带参数的函数调用
函数名(实参1, 实参2, 实参3...); 
```

1. 调用的时候实参值是传递给形参的
2. 形参简单理解为：不用声明的变量
3. 实参和形参的多个参数之间用逗号（,）分隔



##### 函数形参和实参数量不匹配时

|    参数个数    | 说明                      |
| :--------: | :---------------------- |
| 实参个数等于形参个数 | 输出正确结果                  |
| 实参个数多于形参个数 | 只取到形参的个数                |
| 实参个数小于形参个数 | 多的形参定义为undefined，结果为NaN |



```
注意：在JavaScript中，形参的默认值是undefined。
```

小结：

- 函数可以带参数也可以不带参数
- 声明函数的时候，函数名括号里面的是形参，形参的默认值为 undefined
- 调用函数的时候，函数名括号里面的是实参
- 多个参数中间用逗号分隔
- 形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要匹配

### 3.8 -  arguments的使用

​		当不确定有多少个参数传递的时候，可以用 arguments 来获取。JavaScript 中，arguments实际上它是当前函数的一个内置对象。所有函数都内置了一个 arguments 对象，arguments 对象中存储了传递的所有实参。arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：

- 具有 length 属性

- 按索引方式储存数据

- 不具有数组的 push , pop 等方法

  注意：在函数内部使用该对象，用此对象获取函数调用时传的实参。


### 3.9 -  函数的两种声明方式

- 自定义函数方式(命名函数)

  利用函数关键字 function 自定义函数方式

  ```js
  // 声明定义方式
  function fn() {...}
  // 调用  
  fn();  
  ```

  - 因为有名字，所以也被称为命名函数
  - 调用函数的代码既可以放到声明函数的前面，也可以放在声明函数的后面

- 函数表达式方式(匿名函数）

  利用函数表达式方式的写法如下： 

  ```js
  // 这是函数表达式写法，匿名函数后面跟分号结束
  var fn = function(){...}；
  // 调用的方式，函数调用必须写到函数体下面
  fn();
  ```

  - 因为函数没有名字，所以也被称为匿名函数
  - 这个fn 里面存储的是一个函数  
  - 函数表达式方式原理跟声明变量方式是一致的
  - 函数调用的代码必须写到函数体后面

## 04-数组

### 4.1 - 概念

数组是指**一组数据的集合**，其中的每个数据被称作**元素**，在数组中可以**存放任意类型的元素**。数组是一种将一组数据存储在单个变量名下的优雅方式



### 4.2 - 创建数组

JS 中创建数组有两种方式：

- 利用  new 创建数组  

  ```js
  var 数组名 = new Array() ；
  var arr = new Array();   // 创建一个新的空数组
  ```

  注意 Array () ，A 要大写    

- 利用数组字面量创建数组

  ```js
  //1. 使用数组字面量方式创建空的数组
  var  数组名 = []；
  //2. 使用数组字面量方式创建带初始值的数组
  var  数组名 = ['小白','小黑','大黄','瑞奇'];
  ```

  - 数组的字面量是方括号 [ ] 
  - 声明数组并赋值称为数组的初始化
  - 这种字面量方式也是我们以后最多使用的方式

- 数组元素的类型

  数组中可以存放任意类型的数据，例如字符串，数字，布尔值等。

  ```js
  var arrStus = ['小白',12,true,28.9];
  ```

### 4.3 - 访问数组中的元素

​	通过数组中元素的索引来访问数组的元素

。

### 4.4 - 遍历数组

> `注意！！`
>
> for in 即foreach和传统for循环的区别
>
> ​	for in遍历数组  for(var key in array)	
>
> ​	array[k]  不管数组里面存放的是什么内容，得到的类型是 String类型
>
> ​	所以不建议用forin来遍历数组，使用forin遍历对象比较好
>
> 传统for循环遍历数组
>
> ​	格式 for(var i = 0; i < array.length; i++)
>
> ​	array[i]获取到的值为原生的类型（用户输入/定义的类型）

使用arr.length可以获取数组的长度

```javascript
<script>
        var arr = [[1,2],[2,3],[3,4],[4,5]];
        console.log("arr length : " + arr.length)
        for (var i = 0; i < arr.length ; i++) {
            console.log("arr["+i+"] length : " + arr[i].length)
            for (var j = 0; j < arr[i].length; j++) {
                console.log(arr[i][j]);
            }
        }

    </script>
```



### 4.5 - 数组反转

方法1

```javascript
var arr = ['red', 'green', 'blue', 'pink', 'purple', 'hotpink'];
        var newArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arr[i]
        }
        console.log(newArr);
```

方法2

```javascript
var arr = ['red', 'green', 'blue', 'pink', 'purple', 'hotpink'];
        var temp;
        for (var start = 0, end = arr.length - 1; start <= end; start++, end--) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
        console.log(newArr);
```





















## 05-流程控制

### 5.1-for

#### 语法

```javascript
/**
for（单次表达式;条件表达式;末尾循环体）
{
	中间循环体；
}

执行的顺序为：
单词表达式-->条件表达式-->中间循环体--->末尾循环体
*/
//示例
var num = 1;
for(var i = 0; i < 3; i++){
    num ++;
}

/**
执行步骤：
step1: var num = 1;

step2: var i = 0;

setp3: i = 0 < 3? --yes

step4: num ++; --num = 1;

step5: i++; --i = 1;

-------------------

step6: i = 1 < 3 ? ---yes

step7: num ++; --num = 2;

step8: i++; --2

---------------------

........

*/
```



#### 打印星星

```javascript
<script>
    /*  画星星 */
    for (var i = 0; i < 5; i++){
        for (var j = i; j < 5; j++) {
            document.write("☆");
        }
        document.write("<br />");
    }

    document.write("------------------------------------------------------")
    document.write("<br />");

    var flag = 10;
    for (var i = 0; i < 10; i++) {
        flag--;
        for (var j = 0; j < flag; j++) {
            document.write("&nbsp;");
        }
        for (var j = 0; j <= i ; j++) {
            document.write("☆");
        }
        document.write("<br />");
    }
    var flag2 = 0;
    for (var i = 9; i > 0; i--) {
        flag2++;
        for (var j = flag2; j > 0 ; j--) {
            document.write("&nbsp;");
        }
        for (var j = 0; j < i ; j++) {
            document.write("☆");
        }
        document.write("<br />");
    }

</script>
```

###### ![](resouce\JavaScript\打印星星.PNG)



### 5.2 - switch()

​	流程控制，常用作选择操作

案例

```js
<script>
        //循环执行标志
        let flag = true;
        while (flag) {
            //菜单显示
            let item = prompt('欢迎使用简易计算器：\n  1.加法计算器；\n  2.减法计算器；\n  3.乘法计算器；\n  4.除法计算器；\n  5.退出；\n请输入你的选择');

            //操作选项
            switch (item) {
                case '1':
                    addition();
                    break;
                case '2':
                    subtraction();
                    break;
                case '3':
                    multiplication();
                    break;
                case '4':
                    division();
                    break;
                case '5':
                    flag = false;
                    break;
                default:
                    alert('输入错误请重新输入');
                    break;
            }
        }

        /*********************
        *       封 装
        **********************/
        //加法  考虑字符串拼接
        function addition() {
            let x = prompt('请输入加数x:');
            let y = prompt('请输入被加数y:');
            alert(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
        }

        //减法
        function subtraction() {
            let x = prompt('请输入减数x:');
            let y = prompt('请输入被减数y:');
            alert(x + ' - ' + y + ' = ' + (x - y));
        }

        //乘法
        function multiplication() {
            let x = prompt('请输入乘数x:');
            let y = parseInt(prompt('请输y入被乘数y:'));
            alert(x + ' x ' + y + ' = ' + (x * y));
        }

        //除法
        function division() {
            let x = prompt('请输入除数x:');
            let y = prompt('请输入被除数y:');
            alert(x + ' / ' + y + ' = ' + (x / y));
        }

    </script>
```



### 5.3 - while do..while

5.4 - 

## 06-对象

​	JS是一门基于对象的语言，使用对象

​	JS可以模拟面向对

### 概念：

#### 什么是对象？

​	万物皆对象

​	找对象：看得见，摸得着，具体特指的某个东西

- 什么是对象？

  在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。
   	对象是由属性和方法组成的。

- 属性：事物的特征，在对象中用属性来表示（常用名词）

- 方法：事物的行为，在对象中用方法来表示（常用动词）

#### 分析对象有什么特点

​	特征和行为：具体特指的某一个事务



#### - 创建对象的三种方式

#### - 利用字面量创建对象 

```
	就是花括号 { } 里面包含了表达这个具体事物（对象）的属性和方法；{ } 里面采取键值对的形式表示 
```

- 键：相当于属性名

- 值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）

  代码如下：

  ```js
  var star = {
      name : 'pink',
      age : 18,
      sex : '男',
      sayHi : function(){
          alert('大家好啊~');
      }
  };
  ```

  上述代码中 star即是创建的对象。

- 对象的使用

  - 对象的属性

    - 对象中存储**具体数据**的 "键值对"中的 "键"称为对象的属性，即对象中存储具体数据的项

  - 对象的方法

    - 对象中存储**函数**的 "键值对"中的 "键"称为对象的方法，即对象中存储函数的项

  - 访问对象的属性

    - 对象里面的属性调用 : 对象.属性名 ，这个小点 . 就理解为“ 的 ”  

    - 对象里面属性的另一种调用方式 : 对象[‘属性名’]，注意方括号里面的属性必须加引号      

      示例代码如下：

      ```js
      console.log(star.name)     // 调用名字属性
      console.log(star['name'])  // 调用名字属性
      ```

  - 调用对象的方法

    - 对象里面的方法调用：对象.方法名() ，注意这个方法名字后面一定加括号 

      示例代码如下：

      ```js
      star.sayHi();              // 调用 sayHi 方法,注意，一定不要忘记带后面的括号
      ```

  - 变量、属性、函数、方法总结

    属性是对象的一部分，而变量不是对象的一部分，变量是单独存储数据的容器

  - 变量：单独声明赋值，单独存在

  - 属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征



```
	方法是对象的一部分，函数不是对象的一部分，函数是单独封装操作的容器

- 函数：单独存在的，通过“函数名()”的方式就可以调用
- 方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能。 
```



#### - 调用系统的构造函数创建对象

- 创建空对象

  ```js
  var andy = new Obect();
  ```

  通过内置构造函数Object创建对象，此时andy变量已经保存了创建出来的空对象

- 给空对象添加属性和方法

  - 通过对象操作属性和方法的方式，来为对象增加属性和方法

    示例代码如下：

  ```js
  andy.name = 'pink';
  andy.age = 18;
  andy.sex = '男';
  andy.sayHi = function(){
      alert('大家好啊~');
  }
  ```

  注意：

  - Object() ：第一个字母大写   
  - new Object() ：需要 new 关键字
  - 使用的格式：对象.属性 =  值;    

```javascript
//实例化对象
var obj = new Object();
/*
	特征：属性
	行为：方法
*/
//添加属性
obj.name = "cnyangx";
obj.age = 23;
....
//添加方法
obj.eat = function(){
    //方法体
    .....
};

```

 

#### - 创建构造函数

- 构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

- 构造函数的封装格式：

  ```js
  function 构造函数名(形参1,形参2,形参3) {
       this.属性名1 = 参数1;
       this.属性名2 = 参数2;
       this.属性名3 = 参数3;
       this.方法名 = 函数体;
  }
  ```

- 构造函数的调用格式

  ```
  var obj = new 构造函数名(实参1，实参2，实参3)

  ```

  以上代码中，obj即接收到构造函数创建出来的对象。

- 注意事项

  1. 构造函数约定**首字母大写**。
  2. 函数内的属性和方法前面需要添加 **this** ，表示当前对象的属性和方法。
  3. 构造函数中**不需要 return 返回结果**。
  4. 当我们创建对象的时候，**必须用 new 来调用构造函数**。

- 其他

  构造函数，如 Stars()，抽象了对象的公共部分，封装到了函数里面，它泛指某一大类（class）  
  创建对象，如 new Stars()，特指某一个，通过 new 关键字创建对象的过程我们也称为对象实例化

- new关键字的作用
  1. 在构造函数代码开始执行之前，创建一个空对象；
  2. 修改this的指向，把this指向创建出来的空对象；
  3. 执行函数的代码
  4. 在函数完成之后，返回this---即创建出来的对象

```javascript
function Person(userName, age, sex) {
    this.name = userName;
    this.age = age;
    this.sex = sex;
    this.eat = function (food) {
        console.log(userName + '正在吃' + food);
    };
}

//使用构造函数创建对象
var laoyang = new Person('laoyang', 18, '男');
laoyang.eat('火锅');
```

```javascript
<script>
    var hero = function (name, type, blood, attactPattern) {
        this.hname = name;
        this.htype = type;
        this.hblood = blood;
        this.attactPattern = attactPattern;
        this.toString = function () {
            console.log('英雄名 ：' + this.hname + '  英雄类型：' + this.htype + '  血量：' + this.hblood + '  攻击方式：' + this.attactPattern);
        }
    };

    var lianPo = new hero('廉颇', '力量型', '500','近战');
    var houYi = new hero('后羿', '射手型', '1000','远程');
    lianPo.toString();
    houYi.toString();
</script>
```



####  - 遍历对象

```
for...in 语句用于对数组或者对象的属性进行循环操作。

其语法如下：
```

```js
for (变量 in 对象名字) {
    // 在此执行代码
}
```

```
语法中的变量是自定义的，它需要符合命名规范，通常我们会将这个变量写为 k 或者 key。

```

```js
for (var k in obj) {
    console.log(k);      // 这里的 k 是属性名
    console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```

-- 弊端： -- 遍历对象里面的方法时 将方法体全部打印出来了（并没有执行想要执行的代码，。。。。）

```javascript
 <script>
        var hero = function (name, type, blood, attactPattern) {
            this.hname = name;
            this.htype = type;
            this.hblood = blood;
            this.attactPattern = attactPattern;
            this.toString = function () {
                console.log('英雄名 ：' + this.hname + '  英雄类型：' + this.htype + '  血量：' + this.hblood + '  攻击方式：' + this.attactPattern);
            }
        };

        var lianPo = new hero('廉颇', '力量型', '500','近战');
        var houYi = new hero('后羿', '射手型', '1000','远程');
        lianPo.toString();
        houYi.toString();

        //遍历对象
        //对象里面的属性无序的 不能用传统的for循环来遍历对象的属性
        // for(变量 in 对象)
        for(var k in lianPo){
            // console.log(k); // k 变量 输出的是属性名
            // hhname
            // htype
            // hblood
            // attactPattern
            // toString
            console.log(lianPo[k]); //正确的格式
            // 廉颇
            // 力量型
            // 500
            // 近战
            // ƒ () {
            //     console.log('英雄名 ：' + this.hname + '  英雄类型：' + this.htype + '  血量：' + this.hblood + '  攻击方式：' + this.attactPattern);
            // }
        }
</script>
```



### 	

### 6-1-arguments

​	arguments是一个对象，是一个伪数组

```javascript
	arguments.length	---> 获取函数传递的实参个数
	
	arguments.[index]	---> 根据索引（函数中实参的顺序位置），获取传递的实参的值 
```



### 6.2-string对象

#### 6.2.1-方法

```javascript
String
    length	返回字符串的长度

    与HTML相关的方法
        --bold();//加粗
        --fontcolor();//设置字体颜色
        --fontsize();//设置字体大小
        --link();//将字符串显示为超链接  参数为超链接地址
        --sub();//下标
        --sup();//上标

    与java相似的方法
        --concat();// 连接字符串
        --charAt();// 返回指定位置的字符串
        --indexOf();// 返回指定字符串的位置
        --split();// 把字符串切分成数组

```



#### 6.2.2-bold()

​	在HTML中写入文本并加粗

```javascript
 var str = "yangxiuqian";
 document.write(str.bold());
```



#### 6.2.3-link()

```javascript
document.write("baidu".link("http;//www.baidu.com"));
```

![](resouce\JavaScript\string-bold-link.PNG)

### 6.3 - 内置对象

 	JavaScript 中的对象分为3种：**自定义对象 、内置对象、 浏览器对象**

​	前面两种对象是JS 基础 内容，属于 ECMAScript；  第三个浏览器对象属于 JS 独有的， JS API 讲解内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是**最基本而必要的功能**（属性和方法），内置对象最大的优点就是帮助我们快速开发

​	 JavaScript 提供了多个内置对象：Math、 Date 、Array、String等	

#### 6.3.1 查文档

​		查找文档：学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。
​		Mozilla 开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括 HTML、CSS 和万维网及 HTML5 应用的 API。
​		MDN:https://developer.mozilla.org/zh-CN/

#### 6.3.2 Math对象

​		Math 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用 Math 中的成员。

|        属性、方法名         |               功能               |
| :-------------------: | :----------------------------: |
|        Math.PI        |              圆周率               |
|     Math.floor()      |              向下取整              |
|      Math.ceil()      |              向上取整              |
|     Math.round()      | 四舍五入版 就近取整   注意 -3.5   结果是  -3 |
|      Math.abs()       |              绝对值               |
| Math.max()/Math.min() |            求最大和最小值             |
|     Math.random()     |        获取范围在[0,1)内的随机值         |

注意：上面的方法使用时必须带括号



​	**获取指定范围内的随机整数**：

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
```

#### 6.3.3 日期对象

​	 Date 对象和 Math 对象不一样，Date是一个构造函数，所以使用时需要实例化后才能使用其中具体方法和属性。Date 实例用来处理日期和时间

- 使用Date实例化日期对象

  - 获取当前时间必须实例化：

  ```js
  var now = new Date();
  ```

  - 获取指定时间的日期对象

  ```js
  var future = new Date('2019/5/1');
  ```

  注意：如果创建实例时并未传入参数，则得到的日期对象是当前时间对应的日期对象

   使用Date实例的方法和属性	

  ![](resouce\JavaScript\使用Date实例的方法和属性.png)

- 通过Date实例获取总毫米数

  - 总毫秒数的含义

    ​	基于1970年1月1日（世界标准时间）起的毫秒数

  - 获取总毫秒数

    ```js
    // 实例化Date对象
    var now = new Date();
    // 1. 用于获取对象的原始值
    console.log(date.valueOf())	
    console.log(date.getTime())	
    // 2. 简单写可以这么做
    var now = + new Date();			
    // 3. HTML5中提供的方法，有兼容性问题
    var now = Date.now();
    ```

#### 6.3.4 数组对象

##### 创建数组的两种方式

- 字面量方式

  - 示例代码如下：

    ```js
    var arr = [1,"test",true];
    ```

- new Array()

  - 示例代码如下：

    ```
    var arr = new Array();
    ```

    ​	注意：上面代码中arr创建出的是一个空数组，如果需要使用构造函数Array创建非空数组，可以在创建数组时传入参数

    ​	参数传递规则如下：

    - 如果只传入一个参数，则参数规定了数组的长度
    - 如果传入了多个参数，则参数称为数组的元素

##### 检测是否为数组

- instanceof 运算符

  - instanceof 可以判断一个对象是否是某个构造函数的实例

    ```js
    var arr = [1, 23];
    var obj = {};
    console.log(arr instanceof Array); // true
    console.log(obj instanceof Array); // false
    ```

- Array.isArray()

  - Array.isArray()用于判断一个对象是否为数组，isArray() 是 HTML5 中提供的方法

    ```js
    var arr = [1, 23];
    var obj = {};
    console.log(Array.isArray(arr));   // true
    console.log(Array.isArray(obj));   // false
    ```

##### 添加删除数组元素的方法

- 数组中有进行增加、删除元素的方法，部分方法如下表

  ![!](resouce\JavaScript\添加删除数组元素的方法.png)

  注意：push、unshift为增加元素方法；pop、shift为删除元素的方法

##### 数组排序

- 数组中有对数组本身排序的方法，部分方法如下表

  ![](resouce\JavaScript\数组中有对数组本身排序的方法.png)

  注意：sort方法需要传入参数来设置升序、降序排序

  - 如果传入“function(a,b){ return a-b;}”，则为升序
  - 如果传入“function(a,b){ return b-a;}”，则为降序

##### 数组索引方法

- 数组中有获取数组指定元素索引值的方法，部分方法如下表

  ![](resouce\JavaScript\数组中有获取数组指定元素索引值的方法.png)

##### 数组转换为字符串

- 数组中有把数组转化为字符串的方法，部分方法如下表

  ![](resouce\JavaScript\数组中有把数组转化为字符串的方法.png)

  注意：join方法如果不传入参数，则按照 “ , ”拼接元素

##### 其他方法

- 数组中还有其他操作方法，同学们可以在课下自行查阅学习

  ![](resouce\JavaScript\数组中还有其他操作方法.png)

#### 6.3.5 字符串对象

##### 基本包装类型

​		为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean。

​		基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。

```js
// 下面代码有什么问题？
var str = 'andy';
console.log(str.length);
```

​		按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，但上面代码却可以执行，这是因为

​		js 会把基本数据类型包装为复杂数据类型，其执行过程如下 ：

```js
// 1. 生成临时变量，把简单类型包装为复杂数据类型
var temp = new String('andy');
// 2. 赋值给我们声明的字符变量
str = temp;
// 3. 销毁临时变量
temp = null;
```

##### 字符串的不可变

​		指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。

​		当重新给字符串变量赋值的时候，变量之前保存的字符串不会被修改，依然在内存中重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变。
​		由于字符串的不可变，在**大量拼接字符串**的时候会有效率问题

##### 根据字符返回位置

​		字符串通过基本包装类型可以调用部分方法来操作字符串，以下是返回指定字符的位置的方法：

![](resouce\JavaScript\返回指定字符的位置的方法.png)

​		案例：查找字符串"abcoefoxyozzopp"中所有o出现的位置以及次数

1. 先查找第一个o出现的位置
2. 然后 只要indexOf 返回的结果不是 -1 就继续往后查找
   . 因为indexOf 只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找 	

##### 根据位置返回字符

​		字符串通过基本包装类型可以调用部分方法来操作字符串，以下是根据位置返回指定位置上的字符：

![](resouce\JavaScript\根据位置返回指定位置上的字符.png)

​		在上述方法中，charCodeAt方法返回的是指定位置上字符对应的ASCII码，ASCII码对照表如下：

![](resouce\JavaScript\ASCII码对照表.png)

​		案例：判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数

1. 核心算法：利用 charAt(） 遍历这个字符串

2. 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1

   . 遍历对象，得到最大值和该字符 	

    ​	注意：在遍历的过程中，把字符串中的每个字符作为对象的属性存储在对象总，对应的属性值是该字符出现的次数

##### 字符串操作方法

​		字符串通过基本包装类型可以调用部分方法来操作字符串，以下是部分操作方法：

![](resouce\JavaScript\字符串操作方法.png)

##### replace()方法

​		replace() 方法用于在字符串中用一些字符替换另一些字符，其使用格式如下：  

```
字符串.replace(被替换的字符串， 要替换为的字符串)；
```

##### split()方法

​		split()方法用于切分字符串，它可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。

​		其使用格式如下：

```
字符串.split("分割字符")
```

### 6.4 - 简单数据类型和复杂数据类型

#### 6.4.1 简单数据类型

```
简单类型（基本数据类型、值类型）：在存储时变量中存储的是值本身，包括string ，number，boolean，undefined，null		
```

####  6.4.2 复杂数据类型

​		复杂数据类型（引用类型）：在存储时变量中存储的仅仅是地址（引用），通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等；

#### 6.4.3 堆栈

- 堆栈空间分配区别：

　　1、栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；

简单数据类型存放到栈里面

　　2、堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。

![](resouce\JavaScript\堆栈空间分配.png)

- 简单数据类型的存储方式

  ​		值类型变量的数据直接存放在变量（栈空间）中

![](resouce\JavaScript\值类型变量的数据直接存放在变量（栈空间）中.png)

- 复杂数据类型的存储方式

  ​		引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中

  ![](resouce\JavaScript\对象实例存放在堆空间中.png)

#### 6.4.4 简单类型传参

​		函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。

```js
function fn(a) {
    a++;
    console.log(a); 
}
var x = 10;
fn(x);
console.log(x)；
```

​		

#### 6.4.5 复杂数据类型传参

​		函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。

```javascript
function Person(name) {
    this.name = name;
}
function f1(x) { // x = p
    console.log(x.name); // 2. 这个输出什么 ?    
    x.name = "张学友";
    console.log(x.name); // 3. 这个输出什么 ?    
}
var p = new Person("刘德华");
console.log(p.name);    // 1. 这个输出什么 ?   
f1(p);
console.log(p.name);    // 4. 这个输出什么 ?  
```





## 07 - 作用域链和预解析

### 7.1 - 作用域链

#### 7.1.1 - JS没有块级作用域（ES6之前）

- 块作用域由 { } 包括。

  在其他编程语言中（如 java、c#等），在 if 语句、循环语句中创建的变量，仅仅只能在本 if 语句、本循环语句中使用，如下面的Java代码：	

  java有块级作用域：

```java
  if(true){
    int num = 123;
    system.out.print(num);  // 123
  }
  system.out.print(num);    // 报错
```

  以上java代码会报错，是因为代码中 { } 即一块作用域，其中声明的变量 num，在 “{ }” 之外不能使用；

  而与之类似的JavaScript代码，则不会报错：



  Js中没有块级作用域（在ES6之前）

```js
  if(true){
    var num = 123;
    console.log(123); //123
  }
  console.log(123);   //123
```

 

#### 7.1.2 - 作用域链

​	只要是代码都一个作用域中，写在函数内部的局部作用域，未写在任何函数内部即在全局作用域中；如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域；根据在**[内部函数可以访问外部函数变量]**的这种机制，用链式查找决定哪些数据能被内部函数访问，就称作作用域链

```js
<script>
        var a = 'a';
        function f1() {
            var b = 'b';
            console.log('a : ' + a);
            console.log('b : ' + b);
            if(a = 'a'){
                var dd = 'dd';
                console.log('dd : ' + dd);
            }
            console.log('dd : ' + dd);
            console.log('---------------' );
            function f2() {
                var c = 'c';
                console.log('dd : ' + dd);
                console.log('a : ' + a);
                console.log('b : ' + b);
                console.log('---------------' );
            }
            f2();
        }
        f1();
        console.log('a : ' + a);
        // console.log('dd : ' + dd);      //: dd is not defined
        // console.log('b : ' + b);    //b is not defined
        // console.log('c : ' + c);    //c is not defined
    </script>
```



### 7.2 - 预解析

预解析的相关概念

```
JavaScript 代码是由浏览器中的 JavaScript 解析器来执行的。JavaScript 解析器在运行 JavaScript 代码的时候分为两步：预解析和代码执行。
```

- 预解析：在当前作用域下, JS 代码执行之前，浏览器会默认把带有 var 和 function 声明的变量在内存中进行提前声明或者定义。

- 代码执行： 从上到下执行JS语句。

  **预解析会把变量和函数的声明在代码执行之前执行完成。**

  ***函数名与变量名冲突的时候，优先提升函数的声明，再提升变量的声明****

#### 7.2.1 -  变量预解析

```
预解析也叫做变量、函数提升。
变量提升（变量预解析）： 变量的声明会被提升到当前作用域的最上面，变量的赋值不会提升。
```

```js
console.log(num);  // 结果是多少？
var num = 10;      // ？
```

```js
变量定义了未赋值类型为undefined
console.log(num); // undefined  var num 被提前了，但是预解析时变量声明提升赋值不提升
var num = 10;

变量没有定义就被调用：** is not defined
console.log(num);   //num is not defined

结果：undefined

注意：**变量提升只提升声明，不提升赋值**
```

#### 7.2.2 - 函数预解析

```
函数提升： 函数的声明会被提升到当前作用域的最上面，但是不会调用函数。
```

```js
fn();
function fn() {
    console.log('打印');
}
```

```
结果：控制台打印字符串 --- ”打印“ 

注意：函数声明代表函数整体，所以函数提升后，函数名代表整个函数，但是函数并没有被调用！	
```

#### 7.2.3函数表达式声明函数问题

```
函数表达式创建函数，会执行变量提升，此时接收函数的变量名无法正确的调用：
```

```js
fn();
var  fn = function() {
    console.log('想不到吧');
}
```

```js
结果：报错提示 ”fn is not a function"

解释：该段代码执行之前，会做变量声明提升，fn在提升之后的值是undefined；而fn调用是在fn被赋值为函数体之前，此时fn的值是undefined，所以无法正确调用
```

## 



### js执行引擎并非一行一行地分析和执行程序，而是一段一段地分析执行的。

```javascript
<script type="text/javascript">
    function myfunc() {
        alert("hello");
    };

    myfunc();   //console print yangx

    function myfunc() {
        alert("yangx");
    };

    myfunc();   //console print yangx
    /**
     *      js执行引擎并非一行一行地分析和执行程序，而是一段一段地分析执行的。
     * 而且，在同一段程序的分析执行中，定义式的函数语句会被提取出来优先执行。
     * 函数定义执行完之后，才会按顺序执行其它语句代码。
     *  也就是说，在第一次调用myfunc之前，第一个函数语句定义的代码逻辑，已经被第二个函数定义语句覆盖了。
     * 所以两次调用都输执行最后一次定义的函数逻辑。
     * **/
</script>
```



### 在html页面中可以写多个script标签

```javascript
<body>
<script type="text/javascript">
    function myfunc() {
        alert("hello");
    };

    myfunc();   //console print yangx
</script>

<script type="text/javascript">
    function myfunc() {
        alert("hello");
    };

    myfunc();   //console print yangx
    /***
     * 各自按顺序输出，证明了js的确是一段段执行的
     * **/
</script>
</body>
```





## 08 - DOM

#### 概念

​	文档对象模型（Document Object Model，简称DOM），是 [W3C](https://baike.baidu.com/item/W3C) 组织推荐的处理[可扩展标记语言](https://baike.baidu.com/item/%E5%8F%AF%E6%89%A9%E5%B1%95%E7%BD%AE%E6%A0%87%E8%AF%AD%E8%A8%80)（html或者xhtml）的标准[编程接口](https://baike.baidu.com/item/%E7%BC%96%E7%A8%8B%E6%8E%A5%E5%8F%A3)。

​	W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。

> DOM是W3C组织制定的一套处理 html和xml文档的规范，所有的浏览器都遵循了这套标准。

**DOM树**

![](resouce\JavaScript\DOM树结构.png)

``` 
							  		文档
									 |
							 	  根元素<html>
							   		 |
				   -----------------------------------
				  元素<head>                        元素<body>
				   |                                   |
				 元素<titile>         属性<href> -----元素<a>-------元素<h1>
		 		   文本     						   |			|
                  `文档标题`						 文本			 文本
                   								 ‘我的链接’      ‘我的链接’
```

DOM树 又称为文档树模型，把文档映射成树形结构，通过节点对象对其处理，处理的结果可以加入到当前的页面。

- 文档：一个页面就是一个文档，DOM中使用document表示
- 节点：网页中的所有内容，在文档树中都是节点（标签、属性、文本、注释等），使用node表示
- 标签节点：网页中的所有标签，通常称为元素节点，又简称为“元素”，使用element表示



​	js的DOM操作可以改变网页内容，结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。



### 8.1 - 改变元素的内容

#### 8.1.1 获取元素

##### 8.1.1.1  根据ID获取

```js
语法：document.getElementById(id)
作用：根据ID获取元素对象
参数：id值，区分大小写的字符串
返回值：元素对象 或 null
```

**案例代码**

```js
<body>
    <div id="time">2019-9-9</div>
    <script>
        // 因为我们文档页面从上往下加载，所以先得有标签 所以我们script写到标签的下面
        var timer = document.getElementById('time');
        console.log(timer);
        console.log(typeof timer);
        // console.dir 打印我们返回的元素对象 更好的查看里面的属性和方法
        console.dir(timer);
    </script>
</body>
```

##### 8.1.1.2 根据标签名获取元素

```
语法：document.getElementsByTagName('标签名') 或者 element.getElementsByTagName('标签名') 
作用：根据标签名获取元素对象
参数：标签名
返回值：元素对象集合（伪数组，数组元素是元素对象）
```

**案例代码**

```javascript
<body>
    <ul>
        <li>知否知否，应是等你好久11</li>
        <li>知否知否，应是等你好久22</li>
        <li>知否知否，应是等你好久33</li>
        <li>知否知否，应是等你好久44</li>
        <li>知否知否，应是等你好久55</li>
    </ul>
    <ul id="nav">
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>
    </ul>
    <script>
        // 1.返回的是 获取过来元素对象的集合 以伪数组的形式存储的
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
        // 2. 我们想要依次打印里面的元素对象我们可以采取遍历的方式
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);
        }
        // 3. element.getElementsByTagName()  可以得到这个元素里面的某些标签
        var nav = document.getElementById('nav'); // 这个获得nav 元素
        var navLis = nav.getElementsByTagName('li');
        console.log(navLis);
    </script>
</body>
```

> `注意：`
>
> > ​	1、因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历；
> >
> > ​	2、得到元素对象是动态的。

> `注意：`
>
> > getElementsByTagName()获取到是动态集合，即：当页面增加了标签，这个集合中也就增加了元素。

##### 8.1.1.3 H5新增获取元素的方式

```
document.getElementByClassName('类名');	//根据类名返回元素对象集合

document.querySelector('选择器');	//根据指定选择器返回第一个元素对象

document.querySelectorAll('选择器');	//根据指定选择器返回
```

> 注意：
>
> ​	querySelector和querySelectorAll里面的选择器需要加符号，比如：document.querySelector('#nav')

**案例代码**

```js
<body>
    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        // 1. getElementsByClassName 根据类名获得某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
        // 2. querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav
        var firstBox = document.querySelector('.box');
        console.log(firstBox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li');
        console.log(li);
        // 3. querySelectorAll()返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);
        var lis = document.querySelectorAll('li');
        console.log(lis);
    </script>
</body>
```

##### 8.1.1.4 、获取特殊元素(body、html)

获取body元素

```js
document.body	//返回body元素对象
```

获取html元素

```js
document.documenElement	//返回html元素对象
```





#### 8.1.2 改变元素内容

```js
element.innerText
```

从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

```
element.innerHtTML
```

起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

##### 8.1.2.1  innerText改变元素内容        

```js
<body>
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <p>1123</p>
    <script>
        // 当我们点击了按钮，  div里面的文字会发生变化
        // 1. 获取元素 
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        // 2.注册事件
        btn.onclick = function() {
            // div.innerText = '2019-6-6';
            div.innerHTML = getDate();
        }
        function getDate() {
            var date = new Date();
            // 我们写一个 2019年 5月 1日 星期三
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            var day = date.getDay();
            return '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day];
        }
    </script>
</body>
```

##### 8.1.2.2  innerText和innerHTML的区别

- 获取内容时的区别：

  innerText会去除空格和换行，而innerHTML会保留空格和换行	

- 设置内容时的区别：

  innerText不会识别html，而innerHTML会识别

**案例代码**

```js
<body>
    <div></div>
    <p>
        我是文字
        <span>123</span>
    </p>
    <script>
        // innerText 和 innerHTML的区别 
        // 1. innerText 不识别html标签 非标准  去除空格和换行
        var div = document.querySelector('div');
        // div.innerText = '<strong>今天是：</strong> 2019';
        // 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
        div.innerHTML = '<strong>今天是：</strong> 2019';
        // 这两个属性是可读写的  可以获取元素里面的内容
        var p = document.querySelector('p');
        console.log(p.innerText);
        console.log(p.innerHTML);
    </script>
</body>
```





### 8.2 - DOM可以操作的表单属性

利用DOM可以操作如下表单元素的属性:

```
type 、value 、 checked 、 selected 、 disabled
```

**获取属性的值**

> 元素对象.属性名

**设置属性的值**

> 元素对象.属性名 = 值
>
> 表单元素中有一些属性如：disabled、checked、selected，元素对象的这些属性的值是布尔型。

**案例代码**

```js
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2. 注册事件 处理程序
        btn.onclick = function() {
            // 表单里面的值 文字内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者 btn
        }
    </script>
</body>
```



### 8.3 - 元素样式属性操作

我们可以通过JS修改元素的大小、颜色、位置等样式

```
element.style	行内样式操作
element.className	类名样式操作
```

> **注意：**

​	`1、如果样式修改较多，可以采取操作类名的方式更改元素样式。`

​	`2、class因为是个保留字，因此使用className来操作元素类名属性。`

​	`3、className会直接更改元素的类名，会覆盖原先的类名。`



### 8.4 - 操作常见元素属性

```
src 、 href 、 title 、 alt....
```

**获取属性的值**

> 元素对象.属性名

**设置属性的值**

> 元素对象.属性名 = 值

**案例代码**	

```js
<body>
    <button id="ldh">刘德华</button>
    <button id="zxy">张学友</button> <br>
    <img src="images/ldh.jpg" alt="" title="刘德华">
    <script>
        // 修改元素属性  src
        // 1. 获取元素
        var ldh = document.getElementById('ldh');
        var zxy = document.getElementById('zxy');
        var img = document.querySelector('img');
        // 2. 注册事件  处理程序
        zxy.onclick = function() {
            img.src = 'images/zxy.jpg';
            img.title = '张学友思密达';
        }
        ldh.onclick = function() {
            img.src = 'images/ldh.jpg';
            img.title = '刘德华';
        }
    </script>
</body>
```



### 8.5 - 样式属性操作

通过js可以修改元素的大小、颜色、位置等样式

常用方式：

```
element.style  行内样式操作
element.className 类名样式操作 --（通过改变元素的类来改变元素的样式）
```





#### 方式1：通过操作style属性

> 元素对象的style属性也是一个对象！
>
> 元素对象.style.样式属性 = 值;

**注意：**

​	1、JS里面的样式采取驼峰命名法、比如fontsize、backgroundColor

​	2、JS修改Style样式操作，产生的是行内样式，CSS权重比较高

**案例代码**

```js
<body>
    <div></div>
    <script>
        // 1. 获取元素
        var div = document.querySelector('div');
        // 2. 注册事件 处理程序
        div.onclick = function() {
            // div.style里面的属性 采取驼峰命名法 
            this.style.backgroundColor = 'purple';
            this.style.width = '250px';
        }
    </script>
</body>
```

#### 常见案例：

##### 1、淘宝点击关闭二维码

> 分析：
>
> 核心思路：利用样式的显示和隐藏完成，display:none 隐藏元素 display：block显示元素
>
> 点击按钮，让盒子隐藏起来

##### 2、循环精灵图背景

> 分析：
>
> 利用for循环给一组元素设置背景
>
> 1. 首先精灵图图片排列室友规律的
> 2. 核心思路：利用for循环，修改精灵图片的背景位置 background-position
> 3. 剩下的就是考验数学功底了
> 4. 让循环里面的变量*精灵图宽/高就是每个图片的x/y坐标

##### 3、显示隐藏文本框内容

> 场景：
>
> ​	各大商城网站的搜索框：当鼠标点击文本框时，里面的默认文字隐藏，当鼠标离开文本框时，里面的文字显示。

> 分析
>
> 1. 首先表单需要2个新事件，获得焦点onfocus和失去焦点onblur
> 2. 如果获得焦点，判断表单里面的内容是否为默认文字，如果是默认文字，就清空表单内容
> 3. 如果失去焦点，判断表单内容是否为空，如果为空，则表单内容改为默认文字



#### 方式2：通过操作className属性

> 元素对象.className = 值;
>
> 因为class是关键字，所有使用className。

**注意：**

1. 如果样式修改较多，可以采取操作类名方式更改元素样式。
2. class因为是个保留字，因此使用className来操作元素类名属性。
3. className会直接更改元素的类名，会覆盖原先的类名。

**案例代码**

```js
<body>
    <div class="first">文本</div>
    <script>
        // 1. 使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
        var test = document.querySelector('div');
        test.onclick = function() {
            // this.style.backgroundColor = 'purple';
            // this.style.color = '#fff';
            // this.style.fontSize = '25px';
            // this.style.marginTop = '100px';

            // 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
            // 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器
            // this.className = 'change';
            this.className = 'first change';
        }
    </script>
</body>
```

#### 常见案例

**1、密码框格式提示错误信息**

**场景：注册账户:**

​	用户如果离开密码框，里面输入个数不是6~16，则提示错误信息，否则提示输入正确信息。

> 分析：
>
> 1. 首先判断的时间是表单失去焦点onblur
> 2. 如果输入正确则提示正确的信息颜色为绿色小图标变化
> 3. 如果输入不是6~16位，则提示错误信息颜色为红色，小图标变化为红色
> 4. 因为里面变化样式较多，我们采取className修改样式





### 8.6 Web API 

#### 8.6.1 Web  API的概念

​	Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )。

​	现阶段我们主要针对于浏览器讲解常用的 API , 主要针对浏览器做交互效果。比如我们想要浏览器弹出一个警示框， 直接使用 alert(‘弹出’)

​	MDN 详细 API : https://developer.mozilla.org/zh-CN/docs/Web/API

​	因为 Web API 很多，所以我们将这个阶段称为 Web APIs。

​	此处的 Web API 特指浏览器提供的一系列API(很多函数或对象方法)，即操作网页的一系列工具。例如：操作html标签、操作页面地址的方法。

#### 8.6.1 API 和 Web  API 总结

1. API 是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现
2. Web API 主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。
3. Web API 一般都有输入和输出（函数的传参和返回值），Web API 很多都是方法（函数）
4. 学习 Web API 可以结合前面学习内置对象方法的思路学习



### 8.7 事件

#### 8.7.1. 事件概述

JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。

简单理解： **触发--- 响应机制**。

​	网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，例如，我们可以在用户点击某按钮时产生一个 事件，然后去执行某些操作。

#### 8.7.2. 事件三要素

- 事件源（谁）：触发事件的元素
- 事件类型（什么事件）： 例如 click 点击事件
- 事件处理程序（做啥）：事件触发后要执行的代码(函数形式)，事件处理函数

**案例代码**

```js
<body>
    <button id="btn">唐伯虎</button>
    <script>
        // 点击一个按钮，弹出对话框
        // 1. 事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素
        //(1) 事件源 事件被触发的对象   谁  按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型  如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        //(3) 事件处理程序  通过一个函数赋值的方式 完成
        btn.onclick = function() {
            alert('点秋香');
        }
    </script>
</body>
```

### 

#### 8.7.3 执行事件的步骤

- ​	1、获取事件源

   ​	2、注册事件(绑定事件)

    ​	3、添加事件处理程序(采取函数赋值形式)	



`示例：`

```js
<body>
    <div>123</div>
    <script>
        // 执行事件步骤
        // 点击div 控制台输出 我被选中了
        // 1. 获取事件源
        var div = document.querySelector('div');
        // 2.绑定事件 注册事件
        // div.onclick 
        // 3.添加事件处理程序 
        div.onclick = function() {
            console.log('我被选中了');
        }
    </script>
</body>
```



#### 8.7.4 常见的鼠标事件

|    鼠标事件     |   触发条件   |
| :---------: | :------: |
|   onclick   | 鼠标点击左键触发 |
| onmouseover |  鼠标经过触发  |
| onmouseout  |  鼠标离开触发  |
|   onfocus   | 获得鼠标焦点触发 |
|   onblur    | 失去鼠标焦点触发 |
|  onmouseup  |  鼠标弹起触发  |
| onmousemove |  鼠标移动触发  |
| onmousedown |  鼠标按下触发  |

### 8.8 - 自定义属性操作

#### 8.8.1 - 获取属性值

```js
element.属性	获取属性值
element.getAttribute('属性')

区别：
element.属性 		--获取内置属性（元素本身自带的属性）
element.getAttribute('属性');		--主要获得自定义的属性(标准) 程序员自定义的属性
```

code-1：

```js
 <div id="demo" index="1" class="nav"></div>
    <script>
        var div = document.querySelector('div');
        // 1. 获取元素的属性值
        // (1) element.属性
        console.log(div.id);
        //(2) element.getAttribute('属性')  get得到获取 attribute 属性的意思 我们程序员自己添加的属性我们称为自定义属性 index
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index'));
	</script>
```

#### 8.8.2 - 设置元素属性值

```js
// (1) element.属性= '值'
div.id = 'test';
div.className = 'navs';

区别：
// (2) element.setAttribute('属性', '值');  主要针对于自定义属性
div.setAttribute('index', 2);
div.setAttribute('class', 'footer'); // class 特殊  这里面写的就是

```

####  8.8.3 - 移除属性

```
element.removeAttribute('属性)

// class 不是className
// 3 移除属性 removeAttribute(属性)    
div.removeAttribute('index');
```

#### 8.8.4 - H5自定义属性

​	自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。

自定义属性获取是通过getAttribute(‘属性’) 获取。

​	但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。

H5给我们新增了自定义属性：

**（1）设置H5自定义属性**

H5规定自定义属性以 date- 开头作为属性名并且赋值

```js
比如：<div date-index="1"></div>

或者使用JS设置

element.setAttribute('date-index', 2);

```

（2）获取H5自定义属性

```js
1、兼容性获取 element.getAttribute('data-index');
2、H5新增 element.dataset.index 或者 element.dataset['index']  ie11才开始支持
```

案例：

```js
    <div getTime="20" data-index="2" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div');
        // console.log(div.getTime);
        console.log(div.getAttribute('getTime'));
        div.setAttribute('data-time', 20);
        console.log(div.getAttribute('data-index'));
        console.log(div.getAttribute('data-list-name'));
        // h5新增的获取自定义属性的方法 它只能获取data-开头的
        // dataset 是一个集合里面存放了所有以data开头的自定义属性
        console.log(div.dataset);
        console.log(div.dataset.index);
        console.log(div.dataset['index']);
        // 如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法
        console.log(div.dataset.listName);
        console.log(div.dataset['listName']);
    </script>
```



### 8.9 - 节点操作

#### 8.9.1 - 概念

网页中的所有内容都是节点（标签、属性、文本、注释），在DOM中，节点使用node来表示。

HTML DOM树中的所有节点均可通过JS进行访问，所有HTML元素（节点）均可被修改，也可以创建或者删除。

一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

- 元素节点	nodeType 	为	1

   属性节点	nodeType 	为 	2	

    文本节点	nodeType	为	3   （文本节点包含文字、空格、换行等）

  > 我们在实际开发中，节点操作主要的操作对象是元素节点

#### 8.9.2 - 节点层级

利用DOM树可以把节点划分为不同层级关系，常见的是父子、兄弟层级关系。

![](resouce\JavaScript\DOM树结构.png)

#### 8.9.3 - 父级节点

```js
node.parentNode

parentNode属性可以返回某节点的父节点，注意是最近的一个父节点

如果指定的节点没有父节点则返回null
```

```js
 <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>
    <script>
        // 1. 父节点 parentNode
        var erweima = document.querySelector('.erweima');
        // var box = document.querySelector('.box');
        // 得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null
        console.log(erweima.parentNode);
    </script>
```



#### 8.9.4 - 子节点

（1）所有子节点

`parentNode.childNodes	 (标准)`

> - patrentNode.childNodes	返回指定节点的子节点的集合，该集合为即时更新的集合。
>
> - 注意： 返回值里面包含了所有的子节点，包括元素节点，文本节点等。
>   如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes。



（2）子元素节点

`parentNode.children	(非标准)`

> - parentNode.children	 是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回（重点）
> - 虽然children是一个非标准，但是得到了各个浏览器的支持，因此可以放心使用。



```js
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <script>
        // DOM 提供的方法（API）获取
        var ul = document.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        // 1. 子节点  childNodes 所有的子节点 包含 元素节点 文本节点等等
        console.log(ul.childNodes);
        console.log(ul.childNodes[0].nodeType);
        console.log(ul.childNodes[1].nodeType);
        // 2. children 获取所有的子元素节点 也是我们实际开发常用的
        console.log(ul.children);
    </script>
```

（3）第一个子节点

`parentNode.firstChild`

> - firstChild	返回的第一个子节点，找不到则返回null。同样，也是包含所有的节点。



（4）最后一个子节点

`parentNode.lastChild`

> - lastChild		返回最后一个子节点，找不到则返回null。同样也是包含所有的节点。



（5）第一个元素节点（兼容性问题）

`parentNode.firstElementChild`

> - firstElementChild		返回第一个子元素节点，找不到则返回null



（6）最后一个子元素节点 （兼容性问题）

`parentNode.lastElementChild`

> - lastElementChild		返回最后一个子元素节点，找不到则返回null。

《！！！！！！！！！！	注意兼容性问题 5、6 IE9以上才支持	！！！！！！！！！》



​	实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而 firstElementChild 和 lastElementChild 又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？

> 解决方案：
>
> ​	1、如果想要第一个子元素节点，可以使用parentNode.children[0]
>
> ​	2、如果想要最后一个子元素节点，可以使用parentNode.children[parentNode.children.length - 1]

```js
    <ol>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
        <li>我是li5</li>
    </ol>
    <script>
        var ol = document.querySelector('ol');
        // 1. firstChild 第一个子节点 不管是文本节点还是元素节点
        console.log(ol.firstChild);
        console.log(ol.lastChild);
        // 2. firstElementChild 返回第一个子元素节点 ie9才支持
        console.log(ol.firstElementChild);
        console.log(ol.lastElementChild);
        // 3. 实际开发的写法  既没有兼容性问题又返回第一个子元素
        console.log(ol.children[0]);
        console.log(ol.children[ol.children.length - 1]);
    </script>
```

#### 8.9.5 - 兄弟节点

（1）下一个兄弟节点

`node.nextSibling`

> nextSilling	返回当前元素的下一个兄弟节点，找不到则返回null。



（2）上一个兄弟节点

`node.previousSibling`

> previousSibling	返回当前元素上一个兄弟节点，占不到则返回null

```js
 <div>我是div</div>
<span>我是span</span>

<script>
     var div = document.querySelector('div');
    // 1.nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等
    console.log(div.nextSibling);
    console.log(div.previousSibling);
    // 2. nextElementSibling 得到下一个兄弟元素节点
    console.log(div.nextElementSibling);
    console.log(div.previousElementSibling);
</script>
```



（3）下一个兄弟元素节点（有兼容性问题）IE9

`node.nextElementSibling`

> nextElementSibling	返回当前元素下一个兄弟元素节点，找不到则返回null



（4）上一个兄弟元素节点（有兼容性问题）IE9

`node.previousElementSibling`

> previousElementSibling	返回当前元素上一兄弟节点，找不到则 返回null。

怎么解决兼容性问题呢？？

​	-- 自己封装一个兼容性函数（方法）

```
function getNextElementSibling（element）{
    var el = element;	//定义一个变量el接收传进来的element元素
    while(el = el.nextSibling){	//存在下一个兄弟节点则继续
        if(el.nodeType === 1)	//前文说到 如果是element则返回 1 所以判断nodeType返回值是否 === 1
        	return el;
    }
    return null;
}
```



#### 8.9.6 - 创建节点

`document.creatElement('tagName/elementName');`

document.creatElement()	方法创建由tagName指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为**动态创建元素节点。**



#### 8.9.7 - 添加节点

（1）`node.appendChild(child)`

node.appendChild()	方法将一个节点**添加到指定父节点的字节点列表末尾**。类似于CSS里面的after伪元素。



（2）`node.insertBefore(child, 指定元素)`

node.insertBefore() 	方法将一个节点**添加到父节点的指定子节点前面**。类似于CSS里面的before伪元素

```js
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 1. 创建节点元素节点
        var li = document.createElement('li');
        // 2. 添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        // 3. 添加节点 node.insertBefore(child, 指定元素);
        var lili = document.createElement('li');
        ul.insertBefore(lili, ul.children[0]);
        // 4. 我们想要页面添加一个新的元素 ： 1. 创建元素 2. 添加元素
    </script>
```



#### 8.9.8 - 留言板

> 1、创建一个textarea button ul
>
> 2、在textarea里面输入内容，点击按钮，实现将内容添加到 ul 里面（需要创建并添加一个li）
>
> 3、新的留言在前面显示用insertBefore，在后面显示就用appendChild

```js
<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 2. 注册事件
        btn.onclick = function() {
            if (text.value == '') {
                alert('您没有输入内容');
                return false;
            } else {
                // console.log(text.value);
                // (1) 创建元素
                var li = document.createElement('li');
                // 先有li 才能赋值
                li.innerHTML = text.value;
                // (2) 添加元素
                // ul.appendChild(li);
                ul.insertBefore(li, ul.children[0]);
            }
        }
    </script>
</body>
```

#### 8.9.9 - 删除节点

`node.removeChild(child)`

> node.removeChild( )方法从node节点中删除一个子节点，返回删除的节点

```js
<body>
    <button>删除</button>
    <ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
    <script>
        // 1.获取元素
        let btn = document.querySelector('button');
       let ul = document.querySelector('ul');
       //删除元素
       //  ul.removeChild(ul.children[1]);
        //点击按钮依次删除里面的子元素
        btn.onclick = function () {
            ul.removeChild(ul.children[0]);
            if (ul.children.length === 0)
                this.disabled = 'true';
        }
    </script>
</body>
```

#### 8.9.10 - 删除留言案例

`分析：`

> 1. 当我们把文本域里面的值赋给 li 的时候，多添加一个删除的链接
> 2. 需要把所有的链接获取过来，当我们点击链接的时候，删除链接所在的 li
> 3. 阻止链接跳转可以添加  href = "javascript:;" 或者 href = "javascript:void(0)"

```js
<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // 1. 获取元素
       let textarea = document.querySelector('textarea');
       let btn = document.querySelector('button');
       let ul = document.querySelector('ul');
       //注册事件
        btn.onclick = function () {
            if(textarea.value === ''){
                alert('请输入留言内容！');
                return false;
            }else {
                //创建元素
                let li = document.createElement('li');
                li.innerHTML = textarea.value + '<a href="javascript:;">删除</a>';
                //添加元素
                ul.insertBefore(li, ul.children[0]);

                //删除元素
                //获取元素
                let as = document.querySelectorAll('a');
                for (let i = 0; i < as.length; i++) {
                    as[i].onclick = function () {
                        // node.removeChildren(children) 删除的是li 当前a所在的li  this.parentNode;
                        ul.removeChild(this.parentNode);
                    }
                }
            }

        }
    </script>
</body>
```



#### 8.9.11 - 复制（克隆）节点

`nodes.cloneNode()`

> nodes.cloneNode()	方法返回调用该方法的节点的一个副本，也称为克隆/拷贝节点

注意：

> 1. 如果括号参数为空后者false，则是浅拷贝，即只可控复制节点本身，不克隆里面的子节点。
> 2. 如果括号参数为true，则是深拷贝，会复制节点本身及里面所有的子节点。

```js
    <ul>
        <li>1111</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        // 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
        // 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容
        var lili = ul.children[0].cloneNode(true);
        ul.appendChild(lili);
    </script>
```



#### 8.9.12 - 动态生成表格

分析

> 1. 因为里面的学生数据都是动态的，我们需要js动态生成。这里我们模拟数据，自己定义好数据。数据我们采取对象形式存储。
> 2. 所有的数据都是放到tbody里面的行里面。
> 3. 因为行很多，需要循环创建多个行元素
> 4. 每行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环）
> 5. 最后一列单元格是删除，需要单独创建单元格。
> 6. 最后添加删除操作，单击删除，可以删除当前行。

```js
<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        // 1.先去准备好学生的数据
        var data = [{
            name: '魏璎珞',
            subject: 'JavaScript',
            score: 100
        }, {
            name: '弘历',
            subject: 'JavaScript',
            score: 98
        }, {
            name: '傅恒',
            subject: 'JavaScript',
            score: 99
        }, {
            name: '明玉',
            subject: 'JavaScript',
            score: 88
        }, {
            name: '大猪蹄子',
            subject: 'JavaScript',
            score: 0
        }];

        var tbody = document.querySelector('tbody');

        for (let i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');

            for (var k in data[i]) {
                var td = document.createElement('td');
                td.innerHTML = data[i][k];
                tr.append(td);
            }
            var td =document.createElement('td');
            var aDel = document.createElement('a');
            aDel.innerHTML = '删除';
            aDel.href = 'javascript:;';
            aDel.onclick = function(){
                tbody.removeChild(this.parentNode.parentNode);
            };
            td.append(aDel);
            tr.append(td);
            // tbody.insertBefore(tr, tbody.children[0]);
            tbody.append(tr);
        }

        //添加删除操作
        // var aDelAll = document.querySelectorAll('a');
        // for (let i = 0; i < aDelAll.length; i++) {
        //     aDelAll[i].addEventListener('click', function () {
        //         aDelAll[i].removeChild(this.parentNode.parentNode);
        //     })
        // }
    </script>
</body>
```

##### 问题! 当后端传给我们的数据格式不是我们想要的格式怎么处理呢？

```js
<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        // 1.后端给的数据 -- 这里把数据打乱格式
        var data = [{
            name: '魏璎珞',
            subject: 'JavaScript',
            sex : '女',
            score: 100
        }, {
            name: '弘历',
            vip : 7,
            subject: 'JavaScript',
            score: 98
        }, {
            name: '傅恒',
            subject: 'JavaScript',
            score: 99
        }, {
            subject: 'JavaScript',
            name: '明玉',
            score: 88
        }, {
            name: '大猪蹄子',
            subject: 'JavaScript',
            score: 0
        }];

        // 前端需要的数据格式
        var keys = ['name', 'subject','score'];

        var tbody = document.querySelector('tbody');

        for (let i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');

            for (var k of keys) {	//	使用for of 
                var td = document.createElement('td');
                td.innerHTML = data[i][k];
                tr.append(td);
            }
            // tbody.insertBefore(tr, tbody.children[0]);
            tbody.append(tr);
        }
    </script>
</body>
```



#### 8.9.13  - 创建元素的三种方式

```js
document.write()

element.innerHTML

document.createElement()
```

`区别：`

> 1. document.write 	是直接将内容写入到页面的内容流，但是文档流执行完毕，则会导致页面全部重绘。
>   	. innerHTML	是将内容写入某个 DOM 节点，不会导致页面全部重绘。
>   	. innerHTML	创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂。
>   	. createElement()	创建多个元素效率稍低一点点，但是结构更清晰。

**总结**：不同浏览器下，innerHTML效率要比createElement高。

```js
    <script>
        // 三种创建元素方式区别 
        // 1. document.write() 创建元素  如果页面文档流加载完毕，再调用这句话会导致页面重绘
         var btn = document.querySelector('button');
         btn.onclick = function() {
             document.write('<div>123</div>');
         }

        // 2. innerHTML 创建元素
        var inner = document.querySelector('.inner');
         for (var i = 0; i <= 100; i++) {
             inner.innerHTML += '<a href="#">百度</a>'
         }
        var arr = [];
        for (var i = 0; i <= 100; i++) {
            arr.push('<a href="#">百度</a>');
        }
        inner.innerHTML = arr.join('');
        // 3. document.createElement() 创建元素
        var create = document.querySelector('.create');
        for (var i = 0; i <= 100; i++) {
            var a = document.createElement('a');
            create.appendChild(a);
        }
    </script>
```

#### 8.9.14 - innerHTML和createElement效率对比

**innerHTML字符串拼接方式（效率低）**

```js
<script>
    function fn() {
        var d1 = +new Date();
        var str = '';
        for (var i = 0; i < 1000; i++) {
            document.body.innerHTML += '<div style="width:100px; height:2px; border:1px solid blue;"></div>';
        }
        var d2 = +new Date();
        console.log(d2 - d1);
    }
    fn();
</script>
```

**createElement方式（效率一般）**

```js
<script>
    function fn() {
        var d1 = +new Date();

        for (var i = 0; i < 1000; i++) {
            var div = document.createElement('div');
            div.style.width = '100px';
            div.style.height = '2px';
            div.style.border = '1px solid red';
            document.body.appendChild(div);
        }
        var d2 = +new Date();
        console.log(d2 - d1);
    }
    fn();
</script>
```

**innerHTML数组方式（效率高）**

```js
<script>
    function fn() {
        var d1 = +new Date();
        var array = [];
        for (var i = 0; i < 1000; i++) {
            array.push('<div style="width:100px; height:2px; border:1px solid blue;"></div>');
        }
        document.body.innerHTML = array.join('');
        var d2 = +new Date();
        console.log(d2 - d1);
    }
    fn();
</script>
```



### 8.10 - 事件高级

#### 8.10.1 - 注册事件（2种方式）

1. 给元素添加事件，称为注册事件或者绑定事件。
2. 注册事件有两种方式： 传统方式和监听注册方式



`传统注册方式：`

> 利用on开头的事件，如onclick
>
> <button onclick="alert("hi~)"></button>
>
> btn.onclick = function(){}
>
> 特点：注册事件的唯一性
>
> 同一个元素同一个时间只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数。



`监听注册方式`

> W3C标准  推荐方式
>
> addEventListenner() 它是一个方法
>
> IE9之前 的 IE 不支持此方法，可使用attachEvent() 代替
>
> 特点：同一个元素同一个事件可以注册多个监听器
>
> 按注册顺序依次执行



#### 8.10.2  - 事件监听

**addEventListener()事件监听（IE9以后支持）**

```
eventTarget.addEventListenner(type, listenner[, useCapture])
```

eventTarget.addEventListener()方法将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。

该方法接收三个参数：

> type : 事件类型字符串，比如click、mouseover，注意这里不要带on
>
> listenner ： 事件处理函数，事件发生时，会调用该监听函数
>
> userCapture ： 可选参数，是一个布尔值，默认是false



**attacheEvent()事件监听（IE678支持）**

```
eventTarget.attachEvent(eventNameWithOn, callback)
```

​	eventTarget.attachEvent()方法将指定的监听器注册到 eventTarget（目标对象） 上，当该对象触发指定的事件时，指定的回调函数就会被执行。

> 该方法接收两个参数
>
> - eventNameWithOn	事件类型字符串，比如onclick、onmouseover，这里要带on
>    	callback	时间处理函数，当目标触发时间事件回调函数被调用
> - 注意：IE8及早期版本支持

```js
<button>传统注册事件</button>
<button>方法监听注册事件</button>
<button>ie9 attachEvent</button>
<script>
    var btns = document.querySelectorAll('button');
    // 1. 传统方式注册事件
    btns[0].onclick = function() {
        alert('hi');
    }
    btns[0].onclick = function() {
            alert('hao a u');
        }
   // 2. 事件侦听注册事件 addEventListener 
   // (1) 里面的事件类型是字符串 必定加引号 而且不带on
   // (2) 同一个元素 同一个事件可以添加多个侦听器（事件处理程序）
    btns[1].addEventListener('click', function() {
        alert(22);
    })
    btns[1].addEventListener('click', function() {
            alert(33);
    })
    // 3. attachEvent ie9以前的版本支持
    btns[2].attachEvent('onclick', function() {
        alert(11);
    })
</script>
```
##### 事件监听兼容性解决方案

封装一个函数，函数中判断浏览器的类型：

```js
function addEventListener(element, eventName, fn) {
    //	判断当前浏览器是否支持 addEventListener 方法
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);	// 第三个参数 默认是false
    }else if (element.addatchEvent) {
        element.attachEvent('on' + eventName, fn);
    }else {
        //	相当于 element.onclick = fn;
        element['on' + eventName] = fn;
    }
}
```



#### 8.10.3  -  删除事件（解绑事件）

**1、传统注册方式**

~~~~js
eventTarget.onclick = null;
~~~~



**2、方法监听注册方式**

~~~js
eventTarget.removeElementListener(type, listener[, usrCapture]);
eventTarget.detachEvent(eventNameWithOn, callback);
~~~



```js
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var divs = document.querySelectorAll('div');
        divs[0].onclick = function() {
            alert(11);
            // 1. 传统方式删除事件
            divs[0].onclick = null;
        }
        // 2. removeEventListener 删除事件
        divs[1].addEventListener('click', fn) // 里面的fn 不需要调用加小括号
        function fn() {
            alert(22);
            divs[1].removeEventListener('click', fn);
        }
        // 3. detachEvent
        divs[2].attachEvent('onclick', fn1);

        function fn1() {
            alert(33);
            divs[2].detachEvent('onclick', fn1);
        }
    </script>
```

**删除事件兼容性解决方案 **

~~~js
function removeEventListenner(element, eventName, fn){
    //	判断当前浏览器是否支持removeEventListener 方法
    if ( element.removeEventListener ) {
    	element.removeEventListener ( eventName, fn);	//	第三个参数默认是false
    } else if ( element.datachEvent ) {
        element.datachEvent('on' + eventName, fn);
    } else {
        element['on' + eventName] = null;
    }
}
~~~



#### 8.10.4  -  DOM事件流

> ```
> html中的标签都是相互嵌套的，我们可以将元素想象成一个盒子装一个盒子，document是最外面的大盒子。
> 当你单击一个div时，同时你也单击了div的父元素，甚至整个页面。
>
> 那么是先执行父元素的单击事件，还是先执行div的单击事件 ？？？
> ```

**事件流**描述的是从页面中接收时间的顺序。

**事件**发生时会在元素节点之间按照特定的顺序传播，这个**传播过程**即**DOM事件流**



> 比如：我们给页面中的一个div注册了单击事件，当你单击了div时，也就单击了body，单击了html，单击了document。

![1551166555833](resouce/JavaScript/DOM事件流.png)

事件冒泡 ： IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层节点的过程。

事件捕获 ： 网景最早提出，由DOM最顶层节点开始，然后逐级向下传播到最具体的元素接收的过程。

> ```
> 当时的2大浏览器霸主谁也不服谁！
> IE 提出从目标元素开始，然后一层一层向外接收事件并响应，也就是冒泡型事件流。
> Netscape（网景公司）提出从最外层开始，然后一层一层向内接收事件并响应，也就是捕获型事件流。
>
> 江湖纷争，武林盟主也脑壳疼！！！
>
> 最终，w3c 采用折中的方式，平息了战火，制定了统一的标准 —--— 先捕获再冒泡。
> 现代浏览器都遵循了此标准，所以当事件发生时，会经历3个阶段。
> ```

DOM 事件流会经历3个阶段： 

1. 捕获阶段

2. 当前目标阶段

3. 冒泡阶段 



​	我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程；之后会产生泡泡，会在最低点（ 最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡。 

![1551169007768](resouce/JavaScript/DOM事件流传播过程.png)

**事件**发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。

> `注意：`
>
> 1. JS代码中只能执行捕获或者冒泡其中的一个阶段。
> 2. onclick 和 attachEvent 只能得到冒泡阶段。
> 3. addEventListener（type, listener[, useCapture]) 第三个参数如果是 true，表示在时间捕获阶段调用事件处理程序；如果是false（不写默认是false），表示在事件冒泡阶段调用事件处理程序。
> 4. 实际开发中我们很少使用事件捕获，我们更关注事件冒泡。
> 5. 有些事件是没有冒泡的，比如onblur，onfocus，onmouseenter，onmouseleave、
> 6. 事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件。

**事件冒泡**

```js
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // onclick 和 attachEvent（ie） 在冒泡阶段触发
        // 冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略 
        // son -> father ->body -> html -> document
        var son = document.querySelector('.son');
		// 给son注册单击事件
        son.addEventListener('click', function() {
            alert('son');
        }, false);
		// 给father注册单击事件
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
		// 给document注册单击事件，省略第3个参数
        document.addEventListener('click', function() {
            alert('document');
        })
    </script>
```

**事件捕获**

```js
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // 如果addEventListener() 第三个参数是 true 那么在捕获阶段触发
        // document -> html -> body -> father -> son
         var son = document.querySelector('.son');
		// 给son注册单击事件，第3个参数为true
         son.addEventListener('click', function() {
             alert('son');
         }, true);
         var father = document.querySelector('.father');
		// 给father注册单击事件，第3个参数为true
         father.addEventListener('click', function() {
             alert('father');
         }, true);
		// 给document注册单击事件，第3个参数为true
        document.addEventListener('click', function() {
            alert('document');
        }, true)
    </script>
```

#### 8.10.5  -  事件对象

##### 什么是事件对象

事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象。

比如：  

1. 谁绑定了这个事件。

2. 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。

3. 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。

##### 事件对象的使用

事件触发发生时就会产生事件对象，并且系统会以实参的形式传给事件处理函数。

所以，在事件处理函数中声明1个形参用来接收事件对象。

~~~js
eventTarget.onclick = function(event) {
    //	这个 event 就是事件对象，我们还喜欢写成 e 或者 evt
}
eventTarget.addEventListener('click', function(event){
	//	这个event就是事件对象，我们还喜欢写成 e 或者 evt                             
});

eventTarget.addEventListener('click', fn)
function(event) {
    // 这个event就是事件对象，我们还喜欢写成 e 或者 evt       
}
~~~



##### 事件对象的兼容性处理

事件对象本身的获取存在兼容问题：

1. 标准浏览器中是浏览器给方法传递的参数，只需要定义形参 e 就可以获取到。

2. 在 IE6~8 中，浏览器不会给方法传递参数，如果需要的话，需要到 window.event 中获取查找。

**解决**

​	**e = e || window.event; **

```
只要“||”前面为false, 不管“||”后面是true 还是 false，都返回 “||” 后面的值。
只要“||”前面为true, 不管“||”后面是true 还是 false，都返回 “||” 前面的值。
```

```js
    <div>123</div>
    <script>
        var div = document.querySelector('div');
        div.onclick = function(e) {
                // 事件对象
                e = e || window.event;
                console.log(e);
        }
    </script>
```

##### 事件对象的属性和方法

![1551169931778](resouce\JavaScript\事件对象的属性和方法.png)

##### e.target 和 this 的区别

-  this 是事件绑定的元素（绑定这个事件处理函数的元素） 。

-  e.target 是事件触发的元素。

> ```
> 常情况下terget 和 this是一致的，
> 但有一种情况不同，那就是在事件冒泡时（父子元素有相同事件，单击子元素，父元素的事件处理函数也会被触发执行），
> 	这时候this指向的是父元素，因为它是绑定事件的元素对象，
> 	而target指向的是子元素，因为他是触发事件的那个具体元素对象。
> ```

```js
    <div>123</div>
    <script>
        var div = document.querySelector('div');
        div.addEventListener('click', function(e) {
            // e.target 和 this指向的都是div
            console.log(e.target);
            console.log(this);

        });
    </script>
```

事件冒泡下的e.target和this

```js
    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
              // 我们给ul 绑定了事件  那么this 就指向ul  
              console.log(this); // ul

              // e.target 触发了事件的对象 我们点击的是li e.target 指向的就是li
              console.log(e.target); // li
        });
    </script>
```

#### 8.10.6  -  阻止默认行为

> html中一些标签有默认行为，例如a标签被单击后，默认会进行页面跳转。

```js
    <a href="http://www.baidu.com">百度</a>
    <script>
        // 2. 阻止默认行为 让链接不跳转 
        var a = document.querySelector('a');
        a.addEventListener('click', function(e) {
             e.preventDefault(); //  dom 标准写法
        });
        // 3. 传统的注册方式
        a.onclick = function(e) {
            // 普通浏览器 e.preventDefault();  方法
            e.preventDefault();
            // 低版本浏览器 ie678  returnValue  属性
            e.returnValue = false;
            // 我们可以利用return false 也能阻止默认行为 没有兼容性问题
            return false;
        }
    </script>
```

#### 8.10.8  -  阻止事件冒泡

事件冒泡本身的特性，会带来的坏处，也会带来的好处。

标准写法： 利用事件对象里面的 stopPropagation（）方法

~~~js
e.stopPropagation()
~~~

非标准写法： IE 6-8 利用事件对象cancelBubblr属性

~~~
e.cancelBubble = true;
~~~



```js
    <div class="father">
        <div class="son">son儿子</div>
    </div>
    <script>
        var son = document.querySelector('.son');
		// 给son注册单击事件
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation(); // stop 停止  Propagation 传播
            window.event.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
        }, false);

        var father = document.querySelector('.father');
		// 给father注册单击事件
        father.addEventListener('click', function() {
            alert('father');
        }, false);
		// 给document注册单击事件
        document.addEventListener('click', function() {
            alert('document');
        })
    </script>
```

**阻止事件冒泡的兼容性处理**

~~~js
if(e && e.stopProgation) {
    e.stopProgation();
} else {
    window.event.cancelBubble = true;
}
~~~



#### 8.10.9  -  事件委托

事件冒泡本身的特性，会带来的坏处，也会带来的好处。

##### 什么是事件委托

```
把事情委托给别人，代为处理。
```

事件委托也称为事件代理，在 jQuery 里面称为事件委派。

> 说白了就是，不给子元素注册事件，给父元素注册事件，把处理代码在父元素的事件中执行。



**生活中的代理：**

![1551172159273](.\resouce\JavaScript\生活中的代理.png)

**js事件中的代理：**

![](resouce\JavaScript\JS事件中的代理 (2).png)

##### 事件委托的原理

​	给父元素注册事件，利用事件冒泡，当子元素的事件触发，会冒泡到父元素，然后去控制相应的子元素。

##### 事件委托的作用

- 我们只操作了一次 DOM ，提高了程序的性能。

- 动态新创建的子元素，也拥有事件。

```js
    <ul>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
        <li>知否知否，点我应有弹框在手！</li>
    </ul>
    <script>
        // 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            // e.target 这个可以得到我们点击的对象
            e.target.style.backgroundColor = 'pink';
        })
    </script>
```

#### 8.10.10  -  常用鼠标事件

![](resouce\JavaScript\常用鼠标事件.png)

##### 1.4.1 案例：禁止选中文字和禁止右键菜单

![](resouce\JavaScript\禁止选中文字和禁止右键菜单.png)

```js
<body>
    我是一段不愿意分享的文字
    <script>
        // 1. contextmenu 我们可以禁用右键菜单
        document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
        })
        // 2. 禁止选中文字 selectstart
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        })
    </script>
</body>
```

##### 1.4.2 鼠标事件对象

![](resouce\JavaScript\1551173103741.png)

##### 1.4.3 获取鼠标在页面的坐标

```js
    <script>
        // 鼠标事件对象 MouseEvent
        document.addEventListener('click', function(e) {
            // 1. client 鼠标在可视区的x和y坐标
            console.log(e.clientX);
            console.log(e.clientY);
            console.log('---------------------');

            // 2. page 鼠标在页面文档的x和y坐标
            console.log(e.pageX);
            console.log(e.pageY);
            console.log('---------------------');

            // 3. screen 鼠标在电脑屏幕的x和y坐标
            console.log(e.screenX);
            console.log(e.screenY);

        })
    </script>
```

##### 1.4.4 案例：跟随鼠标的天使

![](resouce\JavaScript\1551173172613.png)

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\1551173186812.png)

```js
    <img src="images/angel.gif" alt="">
    <script>
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
        	// 1. mousemove只要我们鼠标移动1px 就会触发这个事件
        	// 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 
            // 把这个x和y坐标做为图片的top和left 值就可以移动图片
        	var x = e.pageX;
        	var y = e.pageY;
        	console.log('x坐标是' + x, 'y坐标是' + y);
        	//3 . 千万不要忘记给left 和top 添加px 单位
        	pic.style.left = x - 50 + 'px';
        	pic.style.top = y - 40 + 'px';
    	});
    </script>
```
## 9 - 堆和栈

### 1、栈

简单数据类型放到栈里面 -- 局部变量、函数的参数、对象/数组的地址、boolean、number

在栈里面数据访问效率比较高，因为不存在通过先访问地址再找值的过程

### 2、堆

复杂数据类型首先在栈里面开辟空间存放地址，值放在堆里面 -- 对象的值、数组的值







# JavaScript高级部分

## 1 - 面向过程与面向对象

### 1.1 - 面向过程

​	面向过程就是分析出解决问题所需要的步骤， 然后用函数把这些步骤一步一步地去实现，使用的时候

再一个一个依次调用。

​	提出问题-- 》分析问题 --》 解决问题（从无到有一步一步实现并解决问题）

### 1.2 - 面向对象编程

​	提出问题，将问题交给能够解决问题的对象去解决问题

面向对象就是把事务分解成一个个对象，然后由对象之间分工合作。

### 1.3面向过程与面向对象对比

|      | 面向过程                                    | 面向对象                                     |
| ---- | --------------------------------------- | ---------------------------------------- |
| 优点   | 性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。 | 易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护 |
| 缺点   | 不易维护、不易复用、不易扩展                          | 性能比面向过程低                                 |



## 2 - 对象与类

### 2.1 对象

**对对象和类的理解：**

什么是对象？

​	-- 万物皆对象，有点扯 -- 意思就是所有的东西都可以辩证理解为对象

什么是类：

​	-- 类是具有相同特性或者属性的事务的抽象表达，比如 人这个类： 可以有男人 女人 --共同属性为人 ；又可以有男人类：老人，小孩，中年，壮年...共同属性为：男性。

###### 类和对象的关系：对象是类的实例化（某一个）类是抽象的， 对象是具体的事物

对象是由属性和方法组成的：是一个无序键值对的集合,指的是一个具体的事物

- 属性：事物的特征，在对象中用属性来表示（常用名词）
- 方法：事物的行为，在对象中用方法来表示（常用动词）

#### 2.1.1 创建对象

```js
//以下代码是对对象的复习
//字面量创建对象
var ldh = {
    name: '刘德华',
    age: 18
}
console.log(ldh);

//构造函数创建对象
  function Star(name, age) {
    this.name = name;
    this.age = age;
 }
var ldh = new Star('刘德华', 18)//实例化对象
console.log(ldh);	
```

如上两行代码运行结果为：

![](resouce\JavaScript\2-1-1创建对象.png)



### 2.2类

- 在 ES6 中新增加了类的概念，可以使用 class 关键字声明一个类，之后以这个类来实例化对象。类抽象了对象的公共部分，它泛指某一大类（class）对象特指某一个，通过类实例化一个具体的对象

#### 2.2.1创建类

1. 语法:

```js
//步骤1 使用class关键字
class name {
  // class body
}     
//步骤2使用定义的类创建实例  注意new关键字
var xx = new name();     
```

2. 示例

```js
 // 1. 创建类 class  创建一个 明星类
 class Star {
   // 类的共有属性放到 constructor 里面
   constructor(name, age) {
   this.name = name;
   this.age = age;
   }
 }
   // 2. 利用类创建对象 new
   var ldh = new Star('刘德华', 18);
   console.log(ldh);
```

以上代码运行结果:

![](resouce\JavaScript\2-2-1createClass.png)

通过结果我们可以看出,运行结果和使用构造函数方式一样

#### 2.2.2类创建添加属性和方法

```js
 // 1. 创建类 class  创建一个类
class Star {
    // 类的共有属性放到 constructor 里面 constructor是 构造器或者构造函数
    constructor(uname, age) {
      this.uname = uname;
      this.age = age;
    }//------------------------------------------->注意,方法与方法之间不需要添加逗号
    sing(song) {
      console.log(this.uname + '唱' + song);
    }
}
// 2. 利用类创建对象 new
var ldh = new Star('刘德华', 18);
console.log(ldh); // Star {uname: "刘德华", age: 18}
ldh.sing('冰雨'); // 刘德华唱冰雨
```

 以上代码运行结果:

 ![](resouce\JavaScript\2-2-2img5.png)

**注意哟:**

1. 通过class 关键字创建类, 类名我们还是习惯性定义首字母大写
2. 类里面有个constructor 函数,可以接受传递过来的参数,同时返回实例对象
3. constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自动生成这个函数
4. 多个函数方法之间不需要添加逗号分隔
5. 生成实例 new 不能省略
6. 语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加function



#### 2.2.3 类的继承

1. 语法

```js
// 父类
class Father{   
} 

// 子类继承父类
class  Son  extends Father {  
}       
```

2. 示例

```js
class Father {
      constructor(surname) {
        this.surname= surname;
      }
      say() {
        console.log('你的姓是' + this.surname);
       }
}

class Son extends Father{  // 这样子类就继承了父类的属性和方法
}
var damao= new Son('刘');
damao.say();      //结果为 你的姓是刘
```

以上代码运行![结果:](resouce\JavaScript\2-2-3img6.png)

- 子类使用super关键字访问父类的方法

  ```js
  //定义了父类
  class Father {
     constructor(x, y) {
     this.x = x;
     this.y = y;
     }
     sum() {
     console.log(this.x + this.y);
  	}
   }
  //子元素继承父类
      class Son extends Father {
     		 constructor(x, y) {
      		super(x, y); //使用super调用了父类中的构造函数
      	}
      }
      var son = new Son(1, 2);
      son.sum(); //结果为3
  ```

  **注意:** 

  1. 继承中,如果实例化子类输出一个方法,先看子类有没有这个方法,如果有就先执行子类的

  2. 继承中,如果子类里面没有,就去查找父类有没有这个方法,如果有,就执行父类的这个方法(就近原则)

  3. 如果子类想要继承父类的方法,同时在自己内部扩展自己的方法,利用super 调用父类的构造函数,super 必须在子类this之前调用

     ```js
      // 父类有加法方法
      class Father {
        constructor(x, y) {
        this.x = x;
        this.y = y;
        }
        sum() {
        console.log(this.x + this.y);
        }
      }
      // 子类继承父类加法方法 同时 扩展减法方法
      class Son extends Father {
        constructor(x, y) {
        // 利用super 调用父类的构造函数 super 必须在子类this之前调用,放到this之后会报错
        super(x, y);
        this.x = x;
        this.y = y;
     
       }
       subtract() {
       console.log(this.x - this.y);
       }
     }
     var son = new Son(5, 3);
     son.subtract(); //2
     son.sum();//8
     ```

     以上代码运行结果为:

     ![](resouce\JavaScript\img7.png)

  4. 时刻注意this的指向问题,类里面的共有的属性和方法一定要加this使用.

     1. constructor中的this指向的是new出来的实例对象 
     2. 自定义的方法,一般也指向的new出来的实例对象
     3. 绑定事件之后this指向的就是触发事件的事件源

  5. 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象![](resouce\JavaScript\2-2-3img2.png)

     ![](resouce\JavaScript\2-2-3img1.png)

## 3.面向对象版tab 栏切换

### 3.1功能需求

1. 点击 tab栏,可以切换效果.
2. 点击 + 号, 可以添加 tab 项和内容项.
3. 点击 x 号, 可以删除当前的tab项和内容项.
4. 双击tab项文字或者内容项文字可以修改里面的文字内容

### 3.2案例准备

1. 获取到标题元素
2. 获取到内容元素
3. 获取到删除的小按钮 x号
4. 新建js文件,定义类,添加需要的属性方法(切换,删除,增加,修改)
5. 时刻注意this的指向问题

### 3.3切换

- 为获取到的标题绑定点击事件,展示对应的内容区域,存储对应的索引

  ```js
   this.lis[i].index = i;
   this.lis[i].onclick = this.toggleTab;
  ```

- 使用排他,实现只有一个元素的显示

  ```js
   toggleTab() {
     //将所有的标题与内容类样式全部移除
       for (var i = 0; i < this.lis.length; i++) {
       this.lis[i].className = '';
       this.sections[i].className = '';
       }
     //为当前的标题添加激活样式
       this.className = 'liactive';
      //为当前的内容添加激活样式
       that.sections[this.index].className = 'conactive';
    }
  ```

### 3.4添加

- 为添加按钮+ 绑定点击事件 

  ```js
   this.add.onclick = this.addTab;
  ```

- 实现标题与内容的添加,做好排他处理

  ```js
  addTab() {
      that.clearClass();
      // (1) 创建li元素和section元素 
      var random = Math.random();
      var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi">				</span></li>';
      var section = '<section class="conactive">测试 ' + random + '</section>';
      // (2) 把这两个元素追加到对应的父元素里面
      that.ul.insertAdjacentHTML('beforeend', li);
      that.fsection.insertAdjacentHTML('beforeend', section);
      that.init();
      }
  ```

### 3.5删除

- 为元素的删除按钮x绑定点击事件

  ```js
   this.remove[i].onclick = this.removeTab;
  ```

- 获取到点击的删除按钮的所在的父元素的所有,删除对应的标题与内容

  ```js
   removeTab(e) {
       e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
       var index = this.parentNode.index;
       console.log(index);
       // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
       that.lis[index].remove();
       that.sections[index].remove();
       that.init();
       // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
       if (document.querySelector('.liactive')) return;
       // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
       index--;
       // 手动调用我们的点击事件  不需要鼠标触发
       that.lis[index] && that.lis[index].click();
   }
  ```

### 3.6编辑

- 为元素(标题与内容)绑定双击事件

  ```js
   this.spans[i].ondblclick = this.editTab;
   this.sections[i].ondblclick = this.editTab;
  ```

- 在双击事件处理文本选中状态,修改内部DOM节点,实现新旧value值的传递

  ```js
  editTab() {
      var str = this.innerHTML;
      // 双击禁止选定文字
      window.getSelection ? window.getSelection().removeAllRanges() : 				    document.selection.empty();
      // alert(11);
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当我们离开文本框就把文本框里面的值给span 
        input.onblur = function() {
        this.parentNode.innerHTML = this.value;
        };
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
        if (e.keyCode === 13) {
        // 手动调用表单失去焦点事件  不需要鼠标离开操作
        this.blur();
        }
      }
  }
  ```

  

# 

## 4.构造函数和原型

### 4.1对象的三种创建方式--复习

1. 字面量方式

   ```js
   var obj = {};
   ```

2. new关键字

   ```js
   var obj = new Object();
   ```

3. 构造函数方式

   ```js
   function Person(name,age){
     this.name = name;
     this.age = age;
   }
   var obj = new Person('zs',12);
   ```

### 4.2静态成员和实例成员

#### 4.2.1实例成员

实例成员就是构造函数内部通过this添加的成员 如下列代码中uname age sing 就是实例成员,实例成员只能通过实例化的对象来访问

```js
 function Star(uname, age) {
     this.uname = uname;
     this.age = age;
     this.sing = function() {
     console.log('我会唱歌');
    }
}
var ldh = new Star('刘德华', 18);
console.log(ldh.uname);//实例成员只能通过实例化的对象来访问
```

#### 4 .2.2静态成员

静态成员 在构造函数本身上添加的成员  如下列代码中 sex 就是静态成员,静态成员只能通过构造函数来访问

```js
 function Star(uname, age) {
     this.uname = uname;
     this.age = age;
     this.sing = function() {
     console.log('我会唱歌');
    }
}
Star.sex = '男';
var ldh = new Star('刘德华', 18);
console.log(Star.sex);//静态成员只能通过构造函数来访问
```

### 4.3构造函数的问题

构造函数方法很好用，但是存在浪费内存的问题。

![](resouce\JavaScript\4-3img1.png)

### 4.4构造函数原型prototype

构造函数通过原型分配的函数是所有对象所共享的。

JavaScript 规定，每一个构造函数都有一个prototype 属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。

```js
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
Star.prototype.sing = function() {
	console.log('我会唱歌');
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
ldh.sing();//我会唱歌
zxy.sing();//我会唱歌
```

![](resouce\JavaScript\4-4img7.png)

### 4.5对象原型

```html
对象都会有一个属性 __proto__ 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 __proto__ 原型的存在。
__proto__对象原型和原型对象 prototype 是等价的
__proto__对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 prototype
```

![](resouce\JavaScript\4-5img2.png)



![](resouce\JavaScript\4-5img3.png)



### 4.6constructor构造函数

```html
对象原型（ __proto__）和构造函数（prototype）原型对象里面都有一个属性 constructor 属性 ，constructor 我们称为构造函数，因为它指回构造函数本身。
constructor 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。
一般情况下，对象的方法都在构造函数的原型对象中设置。如果有多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor  就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。
```

如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数如:

```js
 function Star(uname, age) {
     this.uname = uname;
     this.age = age;
 }
 // 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数
 Star.prototype = {
 // 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数
   constructor: Star, // 手动设置指回原来的构造函数
   sing: function() {
     console.log('我会唱歌');
   },
   movie: function() {
     console.log('我会演电影');
   }
}
var zxy = new Star('张学友', 19);
console.log(zxy)

```

以上代码运行结果,设置constructor属性如图:

![](resouce\JavaScript\4-7img8.png)如果未设置constructor属性,如图:

![](resouce\JavaScript\4-7img9.png)

### 4-7 原型链

​	每一个实例对象又有一个__proto__属性，指向的构造函数的原型对象，构造函数的原型对象也是一个对象，也有__proto__属性，这样一层一层往上找就形成了原型链。

![](resouce\JavaScript\4-7img5.png)

### 4-8 构造函数实例和原型对象三角关系

```js
1.构造函数的prototype属性指向了构造函数原型对象
2.实例对象是由构造函数创建的,实例对象的__proto__属性指向了构造函数的原型对象
3.构造函数的原型对象的constructor属性指向了构造函数,实例对象的原型的constructor属性也指向了构造函数

```

![](resouce\JavaScript\4-7img4.png)



### 4.9原型链和成员的查找机制

任何对象都有原型对象,也就是prototype属性,任何原型对象也是一个对象,该对象就有__proto__属性,这样一层一层往上找,就形成了一条链,我们称此为原型链;

```html
当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。
如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）。
如果还没有就查找原型对象的原型（Object的原型对象）。
依此类推一直找到 Object 为止（null）。
__proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。

```

### 4.10 原型对象中this指向

构造函数中的this和原型对象的this,都指向我们new出来的实例对象

```js
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
var that;
Star.prototype.sing = function() {
    console.log('我会唱歌');
    that = this;
}
var ldh = new Star('刘德华', 18);
// 1. 在构造函数中,里面this指向的是对象实例 ldh
console.log(that === ldh);//true
// 2.原型对象函数里面的this 指向的是 实例对象 ldh

```

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\4-10img6.png)

### 4.11通过原型为数组扩展内置方法

```js
 Array.prototype.sum = function() {
   var sum = 0;
   for (var i = 0; i < this.length; i++) {
   sum += this[i];
   }
   return sum;
 };
 //此时数组对象中已经存在sum()方法了  可以始终 数组.sum()进行数据的求

```

## 5.继承

### 5.1call()

- call()可以调用函数
- call()可以修改this的指向,使用call()的时候 参数一是修改后的this指向,参数2,参数3..使用逗号隔开连接

```js
 function fn(x, y) {
     console.log(this);
     console.log(x + y);
}
  var o = {
  	name: 'andy'
  };
  fn.call(o, 1, 2);//调用了函数此时的this指向了对象o,

```

![](resouce\JavaScript\5-1img10.png)

### 5.2子构造函数继承父构造函数中的属性

1. 先定义一个父构造函数
2. 再定义一个子构造函数
3. 子构造函数继承父构造函数的属性(使用call方法)

```js
 // 1. 父构造函数
 function Father(uname, age) {
   // this 指向父构造函数的对象实例
   this.uname = uname;
   this.age = age;
 }
  // 2 .子构造函数 
function Son(uname, age, score) {
  // this 指向子构造函数的对象实例
  3.使用call方式实现子继承父的属性
  Father.call(this, uname, age);
  this.score = score;
}
var son = new Son('刘德华', 18, 100);
console.log(son);

```

![](resouce\JavaScript\5-3img11.png)

### 5.3借用原型对象继承方法

1. 先定义一个父构造函数
2. 再定义一个子构造函数
3. 子构造函数继承父构造函数的属性(使用call方法)

```js
// 1. 父构造函数
function Father(uname, age) {
  // this 指向父构造函数的对象实例
  this.uname = uname;
  this.age = age;
}
Father.prototype.money = function() {
  console.log(100000);
 };
 // 2 .子构造函数 
  function Son(uname, age, score) {
      // this 指向子构造函数的对象实例
      Father.call(this, uname, age);
      this.score = score;
  }
// Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
  Son.prototype = new Father();
  // 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
  Son.prototype.constructor = Son;
  // 这个是子构造函数专门的方法
  Son.prototype.exam = function() {
    console.log('孩子要考试');

  }
  var son = new Son('刘德华', 18, 100);
  console.log(son);

```

如上代码结果如图:

![](D:/教学视频/2019成都前端03期/06-javascript高级/JavaScript 高级_day02/4-笔记/images/img12.png)

## 6.ES5新增方法

### 6.1数组方法forEach遍历数组

```js
 arr.forEach(function(value, index, array) {
       //参数一是:数组元素
       //参数二是:数组元素的索引
       //参数三是:当前的数组
 })
  //相当于数组遍历的 for循环 没有返回值

```

### 6.2数组方法filter过滤数组

```js
  var arr = [12, 66, 4, 88, 3, 7];
  var newArr = arr.filter(function(value, index,array) {
  	 //参数一是:数组元素
     //参数二是:数组元素的索引
     //参数三是:当前的数组
     return value >= 20;
  });
  console.log(newArr);//[66,88] //返回值是一个新数组

```

### 6.3数组方法some

```js
some 查找数组中是否有满足条件的元素 
 var arr = [10, 30, 4];
 var flag = arr.some(function(value,index,array) {
    //参数一是:数组元素
     //参数二是:数组元素的索引
     //参数三是:当前的数组
     return value < 3;
  });
console.log(flag);//false返回值是布尔值,只要查找到满足条件的一个元素就立马终止循环

```

### 6.4筛选商品案例

1. 定义数组对象数据

   ```js
   var data = [{
               id: 1,
               pname: '小米',
               price: 3999
           }, {
               id: 2,
               pname: 'oppo',
               price: 999
           }, {
               id: 3,
               pname: '荣耀',
               price: 1299
           }, {
               id: 4,
               pname: '华为',
               price: 1999
           }, ];
   
   ```

2. 使用forEach遍历数据并渲染到页面中

   ```js
   data.forEach(function(value) {
     var tr = document.createElement('tr');
     tr.innerHTML = '<td>' + value.id + '</td><td>' + value.pname + '</td><td>' + value.price + '</td>';
     tbody.appendChild(tr);
    });
   
   ```

3. 根据价格筛选数据

   1. 获取到搜索按钮并为其绑定点击事件

      ```js
      search_price.addEventListener('click', function() {
      });
      
      ```

   2. 使用filter将用户输入的价格信息筛选出来

      ```js
      search_price.addEventListener('click', function() {
            var newDate = data.filter(function(value) {
              //start.value是开始区间
              //end.value是结束的区间
            	return value.price >= start.value && value.price <= end.value;
            });
            console.log(newDate);
       });
      
      ```

   3. 将筛选出来的数据重新渲染到表格中

      1. 将渲染数据的逻辑封装到一个函数中

         ```js
         function setDate(mydata) {
               // 先清空原来tbody 里面的数据
           tbody.innerHTML = '';
           mydata.forEach(function(value) {
             var tr = document.createElement('tr');
             tr.innerHTML = '<td>' + value.id + '</td><td>' + value.pname + '</td><td>' + value.price + '</td>';
               tbody.appendChild(tr);
           });
          }
         
         ```

      2. 将筛选之后的数据重新渲染

         ```js
          search_price.addEventListener('click', function() {
              var newDate = data.filter(function(value) {
              return value.price >= start.value && value.price <= end.value;
              });
              console.log(newDate);
              // 把筛选完之后的对象渲染到页面中
              setDate(newDate);
         });
         
         ```

   4. 根据商品名称筛选

      1. 获取用户输入的商品名称

      2. 为查询按钮绑定点击事件,将输入的商品名称与这个数据进行筛选

         ```js
          search_pro.addEventListener('click', function() {
              var arr = [];
              data.some(function(value) {
                if (value.pname === product.value) {
                  // console.log(value);
                  arr.push(value);
                  return true; // return 后面必须写true  
                }
              });
              // 把拿到的数据渲染到页面中
              setDate(arr);
         })
         
         ```

### 6.5some和forEach区别

- 如果查询数组中唯一的元素, 用some方法更合适,在some 里面 遇到 return true 就是终止遍历 迭代效率更高
- 在forEach 里面 return 不会终止迭代

### 6.6trim方法去除字符串两端的空格

```js
var str = '   hello   '
console.log(str.trim()）  //hello 去除两端空格
var str1 = '   he l l o   '
console.log(str.trim()）  //he l l o  去除两端空格

```

### 6.7获取对象的属性名

Object.keys(对象) 获取到当前对象中的属性名 ，返回值是一个数组

```js
 var obj = {
     id: 1,
     pname: '小米',
     price: 1999,
     num: 2000
};
var result = Object.keys(obj)
console.log(result)//[id，pname,price,num]

```

### 6.8Object.defineProperty

Object.defineProperty设置或修改对象中的属性

```js
Object.defineProperty(对象，修改或新增的属性名，{
		value:修改或新增的属性的值,
		writable:true/false,//如果值为false 不允许修改这个属性值
		enumerable: false,//enumerable 如果值为false 则不允许遍历
        configurable: false  //configurable 如果为false 则不允许删除这个属性 属性是否可以被删除或是否可以再次修改特性
})	

```

# 

## 7 - 函数的定义和调用

### 7. 1函数的定义方式

1. 方式1 函数声明方式 function 关键字 (命名函数)

   ```js
   function fn(){}
   ```

2. 方式2 函数表达式(匿名函数)

   ```js
   var fn = function(){}
   ```

3. 方式3 new Function() 

   ```js
   var f = new Function('a', 'b', 'console.log(a + b)');
   f(1, 2);
   
   var fn = new Function('参数1','参数2'..., '函数体')
   注意
   /*Function 里面参数都必须是字符串格式
   第三种方式执行效率低，也不方便书写，因此较少使用
   所有函数都是 Function 的实例(对象)  
   函数也属于对象
   */
   ```

### 7.2函数的调用

```js
/* 1. 普通函数 */
function fn() {
	console.log('人生的巅峰');
}
 fn(); 
/* 2. 对象的方法 */
var o = {
  sayHi: function() {
  	console.log('人生的巅峰');
  }
}
o.sayHi();
/* 3. 构造函数*/
function Star() {};
new Star();
/* 4. 绑定事件函数*/
 btn.onclick = function() {};   // 点击了按钮就可以调用这个函数
/* 5. 定时器函数*/
setInterval(function() {}, 1000);  这个函数是定时器自动1秒钟调用一次
/* 6. 立即执行函数(自调用函数)*/
(function() {
	console.log('人生的巅峰');
})();
```

## 8.this

### 8.1函数内部的this指向

这些 this 的指向，是当我们调用函数的时候确定的。调用方式的不同决定了this 的指向不同

一般指向我们的调用者.

![](resouce\JavaScript\8-1img1.png)

### 8.2改变函数内部 this 指向

#### 8.2.1 call方法

call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向

应用场景:  经常做继承. 

```js
var o = {
	name: 'andy'
}
 function fn(a, b) {
      console.log(this);
      console.log(a+b)
};
fn(1,2)// 此时的this指向的是window 运行结果为3
fn.call(o,1,2)//此时的this指向的是对象o,参数使用逗号隔开,运行结果为3
```

以上代码运行结果为:

![](resouce\JavaScript\8-2-1img4.png)

#### 8.2.2 apply方法

apply() 方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

应用场景:  经常跟数组有关系

```js
var o = {
	name: 'andy'
}
 function fn(a, b) {
      console.log(this);
      console.log(a+b)
};
fn()// 此时的this指向的是window 运行结果为3
fn.apply(o,[1,2])//此时的this指向的是对象o,参数使用数组传递 运行结果为3
```

![](resouce\JavaScript\8-2-2img4.png)

#### 8.2.3 bind方法

bind() 方法不会调用函数,但是能改变函数内部this 指向,返回的是原函数改变this之后产生的新函数

如果只是想改变 this 指向，并且不想调用这个函数的时候，可以使用bind

应用场景:不调用函数,但是还想改变this指向

```js
 var o = {
 name: 'andy'
 };

function fn(a, b) {
	console.log(this);
	console.log(a + b);
};
var f = fn.bind(o, 1, 2); //此处的f是bind返回的新函数
f();//调用新函数  this指向的是对象o 参数使用逗号隔开
```

![](resouce\JavaScript\8-2-3img5.png)

#### 8.2.4 call、apply、bind三者的异同

- 共同点 : 都可以改变this指向
- 不同点:
  - call 和 apply  会调用函数, 并且改变函数内部this指向.
  - call 和 apply传递的参数不一样,call传递参数使用逗号隔开,apply使用数组传递
  - bind  不会调用函数, 可以改变函数内部this指向.

- 应用场景
  1. call 经常做继承. 
  2. apply经常跟数组有关系.  比如借助于数学对象实现数组最大值最小值
  3. bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向. 

## 9 - 严格模式

### 9.1 什么是严格模式

JavaScript 除了提供正常模式外，还提供了严格模式（strict mode）。ES5 的严格模式是采用具有限制性 JavaScript变体的一种方式，即在严格的条件下运行 JS 代码。

严格模式在 IE10 以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。

严格模式对正常的 JavaScript 语义做了一些更改： 

1.消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。

2.消除代码运行的一些不安全之处，保证代码运行的安全。

3.提高编译器效率，增加运行速度。

4.禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 Javascript 做好铺垫。比如一些保留字如：class,enum,export, extends, import, super 不能做变量名

### 9.2 开启严格模式

严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为为脚本开启严格模式和为函数开启严格模式两种情况。

- 情况一 :为脚本开启严格模式

  - 有的 script 脚本是严格模式，有的 script 脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建一个作用域而不影响其他
    script 脚本文件。

    ```js
    (function (){
      //在当前的这个自调用函数中有开启严格模式，当前函数之外还是普通模式
    　　　　"use strict";
           var num = 10;
    　　　　function fn() {}
    })();
    //或者 
    <script>
      　"use strict"; //当前script标签开启了严格模式
    </script>
    <script>
      			//当前script标签未开启严格模式
    </script>
    ```

- 情况二: 为函数开启严格模式

  - 要给某个函数开启严格模式，需要把“use strict”;  (或 'use strict'; ) 声明放在函数体所有语句之前。

    ```js
    function fn(){
    　　"use strict";
    　　return "123";
    } 
    //当前fn函数开启了严格模式
    ```

### 9.3 严格模式中的变化

严格模式对 Javascript 的语法和行为，都做了一些改变。

```js
'use strict'
num = 10 
console.log(num)//严格模式后使用未声明的变量
--------------------------------------------------------------------------------
var num2 = 1;
delete num2;//严格模式不允许删除变量
--------------------------------------------------------------------------------
function fn() {
 console.log(this); // 严格模式下全局作用域中函数中的 this 是 undefined
}
fn();  
---------------------------------------------------------------------------------
function Star() {
	 this.sex = '男';
}
// Star();严格模式下,如果 构造函数不加new调用, this 指向的是undefined 如果给他赋值则 会报错.
var ldh = new Star();
console.log(ldh.sex);
----------------------------------------------------------------------------------
setTimeout(function() {
  console.log(this); //严格模式下，定时器 this 还是指向 window
}, 2000);  
```

[更多严格模式要求参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

## 10 .高阶函数

高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\10-01img2(1).png)

此时fn 就是一个高阶函数

函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。最典型的就是作为回调函数。

同理函数也可以作为返回值传递回来

## 11.闭包

### 11.1变量的作用域复习

变量根据作用域的不同分为两种：全局变量和局部变量。

1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

### 11.2什么是闭包

闭包（closure）指有权访问另一个函数作用域中变量的函数。简单理解就是 ，一个作用域可以访问另外一个函数内部的局部变量。 

![](D:/教学视频/2019成都前端03期/06-javascript高级/JavaScript 高级_day03/4-笔记/images/img3.png)

### 11.3 闭包的作用

作用：延伸变量的作用范围。

```js
 function fn() {
   var num = 10;
   function fun() {
       console.log(num);
 	}
    return fun;
 }
var f = fn();
f();
```

### 11.4 闭包的案例

1. 利用闭包的方式得到当前li 的索引号

```js
for (var i = 0; i < lis.length; i++) {
// 利用for循环创建了4个立即执行函数
// 立即执行函数也成为小闭包因为立即执行函数里面的任何一个函数都可以使用它的i这变量
(function(i) {
    lis[i].onclick = function() {
      console.log(i);
    }
 })(i);
}
```

2. 闭包应用-3秒钟之后,打印所有li元素的内容

```js
 for (var i = 0; i < lis.length; i++) {
   (function(i) {
     setTimeout(function() {
     console.log(lis[i].innerHTML);
     }, 3000)
   })(i);
}
```

3. 闭包应用-计算打车价格 

```js
/*需求分析
打车起步价13(3公里内),  之后每多一公里增加 5块钱.  用户输入公里数就可以计算打车价格
如果有拥堵情况,总价格多收取10块钱拥堵费*/

 var car = (function() {
     var start = 13; // 起步价  局部变量
     var total = 0; // 总价  局部变量
     return {
       // 正常的总价
       price: function(n) {
         if (n <= 3) {
           total = start;
         } else {
           total = start + (n - 3) * 5
         }
         return total;
       },
       // 拥堵之后的费用
       yd: function(flag) {
         return flag ? total + 10 : total;
       }
	}
 })();
console.log(car.price(5)); // 23
console.log(car.yd(true)); // 33
```

### 11.5案例

```js
 var name = "The Window";
   var object = {
     name: "My Object",
     getNameFunc: function() {
     return function() {
     return this.name;
     };
   }
 };
console.log(object.getNameFunc()())
-----------------------------------------------------------------------------------
var name = "The Window";　　
  var object = {　　　　
    name: "My Object",
    getNameFunc: function() {
    var that = this;
    return function() {
    return that.name;
    };
  }
};
console.log(object.getNameFunc()())
       
```

~javascript

```JavaScript

<body>
    <button>赞(1)</button>
    <button>赞(1)</button>
    <button>赞(1)</button>
    <button>赞(1)</button>
    <script>
        //闭包缓存数据
        function getValue() {
            var value = 2;
            return function() {
                //每一次点击的时候,都应该改变当前点击按钮的value值
                this.innerHTML = "赞(" + (value++) + ")";
            }
        }
        //获取所有的按钮
        var btnObjs = document.getElementsByTagName("button");
        //循环遍历每个按钮,注册点击事件
        for (var i = 0; i < btnObjs.length; i++) {
            //注册事件
            btnObjs[i].onclick = getValue();
        }

        /*
        代码解释:
        循环遍历时给每一个button都创建了一个按钮点击事件  所以存在了4个对象
         btnObjs[1].onclick = getValue();
            var value = 2;
                return function() {
                    //每一次点击的时候,都应该改变当前点击按钮的value值
                    this.innerHTML = "赞(" + (value++) + ")";
                }
		
         btnObjs[2].onclick = getValue();
            var value = 2;
                return function() {
                    //每一次点击的时候,都应该改变当前点击按钮的value值
                    this.innerHTML = "赞(" + (value++) + ")";
                }

         btnObjs[3].onclick = getValue();
            var value = 2;
                return function() {
                    //每一次点击的时候,都应该改变当前点击按钮的value值
                    this.innerHTML = "赞(" + (value++) + ")";
                }

         btnObjs[4].onclick = getValue();
            var value = 2;
                return function() {
                    //每一次点击的时候,都应该改变当前点击按钮的value值
                    this.innerHTML = "赞(" + (value++) + ")";
                }
        
        */ 

        /*
        按钮点击后
                执行点击事件
               btnObjs[2].onclick = getValue(); ---》
           function getValue() {
            var value = 2;
            return function() {  // address
                //每一次点击的时候,都应该改变当前点击按钮的value值
                this.innerHTML = "赞(" + (value++) + ")";
            }
        }   

		// 点击之后返回了一个function  即返回了一个地址，下一次点击的时候程序入口被改变了，进入了里面function执行this.innerHTML = ''; value++
        btnObjs[2].onclick = function() {
                    //每一次点击的时候,都应该改变当前点击按钮的value值
                    this.innerHTML = "赞(" + (value++) + ")";
                }
            }   

        
        */
    </script>
</body>

```







## 12.递归

### 12.1什么是递归

**递归：**如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。简单理解:函数内部自己调用自己, 这个函数就是递归函数

**注意：**递归函数的作用和循环效果一样，由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件return。

### 12.2利用递归求1~n的阶乘

```js
//利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
 function fn(n) {
     if (n == 1) { //结束条件
       return 1;
     }
     return n * fn(n - 1);
 }
 console.log(fn(3));
```

![](D:/教学视频/2019成都前端03期/06-javascript高级/JavaScript 高级_day03/4-笔记/images/img6.png)

### 12.3利用递归求斐波那契数列

```js
// 利用递归函数求斐波那契数列(兔子序列)  1、1、2、3、5、8、13、21...
// 用户输入一个数字 n 就可以求出 这个数字对应的兔子序列值
// 我们只需要知道用户输入的n 的前面两项(n-1 n-2)就可以计算出n 对应的序列值
function fb(n) {
  if (n === 1 || n === 2) {
        return 1;
  }
  return fb(n - 1) + fb(n - 2);
}
console.log(fb(3));

```

### 12.4利用递归遍历数据

```js
// 我们想要做输入id号,就可以返回的数据对象
 var data = [{
   id: 1,
   name: '家电',
   goods: [{
     id: 11,
     gname: '冰箱',
     goods: [{
       id: 111,
       gname: '海尔'
     }, {
       id: 112,
       gname: '美的'
     },

            ]

   }, {
     id: 12,
     gname: '洗衣机'
   }]
 }, {
   id: 2,
   name: '服饰'
}];
//1.利用 forEach 去遍历里面的每一个对象
 function getID(json, id) {
   var o = {};
   json.forEach(function(item) {
     // console.log(item); // 2个数组元素
     if (item.id == id) {
       // console.log(item);
       o = item;
       return o;
       // 2. 我们想要得里层的数据 11 12 可以利用递归函数
       // 里面应该有goods这个数组并且数组的长度不为 0 
     } else if (item.goods && item.goods.length > 0) {
       o = getID(item.goods, id);
     }
   });
   return o;
}

```





## 13.正则表达式概述

### 13.1 什么是正则表达式

正则表达式（ Regular Expression ）是用于匹配字符串中字符组合的模式。在JavaScript中，正则表达式也是对象。

正则表通常被用来检索、替换那些符合某个模式（规则）的文本，例如验证表单：用户名表单只能输入英文字母、数字或者下划线， 昵称输入框中可以输入中文(匹配)。此外，正则表达式还常用于过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等 。

其他语言也会使用正则表达式，本阶段我们主要是利用JavaScript 正则表达式完成表单验证。

### 13.2 正则表达式的特点

1. 灵活性、逻辑性和功能性非常的强。
2. 可以迅速地用极简单的方式达到字符串的复杂控制。
3. 对于刚接触的人来说，比较晦涩难懂。`比如：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`
4. 实际开发,一般都是直接复制写好的正则表达式. 但是要求会使用正则表达式并且根据实际情况修改正则表达式.   比如用户名:   /^[a-z0-9_-]{3,16}$/

### 13.3 - 正则表达式在js中的使用

#### 13.3.1正则表达式的创建

在 JavaScript 中，可以通过两种方式创建一个正则表达式。

方式一：通过调用RegExp对象的构造函数创建 

```js
var regexp = new RegExp(/123/);
console.log(regexp);
```

方式二：利用字面量创建 正则表达式

```js
 var rg = /123/;
```

#### 13.3.2测试正则表达式 

test() 正则对象方法，用于检测字符串是否符合该规则，该对象会返回 true 或 false，其参数是测试字符串。

```js
var rg = /123/;
console.log(rg.test(123));//匹配字符中是否出现123  出现结果为true
console.log(rg.test('abc'));//匹配字符中是否出现123 未出现结果为false
```

![](resouce\JavaScript\14-2img4.png)

### 13.4 正则表达式中的特殊字符

#### 13.4.1正则表达式的组成

一个正则表达式可以由简单的字符构成，比如 /abc/，也可以是简单和特殊字符的组合，比如 /ab*c/ 。其中特殊字符也被称为元字符，在正则表达式中是具有特殊意义的专用符号，如 ^ 、$ 、+ 等。

特殊字符非常多，可以参考： 

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

jQuery 手册：正则表达式部分

[正则测试工具]( <http://tool.oschina.net/regex)

#### 13.4.2边界符

正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

| 边界符 | 说明                           |
| ------ | ------------------------------ |
| ^      | 表示匹配行首的文本（以谁开始） |
| $      | 表示匹配行尾的文本（以谁结束） |

如果 ^和 $ 在一起，表示必须是精确匹配。

```js
var rg = /abc/; // 正则表达式里面不需要加引号 不管是数字型还是字符串型
// /abc/ 只要包含有abc这个字符串返回的都是true
console.log(rg.test('abc'));
console.log(rg.test('abcd'));
console.log(rg.test('aabcd'));
console.log('---------------------------');
var reg = /^abc/;
console.log(reg.test('abc')); // true
console.log(reg.test('abcd')); // true
console.log(reg.test('aabcd')); // false
console.log('---------------------------');
var reg1 = /^abc$/; // 精确匹配 要求必须是 abc字符串才符合规范
console.log(reg1.test('abc')); // true
console.log(reg1.test('abcd')); // false
console.log(reg1.test('aabcd')); // false
console.log(reg1.test('abcabc')); // false
```

### 13.5 字符类

字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内。

#### 13.5.1 [] 方括号

表示有一系列字符可供选择，只要匹配其中一个就可以了

```js
var rg = /[abc]/; // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
console.log(rg.test('andy'));//true
console.log(rg.test('baby'));//true
console.log(rg.test('color'));//true
console.log(rg.test('red'));//false
var rg1 = /^[abc]$/; // 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true
console.log(rg1.test('aa'));//false
console.log(rg1.test('a'));//true
console.log(rg1.test('b'));//true
console.log(rg1.test('c'));//true
console.log(rg1.test('abc'));//true
----------------------------------------------------------------------------------
var reg = /^[a-z]$/ //26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围  
console.log(reg.test('a'));//true
console.log(reg.test('z'));//true
console.log(reg.test('A'));//false
-----------------------------------------------------------------------------------
//字符组合
var reg1 = /^[a-zA-Z0-9]$/; // 26个英文字母(大写和小写都可以)任何一个字母返回 true  
------------------------------------------------------------------------------------
//取反 方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false 。
var reg2 = /^[^a-zA-Z0-9]$/;
console.log(reg2.test('a'));//false
console.log(reg2.test('B'));//false
console.log(reg2.test(8));//false
console.log(reg2.test('!'));//true
```

#### 13.5.2量词符

量词符用来设定某个模式出现的次数。

| 量词  | 说明            |
| ----- | --------------- |
| *     | 重复0次或更多次 |
| +     | 重复1次或更多次 |
| ?     | 重复0次或1次    |
| {n}   | 重复n次         |
| {n,}  | 重复n次或更多次 |
| {n,m} | 重复n到m次      |

#### 13.5.3用户名表单验证

功能需求:

1. 如果用户名输入合法, 则后面提示信息为:  用户名合法,并且颜色为绿色
2. 如果用户名输入不合法, 则后面提示信息为:  用户名不符合规范, 并且颜色为红色

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\13-5-3img2.png)

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\13-5-3img1.png)

分析:

1. 用户名只能为英文字母,数字,下划线或者短横线组成, 并且用户名长度为6~16位.
2. 首先准备好这种正则表达式模式/$[a-zA-Z0-9-_]{6,16}^/
3. 当表单失去焦点就开始验证. 
4. 如果符合正则规范, 则让后面的span标签添加 right类.
5. 如果不符合正则规范, 则让后面的span标签添加 wrong类.

```js
<input type="text" class="uname"> <span>请输入用户名</span>
 <script>
 //  量词是设定某个模式出现的次数
 var reg = /^[a-zA-Z0-9_-]{6,16}$/; // 这个模式用户只能输入英文字母 数字 下划线 中划线
 var uname = document.querySelector('.uname');
 var span = document.querySelector('span');
 uname.onblur = function() {
   if (reg.test(this.value)) {
   console.log('正确的');
   span.className = 'right';
   span.innerHTML = '用户名格式输入正确';
   } else {
   console.log('错误的');
   span.className = 'wrong';
   span.innerHTML = '用户名格式输入不正确';
   }
 }
</script>
```

#### 13.5.4 括号总结

1.大括号  量词符.  里面表示重复次数

2.中括号 字符集合。匹配方括号中的任意字符. 

3.小括号表示优先级

[正则表达式在线测试](https://c.runoob.com/)

### 13.6 预定义类

预定义类指的是某些常见模式的简写方式.

![](D:/教学视频/2019成都前端03期/06-javascript高级/JavaScript 高级_day04/4-笔记/images/img3.png)

**案例:验证座机号码**

```js
var reg = /^\d{3}-\d{8}|\d{4}-\d{7}$/;
var reg = /^\d{3,4}-\d{7,8}$/;
```

**表单验证案例**

```js
//手机号验证:/^1[3|4|5|7|8][0-9]{9}$/;
//验证通过与不通过更换元素的类名与元素中的内容
 if (reg.test(this.value)) {
    // console.log('正确的');
    this.nextElementSibling.className = 'success';
    this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
   } else {
       // console.log('不正确');
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确,请从新输入 ';
 }
```

```js
//QQ号验证: /^[1-9]\d{4,}$/; 
//昵称验证:/^[\u4e00-\u9fa5]{2,8}$/
//验证通过与不通过更换元素的类名与元素中的内容 ,将上一步的匹配代码进行封装,多次调用即可
 function regexp(ele, reg) {
    ele.onblur = function() {
      if (reg.test(this.value)) {
        // console.log('正确的');
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
   } else {
     // console.log('不正确');
     this.nextElementSibling.className = 'error';
     this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确,请从新输入 ';
            }
        }
 };
```

```js
//密码验证:/^[a-zA-Z0-9_-]{6,16}$/
//再次输入密码只需匹配与上次输入的密码值 是否一致
```

### 13.7 正则替换replace

replace() 方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。

```js
var str = 'andy和red';
var newStr = str.replace('andy', 'baby');
console.log(newStr)//baby和red
//等同于 此处的andy可以写在正则表达式内
var newStr2 = str.replace(/andy/, 'baby');
console.log(newStr2)//baby和red
//全部替换
var str = 'abcabc'
var nStr = str.replace(/a/,'哈哈')
console.log(nStr) //哈哈bcabc
//全部替换g
var nStr = str.replace(/a/a,'哈哈')
console.log(nStr) //哈哈bc哈哈bc
//忽略大小写i
var str = 'aAbcAba';
var newStr = str.replace(/a/gi,'哈哈')//"哈哈哈哈bc哈哈b哈哈"
```

**案例:过滤敏感词汇**

```js
<textarea name="" id="message"></textarea> <button>提交</button>
<div></div>
<script>
    var text = document.querySelector('textarea');
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    btn.onclick = function() {
    	div.innerHTML = text.value.replace(/激情|gay/g, '**');
    }
</script>
```



> **注意：**

```js
    <script>
        // 将字符串 'cqyzsC012QzAabcd'中的acq(忽略大小写)替换为'你好'
        var str = 'acqyzsC012QzAabcd';
        console.log(str);
        var repTxt = "/acq/g, '你好'";  // 不能将替换的条件放在字符串里面

        console.log(str.replace(/acq/g, '你好'));   // 不是字符串
        console.log(str.replace(repTxt));   // 这条语句不能生效
        // 全局匹配 忽略大小写 
        var str1 = str.replace(/a|c|q/gi, '你好')
        console.log(str1);
    </script>
```



# ES6语法

## 目标

- 能够说出使用let关键字声明变量的特点
- 能够使用解构赋值从数组中提取值
- 能够说出箭头函数拥有的特性
- 能够使用剩余参数接收剩余的函数参数
- 能够使用拓展运算符拆分数组
- 能够说出模板字符串拥有的特性

## ES6相关概念（★★）

### 什么是ES6

ES 的全称是 ECMAScript , 它是由 ECMA 国际标准化组织,制定的一项脚本语言的标准化规范。

![](resouce\JavaScript\es-version.png)

### 为什么使用 ES6 ?

每一次标准的诞生都意味着语言的完善，功能的加强。JavaScript语言本身也有一些令人不满意的地方。

- 变量提升特性增加了程序运行时的不可预测性
- 语法过于松散，实现相同的功能， 不同的人可能会写出不同的代码

## ES6新增语法

### let（★★★）

ES6中新增了用于声明变量的关键字

#### let声明的变量只在所处于的块级有效

```javascript
 if (true) { 
     let a = 10;
 }
console.log(a) // a is not defined
```

**注意：**使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性。

#### 不存在变量提升

```javascript
console.log(a); // a is not defined 
let a = 20;
```

#### 暂时性死区

利用let声明的变量会绑定在这个块级作用域，不会受外界的影响

```javascript
 var tmp = 123;
 if (true) { 
     tmp = 'abc';
     let tmp; 
 } 
```

#### 经典面试题

```javascript
 var arr = [];
 for (var i = 0; i < 2; i++) {
     arr[i] = function () {
         console.log(i); 
     }
 }
 arr[0]();
 arr[1]();

```

![](resouce\JavaScript\es6let面试题.png)

**经典面试题图解：**此题的关键点在于变量i是全局的，函数执行时输出的都是全局作用域下的i值。

```javascript
 let arr = [];
 for (let i = 0; i < 2; i++) {
     arr[i] = function () {
         console.log(i); 
     }
 }
 arr[0]();
 arr[1]();

```

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\es6-let面试题2.png)

**经典面试题图解：**此题的关键点在于每次循环都会产生一个块级作用域，每个块级作用域中的变量都是不同的，函数执行时输出的是自己上一级（循环产生的块级作用域）作用域下的i值.

#### 小结

- let关键字就是用来声明变量的
- 使用let关键字声明的变量具有块级作用域
- 在一个大括号中 使用let关键字声明的变量才具有块级作用域 var关键字是不具备这个特点的
- 防止循环变量变成全局变量
- 使用let关键字声明的变量没有变量提升
- 使用let关键字声明的变量具有暂时性死区特性

### const（★★★）

声明常量，常量就是值（内存地址）不能变化的量

#### 具有块级作用域

```javascript
 if (true) { 
     const a = 10;
 }
console.log(a) // a is not defined
```

#### 声明常量时必须赋值

```javascript
const PI; // Missing initializer in const declaration
```

#### 常量赋值后，值不能修改

```javascript
const PI = 3.14;
PI = 100; // Assignment to constant variable.

const ary = [100, 200];
ary[0] = 'a';
ary[1] = 'b';
console.log(ary); // ['a', 'b']; 
ary = ['a', 'b']; // Assignment to constant variable.
```

#### 小结

- const声明的变量是一个常量
- 既然是常量不能重新进行赋值，如果是基本数据类型，不能更改值，如果是复杂数据类型，不能更改地址值
- 声明 const时候必须要给定值

### let、const、var 的区别

- 使用 var 声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象
- 使用 let 声明的变量，其作用域为该语句所在的代码块内，不存在变量提升
- 使用 const 声明的是常量，在后面出现的代码中不能再修改该常量的值

![](E:\前端从入门到入坟教程\笔记\resouce\JavaScript\es6-var&let&const区别.png)

### 解构赋值（★★★）

ES6中允许从数组中提取值，按照对应位置，对变量赋值，对象也可以实现解构

#### 数组解构

```javascript
 let [a, b, c] = [1, 2, 3];
 console.log(a)//1
 console.log(b)//2
 console.log(c)//3
//如果解构不成功，变量的值为undefined
```

#### 对象解构

```javascript
 let person = { name: 'zhangsan', age: 20 }; 
 let { name, age } = person;
 console.log(name); // 'zhangsan' 
 console.log(age); // 20

 let {name: myName, age: myAge} = person; // myName myAge 属于别名
 console.log(myName); // 'zhangsan' 
 console.log(myAge); // 20

```

#### 小结

- 解构赋值就是把数据结构分解，然后给变量进行赋值
- 如果结构不成功，变量跟数值个数不匹配的时候，变量的值为undefined
- 数组解构用中括号包裹，多个变量用逗号隔开，对象解构用花括号包裹，多个变量用逗号隔开
- 利用解构赋值能够让我们方便的去取对象中的属性跟方法

### 箭头函数（★★★）

ES6中新增的定义函数的方式。

```javascript
() => {} //()：代表是函数； =>：必须要的符号，指向哪一个代码块；{}：函数体
const fn = () => {}//代表把一个函数赋值给fn
```

函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号

```javascript
 function sum(num1, num2) { 
     return num1 + num2; 
 }
 //es6写法
 const sum = (num1, num2) => num1 + num2; 

```

如果形参只有一个，可以省略小括号

```javascript
 function fn (v) {
     return v;
 } 
//es6写法
 const fn = v => v;

```

箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this

```javascript
const obj = { name: '张三'} 
 function fn () { 
     console.log(this);//this 指向 是obj对象
     return () => { 
         console.log(this);//this 指向 的是箭头函数定义的位置，那么这个箭头函数定义在fn里面，而这个fn指向是的obj对象，所以这个this也指向是obj对象
     } 
 } 
 const resFn = fn.call(obj); 
 resFn();

```

#### 小结

- 箭头函数中不绑定this，箭头函数中的this指向是它所定义的位置，可以简单理解成，定义箭头函数中的作用域的this指向谁，它就指向谁
- 箭头函数的优点在于解决了this执行环境所造成的一些问题。比如：解决了匿名函数this指向的问题（匿名函数的执行环境具有全局性），包括setTimeout和setInterval中使用this所造成的问题

#### 面试题

```javascript
var age = 100;

var obj = {
	age: 20,
	say: () => {
		alert(this.age)
	}
}

obj.say();//箭头函数this指向的是被声明的作用域里面，而对象没有作用域的，所以箭头函数虽然在对象中被定义，但是this指向的是全局作用域
```

### 剩余参数（★★）

剩余参数语法允许我们将一个不定数量的参数表示为一个数组，不定参数定义方式，这种方式很方便的去声明不知道参数情况下的一个函数

```javascript
function sum (first, ...args) {
     console.log(first); // 10
     console.log(args); // [20, 30] 
 }
 sum(10, 20, 30)

```

#### 剩余参数和解构配合使用

```javascript
let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1, ...s2] = students; 
console.log(s1);  // 'wangwu' 
console.log(s2);  // ['zhangsan', 'lisi']


```

## ES6 的内置对象扩展

### Array 的扩展方法（★★）

#### 扩展运算符（展开语法）

扩展运算符可以将数组或者对象转为用逗号分隔的参数序列

```javascript
 let ary = [1, 2, 3];
 ...ary  // 1, 2, 3
 console.log(...ary);    // 1 2 3,相当于下面的代码
 console.log(1,2,3);

```

##### 扩展运算符可以应用于合并数组

```javascript
// 方法一 
 let ary1 = [1, 2, 3];
 let ary2 = [3, 4, 5];
 let ary3 = [...ary1, ...ary2];
 // 方法二 
 ary1.push(...ary2);

```

##### 将类数组或可遍历对象转换为真正的数组

```javascript
let oDivs = document.getElementsByTagName('div'); 
oDivs = [...oDivs];

```

#### 构造函数方法：Array.from()

将伪数组或可遍历对象转换为真正的数组

```javascript
//定义一个集合
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}; 
//转成数组
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

```

方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组

```javascript
 let arrayLike = { 
     "0": 1,
     "1": 2,
     "length": 2
 }
 let newAry = Array.from(arrayLike, item => item *2)//[2,4]


```

注意：如果是对象，那么属性需要写对应的索引

#### 实例方法：find()

用于找出第一个符合条件的数组成员，如果没有找到返回undefined

```javascript
let ary = [{
     id: 1,
     name: '张三'
 }, { 
     id: 2,
     name: '李四'
 }]; 
 let target = ary.find((item, index) => item.id == 2);//找数组里面符合条件的值，当数组中元素id等于2的查找出来，注意，只会匹配第一个


```

#### 实例方法：findIndex()

用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1

```javascript
let ary = [1, 5, 10, 15];
let index = ary.findIndex((value, index) => value > 9); 
console.log(index); // 2

```

#### 实例方法：includes()

判断某个数组是否包含给定的值，返回布尔值。

```javascript
[1, 2, 3].includes(2) // true 
[1, 2, 3].includes(4) // false


```

### String 的扩展方法

#### 模板字符串（★★★）

ES6新增的创建字符串的方式，使用反引号定义

```javascript
let name = `zhangsan`;


```

##### 模板字符串中可以解析变量

```javascript
let name = '张三'; 
let sayHello = `hello,my name is ${name}`; // hello, my name is zhangsan

```

##### 模板字符串中可以换行

```javascript
 let result = { 
     name: 'zhangsan', 
     age: 20,
     sex: '男' 
 } 
 let html = ` <div>
     <span>${result.name}</span>
     <span>${result.age}</span>
     <span>${result.sex}</span>
 </div> `;


```

##### 在模板字符串中可以调用函数

```javascript
const sayHello = function () { 
    return '哈哈哈哈 追不到我吧 我就是这么强大';
 }; 
 let greet = `${sayHello()} 哈哈哈哈`;
 console.log(greet); // 哈哈哈哈 追不到我吧 我就是这么强大 哈哈哈哈


```

#### 实例方法：startsWith() 和 endsWith()

- startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值
- endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值

```javascript
let str = 'Hello world!';
str.startsWith('Hello') // true 
str.endsWith('!')       // true


```

#### 实例方法：repeat()

repeat方法表示将原字符串重复n次，返回一个新字符串

```javascript
'x'.repeat(3)      // "xxx" 
'hello'.repeat(2)  // "hellohello"

```

### Set 数据结构（★★）

ES6 提供了新的数据结构  Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成  Set  数据结构

```javascript
const s = new Set();

```

Set函数可以接受一个数组作为参数，用来初始化。

```javascript
const set = new Set([1, 2, 3, 4, 4]);//{1, 2, 3, 4}


```

#### 实例方法

- add(value)：添加某个值，返回 Set 结构本身
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
- has(value)：返回一个布尔值，表示该值是否为 Set 的成员
- clear()：清除所有成员，没有返回值

```javascript
 const s = new Set();
 s.add(1).add(2).add(3); // 向 set 结构中添加值 
 s.delete(2)             // 删除 set 结构中的2值   
 s.has(1)                // 表示 set 结构中是否有1这个值 返回布尔值 
 s.clear()               // 清除 set 结构中的所有值
 //注意：删除的是元素的值，不是代表的索引

```

#### 遍历

Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

```javascript
s.forEach(value => console.log(value))


```































































































































































































































































# 附录：

## 01-Number

​	获取最大值最小值

```javascript
	console.log(Number.MAX_VALUE);         
			// 	1.7976931348623157e+308
    console.log(Number.MIN_VALUE);         
			//  5e-324
    console.log(Number.MAX_SAFE_INTEGER);          
			//  9007199254740991
    console.log(Number.MIN_SAFE_INTEGER);          
			//  -9007199254740991
```

### 1.1-isNaN ( arguments ) 

​	--释义：是不是 不是一个数值   is not a number ？

​	--> not is a number--->不是一个数字吗？

​	--用法：

```javascript
	var num;
    //   isNaN() 判断是不是不是一个数字
    console.log( isNaN((num + 10)));`// true`
```





## 02-typeof()

​	--获取变量的数据类型

​	--用法：typeof( arguments )

```javascript
    var num = 123;
    var str = "cnyangx";
    var flag = true;
    var nul = null;
    var ud ;
    var obj = new Object();

    //  typeof() 获取变量的类型
    console.log(typeof num );   //  number
    console.log(typeof str );   //  string
    console.log(typeof flag );  //  boolean
    console.log(typeof nul );   //  object
    console.log(typeof ud ) ;    //  undefined
    console.log(typeof obj );   //  object
    console.log(typeof obj );   //  object
```



## 3-Date

##### 	1、获取系统时间

```javascript
    <script>
        dt = new Date();
        what_to_say = "date:" + dt.getUTCFullYear()+ "年" +(dt.getUTCMonth() + 1) + "月"
                    + dt.getDate() + " , 现在是北京时间： " + dt.getHours() + "点"
                    + dt.getMinutes() + "分" + dt.getSeconds() + "秒";
        alert(what_to_say);
    </script>
```

























































# 常见算法

## 01-99乘法表

### 版本1--使用for循环

```javascript
<script type="text/javascript">
        document.write("<table border='1px'>");
        //循环行
        for (var i = 1; i <= 9; i++){
            document.write("<tr>");
            //循环列
            for (var j = 1; j <= i; j++){
                document.write("<td>");
                document.write(j + "*" + i +"="+ i*j +"&nbsp;");
                document.write("</td>");
            }
            //document.write("</br>");
            document.write("<tr>");
        }
        document.write("</table>");
    </script>
```

![](resouce\JavaScript\99乘法表.PNG)



### 版本2--控制台打印

```javascript
<script>
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(j + "x" + i + "=" + (i * j) + "&nbsp;");
        }
        document.write("<br />");
    }

    document.write("<br /> ---------------------------------------------------------------------------------------------------<br />")

    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(i + "x" + j + "=" + (i * j) + "&nbsp;");
        }
        document.write("<br />");
    }
</script>
```



## 02-判断闰年

### 判断条件：

​	①、普通年能被4整除且不能被100整除的为闰年。（如2004年就是闰年）

​	②、世纪年能被400整除的是闰年。（如2000年是闰年）

```javascript
<script>
    var year = 2000;
    /*  满足*/
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        alert('yes');
    }else {
        alert('not');
    }

</script>
```



## 03-冒泡排序

### 算法分析：

#### 时间复杂度

​	若文件的初始状态是正序的，一趟扫描即可完成排序。所需的关键字比较次数**C**和记录移动次数**M**均达到最小值： 
$$
C_{min} = n-1,
M_{min} = 0.
$$
所以，冒泡排序最好的时间复杂度为 O(n)。

　若初始文件是反序的，需要进行**n-1** 趟排序。每趟排序要进行**n-i**次关键字的比较**(1≤i≤n-1)**，且每次比较都必须移动记录三次来达到交换记录位置。在这种情况下，比较和移动次数均达到最大值：
$$
C_{max} = \frac{n ( n-1 )}{2} = O(n^2)
$$

$$
M_{max} = \frac{3n ( n - 1) }{2} = O(n^2)
$$

冒泡排序的最坏时间复杂度为O(n^2)

 综上，因此冒泡排序总的平均时间复len杂度为O(n^2)



#### 算法稳定性

​	冒泡排序就是把小的元素往前调或者把大的元素往后调。比较是相邻的两个元素比较，交换也发生在这两个元素之间。所以，如果两个元素相等，是不会再交换的；如果两个相等的元素没有相邻，那么即使通过前面的两两交换把两个相邻起来，这时候也不会交换，所以相同元素的前后顺序并没有改变，所以冒泡排序是一种稳定排序算法。



### code

```javascript
<script>

    /**
     *  冒泡排序
     *      1、比较的轮数等于总数 - 1
     *      2、比较次数等于要比较的个数 - 1
     *          --比较从第一个到最后一个
     *          --每一轮比较玩得到一个最终值、不参与下一次比较
     *
     * */

    /**
    *   最大时间复杂度 O(n^2)
    	冒泡排序最好的时间复杂度为 O(n)
    *   空间复杂度 O(1)
    * */
    var arr = [10, 0, 100, 20, 60, 30];
    var temp;
    /**
     *  从大到小
     * **/
    /*  控制循环比较的轮数   */
    for (var i = 0; i < arr.length  - 1; i++) {
        /*  控制每一轮比较的次数   */
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] < arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // alert(arr);
    console.log("从小到大 ：" + arr);
    /**
     * 从小到大
     * */
    var arr2 = [10, 0, 100, 20, 60, 30];
    /*  控制比较的轮数 */
    for (var i = 0; i < arr2.length - 1; i++) {
        /* 控制比较的次数*/
        for (var j = 0; j < arr2.length - 1 - i; j++) {
            if(arr2[j] > arr2[j + 1]){
                temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }
    console.log("从大到小 ：" + arr2)

</script>
```



### code2

```javascript
function bubbleSort(arr) {
    var i = arr.length, j;
    var tempExchangVal;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
        i--;
    }
    return arr;
}
 
var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr);
console.log(arrSorted);
alert(arrSorted);
```

控制台将输出：[1, 2, 3, 4, 5, 6, 7, 8, 9] 

## 04-判断素数

​	质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。 

​	在一般领域，对正整数n，如果用2到 
$$
\sqrt{n}之间的所有整数去除，均无法整除，则n为质数。
$$
​	质数大于等于2 不能被它本身和1以外的数整除

```javascript
<script>
    /**
     * 判断一个数是不是素数
     * 从2开始
     * */

    /********************************************************
     *  函数名 : isPrime( num )
     *  参  数 : num 数值型
     *  返回值说明 :
     *          不是素数    返回  false
     *          是 素 数    返回  true
    * ******************************************************/
    function  isPrime(num) {
        for (var i = 2; i < num / 2 + 1 ; i++) {
            if(num % i == 0)
                return false;
        }
        return true;
    ........

    console.log(isPrime(123..................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

</script..............
```



JAVA—代码

```java
 public static boolean testIsPrime2（int n）{
       if （n <= 3） {
            return n > 1;
        }
        
       for（int i=2;i<n;i++）{
           if（n%i == 0）
               return false;
       }
       return true;
   }
 
/*优化后*/
 public static boolean testIsPrime3（int n）{
       if （n <= 3） {
            return n > 1;
        }
        
       for（int i=2;i<=Math.sqrt（n）;i++）{
           if（n%i == 0）
               return false;
       }
       return true;
   }
```



## 05-菲波那切数列

​	斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入

```javascript
	/**
     * 斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入
     *
     * 故又称为“兔子数列”，指的是这样一个数列：1、1、2、3、5、8、13、21、34、
     *
     * F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
     *
     * */

    /**
     * 传入参数控制菲波那切数列打印范围
     * */
    function fib( num ) {
        var arr = new Array(num);
        arr[0] = 1;
        arr[1] = 1;
        for (var i = 2; i < num; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        console.log(arr);
    }

    fib(50);
```



## 06-递归----计算阶乘

​	什么是递归：自己调用自己

​	缺点：耗费更多的计算资源

```javascript
<script>
    function calc(n) {
        if(n > 0)
            return calc(n - 1) * n;
        return 1;
    }

    document.write("计算9的阶乘" + calc(9));
</script>
```



## 07 - 一个简易的计算器

- 待解决的问题：
  - 1、输入的变量只有两个，想要实现自由输入变量个数 可以用split分割（交互方式没想好）

```javascript
<script>
        var flag = true;
        while (flag) {
            var item = prompt('欢迎使用简易计算器：\n\b1.加法计算器；\n\b2.减法计算器；\n\b3.乘法计算器；\n\b4.除法计算器；\n\b5.退出；\n\b请输入你的选择');
            switch (item) {
                case '1':
                    addition();
                    break;
                case '2':
                    subtraction();
                    break;
                case '3':
                    multiplication();
                    break;
                case '4':
                    division();
                    break;
                case '5':
                    flag = false;
                    break;
                default:
                    alert('输入错误请重新输入');
            }
        }

        //加法
        function addition() {
            var x = prompt('请输入加数x:');
            var y = prompt('请输入被加数y:');
            alert(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
        }

        //减法
        function subtraction() {
            var x = prompt('请输入减数x:');
            var y = prompt('请输入被减数y:');
            alert(x + ' - ' + y + ' = ' + (x - y));
        }

        //乘法
        function multiplication() {
            var x = prompt('请输入乘数x:');
            var y = prompt('请输y入被乘数y:');
            alert(x + ' x ' +  + ' = ' + (x * y));
        }

        //除法
        function division() {
            var x = prompt('请输入除数x:');
            var y = prompt('请输入被除数y:');
            alert(x + ' / ' + y + ' = ' + (x / y));
        }
</script>
```



## 08 - 获取当前时间

```js
function getLocalCurrentTime() {
            let date = new Date();
            //年
            let year = date.getFullYear();
            // 月
            let month = date.getMonth() + 1;
            month = month < 10 ? '0' + month : month;
            // 日
            let day = date.getDate();
            day = day < 10 ? '0' + day : day;
            // 时
            let hour = date.getHours();
            hour = hour < 10 ? '0' + hour : hour;
            // 分
            let minutes = date.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            // 秒
            let seconds = date.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;

            return '现在是北京时间：' + year + '年' + month + '月' + day + '日' + hour + ':' + minutes + ':' + seconds;
        }
```



## 09 - 取出数组非重复部分（取两个数组的非交集部分）

```js
// 2. 以下有两个数组，一个数组arr是班级里所有的学员的名称，一个数组currentArr是提交了每日反馈的学员名单，
       // 请创建一种算法，把未提交每日反馈的学员筛选出来
        var arr = ["张瑞淑", "徐海涛", "谢岗岗", "薛鹏", "魏明杨", "党婷", "熊飞", "郑翠翠", "李航卫", "屈涛","汪孝双", "代攀飞", "武志钰", "王亚龙", "周芙榕", "李涛", "郝颖", "文冲洋", "王旭拯", "胡佳豪","寇晓丽", "马晓晗","王思聪", "张绿", "李德", "郑萍", "张凯", "张嘉成", "葛云侠", "杨磊", "任变", "景德", "高卷林", "刘益凡", "赵娜", "陈章鸣", "张荣召", "赵凯旋", "程倩倩", "脱朝平", "刘吉利","郭苗苗", "马建峰", "潘瑞", "闫翔", "马晨", "李轩轩", "黄红梅", "刘书彬", "罗强", "刘东","王可可","陈泽文", "李嘉琪", "段佳琦", "黄燕", "邱淑鸿", "宋翔宇", "王波", "樊琳", "王兆国", "许成", "李兴","laoyang", "大猫", "陆小凤", "西门吹雪", "骆冰"];

        var currentArr = ["张瑞淑", "谢岗岗", "薛鹏", "魏明杨", "党婷", "熊飞", "郑翠翠", "李航卫", "屈涛", "汪孝双", "代攀飞", "武志钰", "王亚龙", "周芙榕", "李涛", "郝颖", "文冲洋", "王旭拯", "胡佳豪", "寇晓丽", "马晓晗", "张绿", "李德","郑萍", "张凯", "张嘉成", "葛云侠", "杨磊", "任变","景德", "高卷林", "刘益凡", "赵娜", "陈章鸣", "张荣召", "赵凯旋", "程倩倩", "脱朝平", "刘吉利","郭苗苗", "马建峰", "潘瑞", "闫翔", "马晨", "李轩轩", "黄红梅", "刘书彬", "罗强", "刘东", "陈泽文", "李嘉琪", "段佳琦", "黄燕", "邱淑鸿", "宋翔宇", "徐海涛", "王波", "樊琳", "王兆国", "许成", "李兴"];

        function arrMatch(arr, currentArr){
           let flag = false;   //标记：表示在已交作业的数组里面去匹配 匹配到了就置为false 没有找到就职位true，这就是目标
           let newArr = new Array();    //新的数组放在arr中但不在currentArr中的元素
           for (let i = 0; i < arr.length; i++) {
               for (let j = 0; j < currentArr.length; j++) {
                   if(arr[i] === currentArr[j]){
                       flag = false;
                       break;  //找到匹配的就不必继续进行匹配
                   }
                   flag = true;    //
               }
               if(flag === true)
                   // newArr[newArr.length] = arr[i];
                   newArr.push(arr[i]);
           }
           return newArr;
       }

        console.log(arrMatch(arr, currentArr));
```



## 10 - 查找字符串中某个字符出现的次数

```js
<script>
        let str1 = "werasfdasdgasradf";
        let index = str1.indexOf('a');  //查找到出现第一次的索引  找不到则为-1
        let flag = 0;
        let address = [];
        while(index !== -1){
            //  上面没有找到索引 那么就不会进while flag = 0
            //找到了就说明有要查找的元素  所以flag先++
            flag ++;
            address.push(index);
            //继续查找  索引位置+1
            index = str1.indexOf('a',index + 1)
        }
        console.log('出现的位置 '+address)
        console.log('出现的次数 '+flag)
    </script>
```



## 11 - 数组中的文本替换

```js
  function replacePro(str, before, after){
        /*
        * str : 传入的数组
        * before ：被替换的对象
        * after ： 替换对象
        * */
        while(str.indexOf(before) !== -1){
            str = str.replace(before, after);
        }
        return str;
    }

    console.log(replacePro('我是老司机，老司机不会翻车', '老司机', '女司机')); //我是女司机，女司机不会翻车
```



## 12 - 插入排序

```js
 var arr = [123,34,23,6,1,4,23,324,65,122];

    for (let i =1, j = i ; i < arr.length; j = ++i) {
        var temp = arr[i];
        while(j-- > 0 && arr[j] > temp){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    console.log(arr)
```



















































































































































 



# 

# 常见方法：

## 01-instanceof

​	语义：获取变量（对象）是不是属于某个类型

​	用法：

```javascript
variableName instanceof typeName;
返回值：boolean 
  	true 是	flase 不是
```



# 快捷写法

### 1、语句中包含变量

`传统写法`

```js
 return d + '天 ' + h + '：' + m + '：' + s ;
```

`新写法`

```js
return `${d}天 ${h}：${m}：${s}`;
```



# END