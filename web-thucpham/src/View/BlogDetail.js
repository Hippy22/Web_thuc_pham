import React from 'react';
import './BlogDetail.css';

function BlogDetail(props) {
    document.title="Blog Detail";
    return (
        <div className="main">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-sm-12 category-blog">
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
                        <div>
                            <img src="image/details-pic.jpg" alt="" width='100%' />
                        </div>
                        <div className="content-blogs-details">
                            <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris
                                blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
                                consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin
                                molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                                Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit
                                amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla
                                quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem.</p>
                            <h4>The corner window forms a place within a place that is a resting point within the large
                                space.</h4>
                            <p>The study area is located at the back with a view of the vast nature. Together with the
                                other buildings, a congruent story has been managed in which the whole has a reinforcing
                                effect on the components. The use of materials seeks connection to the main house, the
                                adjacent stables</p>
                        </div>
                        <div className="author-blog d-flex justify-content-between w-100 flex-wrap">
                            <div className="avatar d-flex">
                                <img src="image/details-author.jpg" alt='' />
                                <div className="infor-author">
                                    <span>Michael Scofield</span><br />
                                    <label>Admin</label>
                                </div>
                            </div>
                            <div className="cat-tag">
                                <label><b>Categories:</b> Food</label><br />
                                <label><b>Tags:</b> All, Trending, Cooking, Healthy Food, Life Style</label>
                                <div>
                                    <i className="fa-brands fa-facebook-f" />
                                    <i className="fa-brands fa-twitter" />
                                    <i className="fa-brands fa-google-plus-g" />
                                    <i className="fa-brands fa-linkedin-in" />
                                    <i className="fa-solid fa-envelope" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="suggest-blog container pb-5">
                <div className="title-suggest-blog text-center my-5">
                    <h2>Post You May Like</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="content-blogs">
                            <div className="card-content-blogs">
                                <div>
                                    <img src="image/blog-1.jpg" alt="" />
                                </div>
                                <div className="card-content-blogs-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>Cooking tips make cooking simple</h5>
                                    <p className='w-75'>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="/">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content-blogs">
                            <div className="card-content-blogs">
                                <div>
                                    <img src="image/blog-3.jpg" alt="" />
                                </div>
                                <div className="card-content-blogs-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>6 ways to prepare breakfast for 30</h5>
                                    <p className='w-75'>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="/">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content-blogs">
                            <div className="card-content-blogs">
                                <div>
                                    <img src="image/blog-4.jpg" alt="" />
                                </div>
                                <div className="card-content-blogs-detail">
                                    <span>
                                        <i className="fa-regular fa-calendar">May 4,2021</i>
                                        <i className="fa-regular fa-comment">5</i>
                                    </span>
                                    <h5>Visit the clean farm in the US</h5>
                                    <p className='w-75'>Sed quia non numquam modi tempora indunt
                                        ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                                <a href="/">READ MORE <i className="fa-solid fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BlogDetail;