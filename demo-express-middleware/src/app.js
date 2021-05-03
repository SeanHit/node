const express = require('express')
const userRouter = require('./router/user_router')
const models = require('../models') // 模型对象

const app = express();


app.post('/user/create', (req, res) => {
    const { name } = req.query

    const user = await models.User.create({
        name
    })
    res.json({
        code: 0,
        message: 'success',
        data: user,
    })
})


function errorHandleMiddleware(err, req, res, next) {
    console.log('123', 'laole')
    if (err) {
        const { message } = err
        res.status(500).json({
            code: 500,
            message
        })
    } else {
        // next()
    }
}

function notFoundHandleMiddleware(req, res, next) {
    res.json({
        message: 'api不存在'
    })
}

app.use(notFoundHandleMiddleware)
app.use(errorHandleMiddleware)

app.listen(4000, () => {
    console.log('4000端口启动')
})