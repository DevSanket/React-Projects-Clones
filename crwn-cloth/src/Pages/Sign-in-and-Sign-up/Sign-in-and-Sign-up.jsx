import React from 'react';
import SignIn from '../../components/Sign In/sign-in';
import SignUp from '../../components/Sign up/sign-up';
import './Sign-in-and-Sign-up.scss';

const SignInAndSignUpPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp />
        </div>
     );
}
 
export default SignInAndSignUpPage;