import React from 'react'

function Person(props) {
    return (
        <div>
            <h2>
               I am {props.person.name}. I am {props.person.age} years old. I know {props.person.skill}
            </h2>
        </div>
    );
}

export default Person;