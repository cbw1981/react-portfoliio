import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Project title="Project 1" link="https://project1.com" repo="https://github.com/project1" />
      <Project title="Project 2" link="https://project2.com" repo="https://github.com/project2" />
      {/* Repeat for remaining projects */}
    </section>
  );
};

export default Portfolio;
