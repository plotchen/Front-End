# JavaScript基础06

## 昨日回顾

1. **作用域、预解析、作用域链**
2. **对象 **{}
3. **内置对象** - Math

## 今日内容 

1. 内置对象 Math Date
2. 数组对象的常用方法
3. 字符串对象的常用方法
4. 基本数据类型和复杂数据类型
5. 堆和栈
6. 简单类型和复杂类型的内存分配
7. 简单数据和复杂数据传参

### 内置对象

**查阅文档**

- MDN  -- https:// developer.mozilla.org/zh-CN
- w3school
- 掘金
- CSDN
- 开发者头条
- 菜鸟教程
- 技术公众号 -- 微信公众号

```js
 // 利用函数翻转任意数组 reverse 翻转
        function reverse1() {
            var newArr = [];
            // console.log(arguments[0].length-1);
            for (var i = arguments[0].length - 1; i >= 0; i--) {
                newArr[newArr.length] = arguments[0][i];
            }
            return newArr;
        }
        var arr1 = reverse1([1, 3, 4, 6, 9]);
        console.log(arr1);
```


### Math （熟练）

- **内置对象不是一个构造函数**
  - max -- 最大值
  - min -- 最小值
  - abs -- 绝对值
  - floor -- 向下取整
  - ceil  -- 向上取整
  - round  -- 四舍五入
  - random -- 随机数

```js
已知任意两个正整数（a，b），将其作为直角三角形的直角边长，求斜边长。
斜边c平方 = a平方 + b平方

 var a = 5;
        var b = 9;
        var c = a * a + b * b;
        var res = Math.pow(c, 0.5);
        console.log(res);
```



- **随机数 Math.random() -- 不传递参数  返回一个 大于等于0  小于1 的随机小数** 

- 区间公式  

  ```js
  function getRandom(min,max){
     return  Math.floor(Math.random() * (max - min + 1)  + min)
  }
  getRandom(1,10)  //  1 2 3 4 5 6 7 8 9 10  都可能出现
  ```

### Date 日期内置对象

1. 构造函数方式获取  new Date()    返回的时间是当前系统时间    数据类型是对象
2. 也可以传递参数  获取的是自定义的事件  new Date(2018,1,1)    new Date('2018-1-1')    数据类型是一个对象  传递参数 返回 设置的日期结果
3. 也可以不new  直接  Date()  返回的也是当前的系统时间  但是 数据类型是 字符串  传参没效果 始终返回的是当前的系统时间

#### 年月日星期的获取

| 方法                        | 说明                  |
| ------------------------- | ------------------- |
| new Date().getFullYear()  | 获取的当前时间的年           |
| new Date().getMonth() + 1 | 获取的是当前时间的月 0 -11    |
| new Date().getDate()      | 获取的是当前时间的日          |
| new Date().getDay()       | 获取的是当前时间的星期 周日返回的是0 |

#### 时分秒毫秒的获取

| 方法                            | 说明       |
| ----------------------------- | -------- |
| new Date().getHours()         | 当前时间的时   |
| new Date().getMinutes()       | 当前时间的分   |
| new Date().getSeconds()       | 当前时间的秒   |
| new Date(). getMilliseconds() | 当前时间的毫秒数 |

#### 毫秒数 距离1970.1.1 过去的总的毫秒数 (时间戳)

| 方法                   | 说明                 |
| -------------------- | ------------------ |
| new Date().valueOf() | 距离1970.1.1过去的总的毫秒数 |
| new Date().getTime() | 距离1970.1.1过去的总的毫秒数 |
| +new Date()          | 距离1970.1.1过去的总的毫秒数 |
| Date.now()           | 距离1970.1.1过去的总的毫秒数 |

```js
new Date().valueOf()  -- 原始值
new Date().getTime()  -- 时间戳
new Date().Date()  -- 毫秒值 
new Date().getTime()  == +new Date()  --值都是时间戳
Date.now() -- H5新增的  --》毫秒值


```



```js
  // 课堂案例： 计算出生到现在一共过了多少天
        // 1.你出生的日子确定
        var n1 = new Date('2000/11/18');
        var t1 = n1.getTime();
        // 2.当前的时间戳
        var n2 = new Date();
        var t2 = n2.getTime();
        // 3.现在的时间 - 出生的时间 
        var ts = t2 - t1;
        ts = ts / 24 / 60 / 60 / 1000;
        // console.log(ts);
        document.write("已经过了" + ts + "天");
```



### 倒计时思路

1. 先获取当前的时间戳

2. 设置以后的时间戳   两个 值相减 ms毫秒数  

3. 将毫秒数转为 秒数   ,利用公式  计算 天 时 分 秒 

   ```js
   d = parseInt(72000/ 60/60 /24);    //  计算天数
   h = parseInt(总秒数/ 60/60 %24)     //   计算小时
   m = parseInt(总秒数 /60 %60 );      //   计算分数
   s = parseInt(总秒数%60);            //   计算当前秒数
   ```

### 用new创建的数组存在的特性

- new Array(2)  //  数组的长度为2   数组元素都为空  纯数字  默认设置的是数组的长度
- new Array('2')  //  数组长度是1   数组元素只有一个 是 2  
- new Array(1,2,3)  //  数组长度是3   数组元素有3个 是 1 2 3  

### 数组的检测

- instanceof    a instanceof Array  是数组  就返回true   否则 返回false 
- Array.isArray(数据)     是数组  就返回true   否则 返回false  
- 构造器 constructor  js进阶 

### 数组方法

#### 增加

- 数组前添加 unshift()  数组.unshift(追加的数组元素) 添加多个使用逗号隔开  返回值是 数组的长度 会更改旧数组
- 数组后添加 push() 数组.push(追加的数组元素) 添加多个使用逗号隔开  返回值是 数组的长度 会更改旧数组

#### 删除 

- 前删除一次只能删除一个  shift()
  - 数组.shift()  因为返回值 是删除之后的数组元素   不能一次删除多个  会更改原数组
- 后删除一次只能删除一个 pop() 
  - 数组.pop()  返回值是删除之后的数组元素     会更改原数组

#### 排序 

- 翻转  数组.reverse() 
- 冒泡 数组.sort()   数组元素是个位数的 排列 没有问题的  

```js
数组.sort(function(a,b){
  	return a - b  //升序 
  	return b- a  //降序
})
```

#### 根据数组元素查找对应的所有

- 查找到立马返回  只查到满足条件的第一个数组元素  查找不到 返回  -1 

  ```js
   var  arr =[1,2,4,3,4]  参数2是可选的  传递的是一个数值  , 表示从第几个元素后开始查找
  arr.indexOf(2,可选参数)// 1 索引1  从前往后查找 满足条件立马返回索引
  arr.lastIndexOf(4) // 4  索引  从后往前查找  满足条件立马返回索引
  ```







### 