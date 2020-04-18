import React from 'react';
import {connect} from 'react-redux';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer-logo">
                <img
                src={require('../../assets/netflix.png')} 
                alt="logo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className="footer-p">Copyright &copy; 2020 - 2020 mofllix. All Rights Reserved</p>
            </div>
            <div className="service">
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Service</li>
                    <li>Career</li>
                    <li>Media Center</li>
                </ul>
            </div>
            <div>
                <div className="download">
                    <h3>Download</h3>
                    <div className="img-store">
                        <img
                            src={require('../../assets/google-play-badge.svg')} 
                            alt="google play"/>
                        <img
                            className="apple-store"
                             src={require('../../assets/apple-store.svg')} 
                            alt="apple store"/>
                    </div>
                </div>
                <div className="social-media">
                    <h3>Social Media</h3>
                    <img
                        src={require('../../assets/facebook.svg')} 
                        alt="apple store"/>
                    <img
                        src={require('../../assets/instagram.svg')} 
                        className="instagram"
                        alt="apple store"/>
                    <img
                        src={require('../../assets/twitter.svg')} 
                        alt="apple store"/>
                </div>
            </div>
        </div>

    )
}

export default connect()(Footer);