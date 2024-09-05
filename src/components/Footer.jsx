import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container text-white">
                <div className="footer-brand">
                    <img src="/img/logo.png" alt="App Logo" className="footer-logo" />
                    <p>Track your finances effortlessly and make informed financial decisions.</p>
                </div>

                <div className="footer-links text-white">
                    <h4>Useful Links</h4>
                    <ul className='list-unstyled text-white'>
                        <li className='nav-item'>About Us</li>
                        <li className='nav-item'>Features</li>
                        <li className='nav-item'>Contact</li>
                        <li className='nav-item'>Privacy Policy</li>
                        <li className='nav-item'>Terms of Service</li>
                    </ul>
                </div>

                <div className="subscribe-email">
                    <h4>Subscribe to our newsletter</h4>
                    <input type="text" placeholder="Enter your email" />
                    <button className="subscribe_btn">Subscribe</button>
                </div>
            </div>
            <div className="footer-social">
                    {/* <h4>Follow Us</h4> */}
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-copyright text-white text-center" >
                    <p>&copy; {new Date().getFullYear()} Finance Tracker. All rights reserved.</p>
                </div>
        </footer>
    );
}

export default Footer;
