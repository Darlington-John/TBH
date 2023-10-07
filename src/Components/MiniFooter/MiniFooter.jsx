import React from 'react';
import './MiniFooter.css';
import callImg from './../../Assets/Images/call.svg';
import Button from '../Buttons/Buttons';
const MiniFooter = (props) => {
  return (
    <div className="mini-footer">
      <div className="mini-footer-img-container">
        <img src={callImg} className="mini-footer-img" />
      </div>
      <div className="mini-footer-contents">
        {props.ContentHeader && (
          <h1 className="content-header">{props.ContentHeader}</h1>
        )}
        {props.ContentPrice && (
          <h1 className="content-price">{props.ContentPrice}</h1>
        )}
        <div className="content-Inputs-container">
          <div className="name-input-container">
            <input type="text" className="Name" placeholder={props.InputName} />
            <input
              type="text"
              className="Name"
              placeholder={props.InputLastName}
            />
          </div>
          <div className="Number-input-container">
            <input
              type="text"
              className="Number"
              placeholder={props.InputEmail}
            />
            <input
              type="text"
              className="Number"
              placeholder={props.InputNumber}
            />
          </div>
          {props.SchoolInput && (
            <div className="Number-input-container">
              <input
                type="text"
                className="Number"
                placeholder={props.SchoolInput}
              />
              <input
                type="text"
                className="Number"
                placeholder={props.PositionInput}
              />
            </div>
          )}
          {props.MessageInput && (
            <div className="Number-input-container">
              <input
                type="text"
                className="Number"
                placeholder={props.MessageInput}
              />
            </div>
          )}
        </div>
        <Button ButtonOrange="Get Started" />
      </div>
    </div>
  );
};

export default MiniFooter;
