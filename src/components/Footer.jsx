import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container text-white">
                <div className="footer-brand">
                    <img src="/img/logo.png" alt="App Logo" className="footer-logo" />
                    <p>Track your expenses, set budgets, and
                            achieve your financial goals effortlessly. <br />
                            Start managing your money smarter today.</p>
                </div>
                <div className="footer-links text-white">
                    <h4>Useful Links</h4>
                    <ul className='list-unstyled text-white iconf'>
                        <li className='nav-item'><i className="bi bi-house"></i> Home</li>
                        <li className='nav-item'><i className="bi bi-sliders"></i> Features</li>
                        <li className='nav-item'><i className="bi bi-person-rolodex"></i> Contact</li>
                        <li className='nav-item'><i className="bi bi-shield-plus"></i> Privacy Policy</li>
                        <li className='nav-item'><i className="bi bi-terminal-plus"></i> Terms of Service</li>
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
                <div className="social-icons text-center mt-5">
                    <a href="https://wa.me/2347052789006" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/dahunsi_matthew/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/oluwadahunsimatthew/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <hr />
            <div className="footer-copyright text-white text-center" >
                <p>&copy; {new Date().getFullYear()} Finance Tracker. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
