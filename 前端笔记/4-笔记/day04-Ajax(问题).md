# 1.为什么我们要用第3方ajax库
(1)配备丰富详细的说明文档
(2)有丰富,全面的测试代码和文档
(3)丰富的编辑器插件(扩展)

# 2.$.ajax传数据的配置有哪些?
```javascript
//方式1.application/x-www-form-urlencoded
//1.1,data传对象
$.ajax({
    type: 'post',
    url: '/user',
    data: {username:'huangjinlin',age:30},
    success: function (response) {
        console.log(response);
    }
})

//1.2,data传字符串
$.ajax({
    type: 'post',
    url: '/user',
    data: 'username=huangjinlin&age=30',
    success: function (response) {
        console.log(response);
    }
})

//方式2.传json
$.ajax({
    type: 'post',
    url: '/user',
    data: JSON.stringify({username:'huangjinlin', age: 30}),
    contentType: 'application/json',
    success: function (response) {
        console.log(response);
    }
})	
```

# 3.如何写jquery的插件?
通过$.fn来实现插件,例子如下
```javascript
$.fn.serializeObject = function(){
    //this谁调用就是谁,指向调用元素
    // 处理结果对象
    var result = {};
    // [{name: 'username', value: '用户输入的内容'}, {name: 'password', value: '123456'}]
    var params = $(this).serializeArray();

    // 循环数组 将数组转换为对象类型
    $.each(params, function (index, value) {
        result[value.name] = value.value;
    })
    // 将处理的结果返回到函数外部
    return result;			
}
```
使用方式,例子
```javascript
var obj = $('#form').serializeObject()
```

# 4.为什么大家都喜欢写todo这个项目?
在写大项目前,起练手的作用
