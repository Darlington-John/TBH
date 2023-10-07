import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Sliders.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import NorthwesternImg from './../../Assets/Images/Northwestern.svg';
import BinghamtonImg from './../../Assets/Images/Binghamton.svg';
import BostonCollegeImg from './../../Assets/Images/BostonCollege.svg';
import DrexelImg from './../../Assets/Images/Drexel.svg';
import GeorgeWashingtonImg from './../../Assets/Images/GeorgeWashington.svg';
import UcDavisImg from './../../Assets/Images/UcDavis.svg';
import UcsdImg from './../../Assets/Images/Ucsd.svg';
import WashingtonLouisImg from './../../Assets/Images/WashingtonLouis.svg';
import WilliamsImg from './../../Assets/Images/Williams.svg';
import ScrippsCollegeImg from './../../Assets/Images/ScrippsCollege.png';
const Schools = (props) => {
  return (
    <div className="SchoolsContainer">
      <div className="TrustedContainer">
        {props.TrustedText && (
          <p className="TrustedText">{props.TrustedText}</p>
        )}
        {props.ArrowDown && <img className="ArrowDown" src={props.ArrowDown} />}
      </div>
      <div className="SchoolSliderContainer">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay]}
          slidesPerView={5}
        >
          <SwiperSlide>
            <SchoolSlide SchoolLogo={NorthwesternImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={BostonCollegeImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={BinghamtonImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={DrexelImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={WilliamsImg} />
          </SwiperSlide>

          <SwiperSlide>
            <SchoolSlide SchoolLogo={WashingtonLouisImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={UcsdImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={UcDavisImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={GeorgeWashingtonImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={ScrippsCollegeImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const SchoolsResponsive = (props) => {
  return (
    <div className="SchoolsContainerResponsive">
      {props.TrustedText && <p className="TrustedText">{props.TrustedText}</p>}

      <div className="SchoolSliderContainer">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay]}
          slidesPerView={1}
        >
          <SwiperSlide>
            <SchoolSlide SchoolLogo={NorthwesternImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={BostonCollegeImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={BinghamtonImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={DrexelImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={WilliamsImg} />
          </SwiperSlide>

          <SwiperSlide>
            <SchoolSlide SchoolLogo={WashingtonLouisImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={UcsdImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={UcDavisImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={GeorgeWashingtonImg} />
          </SwiperSlide>
          <SwiperSlide>
            <SchoolSlide SchoolLogo={ScrippsCollegeImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const SchoolSlide = (props) => {
  return <img src={props.SchoolLogo} className="SchoolLogo" />;
};

export default Schools;
