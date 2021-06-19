import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../Firebase/firebase.utils";
import { googleSignInStart } from "../../Redux/User/user.actions";
import CustomButton from "../CustomButton/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email,password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: '', password: '' });

    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} inGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart())
})

export default connect(null,mapDispatchToProps)(SignIn);
