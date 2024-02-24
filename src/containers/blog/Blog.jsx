import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="nh__blog section__padding" id="articles">
    <div className="nh__blog-heading">
      <h1 className="gradient__text">Explore a path to wellness  <br /> from our nutrition experts.</h1>
    </div>
    <div className="nh__blog-container">
      <div className="nh__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 01, 2024" text="Start Off the New Year Right With These Changes to Your Diet" />
      </div>
      <div className="nh__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 12, 2024" text="Supercharge Your Day with Nutrient-Rich Recipes" />
        <Article imgUrl={blog03} date="Jan 01, 2024" text="From Plate to Performance: Nutritional Wisdom Unleashed" />
        <Article imgUrl={blog04} date="Dec 26, 2023" text="Navigating the World of Wellness" />
        <Article imgUrl={blog05} date="Nov 2, 2023" text="Fueling Your Fitness Journey: Nutrition Essentials" />
      </div>
    </div>
  </div>
);

export default Blog;