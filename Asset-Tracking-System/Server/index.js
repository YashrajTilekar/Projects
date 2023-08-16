require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const getEmployees = require('./routes/getEmployees')
const createEmployee = require('./routes/createEmployee')
const updateEmployee = require('./routes/updateEmployee')
const deleteEmployee = require('./routes/deleteEmployee')
const getEmployeeById = require('./routes/getEmployeeById')
const searchEmployee = require('./routes/searchEmployee')
const getAssets = require("./routes/getAssets");
const createAsset = require("./routes/createAsset");
const getAssetById = require("./routes/getAssetById");
const updateAsset = require("./routes/updateAsset");
const deleteAsset = require("./routes/deleteAsset");
const getAssetByEmpID = require("./routes/getAssetsByEmpID");
const cors = require("cors");

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));



mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
app.use(express.json())

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});



app.use('/employee', getEmployees)       //GET   "/"
app.use('/employee', createEmployee)    //POST   "/"      Body
app.use('/employee', updateEmployee)    //PUT    "/:id"
app.use('/employee', deleteEmployee)    //DELETE "/:id"
app.use('/searchemployee', searchEmployee)
app.use('/employee', getEmployeeById)   //GET    "/:id"

app.use("/asset" ,getAssets);        //GET   "/"
app.use("/asset" ,createAsset);      //POST   "/"      Body
app.use("/asset" ,updateAsset)       //PUT    "/:id"  Body
app.use("/asset" ,getAssetById);     //GET    "/:id"
app.use("/asset" ,getAssetByEmpID);  //GET    "/assetbtempid/:empid"
app.use("/asset" ,deleteAsset);      //DELETE "/:id"



app.listen(3100, () => console.log('server started in port 3100'))