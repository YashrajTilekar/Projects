const express = require('express')
const router = express.Router()
const Assets = require("../schemas/Assets");


router.get('/', async(req, res)=>{
    try{
        const response = await Assets.find()
        res.json(response)
    }
    catch(err){
        res.status(500).send(`Error adding employee: ${err.message}`);
    }

})
module.exports = router;