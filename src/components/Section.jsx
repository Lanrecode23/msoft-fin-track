import React from 'react'
import '../css/section.css';
function Section() {
    return (

        <div className="container-fluid section_add  p-5 ">
            <div className="section_head " data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <h2>Our Revolutionary Features</h2>
                <p>Discover the latest and greatest features of our app These tools are designed to enhance <br /> your financial journey and make tracking easier than ever.</p>
            </div>
            <div className="image_section" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <img src="https://img.freepik.com/free-vector/mobile-seo-illustration_335657-4666.jpg?ga=GA1.2.1972939059.1725452877&semt=ais_hybrid" alt="" className='img-fluid' />
            </div>
        </div>


    )
}

export default Section
