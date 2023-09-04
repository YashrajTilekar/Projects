import React from 'react';
import empImg from "../3789820.png";
import assetImg from "../asset.jpg";
import dataImg from "../2232778.png";
import manageImg from "../images.png"
import { Link } from 'react-router-dom';

function Home(props) {

    return (
        <div style={{backgroundColor : props.mode === "light"?"white":"black"}}>
            <div className='row'>
                <div className="card my-4 mx-4" style={{ width: "18rem",backgroundColor : props.mode === "light"?"white":"black" }}>
                    <img src={empImg} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link to="/addemployee" className="btn btn-primary ">
                            Add Employee
                        </Link>
                    </div>
                </div>

                <div className="card my-4 mx-4" style={{ width: "18rem",backgroundColor : props.mode === "light"?"white":"black" }}>
                    <img src={assetImg} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link to="/addasset" className="btn btn-primary ">
                            Add Asset
                        </Link>
                    </div>
                </div>

                <div className="card my-4 mx-4" style={{ width: "18rem" ,backgroundColor : props.mode === "light"?"white":"black"}}>
                    <img src={dataImg} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link to="/employeedata" className="btn btn-primary ">
                            Employee Data
                        </Link>
                        <Link to="/assetdata" className="btn btn-primary mx-2 my-2">
                            Asset Data
                        </Link>
                    </div>
                </div>

                <div className="card my-4 mx-4" style={{ width: "18rem" ,backgroundColor : props.mode === "light"?"white":"black"}}>
                    <img src={manageImg} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link to="/searchasngasset" className="btn btn-primary ">
                            View Handoverd Assets
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;