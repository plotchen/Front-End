# 电商后台管理系统

## vue ui创建项目

- vue-router
- element-ui
- axios

## 码云项目托管

1. 创建码云账号
2. 点击头像--->设置--->SSH公钥
3. 生成ssh公钥  --->git bash here -->`ssh-keygen` 连按三次回车 ,对应路径下的.pub结尾的文件中的内容粘贴

## 将本地项目托管到码云中

1. 保证项目文件夹中有.git的文件夹
2. **git status** 查看当前项目文件夹的各个文件的状态
3. **git add .** 将本地所有文件添加准备提交到暂存区
4. **git commit -m 备注信息**  将本地文件提交到暂存区
5. **git remote add origin  自己仓库的地址**
6. **git push -u origin master**
7. 注意: 如果看到了 **fatal**  致命的错误  `git remote remove origin` 先将远端关联断开 ,再重新执行 5 6

## 分支

 项目根目录中创建login分支 `git checkout -b login`  创建login分支并切换到login分支上

## 剔除结构

1. App.vue组件中的 template标签 script style 清空 
2. views文件夹 删除
3. components中的helloworld.vue组件删除
4. router.js中的路由规则 删除

## 渲染登录组件

1. components文件夹下新建login.vue  记得  template script style
2. 将login.vue单文件组件导入到路由.js文件中
3. 配置路由规则 用户访问/login 渲染 Login.vue组件
4. 重定向, /根路径 重定向到/login

### 绘制登录组件的页面

1. 在assets文件夹下新建一个global.css,并将文件引入到main.js在global.css 设置了bodyhtml宽高100%

2. 在login中style标签 设置less样式,由于cli只处理css,安装两个依赖项  less-loader ,less 

3. 设置 背景色  设置 垂直居中显示的白盒子

4. 头像区域绘制

5. 绘制表单区域

   1. element-ui组件库中---->Form表单 --复制组件
   2. 第一次使用的组件需要在plugins文件夹下的element.js文件中 按需导入并注册
   3. 设置位置样式

6. 表单区域的icon图标

   1. element-ui组件库中---->Input 输入框 --带icon的输入框

7. 表单的数据绑定

   1. 为el-form属性绑定:model="data中定义的对象"
   2. 为input双向绑定data中定义的对象的属性 username和password

8. 表单的校验规则

   1. 为表单添加rules属性 对应的值是表单中定义的规则对象
   2. 为form-item绑定prop属性 值是 规则对象中的属性
   3. 为每一项定义校验规则----复制

9. 表单的重置

   1. 为el-form设置 ref属性
   2. 为重置按钮绑定点击事件,在methods中定义处理函数
   3. 在函数中调用表单的 resetFields()

10. 表单预验证

    1. 为登录按钮绑定点击事件
    2. 在事件处理函数中调用表单引用对象的validate方法 ,得到一个布尔值

11. 配置axios 

    1. 在main.js中导入axios 

    2. 设置axios的基准地址 

       ### 定义全局接口

       ```js
       import axios from "axios";
       axios.defaults.baseURL = "接口地址";
       
       Vue.prototype.$http = axios;
       ```

       

    3. 将axios当做一个方法挂载给Vue的原型上

12. 在login组件中就可以使用axios发送请求了

    1. 预验证通过之后 发送ajax请求 post请求 携带参数 
    2. 通过await和async的方式 拿到响应结果  
    3. 判断响应结果的状态码 提示用户  

13. 配置messageBox 

14. 登录成功之后的操作

    1. 存储服务器返回的token字段  通过sessionStorage 存储
    2. 通过编程式导航的方式跳转到home路由
    3. 新建home.vue 导入到routerjs 并配置路由规则

15. ### 路由前置导航守卫 在router.js中

    ```js
    // 挂载路由前置导航守卫
    router.beforeEach((to, from, next) => {
      // to 将要访问的路径
      // from 代表从哪个路径跳转而来
      // next 是一个函数，表示放行
      //     next()  放行    next('/login')  强制跳转
    
      if (to.path === '/login') return next()
      // 获取token
      const tokenStr = window.sessionStorage.getItem('token')
      if (!tokenStr) return next('/login')
      next()
    })
    ```

16. 退出功能

    1. 给退出按钮绑定点击事件,对应在methods中定义方法
    2. 清空sessionStorage   编程式导航到login 页面

17. 语法警告

    1. 安装插件 vsPretter

    2. 新建.prettierrc 

       ```js
       {
       	"semi":false,
       	"singeQute" true
       }
       ```

    3. eslint别的语法警告  添加校验规则 关闭  eslintrc.js  rules节点

18. 登录功能完成 推送分支
    1. git branch   查看当前所处的分支  假设在login分支
    2. git add . 
    3. git commit -m 备注信息
    4. git push -u origin 分支名称
    5. 以上4步 将login中的本地分支提交到本地仓库 并将本地login分支推送到远端仓库
    6. 分支合并
       1. 切换到主分支  git checkout matser 
       2. 合并分支  git merge 分支名称
       3. 更新master主分支的远端仓库   git push 

### home页面

1. 页面布局 

   1. Container  布局容器  复制第四个布局组件 , 第一次使用这些组件 ,需要在element.js按需导入并注册
   2. 分别设置头部 侧边栏 主体区域的颜色 
   3. 设置最外层的el-container  高度为100%
   4. 样式美化

2. 导航

   1. NavMenu 导航菜单 复制自定义颜色组件,第一次使用这些组件 ,需要在element.js按需导入并注册

   ### 配置token令牌在axios的请求拦截器中Authorization

   ```js
   axios.interceptors.request.use(config => {
     // console.log(config)
     config.headers.Authorization = window.sessionStorage.getItem('token')
     // 在最后必须 return config
     return config
   })
   ```

3. 获取左侧菜单列表

   1. 在home组件的methods节点中定义方法,并且在钩子函数created中调用
   2. 获取的数据结果是promise对象  async await  拿到响应的结果 ,并保存在data中定义的数据中
   3. v-for 渲染结果





