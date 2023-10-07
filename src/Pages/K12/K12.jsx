import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import K12PageBody from './K12PageBody';
import OverLay from '../../Components/OverLay/OverLay';

const K12Page = () => {
  return (
    <div>
      <Navbar />
      <OverLay />
      <K12PageBody />
      <Footer />
    </div>
  );
};

export default K12Page;
