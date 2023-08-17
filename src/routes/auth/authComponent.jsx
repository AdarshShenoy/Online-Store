import React from 'react';
import SignUpForm from '../../components/sign-up-form/signUpFormComponent.jsx';
import SignInForm from '../../components/sign-in-form/signInFormComponent.jsx';
import './authStyles.scss';


const Authentication = () => {
    

  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
        
        
    </div>
  )
}

export default Authentication;