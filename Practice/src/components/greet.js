import React from "react";

//Functional Component
const Greet = ([props])=>{
    const {name ,surname} = props;

    return (
        <div>
            <h1>Hello {name} {surname} </h1>
        </div>
    );
}

export default Greet;