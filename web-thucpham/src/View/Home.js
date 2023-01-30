import React from 'react';
import './Home.css'

function Service(props) {
    return (
        <div className="card-serve d-block align-items-center">
            <p> <img src={`image/${props.image}`} alt='' /></p>
            <h5><b>{props.name}</b></h5>
            <p>{props.content}</p>
        </div>
    );
}
function Component2(props) {
    return (
        <div className="row align-items-center py-3">
            <div className={"col-md-7 " + props.order}>
                <img src={`image/${props.image}`} alt='' width='100%' />
            </div>
            <div className="col-md-5">
                <h4>{props.title}</h4>
                <h3>{props.content}</h3>
                <p>At vero eos et accusamus et iusto odio
                    dignissimos ducimus blandditiis praesen voluptatum deleniti.
                </p>
                <a href="/">Explore Now</a>
            </div>
        </div>
    );
}
function Home(props) {
    document.title="Home";
    return (
        <div>
            <div className="banner  my-md-5 container " data-aos="fade-up" data-aos-duration={3000}>
                <div className="row">
                    <div className="content-banner col-md-5">
                        <a href="/">More than Faster <img src="image/image.png" alt='' /></a>
                        <h2>Groceries delivered in as little <span>as 2 hours</span></h2>
                        <p>Grocen atssures fresh grocecy every morning to your family
                            without getting out in this pandemic.
                        </p>
                        <div className="btn-banner">
                            <a href="/">Order Now</a>
                            <a href="/"><i className="fa-solid fa-play" /></a>
                            <a href="/">Order Process</a>
                        </div>
                    </div>
                    <div className="image-banner col-md-7">
                        <img src="image/Header Image.png" alt='' width='100%' />
                    </div>
                </div>
            </div>
            <div className="serve py-5" data-aos="fade-up-right">
                <div className="content-serve">
                    <h6>What we Serve</h6>
                    <h3><b>Fruit And Vegetable Delivered</b></h3>
                    <h3><b>To Your Home</b></h3>
                </div>
                <div className="layout-card-serve d-flex justify-content-center gap-5 flex-wrap h-auto">
                    <Service name='Free Shipping'
                        content='Enjoy Order in a hand using the fresness of groceries'
                        image="car.png"
                    />
                    <Service name='15 days returns'
                        content='Order in a handy way using the freshness of the groceries.'
                        image="money.png"
                    />
                    <Service name='Secure checkout'
                        content='If you get rotten items - return immediately to us.'
                        image="chat.png"
                    />
                </div>
            </div>
            <div className="container desktop" data-aos="fade-down-right">
                <Component2
                    image="image and card.png"
                    title='WHY CHOOSE US'
                    content='Find Favorites And Discover New Ones'
                />
                <Component2
                    image="image & card.png"
                    title='WHY CHOOSE US'
                    content='Sit At Home We Will Take Care Your Order'
                    order='order-2'
                />
            </div>
            <div className="app" data-aos="zoom-in">
                <div className="row align-items-center ">
                    <div className="col-md-6 d-flex justify-content-center pb-5">
                        <img src="image/mobile mockup.png" alt="" />
                    </div>
                    <div className="col-md-6 ">
                        <h4>Download our app</h4>
                        <h3>Get The Groceries App Order App Order More Easily.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut.
                        </p>
                        <a href="/"><img src="image/icon.png" alt="" /> App Store</a>
                        <a href="/"><img src="image/icon (1).png" alt="" />Play Store</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;