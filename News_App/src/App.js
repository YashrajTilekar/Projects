import './App.css';
import React ,{Component} from "react";
import { NavBar } from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router  ,Route , Routes } from "react-router-dom";

export default class App extends Component
{
    render()
    {
        return(
            <div>
                <Router>
                    <NavBar />

                    <Routes>
                        <Route exact path='/' element = {<News key="general" country = "in" category = "general" pageSize = {6} />} />

                        <Route exact path='/business' element = {<News key="business" country = "in" category = "business" pageSize = {6} />} />
 
                        <Route exact path='/entertainment' element = {<News key="entertainment" country = "in" category = "entertainment" pageSize = {6} />} />
 
                        <Route exact path='/general' element = {<News key="general" country = "in" category = "general" pageSize = {6} />} />   
 
                        <Route exact path='/health' element = {<News key="health" country = "in" category = "health" pageSize = {6} />} />
 
                        <Route exact path='/science' element = {<News key="science" country = "in" category = "science" pageSize = {6} />} />
 
                        <Route exact path='/sports' element = {<News key="sports" country = "in" category = "sports" pageSize = {6} />} />

                        <Route exact path='/technology' element = {<News key="technology" country = "in" category = "technology" pageSize = {6} />} />                     
                    </Routes>
                </Router>
            </div>
        )
    }
}