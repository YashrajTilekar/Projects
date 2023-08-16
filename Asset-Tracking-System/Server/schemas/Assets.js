const mongoose = require('mongoose')

const AssetSchema = new mongoose.Schema({
    assetType: {
        type: String,
        required: true
    },
    assetModelNumber: {
        type: String,
        required: true,
        unique : true 
    },
    assetAddedDate: {
        type: String,
        required: true
    },
    assetPrice : {
        type : String,
        required : true 
    },
    employeeID : {
        type : String
    },
    assignmentDate : {
        type : String
    }
})

module.exports = mongoose.model("Asset", AssetSchema);