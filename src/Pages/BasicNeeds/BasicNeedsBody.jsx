import React from 'react';
import { IntroSectionFourth } from './../../Components/IntroSection/IntroSection';
import Card from './../../Components/Cards/Cards';
import { BarCard } from './../Children/ChildrenPageBody/ChildrenPageBody';
import MiniFooter from './../../Components/MiniFooter/MiniFooter';
import Button from './../../Components/Buttons/Buttons';
import ChatIcon from './../../Assets/Icons/Chat.png';
const BasicNeedsBody = () => {
  return (
    <div style={{ background: '#f8f4f2' }} className="BasicNeedsBody">
      <div className="IntroSectionBody">
        <IntroSectionFourth
          HealthHeader="Scale Basic Needs supports without an added burden on staff.
"
          HealthParagraph="Our case management platform and virtual team of Care Navigators integrate into your Basic Needs program and help connect your students to critical benefits around the clock.
"
        />
      </div>
      <div className="sectionTwo">
        <Card
          OfferCardBasicNeeds="What we offer"
          Navigating="Whether you have an existing Basic Needs program or are building one from scratch, our technology and virtual care team helps you reach your students 24/7—and ensure that they persist in their course of study.
"
          ForChild="For your students
"
          ForYou="For your school team 
"
        />
      </div>
      <BarCard />
      <MiniFooter
        ContentHeader="Ready to supercharge your school's Basic Needs services? Get in touch now:

"
        InputLastName="Parent's last name*"
        InputName="Parent's first name*"
        InputNumber="Parent's phone number*"
        InputEmail="Parent's email address"
      />
      <Button ButtonFixed={ChatIcon} />
    </div>
  );
};

export default BasicNeedsBody;
