import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import OverLay from '../../Components/OverLay/OverLay';
import BasicNeedsBody from './BasicNeedsBody';

const BasicNeedsPage = () => {
  return (
    <div>
      <Navbar />
      <OverLay />
      <BasicNeedsBody />
      <Footer />
    </div>
  );
};

export default BasicNeedsPage;
