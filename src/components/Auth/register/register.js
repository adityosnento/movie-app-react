import React, { Component } from 'react';
import '../register/register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {registration} from '../../../store/actions/auth'



const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);


class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      Redirect: false,
      formErrors: {
        name:"",
        email:"",
        password:"",
        password_confirmation:""
      }
    }
  }

    handleSubmit = e => {
      e.preventDefault();
      console.log("test");
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
      this.props.registration(newUser)
    }

    handleChange = e => {
      const {name, value} = e.target;
      let formErrors = {...this.state.formErrors};
      this.setState ({
        [e.target.id] : e.target.value
      })


      switch (name) {
        case 'name' :
          formErrors.name = value.length < 3 ? 'minimum 3 characters required': "";
        break;
        
        case 'email' :
          formErrors.email = emailRegex.test(value) ? '': 'invalid email addres';
        break;
        
        case 'password' :
          formErrors.password = value.length < 6 ? 'minimum 6 characters required': "";
        break;

        case 'password_confirmation' :
          formErrors.password_confirmation = value.length < 6 ? 'minimum 6 characters required': "";
        break;
        default:
        break;
      }


      this.setState({
        formErrors
      })
    }



  render(){
    
    const {formErrors} = this.state;
   
    return (
        <div className="wrapper">
          <div className="form-wrapper">
          <FontAwesomeIcon
                className="close"
                icon='window-close' 
                onClick={this.props.clickModal}
          /> 
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="firstName">
                <label>First Name</label>
                  <FontAwesomeIcon
                  className="iconawesome"
                  icon='user' 
                  />
                  <input className="valid" type="text" placeholder="First Name" id="name" required onChange={this.handleChange}  name="name" />
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>
          
          <div className="email">
            <label>Email</label>
                <FontAwesomeIcon
                  className="iconawesome"
                  icon='envelope' 
                  onClick={this.props.clickModal}
                /> 
            <input type="text" placeholder="Email" id="email" required onChange={this.handleChange} name="email" />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          
          <div className="password">
            <label>Password</label>
                <FontAwesomeIcon
                  className="iconawesome"
                  icon='lock' 
                />
            <input type="password" placeholder="Password" id="password" required onChange={this.handleChange} name="password" />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>

          <div className="password">
            <label>Password_Confirmation</label>
                <FontAwesomeIcon
                  className="iconawesome"
                  icon='lock' 
                />
            <input type="password" placeholder="Password" id="password_confirmation" required onChange={this.handleChange} name="password_confirmation" />
            {formErrors.password_confirmation.length > 0 && (
              <span className="errorMessage">{formErrors.password_confirmation}</span>
            )}
          </div>
          
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account? Go to 
            <a id={this.props.signin} href="/#" onClick={this.props.clickModal}>
            Sign In!
            </a>
            </small>
          </div>
        </form>
        </div>
      </div>
      
    );
  }
  
}

const mapStateToProps = state => ({
    register: state.register
})

export default connect (mapStateToProps, {registration}) (Registration);
