
const router = require('express').Router()

const Project =  require('./model')


router.use('*', (req, res) => {
    res.json({ api: 'does this even work'})
})



module.exports = router