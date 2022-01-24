import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/Custom-button";
import { auth,signInWithGoole } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit =async  (event) => {
    event.preventDefault();

const {email,password}= this.state;

try {
  await auth.signInWithEmailAndPassword(email,password);

  this.state({ email: "", password: "" });

}catch (error){
console.log(error);

}




  };
  // we dont write separate function for email and password we set the name dynamic
  handleChang = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChang}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChang}
            label="Password"
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton onClick={signInWithGoole} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
