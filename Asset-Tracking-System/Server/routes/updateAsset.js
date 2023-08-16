const express = require('express')
const router = express.Router()
const Assets = require("../schemas/Assets");


router.put('/:id', async (req, res) => {
    try {
        const asset = await Assets.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!asset) {
            return res.status(404).send('Asset not found');
        }
        res.send('Asset updated successfully');
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating employee: ${err.message}`);
    }

})
module.exports = router;