import React from 'react';
import './HomePageBody.css';
import './../../AnimaTedSvgs/AnimaTedSvgs.css';
import MentalHealthHeroImg from './../../../Assets/Images/MentalHealthHero.svg';
import ArrowDownImg from './../../../Assets/Images/ArrowDown.png';
import NerdImg from './../../../Assets/Images/Nerd.png';
import SmileyImg from './../../../Assets/Images/Smiley.png';
import ChatImg from './../../../Assets/Images/Chat.png';
import ArrBookImg from './../../../Assets/Images/ArrBook.png';
import SquigeeImg from './../../../Assets/Images/Squigee.png';
import StanfordImg from './../../../Assets/Images/Stanford.png';
import GoodMorningImg from './../../../Assets/Images/GoodMorning.png';
import GoodMorningJasImg from './../../../Assets/Images/GoodMorningJas.png';
import GoodMorning434Img from './../../../Assets/Images/GoodMorning434.png';
import GoodMorning830Img from './../../../Assets/Images/GoodMorning830.png';
import ExpertsFrameImg from './../../../Assets/Images/ExpertsFrame.png';
import JeremyImg from './../../../Assets/Images/Jeremy.jpeg';
import DivyaImg from './../../../Assets/Images/Divya.jpeg';
import GabrielImg from './../../../Assets/Images/Gabriel.jpeg';
import KaelaImg from './../../../Assets/Images/Kaela.jpeg';
import GhazalImg from './../../../Assets/Images/Ghazal.jpeg';
import HelenImg from './../../../Assets/Images/Helen.jpeg';
import AccountabilityImg from './../../../Assets/Images/Accountability.png';
import GoalImg from './../../../Assets/Images/Goal.png';
import WriterImg from './../../../Assets/Images/Writer.png';
import FindHappinessImg from './../../../Assets/Images/FindHappiness.png';
import SpeakerImg from './../../../Assets/Images/Speaker.png';
import LifeTransImg from './../../../Assets/Images/LifeTrans.png';
import StressImg from './../../../Assets/Images/Stress.png';
import AdvocateImg from './../../../Assets/Images/Advocate.png';
import RelationshipsImg from './../../../Assets/Images/Relationships.png';
import EducatorImg from './../../../Assets/Images/Educator.png';
import Educator2Img from './../../../Assets/Images/Educator2.png';
import FirstGenImg from './../../../Assets/Images/FirstGen.png';
import RacialImg from './../../../Assets/Images/Racial.png';
import MusicianImg from './../../../Assets/Images/Musician.png';
import AuthorImg from './../../../Assets/Images/Author.png';
import Author2Img from './../../../Assets/Images/Author2.png';
import FaithImg from './../../../Assets/Images/Faith.png';
import GenderImg from './../../../Assets/Images/Gender.png';
import FindingImg from './../../../Assets/Images/Finding.png';
import FightingImg from './../../../Assets/Images/Fighting.png';
import ArtImg from './../../../Assets/Images/Art.png';
import PodcastImg from './../../../Assets/Images/Podcast.png';
import TraumaImg from './../../../Assets/Images/Trauma.png';
import WomenImg from './../../../Assets/Images/Women.png';
import BipocImg from './../../../Assets/Images/Bipoc.png';
import CropImg from './../../../Assets/Images/Crop.png';
import ChatIcon from './../../../Assets/Icons/Chat.png';
import recordingImg from './../../../Assets/Images/recording.jpeg';
import Button from './../../../Components/Buttons/Buttons';
import { ReactComponent as MentalHealthHero } from './../../../Assets/Images/MentalHealthHero.svg';
import { useEffect, useState } from 'react';

import Schools, {
  SchoolsResponsive,
} from './../../../Components/Sliders/Sliders';
import { ProgressBar } from './../../../Components/Cards/Cards';

import Accordion from './../../../Components/Accordion/Accordion';
import Footer from './../../../Components/Footer/Footer';
import { IntroSection } from './../../../Components/IntroSection/IntroSection';
import StudentsSpeechGirl from './../../../Components/StudentsSpeech/StudentsSpeech';

