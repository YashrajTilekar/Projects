import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Routes
} from "react-router-dom";

function App() {
    const [mode ,setMode] = useState("light");
    const [alert ,setAlert] = useState(null);

    const insertIntoAlert = (sMessage ,sType)=>
    {
        const obj = 
        {
            msg : sMessage,
            type : sType
        };
        setAlert(obj);

        setTimeout(()=> setAlert(null) ,3000);
    }

    const toggleMode = ()=>
    {
        if(mode === "light")
        {
            setMode("dark");
            document.body.style.backgroundColor = "black";
            insertIntoAlert("Dark Mode Enabled" ,"success");

        }
        else
        {
            setMode("light");
            document.body.style.backgroundColor = "white";
            insertIntoAlert("Light Mode Enabled" ,"success");
        }
    }

    return (
        <div>
            <Router>
                <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
                <Alert alert = {alert} />

                <div className='container my-3' >
                    <Routes>

                        <Route 
                        exact path='/about' 
                        element = {<About mode = {mode}/>} 
                        />

                        <Route 
                        exact path='/'
                        element = {<TextForm heading = "Enter the Text to analyse" mode = {mode} insertIntoAlert = {insertIntoAlert} />}
                        />

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
