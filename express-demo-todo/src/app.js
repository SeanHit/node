const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const models = require('../db/models')
const SUCCESS_CODE = 0;
const ERROR_CODE = 1

app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extends: true }))

/**
 * 1. 所有的错误 http status == 500
 */

/** 查询任务列表 */
app.get('/list', async (req, res, next) => {
    try {
        // 1. 状态 1：待办 2： 完成 3：删除
        const { page = 1, status } = req.query;
        const limit = 10;
        const offset = (page - 1) * limit;
        const list = await models.Todo_Tasks.findAndCountAll({
            where: { status },
            offset,
            limit
        })
        res.json({
            code: SUCCESS_CODE,
            data: list
        })
    } catch (error) {
        next(error)
    }

})
/** 新增一个任务功能 （名称、截止日期、内容） */
app.post('/create', async (req, res, next) => {
    try {
        const { name, deadline, content, status } = req.body
        /** 数据持久化到数据库 */
        const task = await models.Todo_Tasks.create({
            name,
            content,
            deadline,
            status
        })
        res.json({
            code: SUCCESS_CODE,
            data: task
        })
    } catch (error) {
        next(error);
    }

})
/** 更新 */
app.post('/update', async (req, res, next) => {
    try {
        const { id, name, content, deadline, status } = req.body;
        let task = await models.Todo_Tasks.findOne({
            where: { id }
        })
        if (task) {
            task = await task.update({
                name,
                content,
                deadline,
                status
            })
            res.json({
                code: SUCCESS_CODE,
                data: task
            })
        } else {
            res.json({
                code: ERROR_CODE,
                message: '修改的记录不存在'
            })
        }

    } catch (error) {
        next(error)
    }

})
/** 删除任务 */
app.delete('/delete/:id', async (req, res, next) => {
    const { id } = req.params;

    let task = await models.Todo_Tasks.findOne({
        where: { id }
    })
    if (task) {
        task = await task.destroy()
        res.json({
            code: SUCCESS_CODE,
            data: task
        })
    }
    res.json({
        code: ERROR_CODE,
        message: '删除的记录不存在'
    })

})

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(4000, () => {
    console.log('项目在4000端口成功启动了')
})