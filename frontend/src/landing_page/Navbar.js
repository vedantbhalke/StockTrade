import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const handleDashboardClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
    };

    return (
        <nav
            className="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: "#FFF" }}
        >
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img
                        src="models/logo.png"
                        style={{ width: "35%" }}
                        alt="Logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href={process.env.REACT_APP_DASHBOARD_URL}
                                onClick={handleDashboardClick}
                                style={{ cursor: "pointer" }}
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/product'>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/pricing'>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/support'>Support</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;