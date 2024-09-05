import React, { useEffect } from 'react'
import '../css/testimonial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {

    useEffect(() => {
        AOS.init({
            duration: 1800,
            once: true,
            offset: 200,
            delay:100,
        });
    }, []);


    return (
        <>

            <div className="container p-5">
                <div className="section">
                    <h1 className="text-center mt-5">Testimonials</h1>
                    <p className="text-center">What our satisfied customers are saying about our finance tracker app.</p>
                </div>
                <div className="row row-cols-lg-3 p-5" id="testimonial">
                    <div className="col-sm-6 col-md-6 mb-3 mb-sm-0">
                        <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" data-aos="zoom-in-up">
                            <img src="https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=b5jQWlwUzmp-MBDwPg02HSKsqZy0Ymd6o2NTeXlB5Zo=" className="card-img-top" alt="..." />
                            <div className="card-body p-4">
                                <p className="card-text">"This app has transformed the way I manage my money! I can track every expense and see where my money is going with just a few clicks."
                               </p>
                                <h5 className="pt-3" > — James O., Entrepreneur & Activist</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" data-aos="zoom-in-up">
                            <img src="https://media.istockphoto.com/id/1626847852/photo/a-happy-beautiful-blonde-businesswoman-working-on-her-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=s5Hpq6hd45U8hrodknk8nf8z2mfMUJoL5vG3tdWwZIQ=" className="card-img-top" alt="..." />
                            <div className="card-body p-4">
                                <p className="card-text">I feel more in control of my finances than ever before. The budgeting tools and spending insights have helped me save more each month. "
                                </p>
                                <h5 className="pt-3">— Sarah L., Freelance Designer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded" data-aos="zoom-in-up">
                            <img src="https://media.istockphoto.com/id/1572396743/photo/business-man-smile-and-style-portrait-in-studio-for-corporate-or-ceo-fashion-while-happy-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=B_bPe7hoyPrtYD73VnPbMQ24Y5xwvTA4CTc0DqMRADU=" className="card-img-top" alt="..." />
                            <div className="card-body p-4">
                                <p className="card-text">A must-have for anyone looking to improve their financial health. The app’s simplicity and powerful features make it easy to stay on top "
                                </p>
                                <h5 className="pt-3">— Emily R., Marketing Manager</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
