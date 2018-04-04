import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import PropTypes from 'prop-types';
import InputField from '../components/InputField';
import {Link} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Login extends React.Component {

    static propTypes = {
        submitCase: PropTypes.func,
    }

    submitCase = (values) => {
        if (!['sample', 'test', 'demo'].includes(values.uname)) {
            throw new SubmissionError({_error: 'User does not exist'});
        } else if (values.upass !== '123') {
            throw new SubmissionError({_error: 'Wrong password'});
        } else {
            localStorage.setItem('user', values.uname);
            confirmAlert({
                title: 'Login',
                message: 'Wow! Your login success..!',
                buttons: [{
                    label: 'Go to dashboard',
                    onClick: () => {
                        this.props.history.push("/dashboard");
                    }
                }]
            });
        }
    }

    componentWillMount() {
        const user = localStorage.getItem('user');
        if(user !== null) {
            confirmAlert({
                title: 'Login',
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
    form: 'userform',
}) (Login);
