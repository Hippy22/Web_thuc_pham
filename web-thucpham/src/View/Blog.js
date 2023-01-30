import React from 'react';
import './Blog.css';


function Blog(props) {
    document.title="Blog";
    return (
        <div className="main">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-sm-12 ">
                        <div className="input-group ">
                            <input type="text" className="form-control p-2 shadow-none " placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text bg-light " id="basic-addon2">
                                <i className="fa-solid fa-magnifying-glass" /></span>
                        </div>
                        <div className="categories my-4">
                            <h4>Categories</h4>
                            <a href="/">All</a><br />
                            <a href="/">Beauty (20)</a><br />
                            <a href="/">Food (6)</a><br />
                            <a href="/">Life Style (8)</a><br />
                            <a href="/">Travel (10)</a>
                        </div>
                        <div className="news">
                            <h4>Recent News</h4>
                            <div className="card-news d-flex my-2">
                                <img src="image/sr-1.jpg" height="100%" alt='' />
                                <div className="content-card-news w-50">
                                    <h6>09 Kinds Of Vegetables
                                        Protect The Liver</h6>
                                    <p>MAR 05,2019</p>
                                </div>
                            </div>
                            <div className="card-news d-flex my-2">
                                <img src="image/sr-2.jpg" height="100%" alt='' />
                                <div className="content-card-news w-50">
                                    <h6>Tips You To Balance
                                        Nutrition Meal Day</h6>
                                    <p>MAR 05,2019</p>
                                </div>
                            </div>
                            <div className="card-news d-flex my-2">
                                <img src="image/sr-3.jpg" height="100%" alt='' />
                                <div className="content-card-news w-50">
                                    <h6>4 Principles Help You Lose
                                        Weight With Vegetables</h6>
                                    <p>MAR 05,2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="tags">
                            <h4>Search By</h4>
                            <div className="card-tag ">
                                <a href="/">Apple</a>
                                <a href="/">Beauty</a>
                                <a href="/">Vegetables</a>
                                <a href="/">Fruit</a>
                                <a href="/">Healthy Food</a>
                                <a href="/">Lifestyle</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 d-flex flex-wrap">
                        <div className="content-blog">
                            <div className="card-content-blog">
                                <div>
                                    <img src="image/blog-2.jpg" alt="" />
                                </div>
                                <div className="card-content-blog-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>6 ways to prepare breakfast for 30</h5>
                                    <p>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="blog_details.html">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="content-blog">
                            <div className="card-content-blog">
                                <div>
                                    <img src="image/blog-3.jpg" alt="" />
                                </div>
                                <div className="card-content-blog-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>6 ways to prepare breakfast for 30</h5>
                                    <p>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="blog_details.html">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="content-blog">
                            <div className="card-content-blog">
                                <div>
                                    <img src="image/blog-1.jpg" alt="" />
                                </div>
                                <div className="card-content-blog-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>6 ways to prepare breakfast for 30</h5>
                                    <p>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="blog_details.html">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="content-blog">
                            <div className="card-content-blog">
                                <div>
                                    <img src="image/blog-4.jpg" alt="" />
                                </div>
                                <div className="card-content-blog-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>6 ways to prepare breakfast for 30</h5>
                                    <p>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="blog_details.html">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Blog;