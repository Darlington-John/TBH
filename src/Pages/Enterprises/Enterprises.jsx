import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import OverLay from '../../Components/OverLay/OverLay';
import EnterprisesBody from './EnterprisesBody';
const EnterprisesPage = () => {
  return (
    <div>
      <Navbar />
      <OverLay />
      <EnterprisesBody />
      <Footer />
    </div>
  );
};

export default EnterprisesPage;
