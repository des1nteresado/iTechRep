import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import validateEmail from '../../validEmail.js';
import AuthForm from '../../views/login/AuthForm.jsx';


const validate = values => {
    const errors = {}
    const requiredFields = [
        'username',
        'password'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if ((values.password && !(values.password.length >= 4)) || (values.username && !(values.username.length >= 3))) {

        errors.password = 'Too short'
        errors.username = 'Too short'
    }
    return errors
}

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )

let Login = props => {
    const { pristine, submitting, userNameValue, passwordValue, invalid } = props;
    return (
        <AuthForm
            renderTextField={renderTextField}
            userNameValue={userNameValue}
            passwordValue={passwordValue}
            pristine={pristine}
            submitting={submitting}
            invalid={invalid}
        />
    )
}

Login = reduxForm({
    form: 'loginReduxForm',
    validate,
})(Login);

export default Login;