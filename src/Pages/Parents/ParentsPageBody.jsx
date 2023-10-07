import React from 'react';

import StanfordImg from './../../Assets/Images/Stanford.png';
import { IntroSectionThird } from './../../Components/IntroSection/IntroSection';
import ChildHeroImg from './../../Assets/Images/ChildHero.svg';
import Card from './../../Components/Cards/Cards';
import { StudentsSpeechBoy } from './../../Components/StudentsSpeech/StudentsSpeech';
import {
  BarCard,
  MultipleTouchPointsEdit,
} from './../Children/ChildrenPageBody/ChildrenPageBody';
import TroublingImg from './../../Assets/Images/Troubling.jpg';
import AlyssaImg from './../../Assets/Images/Alyssa.jpg';
import ADHDImg from './../../Assets/Images/ADHD.jpg';
import JulienImg from './../../Assets/Images/Julien.jpg';
import MiniFooter from './../../Components/MiniFooter/MiniFooter';
import Button from './../../Components/Buttons/Buttons';
import ChatIcon from './../../Assets/Icons/Chat.png';
const ParentPageBody = () => {
  return (
    <div style={{ background: '#f8f4f2' }} className="ParentPageBody">
      <div className="IntroSectionBody">
        <IntroSectionThird
          HealthHeader=" is hard, but it doesn’t have to be.
"
          StudentSpan="Parenting"
          HealthParagraph="
Whether you’re looking for support for yourself, your child, or your family—our professional team of psychologists, youth advisors, and development coaches can help.
"
        />
      </div>
      <div className="sectionTwo">
        <Card
          OfferCardParent="What we offer"
          Navigating="Our program, built by parents and leading child care and development experts, provides you with hands-on, evidence-based tools and resources to deal with any challenge that comes your way—and build positive, nurturing habits for your whole family.
"
          ForChild="What we offer"
          ForYou=" "
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
        TouchText="You sign up online.
"
        TouchHeader="Step 1

"
        TouchTextTwo="Signing up is a simple process that only takes a few minutes. We get to know students, assess their needs, understand their goals, and get their availability.
"
        img={TroublingImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We pair you with a licensed therapist and group of like-minded parents.
"
        TouchHeader="Step 2

"
        TouchTextTwo="A dedicated member of our care team onboards students onto the tbh platform within hours of signing up—and offers them custom-tailored care options, including 1:1 and group counseling.
"
        img={AlyssaImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We support you on an ongoing basis.
"
        TouchHeader="Step 3

"
        TouchTextTwo="Whether a student is looking for one-on-one counseling, group support, self-help resources, or just a community of peers — we’ve got it all. Students can move through the different options at their own pace and based on their own needs.
"
        img={ADHDImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Your coach and community help you stay accountable to your goals.
"
        TouchHeader="Step 4

"
        TouchTextTwo="With tbh, mental healthcare isn't a one-and-done. Our care team works closely with each student on a regular basis — daily or weekly, based on need — to make sure no student falls behind.
"
        img={JulienImg}
      />
      <Button ButtonFixed={ChatIcon} />
      <MiniFooter
        ContentHeader="Secure your spot in a parent-only group!
"
        ContentPrice="$150/month (fully refundable). Less than 25% the price of an average month od 1:1 therapy
"
        InputLastName="Parent's last name*"
        InputName="Parent's first name*"
        InputNumber="Parent's phone number*"
        InputEmail="Parent's email address"
      />
    </div>
  );
};

export default ParentPageBody;
