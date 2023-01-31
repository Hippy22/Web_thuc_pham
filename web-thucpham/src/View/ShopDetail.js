import React, { useState } from 'react';
import './ShopDetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';


function ProductLastest(props) {
    return (
        <div className="col-md-3">
            <div className="card-related-product">
                <img src={`image/${props.image}`} alt='' />
                <div className="content-card-rp text-center">
                    <h6>Crab Pool Security</h6>
                    <p><b>$30.00</b></p>
                </div>
            </div>
        </div>
    )
}


function ChangeImage() {
    var logo = document.getElementById('imgaa');
    logo.src = "image/pd-1.jpg";
}

function Shop_detail(props) {
    document.title = "Shop Detail";

    const [count, setCount] = useState(1);
    const handleClick = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    }
    const handleClick2 = () => {
        setCount(count + 1);
    }
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <div className="img-product border">
                        <img src="image/product-details-1.jpg" width="100%" id="imgaa" alt='' />
                    </div>

                    <div className="swiper mySwiper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="swiper-slide img1">
                                    <img src="image/thumb-2.jpg" alt='' width='100%' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide img2">
                                    <img src="image/thumb-4.jpg" alt='' width='100%' onClick={ChangeImage} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide img3">
                                    <img src="image/thumb-1.jpg" alt='' width='100%' />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide img4">
                                    <img src="image/thumb-3.jpg" alt='' width='100%' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className="content-product-detail">
                        <h3 className="border-light">Vetgetable's Package</h3>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star-half-stroke" />
                        <span>(22 reviews)</span>
                        <h4>$50.00</h4>
                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                            vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                            quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                        <div className="list-btn d-flex">
                            <div className="input-group ">
                                <button className="btn btn-outline-secondary tru shadow-none p-3 w-25" type="button" onClick={handleClick}>-</button>
                                <input type="text" className="form-control text-center p-3" id="count" value={count} />
                                <button className="btn btn-outline-secondary cong shadow-none p-3 w-25" type="button" onClick={handleClick2}>+</button>
                            </div>
                            <a href="/" className="cart d-flex align-items-center"><b>ADD TO CARD </b></a>
                            <a href="/"><i className="fa-regular fa-heart" /></a>
                        </div>
                        <br />
                        <hr />
                    </div>
                    <ul>
                        <li><b>Availability</b><span> In Stock</span></li>
                        <li><b>Shipping</b><span> 01 day shipping. <i>Free pickup today</i></span></li>
                        <li><b>Weight</b><span> 0.5 kg</span></li>
                        <li>
                            <b>Share on</b>
                            <span>
                                <a href="/"><i className="fa-brands fa-facebook-f" /></a>
                                <a href="/"><i className="fa-brands fa-twitter" /></a>
                                <a href="/"><i className="fa-brands fa-instagram" /></a>
                                <a href="/"><i className="fa-brands fa-pinterest" /></a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="infor">
                <div className="tab d-flex justify-content-center ">
                    <a href="/" id="des" >
                        <h5>Description</h5>
                    </a>
                    <a href="/">
                        <h5>Information</h5>
                    </a>
                    <a href="/">
                        <h5>Reviews (1)</h5>
                    </a>
                </div>
                <div className="content-tab">
                    <h5>Products Infomation</h5>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci
                        porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat.
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget
                        malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id
                        imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non
                        nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras
                        ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor
                        lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit
                        amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                        amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                </div>
            </div>
            <div className="related-product">
                <div className="title-related-product">
                    <h2 className="text-center my-5">Related Product</h2>
                </div>
                <div className="row">
                    <ProductLastest image='product-1.jpg' />
                    <ProductLastest image='product-2.jpg' />
                    <ProductLastest image='product-3.jpg' />
                    <ProductLastest image='product-7.jpg' />
                </div>
            </div>
        </section>

    );
}

export default Shop_detail;