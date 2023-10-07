import React from 'react';
import Navbar from './../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ChildrenPageBody from './ChildrenPageBody/ChildrenPageBody';
import OverLay from '../../Components/OverLay/OverLay';

const ChildrenPage = (props) => {
  return (
    <div>
      <Navbar />
      <OverLay />
      <ChildrenPageBody />
      <Footer />
    </div>
  );
};

export default ChildrenPage;
