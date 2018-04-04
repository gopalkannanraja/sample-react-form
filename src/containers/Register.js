import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import PropTypes from 'prop-types';
import InputField from '../components/InputField';
import {Link} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



class Register extends Component {

    static propTypes = {
        submitCase: PropTypes.func,
    }

    componentWillMount() {
        const user = localStorage.getItem('user');
        if(user !== null) {
            confirmAlert({
                title: 'Register',
                message: 'Your are already logined..',
                buttons: [{
                    label: 'Go to dashboard',
                    onClick: () => {
                        this.props.history.push("/dashboard");
                    }
                }]
            });
        }
    }

    submitCase = (values) => {
        if (!values.fullname) {
            throw new SubmissionError({_error: 'Enter the full name'});
        } else if (values.fullname.length > 25) {
            throw new SubmissionError({_error: 'Full name must be 15 characters or less'});
        }
        if (!values.uname) {
            throw new SubmissionError({_error: 'Enter the username'});
        } else if (values.uname.length > 15) {
            throw new SubmissionError({_error: 'Username must be 15 characters or less'});
        }
        if (!values.upass) {
            throw new SubmissionError({_error: 'Enter the password'});
        }
        if (!values.uconfirmpass) {
            throw new SubmissionError({_error: 'Enter the confirm password'});
        }
        if (values.uconfirmpass !== values.upass) {
            throw new SubmissionError({_error: 'Password and confirm password not equal'});
        }
        localStorage.setItem('user', values.uname);
        confirmAlert({
            title: 'Register',
            message: 'Wow! Your register success..!',
            buttons: [{
                label: 'Go to dashboard',
                onClick: () => {
                    this.props.history.push("/dashboard");
                }
            }]
        });
    }

    render() {
        const { error, handleSubmit, submitting } = this.props;
        const handleSubmitForm = (values) => {
            this.submitCase(values);
        };
        return(
            <div className="container">
                <div className="col-md-offset-3 col-md-6">
                    <form className='form' onSubmit={handleSubmit(handleSubmitForm)}>
                        <Field 
                            name="fullname"
                            component={InputField}
                            type="text"
                            placeholder="Enter the Full name"
                            label="Full Name"
                        /><br />
                        <Field 
                            name="uname"
                            component={InputField}
                            type="text"
                            placeholder="Enter the username"
                            label="Username"
                        /><br />
                        <Field 
                            name="upass"
                            component={InputField}
                            type="password"
                            label="Password"
                            placeholder="*************"
                        /><br />
                        <Field 
                            name="uconfirmpass"
                            component={InputField}
                            type="password"
                            label="Confirm Password"
                            placeholder="*************"
                        /><br />
                        <div className="row">
                            <div className="col-sm-6">
                            <button type="submit" className="btn btn-default" disabled={submitting}>Register</button>
                            </div>
                            <div className="col-sm-6">
                                <p>Already have an account - <Link to="/login">Sign in</Link></p>
                            </div>
                        </div>
                        <div className="col-md-offset-2 col-md-8" align="center">
                            {error && <div class="alert alert-danger"><strong>{error}</strong></div>}
                        </div>
                    </form>
                   <br />
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'userform',
}) (Register);



