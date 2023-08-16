import React, { useState ,useEffect} from 'react';



function EmployeeForm() {

    const [employeeId, setEmployeeId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfJoining, setDateOfJoining] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // You can perform any actions with the form data here

        console.log('Employee ID:', employeeId);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Date of Joining:', dateOfJoining);

        const response = await fetch('http://localhost:3100/employee/',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                firstname: firstName,
                lastname : lastName,
                dateofjoining : dateOfJoining,
                employeeID : employeeId
            })
        })
    };

    return (

        <div>

            <h2>Employee Form</h2>

            <form onSubmit={handleSubmit}>

                <label>

                    Employee ID:

                    <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />

                </label>

                <br />

                <label>

                    First Name:

                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                </label>

                <br />

                <label>

                    Last Name:

                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                </label>

                <br />

                <label>

                    Date of Joining:

                    <input

                        type="date"

                        value={dateOfJoining}

                        onChange={(e) => setDateOfJoining(e.target.value)}

                    />

                </label>

                <br />

                <button type="submit">Submit</button>

            </form>

        </div>

    );

}

export default EmployeeForm;