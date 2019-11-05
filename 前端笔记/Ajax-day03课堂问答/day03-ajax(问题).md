# 1.谁阻止我们的ajax请求?
浏览器阻止,阻止了js接受返回数据

# 2.为什么浏览器要阻止?
浏览器,攻击别个的接口,偷别个网上的数据(cookie)

# 3.浏览器以什么标准来阻止跨域?
同源(协议,域名,端口)

# 4.既然ajax被阻止,我们首先怎么办?
面临分手的选择,要么和浏览器分手,要么和ajax分手?结论先ajax分手,找其他的方案.

# 5.浏览器访问的资源类型有哪些?
静态资源:css,js,图片,html(public文件夹下,所有都是静态)
动态资源:接口(通过路由方式返回的数据)

# 6.为什么服务器应该返回方法的调用?
```javascript
var list = [
    {goodsName:'苹果',goodsPrice:10}
]

fn([
    {goodsName:'苹果',goodsPrice:10}
])
```
因为返回的数据因为是全局的,所有说,不要去定义变量或方法,而是使用方法通过参数传入

# 7.1 什么是封装?
相同的代码放到一个方法中,不同代码作为参数传到方法里面

# 7.2 封装的目标?
代码少,可读写高(甚至jsonp的原理,或者ajax差异,不来了解,但是照样写代码)

# 8.jsonp能否替代ajax?
优点:能够实现跨越
缺点:get方式,url传参(?username=huangjinlin&age=10),有长度限制
结论:不能

# 9.怎么理解CORS跨域资源共享?
服务通过"响应头"告诉浏览器,允许跨域访问数据

# 10.服务器端设置cookie的本质是什么?
通过响应头"Set-Cookie"来设置
```javascript
app.get('/setCookie', function(req, res, next){
	//通过响应头,Set-Cookie设置cookie
	res.setHeader('Set-Cookie', "name=huangjinlin")
	res.send('ok')
})
```

# 11.各个跨域技术间的关系

![](.\7-截图\各个技术间的关系.png)

