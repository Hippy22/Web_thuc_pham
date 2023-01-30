import React from 'react';
import './Footer.css'
import { Link, Route, Routes } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='footer'>
            <div className="container ">
                <div className="row gap-3">
                    <div className="col-md-4 col-sm-12 ">
                        <div className='text-center '>
                            <img src="image/g logo.png" alt="" />
                        </div>
                        <p className=' w-100 text-center'>Fast delivery, which is active
                            all over the world, serves with many transportation vehicles.</p>
                    </div>
                    <div className="col-md-2">
                        <h4>Company</h4>
                        <Link to="/">About Us</Link><br />
                        <Link to="/">Blog</Link><br />
                        <Link to="/">All Products</Link><br />
                        <Link to="/">Locations Map</Link>
                    </div>
                    <div className="col-md-2">
                        <h4>Services</h4>
                        <Link to="/">Order tracking </Link><br />
                        <Link to="/">Wish List</Link><br />
                        <Link to="/">My account</Link><br />
                        <Link to="/">Term &amp; Conditions</Link>
                    </div>
                    <div className="col-md-2">
                        <h4>Get in Touch</h4>
                        <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                    </div>
                </div>
                <hr />
                <div className="author d-flex justify-content-between">
                    <p>All Rights Reserved @ Pui 2022</p>
                    <div>
                        <span>Terms &amp; Conditions</span>
                        <span>Privacy &amp; Policy</span>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={''} />
            </Routes>
        </div>
    );
}

export default Footer;