import React, { useState, useEffect } from 'react';

function Employeetable() {
    const [data, setData] = useState([]);

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

    console.log(data)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">UID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOJ</th>
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
                                </tr>
                                ))
                        }
                </tbody>
            </table>
        </div>
    );
}

export default Employeetable