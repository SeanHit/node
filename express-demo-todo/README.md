# express demo简单练手项目

## 需求说明

1. 根据客户端传递的不同参数（状态/页码） 查询 任务的列表
2. 实现 新增一个任务功能 （名称、截止日期、内容）
3. 实现一个 编辑的功能：根据客户端传递的任务对象进行编辑 （名称、截止日期、内容、ID）
4. 删除一个任务　（ID）
5. 修改任务的状态（ID/状态--代办/完成）

# api的实现

## 数据库的初始化
1. 创建一个数据库
2. 使用`sequelize cli`初始化项目的数据库配置信息
    `npx sequelize init`
3. 生成模型文件
    1. migrate 文件
    2. model 文件
        `npx sequelize-cli model:generate --name Todo_Tasks --attributes name:string,deadline:date, content:string`
4. 持久化 模型对应的[数据库表]
    `npx sequelize db:migrate`

## api里面具体使用ORM模型
