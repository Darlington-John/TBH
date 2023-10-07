import React from 'react';

import { IntroSectionFifth } from './../../Components/IntroSection/IntroSection';
import Card from './../../Components/Cards/Cards';
import { StudentsSpeechBoy } from './../../Components/StudentsSpeech/StudentsSpeech';
import StanfordImg from './../../Assets/Images/Stanford.png';
import ReferImg from './../../Assets/Images/Refer.jpg';
import MeeraImg from './../../Assets/Images/Meera.jpg';
import JadynImg from './../../Assets/Images/Jadyn.jpg';
import MorningImg from './../../Assets/Images/Morning.jpg';
import PickImg from './../../Assets/Images/Pick.jpg';
import {
  BarCard,
  MultipleTouchPointsEdit,
} from './../Children/ChildrenPageBody/ChildrenPageBody';
import MiniFooter from './../../Components/MiniFooter/MiniFooter';
import Button from './../../Components/Buttons/Buttons';
import ChatIcon from './../../Assets/Icons/Chat.png';
const K12PageBody = () => {
  return (
    <div style={{ background: '#f8f4f2' }} className="K12PageBody">
      <div className="IntroSectionBody">
        <IntroSectionFifth
          StudentSpan="from A to Z"
          HealthHeader="Boosting your district's mental health support
"
          HealthParagraph="We serve as a virtual extension to your mental health program and give your students the skills they need to build meaningful social connections, feel seen and heard, and make lasting personal change.
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
        TouchText="Students sign up online, or get referred by a parent/school counselor.
"
        TouchHeader="Step 1

"
        TouchTextTwo="Signing up is a simple process that only takes a few minutes. We get to know students, assess their needs, understand their goals, and get their availability. Throughout the process, parents and counselors are closely kept in the loop.
"
        img={ReferImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We pair students with a licensed therapist.
"
        TouchHeader="Step 2

"
        TouchTextTwo="A dedicated member of our care team onboards students onto the tbh platform within hours of signing up—and offers them custom-tailored care options, including 1:1 and group counseling.
"
        img={MeeraImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Our care team directs students to the resources that best suit their interests and needs.
"
        TouchHeader="Step 3

"
        TouchTextTwo="Whether a student is looking for one-on-one counseling, group support, self-help resources, or just a community of peers — we’ve got it all. Students can move through the different options at their own pace and based on their own needs.


"
        img={JadynImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We support students on an ongoing basis.
"
        TouchHeader="Step 4

"
        TouchTextTwo="With tbh, mental healthcare isn't a one-and-done. Our care team works closely with each student on a regular basis — daily or weekly, based on need — to make sure no student falls behind. Think of us as your student’s personal success coach.




"
        img={PickImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Schools get real-time actionable data about how their students are doing.

"
        TouchHeader="Step 5

"
        TouchTextTwo="Our interactive web-based dashboard allows schools to track key metrics pertaining to their students’ mental health, evaluate program outcomes, and receive early warning notifications about students in need. We help you build a healthier, more equitable school community.
"
        img={MorningImg}
      />
      <Button ButtonFixed={ChatIcon} />
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

export default K12PageBody;
