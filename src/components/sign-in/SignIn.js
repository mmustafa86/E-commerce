import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from '../custom-button/Custom-button'
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state({ email: "", password: "" });
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
         
          <CustomButton type="submit"  >Sign in </CustomButton>
          
        </form>
      </div>
    );
  }
}
export default SignIn;
