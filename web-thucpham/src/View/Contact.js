import React from 'react';
import './Contact.css';


function Infor(props) {
    return (
        <div className="col-md-3 text-center col-sm-6">
            <i className={props.icon} />
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}
function Contact(props) {
    document.title="Contact";
    return (
        <div>
            <div>
                <div className="infor my-5">
                    <div className="container">
                        <div className="row">
                            <Infor icon='fa-solid fa-phone'
                                title='Phone'
                                content='+01-3-8888-6877'
                            />
                            <Infor icon='fa-solid fa-location-dot'
                                title='Address'
                                content='60-49 đường 113 LB'
                            />
                            <Infor icon='fa-regular fa-clock'
                                title='Open time'
                                content='10:00 am to 23:00 pm'
                            />
                            <Infor icon='fa-regular fa-envelope'
                                title='Email'
                                content='hellnah@colorlib.com'
                            />
                        </div>
                    </div>
                </div>
                <div className="address container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29794.644447961313!2d105.8700887784749!3d21.019455664274208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a95d9cac9b23%3A0xd3da156f77b70314!2zcC4gTG9uZyBCacOqbiwgTG9uZyBCacOqbiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666786267952!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </div>
                <div className="message">
                    <div className="container">
                        <h2>Leave Message</h2>
                        <div className="row">
                            <div className="col-md-6 input-infor">
                                <div className="mb-3 ">
                                    <input type="email" className="form-control shadow-none p-3 " id="exampleFormControlInput1" placeholder="Your name" />
                                </div>
                            </div>
                            <div className="col-md-6 input-infor">
                                <div className="mb-3">
                                    <input type="email" className="form-control shadow-none p-3" id="exampleFormControlInput1" placeholder="Your Email" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <textarea className="form-control shadow-none p-3" rows={3} placeholder="Your message" defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <div className="text-center my-5">
                            <a href="/" className="text-decoration-none ">SEND MESSAGE</a>
                        </div>
                    </div>
                </div></div>

        </div>
    );
}

export default Contact;