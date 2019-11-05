// 搭建网站服务器，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时，将所有用户信息查询出来
// 	实现路由功能
// 	呈现用户列表页面
// 	从数据库中查询用户信息 将用户信息展示在列表中
// 将用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 当用户访问/delete时，实现用户删除功能

const http = require('http');
const mongoose = require('mongoose');
const url = require('url');

// 数据库连接 27017是mongodb数据库的默认端口
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
	.then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));

// 创建用户集合规则
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	age: {
		type: Number,
		min: 18,
		max: 80
	},
	password: String,
	email: String,
	hobbies: [ String ]
});

// 创建集合 返回集合构造函数
const User = mongoose.model('User', userSchema);

// 创建服务器
const app = http.createServer();

app.on('request', async (req, res) => {
	// 请求方式
	const method = req.method;
	// 请求地址
	const { pathname } = url.parse(req.url);
	if (method == 'GET') {
		// 呈现用户列表页面
		if (pathname == '/list') {
			// 查询用户信息
			let users = await User.find();
			// html字符串
			let list = `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<title>用户列表</title>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
				</head>
				<body>
					<div class="container">
						<h6>
							<a href="/add" class="btn btn-primary">添加用户</a>
						</h6>
						<table class="table table-striped table-bordered">
							<tr>
								<td>用户名</td>
								<td>年龄</td>
								<td>爱好</td>
								<td>邮箱</td>
								<td>操作</td>
							</tr>
			`;

			// 对数据进行循环操作
			users.forEach(item => {
				list += `
					<tr>
						<td>${item.name}</td>
						<td>${item.age}</td>
						<td>
				`;

				item.hobbies.forEach(item => {
					list += `<span>${item}</span>`;
				})

				list += `</td>
						<td>${item.email}</td>
						<td>
							<a href="" class="btn btn-danger btn-xs">删除</a>
							<a href="" class="btn btn-success btn-xs">修改</a>
						</td>
					</tr>`;
			});

			list += `
						</table>
					</div>
				</body>
				</html>
			`;
			res.end(list);
		}
	}else if (method == 'POST') {

	}	
    res.send('ok')
})

// 监听端口
app.listen(3000);