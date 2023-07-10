const router = require('express').Router()
const Bread = require('../models/bread')

//this renders the data to the screen
router.get('/', (req,res) => {
    res.render('index', {breads: Bread})
})

//this ties back the url on local host to the bread data and sends the data model information
router.get('/:index',(req,res) => {
    const { index } = req.params
    res.render('show',{bread:Bread[index]})
    //res.send(Bread[index])
})

module.exports = router