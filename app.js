// 引用expess框架
const express = require('express')
const app = express()
const home = require('./route/home.js');
const admin = require('./route/admin.js');
// 处理路径
const path = require('path');
// 引入body-parser模块 用来处理post请求参数
const bodyParser = require('body-parser');
// 导入express-session模块
const session = require('express-session');
// 导入art-tempate模板引擎
app.engine('art', require('express-art-template'))


//验证地址:http://localhost/home/default.html
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}))

require('./model/connect');
require('./model/user')
console.log('path', path.join(__dirname, "views"))
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'art');

app.use('/admin', require('./middleware/loginGuard.js'));
app.use('/home', home);
app.use('/admin', admin);

app.use((err, req, res, next) => {
    console.error('err', err);
    if (err && typeof err == 'string') {
        let result = JSON.parse(err);
        let arr = [];
        for (const key in result) {
            if (key != 'path') {
                arr.push(key + '=' + result[key])
            }
        }
        //例子 res.redirect('/admin/user-edit?message='+e.message&id=+e.id)
        res.redirect(result.path + '?' + arr.join('&'))
    }
});

app.get('/', (req, res) => {
    res.send('欢迎访问首页')
})

app.listen(80)
console.log('服务启动成功');