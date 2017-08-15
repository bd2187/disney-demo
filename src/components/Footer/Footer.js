import React from 'react';
import './footer.css';
import logo from '../../config/logo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footerBox">
        <img src={logo} alt="Disney logo" style={{ width: '50%' }} />
        <div className="social">
          <a href="" className="btn">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href="" className="btn">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href="" className="btn">
            <i className="fa fa-google-plus" aria-hidden="true" />
          </a>
          <a href="" className="btn">
            <i className="fa fa-tumblr" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="inner">
        <div className="footerBox">
          <h6>Available Now</h6>
          <ul>
            <li>Beauty and the Beast (2017)</li>
            <li>
              {"Marvel Studios' Doctor Strange"}
            </li>
            <li>Moana</li>
            <li>Rogue One: A Star Wars Story</li>
          </ul>
        </div>

        <div className="footerBox">
          <h6>Learn More</h6>
          <ul>
            <li>Support</li>
            <li>Disney Movies Anywhere Terms & Conditions</li>
            <li>Disney Movie Rewards Terms & Conditions</li>
          </ul>
        </div>

        <div className="footerBox">
          <h6>Connect</h6>
          <ul>
            <li>Contact</li>
            <li>Closed Captioning Inquiries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
