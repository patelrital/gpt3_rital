import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Personalized At-Home Workouts',
    text: 'Tailor your fitness journey with custom workouts designed to suit your goals. Exercise at your pace, anytime, anywhere.',
  },
  {
    title: 'Dieticians at Your Fingertips',
    text: 'Connect with certified dieticians for expert advice and receive a personalized meal plan crafted just for you. Your nutrition journey starts here.',
  },
  {
    title: 'Informative Fitness Articles',
    text: 'Dive into a wealth of knowledge with articles curated to support your fitness goals. From workout tips to nutritional insights, our content is your guide to success.',
  },
  {
    title: 'Progress Tracking',
    text: 'Monitor your achievements and visualize your progress over time. Stay motivated as you witness the positive impact of your efforts.',
  },
];

const Features = () => (
  <div className="nh__features section__padding" id="features">
    <div className="nh__features-heading">
      <h1 className="gradient__text">You're In Charge Of Your Future. Take Control. Make it Happen.</h1>
      <p>Get a Head Start to lifelong fitness.</p>
    </div>
    <div className="nh__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;