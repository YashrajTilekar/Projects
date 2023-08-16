const express = require('express')
const router = express.Router()
const Assets = require("../schemas/Assets");

//Delete employee by ID

router.delete('/:id', async (req, res) => {
    try {
        const asset = await Assets.findByIdAndDelete(req.params.id);
        if (!asset) {
            return res.status(404).send('asset not found');
        }
        res.send('Asset deleted');
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;