import React from 'react';
import './Cards.css';
import SquigeeArrowImg from './../../Assets/Images/SquigeeArrow.png';
import SquigeeArrow2Img from './../../Assets/Images/SquigeeArrow2.png';
import SquigeeArrowDownImg from './../../Assets/Images/SquigeeArrowDown.png';
import dashboardImg from './../../Assets/Images/dashboard.png';
import SmileyImg from './../../Assets/Images/Smiley.png';
import ChatImg from './../../Assets/Images/Chat.png';
import webinarsImg from './../../Assets/Images/webinars.png';
import proceduresImg from './../../Assets/Images/procedures.png';
import weeklyImg from './../../Assets/Images/weekly.png';
import LicensedImg from './../../Assets/Images/Licensed.png';
import RosterImg from './../../Assets/Images/Roster.png';
import NetworkImg from './../../Assets/Images/Network.png';
import ArrowDownImg from './../../Assets/Images/ArrowDown.png';
import communityImg from './../../Assets/Images/community.png';
import supportImg from './../../Assets/Images/support.png';
import OutroLogoImg from './../../Assets/Images/OutroLogo.svg';
import Input from '../../Components/Inputs/Inputs';
import Button from '../../Components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = (props) => {
  return (
    <div>
      {props.Progress && (
        <div className="progress">
          <span className="progress-minor">{props.Progress}</span>
          <span className="progress-main">
            {props.ProgressMain}
            <span className="progress-main-diff">{props.ProgressMainDiff}</span>
          </span>
        </div>
      )}
      {props.OfferCard && (
        <div className="offer-card-container">
          <div className="offer-card-intro">
            <h1 className="offer-card-header">{props.OfferCard}</h1>
            <img src={ArrowDownImg} className="offer-card-arrow" />
          </div>

          <div className="offer-card">
            {props.Navigating && (
              <div className="navigating">
                <h1 className="navigating-text">{props.Navigating}</h1>
              </div>
            )}
            {props.ForChild && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForChild}</h1>
                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="Virtual coaching with licensed therapists—individually and in a groups"
                    FeaturesImg={weeklyImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Real-time access to SMS-based care concierge

"
                    FeaturesImg={SmileyImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Online community of like-minded peers
"
                    FeaturesImg={ChatImg}
                  />
                </div>
              </div>
            )}
            {props.ForYou && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForYou}</h1>

                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="Parent dashboard with actionable insight about your child’s wellbeing
"
                    FeaturesImg={dashboardImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Expert-led webinars on timely topics related to wellness and parenting
"
                    FeaturesImg={webinarsImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Automatic alerts in crisis situations


"
                    FeaturesImg={proceduresImg}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {props.OfferCardParent && (
        <div className="offer-card-container">
          <div className="offer-card-intro">
            <h1 className="offer-card-header">{props.OfferCardParent}</h1>
            <img src={ArrowDownImg} className="offer-card-arrow" />
          </div>

          <div className="offer-card">
            {props.Navigating && (
              <div className="navigating">
                <h1 className="navigating-text">{props.Navigating}</h1>
              </div>
            )}
            {props.ForChild && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForChild}</h1>
                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="On-demand virtual coaching with parenting experts—individually and in groups
"
                    FeaturesImg={LicensedImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Access to a roster of diverse therapists, specialized in serving parents
"
                    FeaturesImg={ChatImg}
                  />
                </div>
              </div>
            )}
            {props.ForYou && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForYou}</h1>

                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="Online community of like-minded parents with shared values
"
                    FeaturesImg={NetworkImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Real-time SMS-based support from our expert care team


"
                    FeaturesImg={RosterImg}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {props.OfferCardBasicNeeds && (
        <div className="offer-card-container">
          <div className="offer-card-intro">
            <h1 className="offer-card-header">{props.OfferCardBasicNeeds}</h1>
            <img src={ArrowDownImg} className="offer-card-arrow" />
          </div>

          <div className="offer-card">
            {props.Navigating && (
              <div className="navigating">
                <h1 className="navigating-text">{props.Navigating}</h1>
              </div>
            )}
            {props.ForChild && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForChild}</h1>
                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="A one-stop-shop for all of your students’ Basic Needs questions and concerns
"
                    FeaturesImg={weeklyImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Real-time access to SMS-based Care Navigators that work alongside your team
"
                    FeaturesImg={SmileyImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Ongoing virtual case management to streamline students’ benefit process from end to end
"
                    FeaturesImg={ChatImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="An interactive interface helping your students identify local, vetted resources and support
"
                    FeaturesImg={communityImg}
                  />
                </div>
              </div>
            )}
            {props.ForYou && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForYou}</h1>

                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="A virtual team of Basic Needs experts—intake coordinators, case managers, and subject matter experts—who serve your students alongside your in-house team
"
                    FeaturesImg={NetworkImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="A state-of-the-art case management system that helps streamline collaboration between offices and departments
"
                    FeaturesImg={dashboardImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Customized reporting and analytics suite providing real-time insight on student engagement, impact, and outcomes
"
                    FeaturesImg={proceduresImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Faculty and staff training on Basic Needs challenges, needs, and resources
"
                    FeaturesImg={supportImg}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {props.OfferCardEnterprises && (
        <div className="offer-card-container">
          <div className="offer-card-intro">
            <h1 className="offer-card-header">{props.OfferCardEnterprises}</h1>
            <img src={ArrowDownImg} className="offer-card-arrow" />
          </div>

          <div className="offer-card">
            {props.Navigating && (
              <div className="navigating">
                <h1 className="navigating-text">{props.Navigating}</h1>
              </div>
            )}
            {props.ForChild && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForChild}</h1>
                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="Virtual coaching with licensed mental health professionals—individually and in groups
"
                    FeaturesImg={LicensedImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Real-time access to SMS-based care concierge
"
                    FeaturesImg={ChatImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Online network of like-minded peers from your company and other organizations
"
                    FeaturesImg={communityImg}
                  />
                </div>
              </div>
            )}
            {props.ForYou && (
              <div className="for-child">
                <h1 className="for-child-header">{props.ForYou}</h1>

                <div className="for-child-content">
                  <OfferCardFeatures
                    FeaturesText="Access to a network of 100+ diverse providers who can support your employees around the clock
"
                    FeaturesImg={NetworkImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Employer dashboard with actionable insight about your workforce’s wellbeing
"
                    FeaturesImg={dashboardImg}
                  />
                  <OfferCardFeatures
                    FeaturesText="Expert-led trainings on timely topics related to wellness, workforce development, and DEI&B
"
                    FeaturesImg={proceduresImg}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {props.BarCard && (
        <div className="bar-card">
          <img src={props.BarCard} className="bar-img" />
          <h1 className="bar-card-title">{props.BarHeader}</h1>
          <p className="bar-card-text">{props.BarText}</p>
        </div>
      )}
    </div>
  );
};
export const ProgressBar = () => {
  return (
    <div className="ProgressBar">
      <Card
        Progress="Up to"
        ProgressMain="10 
"
        ProgressMainDiff="students"
      />
      <img className="progress-arrow" src={SquigeeArrowImg} />
      <img className="progress-arrow-respn" src={SquigeeArrowDownImg} />
      <Card
        Progress="Meet"
        ProgressMain="Once 

"
        ProgressMainDiff="/week"
      />

      <img className="progress-arrow" src={SquigeeArrow2Img} />
      <img className="progress-arrow-respn" src={SquigeeArrowDownImg} />
      <Card
        Progress="For"
        ProgressMain="60 
"
        ProgressMainDiff="mins"
      />
    </div>
  );
};

export const OfferCardFeatures = (props) => {
  return (
    <div className="offer-card-features">
      <img src={props.FeaturesImg} className="card-features-img" />
      <p className="card-features-text">{props.FeaturesText}</p>
    </div>
  );
};

export const LoginSignUpCard = (props) => {
  const [showProgramsInput, setShowProgramsInput] = useState(false);

  const openProgramsInput = () => {
    setShowProgramsInput(true);
  };
  const closeProgramsInput = () => {
    setShowProgramsInput(false);
  };
  const buttonIds = ['Students', 'Parents'];
  const handleButtonClick = (id) => {
    setActiveId(id);
    if (id === 'Students') {
      closeProgramsInput();
    } else if (id === 'Parents') {
      openProgramsInput();
    }
  };
  const [activeId, setActiveId] = useState(buttonIds[0]);

  return (
    <div className="LoginPageBody">
      <div className="OutroLogoContainer">
        <Link exact to="/">
          <img className="OutroLogo" src={OutroLogoImg} />
        </Link>
      </div>
      <div className="LogInContainer">
        <div className="LoginMain">
          {props.LoginHeader && (
            <h1 className="login-header">{props.LoginHeader}</h1>
          )}
          {props.AccountHeader && (
            <h1 className="account-header">{props.AccountHeader}</h1>
          )}
          {props.SegmentButton && (
            <div className="Segment">
              {buttonIds.map((id) => (
                <button
                  key={id}
                  id={id}
                  className={id === activeId ? 'active' : ''}
                  onClick={() => handleButtonClick(id)}
                >
                  {id}
                </button>
              ))}
            </div>
          )}
          {props.NameInput && (
            <div className="Input-group">
              <div className="Input-group-header">
                <h1 className="login-email">{props.NameInput}</h1>
                <Input ClassicInput=" " />
              </div>
              <div className="Input-group-header">
                <h1 className="login-email">Last name*</h1>
                <Input ClassicInput=" " />
              </div>
            </div>
          )}
          <div className="Input-Login">
            <h1 className="login-email">Email*</h1>
            <Input ClassicInput=" " />
            {props.Phone && (
              <>
                <h1 className="login-email">{props.Phone}</h1>
                <Input ClassicInput=" " />
              </>
            )}
            {showProgramsInput && (
              <>
                <h1 className="login-email">Interested in programs for*</h1>
                <Input ClassicInput="My child / Myself" />
              </>
            )}
            {props.LogInBtn && <Button ButtonLogIn="Login" />}
            {props.AcceptTerms && (
              <div className="terms-privacy">
                <label class="check-container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <p>
                  I accept the tbh <span>terms of service</span> and
                  <span> privacy policy</span>
                </p>
              </div>
            )}
            {props.SignInBtn && <Button ButtonSignUp="Get started" />}
            {props.HaveAcct && (
              <p>
                Don't have an account?{' '}
                <Link to="/SignUpPage">
                  <span className="sign">{props.HaveAcct}</span>
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
