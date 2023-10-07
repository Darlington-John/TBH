import React from 'react';
import HomePageBody from './HomePageBody/HomePageBody';
import Navbar from '../../Components/Navbar/Navbar';

import OverLay from '../../Components/OverLay/OverLay';
const HomePage = () => {
  return (
    <div>
      <OverLay />
      <Navbar />
      <HomePageBody />
    </div>
  );
};

export default HomePage;
