import React from 'react';
import '../css/hero.css'
import { Link} from 'react-router-dom';
function Hero() {
    return (
        <div className="container-fluid d-flex justify-content-evenly align-items-center p-5 bg-body-tertiary">
            <div className="row">
                <div className="col-md-6">
                    <div className="hero-content mt-lg-5 mt-sm-0">
                        <h1>
                            Take Control <br /> of Your Finances
                        </h1>
                        <p>
                            Track your expenses, set budgets, and <br />
                            achieve your financial goals effortlessly. <br />
                            Start managing your money smarter today.
                        </p>
                        <Link to ='/register' style={{"--clr": "#7808d0"}} className="button mb-4">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>

                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero-image">
                        <img src="/img/ere.png" alt="Hero" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
