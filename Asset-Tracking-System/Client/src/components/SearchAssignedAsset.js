import React ,{useState} from 'react'

function SearchAssignedAsset() 
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
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h4 className="navbar-brand">
                        View allocated Assets
                    </h4>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Emploee UID"
                                aria-label="Search"
                                onChange={(event) => setEmpUID(event.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className='my-3 mx-3'>
                <h5>UID : {empUID} </h5>
                <h5>First Name : {empFirstName} </h5>
                <h5>Last Name : {empLastName} </h5>
                <h5>Employee ID : {empID} </h5>
            </div>

            <table className="table table-striped">
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