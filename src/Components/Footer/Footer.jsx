import React from 'react';
import './Footer.css';
import TbhBadgeWhiteImg from './../../Assets/Images/TbhBadgeWhite.svg';
import TbhLogoImg from './../../Assets/Images/TbhLogo.png';
import InstagramIcon from './../../Assets/Icons/Instagram.png';
import TiktokIcon from './../../Assets/Icons/Tiktok.png';
import MarkIcon from './../../Assets/Icons/Mark.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="reinventing">
        <img src={TbhBadgeWhiteImg} className="footer-badge" />
        <h1 className="footer-title">
          <span className="footer-special">Reinventing </span>
          mental health for a new generation
        </h1>
      </div>
      <div className="footer-links">
        <div className="footer-products product-links">
          <h1 className="products-header">Products</h1>
          <Link to="/K12Page"> For K12</Link>
          <Link to="/HigherEdPage">For Higher Ed </Link>
          <Link to="/ChildrenPage"> For Children</Link>
          <Link to="/ParentPage"> For Parents</Link>
          <Link to="/EnterprisesPage"> For Enterprise</Link>
        </div>
        <div className="footer-company product-links">
          <h1 className="products-header">Company</h1>
          <Link to="#">
            About us <span className="coming">(Coming soon)</span>
          </Link>
          <Link to="#">
            Careers <span className="coming">(Coming soon)</span>
          </Link>
          <Link to="#">
            Press Kit <span className="coming">(Coming soon)</span>
          </Link>
          <Link to="#">
            Blog <span className="coming">(Coming soon)</span>
          </Link>
        </div>
        <div className="footer-follow product-links">
          <h1 className="products-header">Follow us</h1>
          <Link to="#" className="IconLink">
            <img src={InstagramIcon} /> <span>Instagram</span>
          </Link>
          <Link to="#" className="IconLink">
            <img src={TiktokIcon} /> <span>TikTok</span>
          </Link>
        </div>
      </div>
      <div className="privacy-container">
        <div className="privacy">
          <h2>We respect your privacy.</h2>
          <div className="checks">
            <img src={TbhLogoImg} className="privacy-logo" />
            <div className="recom">
              <div className="marks-container">
                <img src={MarkIcon} className="marks" />
                <span className="marks-text">CCPA Compliance</span>
              </div>
              <div className="marks-container">
                <img src={MarkIcon} className="marks" />
                <span className="marks-text">Activity Monitoring</span>
              </div>
              <div className="marks-container">
                <img src={MarkIcon} className="marks" />
                <span className="marks-text">Data Encryption</span>
              </div>
            </div>
          </div>
        </div>
        <div className="crisis">
          <p className="crisis-help">
            If you or someone you know is experiencing an emergency or crisis
            and needs immediate help, call 911 or go to the nearest emergency
            room.
          </p>
          <div className="call-line">
            <div className="suicide-pre">
              <h3 className="suicide-header">Suicide Prevention Lifeline</h3>
              <h3 className="suicide-number">+ 1 (800) 273-8255 24/7</h3>
            </div>
            <div className="suicide-pre">
              <h3 className="suicide-header">Crisis Text Line</h3>
              <h3 className="suicide-number">Text HOME to 741741 24/7</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="terms-container">
        <p className="mindset">© 2023 Mindset Labs, Inc.</p>
        <p className="terms">
          {' '}
          Terms <span>|</span> Privacy <span>|</span> Contact us
        </p>
      </div>
    </div>
  );
};

export default Footer;
