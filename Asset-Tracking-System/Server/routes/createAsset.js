const express = require('express')
const router = express.Router()
const Assets = require('../schemas/Assets')


router.post('/', async(req, res)=>{
    try{
        const asset = new Assets(req.body)
        await asset.save()
        res.status(201).send(asset)
    }
    catch {
        res.status(500).send('something went wrong')
    }
})

module.exports = router;