import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./components/Home";
import Employeetable from "./components/employeetable";
import Assettable from "./components/assetstable";
import EmployeeForm from "./components/Empform";
import AssetForm from "./components/Assetform";
import Navbar from "./components/Navbar";
import Manageasset from "./components/Manageasset";
import SearchAssignedAsset from "./components/SearchAssignedAsset";

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path="/" element={<Login />}></Route>

                <Route path="/Dashboard" element={<Dashboard />}></Route>

                <Route path="/home" element={<Home />}></Route>

                <Route path="/employeedata" element={<Employeetable />}></Route>

                <Route path="/assetdata" element={<Assettable />}></Route>

                <Route path="/addemployee" element={<EmployeeForm />}></Route>

                <Route path="/addasset" element={<AssetForm />}></Route>

                <Route path="/manageasset" element={<Manageasset />}></Route>
                
                <Route path="/searchasngasset" element={<SearchAssignedAsset />}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;