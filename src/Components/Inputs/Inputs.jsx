import React from 'react';
import './Inputs.css';

const Input = (props) => {
  return (
    <div>
      {props.ClassicInput && (
        <input
          type="text"
          className="classic-input"
          placeholder={props.ClassicInput}
        />
      )}
    </div>
  );
};

export default Input;
