import React from 'react';
import './Navbar.css';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import BarsIcon from './../../Assets/Icons/Bars.svg';
import XmarkIcon from './../../Assets/Icons/Xmark.svg';
import ArrDownIcon from './../../Assets/Icons/ArrDown.png';
import ArrRightIcon from './../../Assets/Icons/ArrRight.svg';
import TbhBadgeImg from './../../Assets/Images/TbhBadge.svg';
import { toggleNav } from './../../JavaScript.js';
import { useLocation } from 'react-router-dom';
import Button from '../Buttons/Buttons';

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(BarsIcon);

  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
  };

  const location = useLocation();
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.Navbar')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [[animationTriggered]]);

  return (
    <div className={`Navbar ${showSection ? 'show animated' : ''}`}>
      <div className={`Navbar ${showSection ? 'show animated' : ''}`}>
        <div className="HyerLogo">
          <Link
            exact
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            <img src={TbhBadgeImg} />
          </Link>
        </div>

        <div className="NavbarRight">
          <div className="NavbarRespnv2">
            <div className="Work">
              <Link
                to="/ChildrenPage"
                className="f"
                id={location.pathname === '/ChildrenPage' ? 'active' : ''}
              >
                Families <img src={ArrDownIcon} />
              </Link>
              <div className="DropDown">
                <div className="DropDownContent">
                  <Link
                    to="/ChildrenPage"
                    className="f"
                    id={location.pathname === '/ChildrenPage' ? 'active' : ''}
                  >
                    <span>Children</span> <img src={ArrRightIcon} />
                  </Link>
                  <Link
                    to="/ParentPage"
                    id={location.pathname === '/ParentPage' ? 'active' : ''}
                  >
                    <span>Parents</span> <img src={ArrRightIcon} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="NavbarRespnv">
            <Link
              to="/BasicNeedsPage"
              id={location.pathname === '/BasicNeedsPage' ? 'active' : ''}
            >
              Basic Needs
            </Link>

            <Link
              to="/K12Page"
              id={location.pathname === '/K12Page' ? 'active' : ''}
            >
              K12
            </Link>
            <Link
              to="/HigherEdPage"
              id={location.pathname === '/HigherEdPage' ? 'active' : ''}
            >
              Higher Ed
            </Link>

            <Link
              to="/EnterprisesPage"
              id={location.pathname === '/EnterprisesPage' ? 'active' : ''}
            >
              Enterprises
            </Link>
          </div>
        </div>
        <div className="NavbarMid">
          <Link
            to="/LogInPage"
            className={location.pathname === '/LogInPage' ? 'active' : ''}
          >
            {' '}
            <Button ButtonWhite="Login In" />
          </Link>
          <Link
            to="/SignUpPage"
            className={location.pathname === '/SignUpPage' ? 'active' : ''}
          >
            <Button ButtonOrange="Join Now" />
          </Link>
        </div>
        <div className="BarsIcon">
          <Link to="#" onClick={handleToggleNav}>
            <img id="barsIcon" src={icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
