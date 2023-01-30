import React from 'react';
import './Cart.css';

function Cart(props) {
    document.title="Cart";
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Products</h4>
                    </div>
                    <div className="col-md-1">
                        <h4>Price </h4>
                    </div>
                    <div className="col-md-2">
                        <h4>Quantity</h4>
                    </div>
                    <div className="col-md-1">
                        <h4>Total </h4>
                    </div>
                    <div className="col-md-2" />
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 ">
                        <img src="image/cart-1.jpg" alt="" />
                        <i>Vegetable’s Package</i>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <b>$55.00</b>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <div className="list-btn d-flex">
                            <div className="input-group w-75  flex-fill">
                                <button className="btn btn-outline-secondary tru shadow-none " type="button" id="moins" onclick="minus1()">-</button>
                                <input type="text" className="form-control text-center" defaultValue={2} id="count1" />
                                <button className="btn btn-outline-secondary cong shadow-none" type="button" id="plus" onclick="plus1()">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <b>$110.00 </b>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <a href="/"><i className="fa-solid fa-xmark" /></a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 ">
                        <img src="image/cart-1.jpg" alt="" />
                        <i>Vegetable’s Package</i>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <b>$55.00</b>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <div className="list-btn d-flex">
                            <div className="input-group w-75  flex-fill">
                                <button className="btn btn-outline-secondary tru shadow-none " type="button" id="moins" onclick="minus1()">-</button>
                                <input type="text" className="form-control text-center" defaultValue={2} id="count1" />
                                <button className="btn btn-outline-secondary cong shadow-none" type="button" id="plus" onclick="plus1()">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <b>$110.00 </b>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center"><a href="/"><i className="fa-solid fa-xmark" /></a></div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 ">
                        <img src="image/cart-2.jpg" alt="" />
                        <i>Fresh Garden Vegetable</i>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <b>$39.00</b>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <div className="list-btn d-flex">
                            <div className="input-group w-75  flex-fill">
                                <button className="btn btn-outline-secondary tru shadow-none " type="button" id="moins" onclick="minus2()">-</button>
                                <input type="text" className="form-control text-center" defaultValue={1} id="count2" />
                                <button className="btn btn-outline-secondary cong shadow-none" type="button" id="plus" onclick="plus2()">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-flex align-items-center">
                        <b>$39.99</b>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center"><a href="/"><i className="fa-solid fa-xmark" /></a></div>
                </div>
                <hr />
                <div className="btn-cart d-flex justify-content-between my-4">
                    <a href="/">COUNTINUE SHOPPING</a>
                    <a href="/">UPDATE CART</a>
                </div>
                <div className="pay">
                    <div className="row">
                        <div className="col-md-6 ">
                            <h4>Discount Codes</h4>
                            <div className="input-group mb-3 w-75  flex-fill">
                                <input type="text" className="form-control " placeholder="Enter your coupon code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append ">
                                    <span className="input-group-text " id="basic-addon2">APPLY COUPON</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 bg-light ">
                            <h4>Cart Total</h4>
                            <div className="d-flex justify-content-between my-4">
                                <h6><b>Subtotal</b></h6>
                                <b>$454.98</b>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between my-3">
                                <h6><b>Total</b></h6>
                                <b>$454.98</b>
                            </div>
                            <div className="d-flex justify-content-center text-center">
                                <a href="/">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default Cart;