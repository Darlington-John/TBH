import React from 'react';
import Navbar from './../../Components/Navbar/Navbar';
import OverLay from './../../Components/OverLay/OverLay';
import Footer from '../../Components/Footer/Footer';
import HigherEdBody from './HigherEdBody';

const HigherEdPage = () => {
  return (
    <div>
      <Navbar />
      <OverLay />
      <HigherEdBody />

      <Footer />
    </div>
  );
};

export default HigherEdPage;
