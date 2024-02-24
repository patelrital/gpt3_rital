import React from 'react';
import gpt3Logo from '../../assets/logo1.png';
import './footer.css';

const Footer = () => (
  <div className="nh__footer section__padding">
    <div className="nh__footer-heading">
      <h1 className="gradient__text">Take Control Today. </h1>
    </div>

    <div className="nh__footer-btn">
      <p>Register Now</p>
    </div>

    <div className="nh__footer-links">
      <div className="nh__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>This is not a real website, <br /> just a project to showcase my skills.</p>
      </div>
      <div className="nh__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="nh__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy</p>
      </div>
      <div className="nh__footer-links_div">
        <h4>Contact</h4>
        <p>Disclaimer: This is not a real website</p>
        <p>This is a project to showcase my skills</p>
        <p>donotsend@email.com</p>
      </div>
    </div>

    <div className="nh__footer-copyright">
      <p>@2024 NutriHaven. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;