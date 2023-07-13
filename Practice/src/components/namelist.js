import React from "react";
import Person from "./person";

const NameList = ()=>{
    const nameArr = ["Bruce" ,"Clark" ,"Diana"];

    const personArr = [
        {
            id : 1,
            name : "Yash",
            age : 21 ,
            skill : "React"
        },
        {
            id : 2,
            name : "Pranav",
            age : 22 ,
            skill : "Testing"
        },
        {
            id : 3,
            name : "Yugandhar",
            age : 21 ,
            skill : "Angular"
        },
        {
            id : 4,
            name : "Avishkar",
            age : 22 ,
            skill : "Vue"
        }
    ];
    const nameList = nameArr.map((elem) => (
            <Person person = {elem} key = {elem.id} />
        ))

    return (
        <div>
            {
                personList
            }
        </div>
    );
}

export default NameList;