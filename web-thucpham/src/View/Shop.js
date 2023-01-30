import React from 'react';
import './Shop.css';
import 'swiper/css/autoplay'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function ProductLatest(props) {
    return (
        <div className="card-news d-flex my-2">
            <img src={`image/${props.image}`} alt='' />
            <div className="content-card-news w-50 mx-3">
                <h6>Crab Pool Security</h6>
                <p>$30.00</p>
            </div>
        </div>
    );
}

function ProductList(props) {
    return (
        <div className="card-product text-center">
            <img src={`image/${props.image}`} alt='' /><br />
            <label>Crab Pool Security</label>
            <p><b>$30.00</b></p>
        </div>
    )
}
function SaleOff(props) {
    return (
        <div className="swiper-slide card-slide">
            <img src={`image/${props.image}`} alt='' width='100%'/>
            <div className="content-swiper text-center">
                <label>Dried Fruit</label><br />
                <span>Mixed Fruitss</span>
                <p><b>$30.00</b><i>$36.00</i></p>
            </div>
            <div className="sale border rounded-circle">-20%</div>
        </div>
    )
}
function Shop(props) {
    document.title="Shop";
    return (
        <div>

            <div>
                <div className="main">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4 col-sm-12 ">
                                <div className="department my-4">
                                    <h4>Department</h4>
                                    <a href="/">Fresh Meat</a><br />
                                    <a href="/">Vegetables</a><br />
                                    <a href="/">Fruit &amp; Nut Gifts</a><br />
                                    <a href="/">Fresh Berries</a><br />
                                    <a href="/">Ocean Foods</a><br />
                                    <a href="/">Butter &amp; Eggs</a><br />
                                    <a href="/">Fastfood</a><br />
                                    <a href="/">Fresh Onion</a><br />
                                    <a href="/">Papayaya &amp; Crisps</a><br />
                                    <a href="/">Oatmeal</a>
                                </div>
                                <div className="wrapper ">
                                    <h4>Price</h4>
                                    <fieldset className="filter-price">
                                        <div className="price-field">
                                            <input type="range" min={10} max={50} defaultValue={10} id="lower" />
                                            <input type="range" min={100} max={500} defaultValue={500} id="upper" />
                                        </div>
                                        <div className="price-wrap">
                                            <span className="price-title">FILTER</span>
                                            <div className="price-wrap-1">
                                                <input id="one" />
                                                <label htmlFor="one">$</label>
                                            </div>
                                            <div className="price-wrap_line">-</div>
                                            <div className="price-wrap-2">
                                                <input id="two" />
                                                <label htmlFor="two">$</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="color">
                                    <h4>Color</h4>
                                    <div className="list-color d-flex">
                                        <ul>
                                            <li><a href="/">White</a></li>
                                            <li><a href="/">Red</a></li>
                                            <li><a href="/">Blue</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="/">Gray</a></li>
                                            <li><a href="/">Black</a></li>
                                            <li><a href="/">Green</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="size">
                                    <h4>Popular Size</h4>
                                    <div className="card-tag w-75">
                                        <a href="/">Large</a>
                                        <a href="/">Medium</a>
                                        <a href="/">Small</a>
                                        <a href="/">Tiny</a>
                                    </div>
                                </div>
                                <div className="swiper mySwiper">
                                    <h4>Latest Products</h4>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <ProductLatest image='lp-1.jpg' />
                                            <ProductLatest image='lp-2.jpg' />
                                            <ProductLatest image='lp-3.jpg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 ">
                                <h4>Sale Off</h4>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    loop={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <SaleOff image='pd-1.jpg' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SaleOff image='pd-2.jpg' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SaleOff image='pd-3.jpg' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <SaleOff image='pd-5.jpg' />
                                    </SwiperSlide>
                                </Swiper>
                                <hr />
                                <div className="list-product">
                                    <div className="title-product d-flex justify-content-between">
                                        <span>Sort By <b>Default<i className="fa-solid fa-angle-down" /></b></span>
                                        <p><b>16</b> Product found</p>
                                        <div className="local-sort">
                                            <i className="fa-solid fa-border-none" />
                                            <i className="fa-solid fa-list-ul" />
                                        </div>
                                    </div>
                                    <div className="product d-flex flex-wrap gap-3">
                                        <ProductList image='product-1.jpg' />
                                        <ProductList image='product-2.jpg' />
                                        <ProductList image='product-3.jpg' />
                                        <ProductList image='product-5.jpg' />
                                        <ProductList image='product-6.jpg' />
                                        <ProductList image='product-7.jpg' />
                                        <ProductList image='product-8.jpg' />
                                        <ProductList image='product-9.jpg' />
                                        <ProductList image='product-10.jpg' />
                                        <ProductList image='product-12.jpg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Shop;