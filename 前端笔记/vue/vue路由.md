# vue 路由

1. 路由的概念以及前端路由的原理
2. Vue
   Router实现前端路由
3. 嵌套路由,动态路由
4. 命名路由以及编程式导航
5. 后台管理案例

## vue路由基本使用

```html
 <!-- 1引入依赖文件,顺序不可颠倒 -->
    <script src="./lib/vue_2.5.22.js"></script>
    <script src="./lib/vue-router_3.0.2.js"></script>
    <div id="app">
      <!-- 2.路由链接占位和路由的占位符 -->
      <router-link to="/music">音乐</router-link>
      <router-link to="/movie">电影</router-link>
      <router-link to="/news">新闻</router-link>
      <!-- <router-view></router-view> -->
     <router-view />
    </div>
    <script>
      // 3.创建组件
      const music = {
        template: "<p>音乐列表</p>"
      }
      const movie = {
        template: "<p>电影列表</p>"
      }
      const news = {
        template: "<p>新闻列表</p>"
      }
   
      //   4.创建路由实例并配置路由规则
      const router =  new VueRouter({
            // 路由规则
         routes: [
                { path: '/music', component: music },
                { path: '/movie', component: movie },
                { path: '/news', component: news }
            ]
        })

      new Vue({
        el: "#app",
        data: { },
        methods: { },
        // 5.路由实例的挂载
        // router:router
        router
      })
```

## 路由重定向

- 默认让根路径跳转到一个指定的路径

- 在routes路由规则中新增

  ```js
  const router = new VueRouter({
      // 路由规则
      routes: [
          // 在routes路由规则中新增 redirect 值必须是一个路由地址不是一个组件
          { path: "/", redirect: '/movie' },
          { path: "/music", component: music },
          { path: "/movie", component: movie },
          { path: "/news", component: news }
      ]
  })
  ```

## 动态路由匹配(路由传参)

1. 现在路由规则中路由参数的占位, 在组件中就可以使用$route.params.属性

   ```js
     const router = new VueRouter({
           // 所有的路由规则
         routes: [
       	 // 路由参数占位   
         { path: '/user/:id', component: User },
   ]
   2.组件中 使用  
       const User = {
           props:['id'],
           template: '<h1>User 组件 --用户id为: {{$route.params.id}} </h1>'
         }  
   ```

2. ★布尔值方式 开启props传参,在路由规则中新增参数props:true,在组件中 props:['属性']   {{属性}}

   ```js
    const router = new VueRouter({
           // 所有的路由规则
         routes: [
       	 // 路由参数占位   					开启props
         { path: '/user/:id', component: User ,props:true},
   ]
     2.组件中使用
      const User = {
           props:['id'],
           template: '<h1>User 组件 --用户id为: {{id}} </h1>'
         }
   ```

3. 对象方式 

   ```js
    const router = new VueRouter({
           // 所有的路由规则
         routes: [
       	 // 路由参数占位   					开启props
         { path: '/user/:id', component: User ,props:{a:1,b:2}},
   ]
     2.组件中使用
      const User = {
           props:['id','a','b'],
           template: '<h1>User 组件 --用户id为: {{id}} {{a}} {{b}} </h1>'
         }
   ```

4. 函数模式

   ```js
    const router = new VueRouter({
           // 所有的路由规则
         routes: [
       	 // 路由参数占位   					开启props
         { path: '/user/:id', component: User ,props: route => ({ a: 1, b: 2, id: route.params.id })},
   ]
     2.组件中使用
      const User = {
           props:['id','a','b'],
           template: '<h1>User 组件 --用户id为: {{id}} {{a}} {{b}} </h1>'
         }
   ```

## 命名路由

为路由规则中的对象中添加name属性

```js
const router = new VueRouter({
        // 路由规则
        routes: [
          { name: "mu",path: "/music/:id",component: music },
        ]
      })
```

在router-link中使用

```html
  <router-link :to="{name:'mu', params:{id: 10 }}">音乐</router-link>
注意:1.to 属性绑定
	 2.路由名称必须加引号
     3.传递参数路由规则中的参数占位和传递的参数的名字一致
```

## 编程式导航

使用js的方式实现页面的跳转 location.href 

$router.push('路由地址')

$router.go(1)

$router.back()

$router.forward()

## route相关的命名区别

- router vue实例上的一个属性
- routes 路由的规则.规则是多个路由匹配 需要加s routes对应的是一个数组 
- $route路由对象 一般用户路由动态匹配
- $router用于编程式导航

## 路由案例

### 结构搭建

1. 引入 vue.js  vue-router.js文件
2. vue基础结构搭建  #app  new Vue()
3. 创建组件 
4. 创建路由实例,并定义路由规则
5. 设置路由占位router-view
6. 将路由实例挂载到app实例上

 ### 业务处理

1. 将左侧所有的li标签改为路由链接  router-link to=""
2. 创建不同的路由链接对应的不同的组件
3. 放置右侧区域的路由占位 router-view
4. 配置子路由规则

### 用户管理页面

1. 在用户管理页面data中定义数据
2. v-for循环遍历展示数据
3. 为操作列绑定事件 通过编程式导航的方式跳转到信息详情页面 并传递当前项的id
4. 新建详情组件 并配置路由规则
5. 在详情页面通过编程式导航的方式实现回退功能