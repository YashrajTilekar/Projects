import React, { useState } from "react";
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
    const [mode ,setMode] = useState("light");

    function toggleMode(){
        if(mode === "light"){
            setMode("dark");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
        else{
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }

    return (
        <BrowserRouter>
            <Navbar toggleMode={toggleMode} mode={mode} />
            <Routes>

                <Route path="/" element={<Login />}></Route>

                <Route path="/Dashboard" element={<Dashboard />}></Route>

                <Route path="/home" element={<Home mode={mode} />}></Route>

                <Route path="/employeedata" element={<Employeetable mode={mode} />}></Route>

                <Route path="/assetdata" element={<Assettable mode={mode}/>}></Route>

                <Route path="/addemployee" element={<EmployeeForm mode={mode}/>}></Route>

                <Route path="/addasset" element={<AssetForm mode={mode}/>}></Route>

                <Route path="/manageasset" element={<Manageasset mode={mode}/>}></Route>
                
                <Route path="/searchasngasset" element={<SearchAssignedAsset mode={mode}/>}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;