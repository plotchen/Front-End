const mongoose = require('mongoose');
//情况1.不需要用户名和密码
// const str = 'mongodb://localhost/blog'
//情况2.需要用户名和密码(错误的用户名和密码)
// const str = 'mongodb://itcast:errorPassword@localhost:27017/blog'
//情况3.需要用户名和密码(正确的用户名和密码)
const str = 'mongodb://itcast:itcast@localhost:27017/blog'
mongoose.connect(str, { useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
    console.log('连接数据库成功');
}).catch(()=>{
    console.log('连接数据库失败');
})