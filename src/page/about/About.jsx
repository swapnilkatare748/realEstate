import React from 'react';
import './about.css'
import img from "../../assets/Hero/real.webp";

const About = () => {
  return (
    <section className="about-section">
      <div className="containers">
        <div className="about-banner">

          <img
           src={img}
            // src='https://github.com/codewithsadee/realvine/blob/master/assets/images/about-banner.jpg?raw=true'
            alt="About Banner"
            className="about-banner-img"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">Efficiency. Transparency. Control.</h2>
          <p className="about-text">
            Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency, and control into the hands of the consumers. Hously is Real Estate Redefined.
          </p>
          <a href="#" className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>

);
};

export default About;

