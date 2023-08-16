import React, { useState, useEffect } from 'react';

function Assettable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from API and update state
        async function getData() {
            const response = await fetch('http://localhost:3100/asset',
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

    //console.log(data)

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Model Number</th>
                        <th scope="col">Type</th>
                        <th scope="col"> Added-Date </th>
                        <th scope="col">Price</th>
                        <th scope="col">Assigned To</th>
                        <th scope="col">Assignment-Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(asset => (
                            <tr>
                                <th scope='row'>{asset.assetModelNumber}</th>
                                <td>{asset.assetType}</td>
                                <td>{asset.assetAddedDate}</td>
                                <td>{asset.assetPrice}</td>
                                <td>{asset.employeeID}</td>
                                <td>{asset.assignmentDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Assettable;