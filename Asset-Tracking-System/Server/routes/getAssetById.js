const express = require('express')
const router = express.Router()
const Assets = require("../schemas/Assets");


router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const asset = await Assets.findById(req.params.id)
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        res.json(asset);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating asset: ${err.message}`);
    }

})
module.exports = router;