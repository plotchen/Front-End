# MySQL绿色运行

## 解压

- libeay32.dll
- mysql.exe
- mysqld.exe
- ssleay32.dll

## 数据库初始化

```shell
mysqld --datadir="./data" -I
```

### 拿到初始化后的临时密码

```
计算机名.err 文件

[NOTE]这样一行 后面 root@localhost: *********
```

## 运行数据库

```shell
mysqld --datadir="./data"
```

## 进入数据库 修改认证方式

```SQL
use mysql;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

## 创建好客租房数据库

```sql
create database hkzf;

use hkzf;
```

### 导入SQL文件