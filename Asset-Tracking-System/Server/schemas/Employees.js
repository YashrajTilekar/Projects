const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true /* ,
        unique: true */
    },
    dateofjoining: {
        type: String,
        required: true
    },
    employeeID : {
        type : String,
        required : true ,
        unique : true
    }
})

module.exports = mongoose.model("Employee", EmployeeSchema)