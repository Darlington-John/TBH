import React from 'react';
import './ChildrenPageBody.css';
import { IntroSectionSecond } from '../../../Components/IntroSection/IntroSection';
import ChildHeroImg from './../../../Assets/Images/ChildHero.svg';
import StanfordImg from './../../../Assets/Images/Stanford.png';
import clockImg from './../../../Assets/Images/clock.png';
import supportImg from './../../../Assets/Images/support.png';
import fractionImg from './../../../Assets/Images/fraction.png';
import HiThereImg from './../../../Assets/Images/HiThere.jpg';
import JasminHiImg from './../../../Assets/Images/JasminHi.jpg';
import ConcerningImg from './../../../Assets/Images/Concerning.jpg';
import ResourcesImg from './../../../Assets/Images/Resources.jpg';
import designedImg from './../../../Assets/Images/designed.png';
import Card from '../../../Components/Cards/Cards';
import { StudentsSpeechBoy } from '../../../Components/StudentsSpeech/StudentsSpeech';
import recordingImg from './../../../Assets/Images/recording.jpeg';
import ChatIcon from './../../../Assets/Icons/Chat.png';
import Button from '../../../Components/Buttons/Buttons';
import MiniFooter from '../../../Components/MiniFooter/MiniFooter';
const ChildrenPageBody = (props) => {
  return (
    <div className="ChildrenPageBody">
      <div className="IntroSectionBody">
        <IntroSectionSecond
          HealthHeader="bottle up too much inside, and parents can’t always help.
"
          StudentSpan="Students "
          HealthParagraph="tbh is your first line of defense, allowing your child to work through daily issues with a licensed mental health professional and a group of like-minded peers—while giving you peace of mind.
"
          IntroSectionImg={ChildHeroImg}
        />
      </div>
      <div className="sectionTwo">
        <Card
          OfferCard="What we offer"
          Navigating="Navigating your child’s mental health can be stressful and difficult. School pressure, stress, anxiety, bullying, self-esteem issues—whatever your child is dealing with, we have a professional team of psychologists, youth advisors, and development experts that will help them thrive.
"
          ForChild="For your child"
          ForYou="For you"
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
        TouchText="Your child signs up online.
"
        TouchHeader="Step 1

"
        TouchTextTwo="Signing up is a simple process that only takes a few minutes. We get to know your child, assess their needs, and get their availability. You’ll get real-time alerts throughout the process.

"
        img={HiThereImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We pair your child with a licensed therapist.

"
        TouchHeader="Step 2

"
        TouchTextTwo="A dedicated member of our care team will onboard your child onto the tbh platform and offer them personalized care options—including individual and group counseling—with a network of the most diverse youth-specializing therapists.



"
        img={JasminHiImg}
      />
      <MultipleTouchPointsEdit
        TouchText="We support your child on an ongoing basis.


"
        TouchHeader="Step 3

"
        TouchTextTwo="With tbh, mental healthcare isn't a one-and-done. Our care team will work closely with your child on a regular basis — daily or weekly, based on need — to make sure they get the care they need. Think of us as your child’s personal success coach.





"
        img={ResourcesImg}
      />
      <MultipleTouchPointsEdit
        TouchText="Parents get real-time actionable data about how their children are doing.



"
        TouchHeader="Step 4

"
        TouchTextTwo="Our interactive web-based dashboard allows you to track key metrics pertaining to your child’s mental health, evaluate program outcomes, and receive early warning notifications about alarming behavior.

"
        img={ConcerningImg}
      />
      <Button ButtonFixed={ChatIcon} />
      <MiniFooter
        ContentHeader="Limited spots now available on our waitlist. Secure one for your child today!
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

export const BarCard = () => {
  return (
    <div className="bar-card-container">
      <div className="x">
        <Card
          BarCard={clockImg}
          BarHeader="Get your child the help they need, faster.
"
          BarText="We work around your child’s busy schedule and offer appointments whenever they’re free: evenings, weekends, school holidays—you name it. All sessions are accessible from the comfort of their phone or computer.

"
        />
        <Card
          BarCard={supportImg}
          BarHeader="Provide support to your child anytime, anywhere.

"
          BarText="We work around your child’s busy schedule and offer appointments whenever they’re free: evenings, weekends, school holidays—you name it. All sessions are accessible from the comfort of their phone or computer.



"
        />
        <Card
          BarCard={fractionImg}
          BarHeader="A fraction of the cost of 1:1 therapy.

"
          BarText="We believe that mental health is for everyone. Our unique, group model allows us to keep our prices low—and lets you support your child’s mental health without breaking your wallet.



"
        />
        <Card
          BarCard={designedImg}
          BarHeader="Designed for students, by students.

"
          BarText="From initial research, to conception and implementation, students are involved in every step of our design process, allowing us to create solutions that drive real behavior change among youth and adolescents.



"
        />
      </div>
    </div>
  );
};
export const MultipleTouchPointsEdit = (props) => {
  return (
    <div className="multiple-touch-points " id="fg">
      <div className="multi-touch-points-text" id="txt">
        <p className="multi-touch-header">{props.TouchHeader}</p>
        <div className="multi-touch-text-features">
          <p className="multi-touch-header-main" id="heade">
            {props.TouchText}
          </p>
          <p className="multi-touch-header-min">{props.TouchTextTwo}</p>
          <Button ButtonOrange="Join now" />
        </div>
      </div>
      <div className="multi-touch-points-img">
        <img className="touch-points-img" src={props.img} />
      </div>
    </div>
  );
};
export default ChildrenPageBody;
