import React from 'react';
import {Field, reduxForm} from 'redux-form';
import InputField from './InputField';
import RegisterFormSubmit from './ReduxFormActions/RegisterFormSubmit';
import {Link} from "react-router-dom";

const RegisterForm = props => {
    const { error, handleSubmit, submitting } = props;
    return(
        <form className='form' onSubmit={handleSubmit(RegisterFormSubmit)}>
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
    );
}


export default reduxForm({
    form: 'register',
}) (RegisterForm);
