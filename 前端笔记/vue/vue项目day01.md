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

