import React ,{useState} from 'react'

function SearchAssignedAsset(props) 
{
    const [empUID ,setEmpUID] = useState("");
    const [empFirstName ,setEmpFirstName] = useState("");
    const [empLastName ,setEmpLastName] = useState("");
    const [empID ,setEmpID] = useState("");
    const [assetArr ,setAssetArr] = useState([]);


    const handleSearch = async (e)=>{
        e.preventDefault()
        //console.log("Clicked!!!")
        const reponse = await fetch(`http://localhost:3100/asset/assetbyempid/${empUID}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        //console.log(reponse)
        const result = await reponse.json() //result is the array
        setAssetArr(result);
        //console.log(result)

        const empResponse = await fetch(`http://localhost:3100/employee/${empUID}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const empObj = await empResponse.json();
        setEmpFirstName(empObj.firstname);
        setEmpLastName(empObj.lastname);
        setEmpID(empObj.employeeID);
    }

    return (
        <div>
            <form className="my-2 mx-2" onSubmit={handleSearch} data-bs-theme={props.mode === "light"? "light":"dark"}>
                <div className="form-row align-items-center">
                    <div className='col-auto'>
                        <h4 className="navbar-brand mx-2">
                            View Handovered Assets
                        </h4>
                    </div>
                    
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                            Employee UID
                        </label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="inlineFormInput"
                            placeholder="Employee UID"
                            value={empUID}
                            onChange={(event) => setEmpUID(event.target.value)}
                        />
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-success mb-2">
                            Search
                        </button>
                    </div>
                </div>
            </form>

            <div className='my-3 mx-3'>
                <h5>UID : {empUID} </h5>
                <h5>First Name : {empFirstName} </h5>
                <h5>Last Name : {empLastName} </h5>
                <h5>Employee ID : {empID} </h5>
            </div>

            <table className={props.mode === "light"?`table table-striped` : `table table-dark table-striped`}>
                <thead>
                    <tr>
                        <th scope="col">Model Number</th>
                        <th scope="col">Type</th>
                        <th scope="col"> Added-Date </th>
                        <th scope="col">Price</th>
                       
                        <th scope="col">Assignment-Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        assetArr.map(asset => (
                            <tr>
                                <th scope='row'>{asset.assetModelNumber}</th>
                                <td>{asset.assetType}</td>
                                <td>{asset.assetAddedDate}</td>
                                <td>{asset.assetPrice}</td>
                                <td>{asset.assignmentDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default SearchAssignedAsset;