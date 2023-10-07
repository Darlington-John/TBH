import React from 'react';
import './IntroSection.css';
import Button from './../../Components/Buttons/Buttons';
import { ReactComponent as MentalHealthHero } from './../../Assets/Images/MentalHealthHero.svg';
import { ReactComponent as ChildHero } from './../../Assets/Images/ChildHero.svg';
import { ReactComponent as ParentHero } from './../../Assets/Images/ParentHero.svg';
import { ReactComponent as BasicNeedsHero } from './../../Assets/Images/BasicNeedsHero.svg';
import { ReactComponent as K12Hero } from './../../Assets/Images/K12Hero.svg';
import { ReactComponent as EnterprisesHero } from './../../Assets/Images/EnterprisesHero.svg';
import { useEffect, useState } from 'react';
export const IntroSection = (props) => {
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.mental-health', '.intro-section-img-container')
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
    <div className="intro-section">
      <div className="mental-health-container">
        <div className={`mental-health ${showSection ? 'show animated' : ''}`}>
          <div className="mental-health-header-container">
            <h1 className="mental-health-header">
              {props.HealthHeader}
              <span className="students-span">{props.StudentSpan}</span>
            </h1>
          </div>

          <p className="mental-health-paragraph">{props.HealthParagraph}</p>
          <Button ButtonOrange="Join Now" />
        </div>
      </div>
      <div
        className={`intro-section-img-container ${
          showSection ? 'show animated' : ''
        }`}
      >
        <div className="mm">
          {' '}
          <MentalHealthHero />
        </div>
      </div>
    </div>
  );
};

export const IntroSectionSecond = (props) => {
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.mental-health', '.intro-section-img-container')
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
    <div className="intro-section">
      <div className="mental-health-container">
        <div className={`mental-health ${showSection ? 'show animated' : ''}`}>
          <div className="mental-health-header-container2">
            <h1 className="mental-health-header2">
              <span className="students-span">{props.StudentSpan}</span>
              {props.HealthHeader}
            </h1>
          </div>

          <p className="mental-health-paragraph">{props.HealthParagraph}</p>
          <Button ButtonOrange="Join Now" />
        </div>
      </div>
      <div
        className={`intro-section-img-container ${
          showSection ? 'show animated' : ''
        }`}
      >
        <div className="child-hero-container">
          {' '}
          <ChildHero />
        </div>
      </div>
    </div>
  );
};

export const IntroSectionThird = (props) => {
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.mental-health', '.intro-section-img-container')
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
    <div className="intro-section">
      <div className="mental-health-container">
        <div className={`mental-health ${showSection ? 'show animated' : ''}`}>
          <div className="mental-health-header-container2">
            <h1 className="mental-health-header2">
              <span className="students-span">{props.StudentSpan}</span>
              {props.HealthHeader}
            </h1>
          </div>

          <p className="mental-health-paragraph">{props.HealthParagraph}</p>
          <Button ButtonOrange="Join Now" />
        </div>
      </div>
      <div
        className={`intro-section-img-container ${
          showSection ? 'show animated' : ''
        }`}
      >
        <div className="child-hero-container">
          {' '}
          <ParentHero />
        </div>
      </div>
    </div>
  );
};

export const IntroSectionFourth = (props) => {
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.mental-health', '.intro-section-img-container')
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
    <div className="intro-section">
      <div className="mental-health-container">
        <div className={`mental-health ${showSection ? 'show animated' : ''}`}>
          <div className="mental-health-header-container2">
            <h1 className="mental-health-header2">
              <span className="students-span">{props.StudentSpan}</span>
              {props.HealthHeader}
            </h1>
          </div>

          <p className="mental-health-paragraph">{props.HealthParagraph}</p>
          <Button ButtonOrange="Join Now" />
        </div>
      </div>
      <div
        className={`intro-section-img-container ${
          showSection ? 'show animated' : ''
        }`}
      >
        <div className="child-hero-container">
          {' '}
          <BasicNeedsHero />
        </div>
      </div>
    </div>
  );
};
export const IntroSectionFifth = (props) => {
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.mental-health', '.intro-section-img-container')
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
    <div className="intro-section">
      <div className="mental-health-container">
        <div className={`mental-health ${showSection ? 'show animated' : ''}`}>
          <div className="mental-health-header-container mental-health-header-container2">
            <h1 className="mental-health-header mental-health-header2">
              {props.HealthHeader}
              <span className="students-span students-span2">
                {props.StudentSpan}
              </span>
            </h1>
          </div>

          <p className="mental-health-paragraph">{props.HealthParagraph}</p>
          <Button ButtonOrange="Join Now" />
        </div>
      </div>
      <div
        className={`intro-section-img-container ${
          showSection ? 'show animated' : ''
        }`}
      >
        <div className="KI2-img-container">
          {' '}
          <K12Hero />
        </div>
      </div>
    </div>
  );
};
export const IntroSectionSixth = (props) => {
  const [showSection, setShowSection] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 2;
        const sectionOffset = document
          .querySelector('.mental-health', '.intro-section-img-container')
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
    <div className="intro-section">
      <div className="mental-health-container">
        <div className={`mental-health ${showSection ? 'show animated' : ''}`}>
          <div className="mental-health-header-container mental-health-header-container2">
            <h1 className="mental-health-header mental-health-header2">
              {props.HealthHeader}
              <span className="students-span students-span2">
                {props.StudentSpan}
              </span>
            </h1>
          </div>

          <p className="mental-health-paragraph">{props.HealthParagraph}</p>
          <Button ButtonOrange="Join Now" />
        </div>
      </div>
      <div
        className={`intro-section-img-container ${
          showSection ? 'show animated' : ''
        }`}
      >
        <div className="KI2-img-container">
          {' '}
          <EnterprisesHero />
        </div>
      </div>
    </div>
  );
};
