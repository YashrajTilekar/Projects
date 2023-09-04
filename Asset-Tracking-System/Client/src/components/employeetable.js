import React, { useState, useEffect } from 'react';

function Employeetable(props) {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [employeeID, setEmployeeId] = useState("");
    const [employeeUID, setEmployeeUID] = useState("");

    useEffect(() => {
        // Fetch data from API and update state
        async function getData() {
            const response = await fetch('http://localhost:3100/employee/',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            //console.log(response)
            const result = await response.json()
            //console.log(result);
            setData(result)
        }
        getData()
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    async function handleDelete(empId) {
        await fetch(`http://localhost:3100/employee/${empId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }

    async function handleEdit(UID, empFN, empLN, empDOJ, empID) {
        setFirstName(empFN);
        setLastName(empLN);
        setDateOfJoining(empDOJ);
        setEmployeeId(empID);
        setEmployeeUID(UID);

        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    async function handleUpdate() {
        await fetch(`http://localhost:3100/employee/${employeeUID}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    dateofjoining: dateOfJoining,
                    employeeID: employeeID
                })
            })
    }

    return (
        <div>
            <form className="my-2 mx-2" onSubmit={handleUpdate} data-bs-theme={props.mode === "light"? "light":"dark"}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Employee ID
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Employee ID"
                            value={employeeID}
                            onChange={(event) => setEmployeeId(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            DOJ
                        </label>
                        <input
                            type="date"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="DOJ"
                            value={dateOfJoining}
                            onChange={(event) => setDateOfJoining(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                            Update Employee
                        </button>
                    </div>
                </div>
            </form>


            <center>
                <h4>List of Employees</h4>
            </center>
            
            <table className= {props.mode === "light"?`table table-striped` : `table table-dark table-striped`}>
                <thead>
                    <tr>
                        <th scope="col">UID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOJ</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(emp => (
                            <tr>
                                <th scope='row'>{emp._id}</th>
                                <td>{emp.firstname}</td>
                                <td>{emp.lastname}</td>
                                <td>{emp.dateofjoining}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDelete(emp._id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleEdit(emp._id, emp.firstname, emp.lastname, emp.dateofjoining, emp.employeeID)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> 
        </div>
    );
}

export default Employeetable