const HomePageBody = () => {
  return (
    <>
      <div className="HomePageBody">
        <div className="IntroSectionBody">
          <IntroSection
            HealthHeader="Mental health, reimagined for "
            StudentSpan="students"
            HealthParagraph="Helping your students succeed and thrive with the help of licensed therapists and a community of peers. When and where they need it most."
            IntroSectionImg={MentalHealthHeroImg}
          />
        </div>
        <div className="SchoolsBody">
          <Schools
            TrustedText="Trusted by students at over 100 schools:

"
            ArrowDown={ArrowDownImg}
          />
          <SchoolsResponsive
            TrustedText="Trusted by students at over 100 schools:
"
          />
        </div>
        <MultipleTouchPoints
          TouchHeader="One platform, multiple touchpoints.

"
        />
        <ProgressBar />
        <StudentsSpeechGirl
          Hear="Hear what our students have to say"
          StudentParagraph="It was so nice to get to know my teammates and talk about what we’re all going through. tbh really helped me deal with my anxiety and pressure to please other people. Also, the sessions were so real. No BS.
"
          StudentsSchool={StanfordImg}
          StudentName="Jeanne K."
          Location="
Student at Stanford"
        />
        <WhoWeHelp />
        <WorldClassExperts />
        <Button ButtonFixed={ChatIcon} />
        <Footer />
      </div>
    </>
  );
};

