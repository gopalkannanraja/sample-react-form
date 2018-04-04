
const LoginValidate = values => {
    console.log('LoginValidate: ', values);
    const errors = {}
    if (!values.uname) {
        errors.uname = 'Enter the username'
    } else if (values.uname.length > 15) {
        errors.uname = 'Username must be 15 characters or less'
    }
    if (!values.upass) {
        errors.upass = 'Enter the password'
    }
    return errors;
}

export default LoginValidate;