import React from 'react';

import { IntroSectionSixth } from './../../Components/IntroSection/IntroSection';
import Button from './../../Components/Buttons/Buttons';
import ChatIcon from './../../Assets/Icons/Chat.png';
import Card from './../../Components/Cards/Cards';
import { StudentsSpeechBoy } from './../../Components/StudentsSpeech/StudentsSpeech';
import StanfordImg from './../../Assets/Images/Stanford.png';
import batteryImg from './../../Assets/Images/battery.png';
import BlueShakeImg from './../../Assets/Images/BlueShake.png';
import contactImg from './../../Assets/Images/contact.png';
import fractionImg from './../../Assets/Images/fraction.png';
import { MultipleTouchPointsEdit } from './../Children/ChildrenPageBody/ChildrenPageBody';
import LoginImg from './../../Assets/Images/Login.jpg';
import SophiaImg from './../../Assets/Images/Sophia.jpg';
import GoodMorningImg from './../../Assets/Images/GoodMorning.jpg';
import JulienCashImg from './../../Assets/Images/JulienCash.jpg';
import PickImg from './../../Assets/Images/Pick.jpg';
import MiniFooter from './../../Components/MiniFooter/MiniFooter';
const EnterprisesBody = () => {
  return (
    <div style={{ background: '#f8f4f2' }} className="EnterprisesBody">
      <div className="IntroSectionBody">
        <IntroSectionSixth
          HealthHeader="Inclusive mental health support 
"
          StudentSpan="for your teams.
"
          HealthParagraph="We offer high-quality, low-cost, virtual support for every employee—for whatever life brings their way. Give your employees the benefits they deserve and support their long-term success.
"
        />
      </div>
      <Button ButtonFixed={ChatIcon} />
      <div className="sectionTwo">
        <Card
          OfferCardEnterprises="What we offer"
          Navigating="Whether you have an existing Basic Needs program or are building one from scratch, our technology and virtual care team helps you reach your students 24/7—and ensure that they persist in their course of study.
"
          ForChild="For your workforce
"
          ForYou="For your company
"
        />
      </div>
      <StudentsSpeechBoy
        Hear="Hear what our students have to say"
        StudentParagraph="It was so nice to get to know my teammates and talk about what we’re all going through. tbh really helped me deal with my anxiety and pressure to please other people. Also, the sessions were so real. No BS.
"
        StudentsSchool={StanfordImg}
        StudentName="Jeanne K."
        Location="
Student at Stanford"
      />
      <BarCardEnterprises />
      <MultipleTouchPointsEdit
        TouchText="Employees sign up online.
"
        TouchHeader="Step 1

"
        TouchTextTwo="Signing up is a simple process that only takes a few minutes. We get to know your employees, assess their needs, understand their goals, and get their availability.
"
        img={LoginImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We pair your employees with a licensed therapist.
"
        TouchHeader="Step 2

"
        TouchTextTwo="A dedicated member of our care team onboards students onto the tbh platform within hours of signing up—and offers them custom-tailored care options, including 1:1 and group counseling.
"
        img={SophiaImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Our care team directs your employees to the resources that best suit their needs.

"
        TouchHeader="Step 3

"
        TouchTextTwo="Whether your employee is looking for one-on-one counseling, group support, self-help resources, or just a community of peers — we’ve got it all. Your employee can move through the different options at their own pace and based on their own needs.
"
        img={GoodMorningImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We support your workforce on an ongoing basis.
"
        TouchHeader="Step 4

"
        TouchTextTwo="With tbh, mental healthcare isn't a one-and-done. Our care team will work closely with your employees on a regular basis — daily or weekly, based on need — to make sure they get the care they need. Think of us as your employees’ executive coach.
"
        img={PickImg}
      />
      <MultipleTouchPointsEdit
        TouchText="You get real-time actionable data about how your workforce is doing.
"
        TouchHeader="Step 5

"
        TouchTextTwo="Our interactive web-based dashboard allows HR teams to track key metrics pertaining to their teams’ mental health and evaluate program ROI.
"
        img={JulienCashImg}
      />
      <MiniFooter
        ContentHeader="Ready to supercharge your district's mental health services? Get in touch now:
"
        InputLastName="Last name*"
        InputName="First name*"
        InputNumber="Phone number*"
        InputEmail="Work email*"
        PositionInput="Position/Role*"
        SchoolInput="Company name*"
        MessageInput="Message"
      />
    </div>
  );
};

export const BarCardEnterprises = () => {
  return (
    <div className="bar-card-container">
      <div className="x">
        <Card
          BarCard={batteryImg}
          BarHeader="Supercharge your employees' skills, in an inclusive and safe community.
"
          BarText="Our proprietary, evidence-based, therapist-led coaching program gives your employees the skills they need to become more resilient, productive, and empowered—at the workplace and beyond.
"
        />
        <Card
          BarCard={contactImg}
          BarHeader="Attract and retain talent.
"
          BarText="A convenient and inclusive mental health support like tbh helps you stand out in a competitive labor market. Our service also drives better business ROI by improving employee happiness, engagement, and productivity.
"
        />
        <Card
          BarCard={fractionImg}
          BarHeader="A fraction of the cost of trditional 1:1 therapy.

"
          BarText="We believe that mental health is for everyone. Our unique, group model allows us to keep our prices low—and lets you support your child’s mental health without breaking your wallet.



"
        />
        <Card
          BarCard={BlueShakeImg}
          BarHeader="Rooted in Diversity, Equity, & Inclusion.
"
          BarText="We help you create space for diverse communities. Over 50% of our providers identify as individuals of color and over 30% are fluent in a language other than English. With tbh, you can offer more inclusive wellness services to underserved populations, including BIPOC, Latinx, and LGBTQA+, employees.
"
        />
      </div>
    </div>
  );
};

export default EnterprisesBody;
