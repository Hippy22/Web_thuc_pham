import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
            <div className="container">
                <div className="logo w-25">
                    <Link to="/home"><img src="image/g logo.png" alt="" /></Link>
                    <span>Grover</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/shopdetail">Shop Details</Link></li>
                                <li><Link className="dropdown-item" to="/cart">Shopping Cart</Link></li>
                                <li><Link className="dropdown-item" to="/blogdetail">Blog Detail</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <span className="navbar-text e">
                        <div className="input-group ">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                <i className="fa-solid fa-cart-shopping" /></button>
                        </div>
                    </span>
                </div>
            </div>
        </nav>


    );
}

export default Header;
