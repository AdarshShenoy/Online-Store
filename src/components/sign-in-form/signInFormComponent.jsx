import React, { useState } from 'react'
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebaseUtils';
import FormInput from '../form-input/formInputComponent';
import './signInFormStyles.scss'
import Button from '../button/buttonComponent';

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email ,password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
            
        }catch (error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect Password, Try Again')
                    break;

                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                
                default:
                    console.log(error);    
            }
            
            
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };
  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign Up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label={"Email"} required type="email" onChange={handleChange} name='email' value={email}/>
            <FormInput label={"Password"} required type="password" onChange={handleChange} name='password' value={password}/>
            <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button type= 'button' buttonType = 'google' onClick = {signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
        
    </div>
  )
}

export default SignInForm