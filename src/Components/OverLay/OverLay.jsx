import React from 'react';
import './OverLay.css';
import { Link } from 'react-router-dom';
const OverLay = () => {
  return (
    <div className="Overlay" id="myNav">
      <div className="Overlay-content">
        <div>
          <Link to="/K12Page">K12</Link>
          <Link to="/HigherEdPage">Higher Ed</Link>
          <Link to="/ChildrenPage">Families</Link>
          <Link to="/EnterprisesPage">Enterprise</Link>
        </div>
        <div className="MiniLinks">
          <Link to="/SignUpPage">Sign In</Link>
          <Link to="/LogInPage">Support</Link>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
