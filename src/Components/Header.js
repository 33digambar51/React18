import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const header = () => {
    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="nav-link logo p-0 d-md-none"><img src={"/images/logo.png"} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-nav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">☰</span>
                </button>
                <div className="collapse navbar-collapse" id="top-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/all_product" className="nav-link">All Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/my_account" className="nav-link">My Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link" target="_blank">Add Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="" id="hide-show"><i className="fa fa-search"></i></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="" id="hide-show"><i className="fa fa-search"></i></Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="" id="hide-show"><i className="fa fa-search"></i></Link>
                        </li>                    </ul>

                </div>
            </div>
        </nav>
    </header>
    );
}
export default header;