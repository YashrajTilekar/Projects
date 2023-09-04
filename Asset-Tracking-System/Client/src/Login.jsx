import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

//import  "./styles.css";

 

function Login(){

    function handleClick(){

        navigate('/home');

    }

   

        const navigate = useNavigate()

   

    const [values,setVaues ]= useState(

        {

            email : "",

            password : ""

        }

    )

 

 

 

 

    return(

     <div className="d-flex justify-content-center align-items-center vh-100" im>  

   

        <div className="bg-white p-3 rounded w-25 border" id="loginPage">

            <h2>Log IN </h2>

            <form>

                <div className="mb-3">

                    <label htmlFor="email"><strong>Email</strong></label>

                    <input type="email" placeholder="Enter email " name="email"

                     onChange={e=> setVaues({...values,email: e.target.value})}  className="form-control rounded-0 " />

 

                </div>

                <div className="mb-3">

                    <label htmlFor="password"><strong>Password</strong></label>

                    <input type="password" placeholder="Enter the password " name="password"

                      onChange={e=> setVaues({...values,password: e.target.value})} className="form-control rounded-0 " />

 

                </div>

                <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleClick}>log in </button>

                <p>You agree to our tearms</p>

               <button className="btn btn-secondary border w-100 rounded-0" >

                    Create Account

                </button>

           

               

            </form>

 

        </div>

 

 

    </div>

 

    )

}

 

export default Login;

