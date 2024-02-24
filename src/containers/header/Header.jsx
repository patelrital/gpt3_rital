import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="nh__header section__padding" id="home">
    <div className="nh__header-content">
      <h1 className="gradient__text">Embark on Your Wellness Journey with NutriHaven</h1>
      <p>Your ultimate destination for holistic well-being. Discover personalized workouts, expert dieticians, and enriching articles tailored to elevate your fitness journey. Unleash the best version of yourself with NutriHaven's comprehensive health and wellness resources.</p>

      <div className="nh__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="nh__header-content__people">
        <img src={people} />
        <p>1,600+ Users</p>
      </div>
    </div>

    <div className="nh__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;