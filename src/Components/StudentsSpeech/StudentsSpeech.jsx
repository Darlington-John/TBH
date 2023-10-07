import React from 'react';
import './StudentsSpeech.css';
import { ReactComponent as GirlImg } from './../../Assets/Images/Girl.svg';
import { ReactComponent as BoyImg } from './../../Assets/Images/Boy.svg';
const StudentsSpeechGirl = (props) => {
  return (
    <div className="StudentsSpeechContainer">
      <div className="StudentImg">
        <GirlImg />
      </div>
      <div className="StudentFeedContainer">
        <div className="StudentFeed">
          <span className="StudentHeader">{props.Hear}</span>
          <div className="StudentsSpeech">
            <p className="StudentParagraph">{props.StudentParagraph}</p>
          </div>
          <div className="StudentSchool">
            <img src={props.StudentsSchool} />
            <div className="StudentId">
              <span className="StudentName">{props.StudentName}</span>
              <span className="Location">{props.Location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const StudentsSpeechBoy = (props) => {
  return (
    <div className="StudentsSpeechContainer">
      <div className="StudentImg">
        <BoyImg />
      </div>
      <div className="StudentFeedContainer">
        <div className="StudentFeed">
          <span className="StudentHeader">{props.Hear}</span>
          <div className="StudentsSpeech">
            <p className="StudentParagraph">{props.StudentParagraph}</p>
          </div>
          <div className="StudentSchool">
            <img src={props.StudentsSchool} />
            <div className="StudentId">
              <span className="StudentName">{props.StudentName}</span>
              <span className="Location">{props.Location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSpeechGirl;
