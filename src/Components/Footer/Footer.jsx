import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';

const Footer = () =>{
    return (
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="" />
                <p>ShopMart</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="footer-icons-container">
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="footer-icons-container">
                <i class="fa-brands fa-pinterest"></i>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;