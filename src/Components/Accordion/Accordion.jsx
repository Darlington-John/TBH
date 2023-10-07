import React, { useState } from 'react';
import './Accordion.css';
import PlusIcon from './../../Assets/Icons/Plus.png';
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-header">
            <h3>{item.title}</h3>
            <img src={PlusIcon} />
          </div>
          <div className="accordion-content">
            {activeIndex === index && (
              <div>
                <p>{item.content}</p>
                <span>{item.link}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
