
const RegisterValidate = values => {
    const errors = {}
    if (!values.fullname) {
        errors.fullname = 'Enter the full name'
    } else if (values.fullname.length > 25) {
        errors.fullname = 'Full name must be 15 characters or less'
    }
    if (!values.uname) {
        errors.uname = 'Enter the username'
    } else if (values.uname.length > 15) {
        errors.uname = 'Username must be 15 characters or less'
    }
    if (!values.upass) {
        errors.upass = 'Enter the password'
    }
    if (!values.uconfirmpass) {
        errors.uconfirmpass = 'Enter the confirm password'
    }
    if (values.uconfirmpass !== values.upass) {
        errors.uconfirmpass = 'Password and confirm password not equal'
    }
    return errors
}

export default RegisterValidate;