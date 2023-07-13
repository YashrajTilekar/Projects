import React from "react";

const Hello = ()=>{
    /* return (
        <h1>Hello Yashraj</h1>                            //JSX
    ); */

    return React.createElement("div" ,null ,React.createElement("h1" ,null ,"Hello Yashraj"));                  //Without JSX
}

export default Hello;