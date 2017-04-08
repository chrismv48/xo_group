import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


export default class UserRegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userPassword: '',
            userEmail: '',
            isEmailValid: null,
            isPasswordValid: null
        }
    }

    onPasswordChange(event) {
        this.setState({userPassword: event.target.value});
    }

    onEmailChange(event) {
        this.setState({userEmail: event.target.value});
    }

    validateEmail() {
        let re = /\S+@\S+\.\S+/;
        this.setState({isEmailValid: re.test(this.state.userEmail)});
    }

    validatePassword() {
        let re = /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{6,25}$/;
        this.setState({isPasswordValid: re.test(this.state.userPassword)})
    }

    validateSubmission() {

        this.validateEmail();
        this.validatePassword();
        if (this.state.isEmailValid && this.state.isPasswordValid) {
            this.props.submitUserRegistration()
        }
    }

    render() {
        let {isEmailValid, isPasswordValid} = this.state;
        return (
            <div>
                <div className="form-input">
                    <FormGroup
                        validationState={isEmailValid ? "success" : isEmailValid === false ? "error" : null}>
                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl
                            type="email"
                            placeholder="jsmith@domain.com"
                            onChange={(e) => this.onEmailChange(e)}
                            onBlur={() => this.validateEmail()}
                        />
                        {isEmailValid === false ?
                            <HelpBlock>Please enter a valid email address</HelpBlock>
                            : null
                        }
                        <FormControl.Feedback/>
                    </FormGroup>
                </div>
                <div className="form-input">
                    <FormGroup
                        validationState={isPasswordValid ? "success" : isPasswordValid === false ? "error" : null}>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            onChange={(e) => this.onPasswordChange(e)}
                            onBlur={() => this.validatePassword()}
                        />
                        {isPasswordValid === false ?
                            <HelpBlock>
                                Password must be 6-25 characters long and contain at least one number and one
                                special character (!@#$%^&*)
                            </HelpBlock>
                            : null
                        }
                        <FormControl.Feedback/>
                    </FormGroup>
                </div>
                <Button
                    bsStyle="primary"
                    onClick={() => this.validateSubmission()}
                >
                    Submit
                </Button>
            </div>
        )
    }
}