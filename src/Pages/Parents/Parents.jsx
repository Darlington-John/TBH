import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ParentPageBody from './ParentsPageBody';
import OverLay from '../../Components/OverLay/OverLay';

const ParentPage = () => {
  return (
    <div>
      <Navbar />
      <OverLay />
      <ParentPageBody />
      <Footer />
    </div>
  );
};

export default ParentPage;
