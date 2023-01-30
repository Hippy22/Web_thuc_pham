import React from 'react';
import './Breadcumb.css';
Breadcumb.propTypes = {

};

function Breadcumb(props) {
    return (
        <div>
            <div className="title">
                <div className="container">
                    <h2>Shop</h2>
                    <a href="index.html">Home</a> - <a href="shop.html">Shop</a>
                </div>
            </div>

        </div>
    );
}

export default Breadcumb;