export const MultipleTouchPoints = (props) => {
  return (
    <div className="multiple-touch-points">
      <div className="multi-touch-points-text">
        <p className="multi-touch-header">{props.TouchHeader}</p>
        <div className="multi-touch-text-features">
          <p className="multi-touch-header-main">
            We support students, no matter what they’re dealing with.
          </p>
          <Deals
            DealImg={NerdImg}
            DealText="Personalized, therapist-led support groups
"
            DealParagraph="Weekly virtual groups, consisting of 5-10 students and a licensed clinician, custom-tailored to each student’s needs, lived experiences, and personality type."
            DealList="Our program, rooted in the latest evidence-based practices, helps students build an inclusive community that understands the complexity of their experiences and supports them as they move forward."
          />
          <Deals
            DealImg={SmileyImg}
            DealText="
1:1 check-ins with culturally-competent therapists
"
          />
          <Deals
            DealImg={ChatImg}
            DealText="
Real-time SMS support
"
          />
          <Deals
            DealImg={ArrBookImg}
            DealText="
Interactive mental health resource library
"
          />
        </div>
      </div>
      <div className="multi-touch-points-img">
        <img className="touch-points-img" src={recordingImg} />
        <img className="touch-points-img2" src={SquigeeImg} />
      </div>
    </div>
  );
};
// const textToType = (
//   <div className="jjj">
//     This is a <span>typing</span> effect.
//   </div>
// );
export const Deals = (props) => {
  return (
    <div className="deals">
      {props.DealImg && <img src={props.DealImg} className="deal-img" />}

      {props.DealText && (
        <div>
          {props.DealText && <h3 className="deal-header">{props.DealText}</h3>}
          {props.DealParagraph && (
            <p className="deal-paragraph">{props.DealParagraph}</p>
          )}
          {props.DealList && (
            <ul>
              <li className="deal-list">{props.DealList}</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
export const WhoWeHelp = () => {
  const images = [
    GoodMorningImg,
    GoodMorning434Img,
    GoodMorningJasImg,
    GoodMorning830Img,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const accordionItems = [
    {
      title: <span onClick={handleClick}>K12</span>,
      content: (
        <p onClick={handleClick}>
          We provide the most comprehensive approach to MTSS — helping schools
          quickly and proactively identify students in need and offer them
          personalized, targeted interventions. Through our platform, districts
          can implement data-driven decision making, progress monitoring, and
          evidence-based supports.
        </p>
      ),
      link: 'Learn more',
    },
    {
      title: <span onClick={handleClick}>Higher Education</span>,
      content:
        'We work as a digital extension of your on-campus counseling center, allowing you to reach diverse, underserved student populations without a heavy lift on your staff. Whether your students utilize groups, individual counseling, or any other resource on our platform, our solution keeps students engaged—and in school.',
      link: 'Learn more',
    },
    {
      title: <span onClick={handleClick}>Families</span>,
      content:
        'We provide virtual care that works for kids—and their parents. Whether youre interested in getting help for your child, or want to join a parent-only group for yourself, we got you covered. Well pair you with the right therapist and tbh group—for children or parents—in no time.',
      link: 'Learn more',
    },
    {
      title: <span onClick={handleClick}>Enterprise</span>,
      content:
        'Your company grows when your people do. We offer therapist-led, culturally-inclusive mental health support for your most important asset: your employees. Boost your teams retention and improve new candidate recruitment with a benefits package that encourages authentic connection, belonging, and personal growth.',
      link: 'Learn more',
    },
  ];
  return (
    <div className="who-we-help-container">
      <div className="help-container">
        <h1 className="help-header">Who we help?</h1>
        <div className="help-main">
          <div className="help-accordion">
            <Accordion items={accordionItems} />
          </div>
          <div className="help-img-container">
            <img src={images[currentIndex]} className="help-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const WorldClassExperts = () => {
  const items = [
    <div key="1">
      <img src={JeremyImg} className="expertImg" />
      <img src={AccountabilityImg} className="acct-img" />
      <img src={GoalImg} className="goal-img" />
      <img src={WriterImg} className="Writer-img" />
      <img src={FindHappinessImg} className="FindHappiness-img" />
      <img src={SpeakerImg} className="Speaker-img" />
      <div className="expert-name-container">
        <img src={CropImg} className="crop-img" />
        <p className="expert-name">
          Jeremy, <span className="degree">phd</span>
        </p>
      </div>
    </div>,
    <div key="2">
      <img src={DivyaImg} className="expertImg" />
      <img src={LifeTransImg} className="LifeTrans-img" />
      <img src={StressImg} className="Stress-img" />
      <img src={RelationshipsImg} className="Relationship-img" />
      <img src={EducatorImg} className="FindHappiness-img" />
      <img src={AdvocateImg} className="Advocate-img" />
      <img src={WriterImg} className="Writer2-img" />
      <div className="expert-name-container">
        <img src={CropImg} className="crop-img" />
        <p className="expert-name">
          Divya, <span className="degree">LMHC</span>
        </p>
      </div>
    </div>,
    <div key="3">
      <img src={GabrielImg} className="expertImg" />
      <img src={RacialImg} className="LifeTrans-img" />
      <img src={FirstGenImg} className="Stress-img" />
      <img src={MusicianImg} className="Musician-img" />
      <img src={AuthorImg} className="FindHappiness-img" />
      <img src={Educator2Img} className="Educator2-img" />

      <div className="expert-name-container">
        <img src={CropImg} className="crop-img" />
        <p className="expert-name">
          Gabriel, <span className="degree">PsyD</span>
        </p>
      </div>
    </div>,
    <div key="4">
      <img src={GhazalImg} className="expertImg" />
      <img src={GenderImg} className="LifeTrans-img" />
      <img src={FirstGenImg} className="Stress-img" />
      <img src={SpeakerImg} className="Relationship-img" />
      <img src={FaithImg} className="FindHappiness-img" />
      <img src={Author2Img} className="Educator2-img" />

      <div className="expert-name-container">
        <img src={CropImg} className="crop-img" />
        <p className="expert-name">
          Ghazal, <span className="degree">LMFT</span>
        </p>
      </div>
    </div>,

    <div key="6">
      <img src={KaelaImg} className="expertImg" />
      <img src={TraumaImg} className="acct-img" />
      <img src={BipocImg} className="Stress-img" />
      <img src={LifeTransImg} className="Speaker-img" />
      <img src={WomenImg} className="FindHappiness-img" />

      <div className="expert-name-container">
        <img src={CropImg} className="crop-img" />
        <p className="expert-name">
          Helen, <span className="degree">M.A</span>
        </p>
      </div>
    </div>,
    <div key="5">
      <img src={HelenImg} className="expertImg" />
      <img src={FindingImg} className="LifeTrans-img" />
      <img src={FightingImg} className="Stress-img" />
      <img src={ArtImg} className="Relationship-img" />
      <img src={FirstGenImg} className="FindHappiness-img" />
      <img src={PodcastImg} className="Educator2-img" />

      <div className="expert-name-container">
        <img src={CropImg} className="crop-img" />
        <p className="expert-name">
          Helen, <span className="degree">M.A</span>
        </p>
      </div>
    </div>,
  ];
  return (
    <div className="world-class-experts-container">
      <div className="world-class-experts">
        <h1 className="experts-header">Meet our world-class care experts</h1>
        <div className="experts-main">
          <h1 className="experts-main-header">
            A proprietary program, built by expert therapists who understand
            students.
          </h1>
          <p className="experts-main-paragraph">
            All tbh groups are facilitated by licensed, culturally-competent
            therapists who have experience working with youth, adolescents, and
            college-aged students. Our proprietary program, rooted in the latest
            evidence-based therapeutic practices, provides students with a safe
            space to deal with life’s challenges.
          </p>
        </div>
      </div>
      <div className="expert-slideshow">
        <Experts items={items} />
      </div>
    </div>
  );
};

// export const Experts = () => {
//   useEffect(() => {
//     fadeEffect();
//   }, []);
//   return (
//     <div className="experts">
//       <img src={ExpertsFrameImg} className="frame" />
//       <div className="fade-div">
//         <img src={JeremyImg} className="expertImg" />
//       </div>
//       <div className="fade-div">
//         <img src={GoodMorningImg} className="expertImg" />
//       </div>
//     </div>
//   );
// };

const Experts = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="experts">
      <img src={ExpertsFrameImg} className="frame" />
      {items.map((item, index) => (
        <div
          key={index}
          className={`fade-div ${currentItemIndex === index ? 'active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HomePageBody;
