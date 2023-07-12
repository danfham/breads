const router = require('express').Router()
const Bread = require('../models/bread')

//this renders the data to the screen
router.get('/', (req,res) => {
    res.render('index', {breads: Bread})
})

// NEW
router.get('/new', (req, res) => {
    res.render('new')
})

// edit
router.get('/:index/edit',(req,res)=> {
    const { index } = req.params
    res.render('edit',{
        bread:Bread[index],
        index
    })
})

//this ties back the url on local host to the bread data and sends the data model information
router.get('/:index',(req,res) => {
    const { index } = req.params
    res.render('show',{
        bread:Bread[index],
        index
    })
})

//CREATE new breads
router.post('/', (req,res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    if (!req.body.image) req.body.image='https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'   

    Bread.push(req.body)
    res.status(303).redirect('/breads')
})

//PUT make an update to the underlying data model by index
router.put('/:index', (req,res) => {
    const { index } = req.params
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    if (!req.body.image) req.body.image='https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'   

    Bread[index]=req.body
    res.status(303).redirect(`/breads/${index}`)
})

//DELETE the bread
router.delete('/:index', (req,res) => {
    const { index } = req.params
    Bread.splice(index,1)
    res.status(303).redirect('/breads/')
})

module.exports = router