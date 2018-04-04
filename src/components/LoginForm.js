import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import PropTypes from 'prop-types';
import InputField from './InputField';
import {Link} from "react-router-dom";

class LoginForm extends React.Component {

    static propTypes = {
        submitCase: PropTypes.func,
    }

    submitCase = (values) => {
        console.log("submitCase values: ", values);
        if (!['john', 'paul', 'george', 'ringo'].includes(values.uname)) {
            throw new SubmissionError({
                uname: 'User does not exist',
                _error: 'Login failed!'
            });
        } else if (values.upass !== '123') {
            throw new SubmissionError({
                upass: 'Wrong password',
                _error: 'Login failed!'
            });
        } else {
            // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            window.alert("Login successfully. Please wait redirect..!");
            this.props.history.push("/dashboard");
        }
    }

    render(){
        const { error, handleSubmit, submitting } = this.props;
        const handleSubmitForm = (values) => {
            this.submitCase(values);
        };
        return(
            <div className="container">
                <div className="col-md-offset-3 col-md-6">
                    <form className='form' onSubmit={handleSubmit(handleSubmitForm)}>
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
                        <div className="row">
                            <div className="col-sm-6">
                            <button type="submit" disabled={submitting} className="btn btn-default"> Save </button>
                            </div>
                            <div className="col-sm-6">
                                <p>No account - <Link to="/register">Register</Link></p>
                            </div>
                        </div>
                        <div className="col-md-offset-2 col-md-8" align="center">
                            {error && <div class="alert alert-danger"><strong>{error}</strong></div>}
                        </div>
                </form>
                <br /><br />
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
}) (LoginForm);
