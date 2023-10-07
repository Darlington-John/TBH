import React from 'react';
import Navbar from './../../Components/Navbar/Navbar';
import { LoginSignUpCard } from '../../Components/Cards/Cards';

const SignUpPage = () => {
  return (
    <div>
      <LoginSignUpCard
        AccountHeader="Create Account"
        SegmentButton=" "
        NameInput="First name*"
        Phone="Phone*"
        SignInBtn=" "
        AcceptTerms=" "
      />
    </div>
  );
};

export default SignUpPage;
