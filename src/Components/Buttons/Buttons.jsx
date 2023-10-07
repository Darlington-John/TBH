import React from 'react';
import './Buttons.css';

const Button = (props) => {
  return (
    <div className="Buttons">
      {props.ButtonWhite && (
        <button id="ButtonWhite">{props.ButtonWhite}</button>
      )}
      {props.ButtonOrange && (
        <button id="ButtonOrange">{props.ButtonOrange}</button>
      )}
      {props.ButtonFixed && (
        <div id="ButtonFixed">
          <img src={props.ButtonFixed} />
        </div>
      )}
      {props.ButtonLogIn && (
        <button id="ButtonLogIn">{props.ButtonLogIn}</button>
      )}
      {props.ButtonSignUp && (
        <button id="ButtonSignUp">{props.ButtonSignUp}</button>
      )}
    </div>
  );
};

export default Button;
