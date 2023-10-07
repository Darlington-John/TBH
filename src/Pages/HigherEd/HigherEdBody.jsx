import React from 'react';

import { IntroSectionFourth } from './../../Components/IntroSection/IntroSection';
import Card from './../../Components/Cards/Cards';
import { StudentsSpeechBoy } from './../../Components/StudentsSpeech/StudentsSpeech';
import StanfordImg from './../../Assets/Images/Stanford.png';
import {
  BarCard,
  MultipleTouchPointsEdit,
} from './../Children/ChildrenPageBody/ChildrenPageBody';
import HowYouImg from './../../Assets/Images/HowYou.jpg';
import CalebImg from './../../Assets/Images/Caleb.jpg';
import PickImg from './../../Assets/Images/Pick.jpg';
import MorningImg from './../../Assets/Images/Morning.jpg';
import SunilImg from './../../Assets/Images/Sunil.jpg';
import MiniFooter from './../../Components/MiniFooter/MiniFooter';
const HigherEdBody = () => {
  return (
    <div style={{ background: '#f8f4f2' }} className="HigherEdBody">
      <div className="IntroSectionBody">
        <IntroSectionFourth
          HealthHeader=" don’t seek help. Make sure no one is left behind.
"
          StudentSpan="Most students"
          HealthParagraph="We provide on-demand, personalized mental health support for students—helping schools improve retention, diversity and inclusion, and overall student success.
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
      <StudentsSpeechBoy
        Hear="Hear what our students have to say"
        StudentParagraph="It was so nice to get to know my teammates and talk about what we’re all going through. tbh really helped me deal with my anxiety and pressure to please other people. Also, the sessions were so real. No BS.
"
        StudentsSchool={StanfordImg}
        StudentName="Jeanne K."
        Location="
Student at Stanford"
      />
      <BarCard />
      <MultipleTouchPointsEdit
        TouchText="Students sign up online or get referred by their school.
"
        TouchHeader="Step 1

"
        TouchTextTwo="Signing up is a simple process that only takes a few minutes. We get to know students, assess their needs, understand their goals, and get their availability.
"
        img={HowYouImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We pair students with a licensed therapist.
"
        TouchHeader="Step 2

"
        TouchTextTwo="A dedicated member of our care team onboards students onto the tbh platform within hours of signing up—and offers them custom-tailored care options, including 1:1 and group counseling.
"
        img={CalebImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Our care team directs students to the resources that best suit their interests and needs.
"
        TouchHeader="Step 3

"
        TouchTextTwo="Whether a student is looking for one-on-one counseling, group support, self-help resources, or just a community of peers — we’ve got it all. Students can move through the different options at their own pace and based on their own needs.
"
        img={SunilImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We support students on an ongoing basis.

"
        TouchHeader="Step 4

"
        TouchTextTwo="With tbh, mental healthcare isn't a one-and-done. Our care team works closely with each student on a regular basis — daily or weekly, based on need — to make sure no student falls behind.
"
        img={PickImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Schools get real-time actionable data on how their students are doing.
"
        TouchHeader="Step 5

"
        TouchTextTwo="Our interactive web-based dashboard allows schools to track key metrics pertaining to their students’ mental health, evaluate program outcomes, and receive early warning notifications about students in need. We help you build a healthier, more equitable campus community.
"
        img={MorningImg}
      />
      <MiniFooter
        ContentHeader="Ready to supercharge your district's mental health services? Get in touch now:
"
        InputLastName="Parent's last name*"
        InputName="Parent's first name*"
        InputNumber="Parent's phone number*"
        InputEmail="Parent's email address"
        PositionInput="Position*"
        SchoolInput="School*"
        MessageInput="Message"
      />
    </div>
  );
};

export default HigherEdBody;
