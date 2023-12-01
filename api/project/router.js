
const router = require('express').Router()

const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})



router.use('*', (req, res) => {
    res.json({ api: 'does this even work' })
})



module.exports = router