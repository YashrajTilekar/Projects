import React, { useState, useEffect } from 'react';

function Assettable(props) {
    const [data, setData] = useState([]);
    const [assetUID ,setAssetUID] = useState("");
    const [assetType ,setAssetType] = useState("");
    const [assetModelNo ,setAssetModelNo] = useState("");
    const [assetAddedDate ,setAssetAddedDate] = useState("");
    const [assetPrice ,setAssetPrice] = useState("");
    const [employeeUID, setEmployeeUID] = useState("");
    const [handoveredDate ,setHandoveredDate] = useState("");

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

    async function handleUpdate() {
        await fetch(`http://localhost:3100/asset/${assetUID}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    assetType,
                    assetModelNo,
                    assetAddedDate,
                    assetAddedDate,
                    assetPrice,
                    employeeID :employeeUID,
                    assignmentDate : handoveredDate
                })
            })
    }

    async function handleDelete(assetId) {
        await fetch(`http://localhost:3100/asset/${assetId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }

    async function handleEdit(assetId){
        const response = await fetch(`http://localhost:3100/asset/${assetId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
    
        const assetData = await response.json();
        
        setAssetUID(assetData._id);
        setAssetType(assetData.assetType);
        setAssetModelNo(assetData.assetModelNumber);
        setAssetAddedDate(assetData.assetAddedDate);
        setAssetPrice(assetData.assetPrice);
        setEmployeeUID(assetData.employeeID);
        setHandoveredDate(assetData.assignmentDate);

        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div>
            <form className="my-2 mx-2" onSubmit={handleUpdate} data-bs-theme={props.mode === "light"? "light":"dark"}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Asset Type
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Asset Type"
                            value={assetType}
                            onChange={(event) => setAssetType(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Asset Model No.
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Asset Model No."
                            value={assetModelNo}
                            onChange={(event) => setAssetModelNo(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Asset Added Date
                        </label>
                        <input
                            type="date"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Asset Added Date"
                            value={assetAddedDate}
                            onChange={(event) => setAssetAddedDate(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Asset Price
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Asset Price"
                            value={assetPrice}
                            onChange={(event) => setAssetPrice(event.target.value)}
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
                            placeholder="Employee UID"
                            value={employeeUID}
                            onChange={(event) => setEmployeeUID(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Employee ID
                        </label>
                        <input
                            type="date"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Employee UID"
                            value={handoveredDate}
                            onChange={(event) => setHandoveredDate(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                            Update Asset
                        </button>
                    </div>
                </div>
            </form>

            <center>
                <h4>List of Assets</h4>
            </center>

            <table className={props.mode === "light"?`table table-striped` : `table table-dark table-striped`}>
                <thead>
                    <tr>
                        <th scope="col">Asset ID</th>
                        <th scope="col">Model No.</th>
                        <th scope="col">Type</th>
                        <th scope="col"> Added-Date </th>
                        <th scope="col">Price</th>
                        <th scope="col">Assigned To</th>
                        <th scope="col">Assignment-Date</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(asset => (
                            <tr>
                                <th scope='row'>{asset._id}</th>
                                <td>{asset.assetModelNumber}</td>
                                <td>{asset.assetType}</td>
                                <td>{asset.assetAddedDate}</td>
                                <td>{asset.assetPrice}</td>
                                <td>{asset.employeeID}</td>
                                <td>{asset.assignmentDate}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDelete(asset._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleEdit(asset._id)}>
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

export default Assettable;