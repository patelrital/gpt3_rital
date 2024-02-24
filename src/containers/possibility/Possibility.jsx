import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="nh__possibility section__padding" id="subscription">
    <div className="nh__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="nh__possibility-content">
      <h4>Get Started</h4>
      <h1 className="gradient__text"> Elevate Your Well-Being<br /> To The Next Level</h1>
      <p>Embark on a transformative wellness journey with NutriHaven's premium subscription. Unleash the power of personalized workouts, meticulously designed to align with your unique goals. Experience the luxury of having expert dietitians at your beck and call, ready to sculpt a bespoke meal plan tailored to your needs. Dive into a treasure trove of enlightening articles crafted by fitness connoisseurs, guiding you toward holistic well-being. Join the NutriHaven community, where every stride towards a healthier you is enriched with exclusive resources and unwavering support. Elevate your fitness adventure—subscribe to NutriHaven now and revel in a world of well-being like never before.</p>
      <h4>Get Started</h4>
    </div>
  </div>
);

export default Possibility;