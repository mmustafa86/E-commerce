import React from 'react';
import Sigin from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/Signup'
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <Sigin/>
           <SignUp/>
        </div>
    )
}

export default SignInAndSignUp;
