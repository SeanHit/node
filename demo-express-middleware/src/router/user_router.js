const express = require('express');

const router = express.Router(); // 路由对象

router.use(function (req, res, next) {
    console.log('from router demo middleware');
    next()
})

router.get('/demo', (req, res) => {
    res.json({
        message: 'from router demo'
    })
})

module.exports = router;