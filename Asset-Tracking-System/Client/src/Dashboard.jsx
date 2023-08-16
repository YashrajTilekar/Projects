import React from "react";


import { Link, Outlet } from "react-router-dom";



export default function Dashboard() {

    return (

        <div>

            <div className="container-fluid">

                <div className="row flex-nowrap">

                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                            <a

                                href="/"

                                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"

                            >

                                <span className="fs-5 d-none d-sm-inline">Admin Dashboard</span>

                            </a>

                            <ul

                                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"

                                id="menu"

                            >

                                <li className="nav-item">

                                    <a href=" " className="nav-link align-middle px-0">

                                        <i className="fs-4 bi-house"></i>{" "}

                                        <span className="ms-1 d-none d-sm-inline">Home</span>

                                    </a>

                                </li>

                                <li>

                                    <Link

                                        to="/Home"

                                        data-bs-toggle="collapse"

                                        className="nav-link px-0 align-middle"

                                    >

                                        <i className="fs-4 bi-speedometer2"></i>{" "}

                                        <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}

                                    </Link>

                                    <ul

                                        className="collapse show nav flex-column ms-1"

                                        id="submenu1"

                                        data-bs-parent=" menu"

                                    >

                                        

                                    </ul>

                                </li>


                                

                                <li>

                                    <a

                                        href=" submenu3"

                                        data-bs-toggle="collapse"

                                        className="nav-link px-0 align-middle"

                                    >

                                        <i className="fs-4 bi-grid"></i>{" "}

                                        <span className="ms-1 d-none d-sm-inline">Products</span>{" "}

                                    </a>

                                   

                                </li>

                                <li>

                                    <a href=" " className="nav-link px-0 align-middle">

                                        <i className="fs-4 bi-people"></i>{" "}

                                        <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}

                                    </a>

                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="col py-3">

                        <div className="p-2 d-flex justify-content-center shadow">

                            <h4>Assets Management System</h4>

                        </div>
                        <Link to='/employeedata'>
                            <div className="=p-3 d-flex justify-content-around mt-3">

                                <div className="px-3 pt-2 pb-3 border shadow-sm w-25">

                                    <div className="text-center pb-1">

                                        <h4>Employee Data</h4>

                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/assetdata'>
                            <div className="=p-3 d-flex justify-content-around mt-3">

                                <div className="px-3 pt-2 pb-3 border shadow-sm w-25">

                                    <div className="text-center pb-1">

                                        <h4>Asset Data</h4>

                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/addemployee'>
                            <div className="=p-3 d-flex justify-content-around mt-3">

                                <div className="px-3 pt-2 pb-3 border shadow-sm w-25">

                                    <div className="text-center pb-1">

                                        <h4>Add Employee</h4>

                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/addasset'>
                            <div className="=p-3 d-flex justify-content-around mt-3">

                                <div className="px-3 pt-2 pb-3 border shadow-sm w-25">

                                    <div className="text-center pb-1">

                                        <h4>Add Asset</h4>

                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/searchasngasset'>
                            <div className="=p-3 d-flex justify-content-around mt-3">

                                <div className="px-3 pt-2 pb-3 border shadow-sm w-25">

                                    <div className="text-center pb-1">

                                        <h4>View Data</h4>

                                    </div>
                                </div>
                            </div>
                        </Link>


                        <Outlet />

                    </div>

                </div>

            </div>

        </div>

    );

}



