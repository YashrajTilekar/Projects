import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className={props.mode === "light" ?"navbar navbar-expand-lg navbar-light bg-light py-3":"navbar navbar-expand-lg navbar-dark bg-dark py-3"} >
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/home">
                        <h3>Asset Tracking System</h3>
                    </Link>

                    <div className="" id="navbarSupportedContent">
                        <div className="form-check form-switch ml-auto">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                Dark Mode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar