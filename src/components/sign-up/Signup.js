import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/Custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';



class SignUp extends React.Component {
    constructor() {
      super();
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    }

    handleSubmit = event =>{

    }  



    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };



    render(){

    }

}


export default SignUp;