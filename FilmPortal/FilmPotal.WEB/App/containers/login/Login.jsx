import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import AuthForm from '../../views/login/AuthForm.jsx';
import { login, logout, showLoginForm, inputLogin, inputPassword } from '../../services/authenticationService.js'

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
    if ((values.password && !(values.password.length >= 4))) {

        errors.password = 'Too short'
    }
    if (values.username && !(values.username.length >= 3)) {
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
            onBottomTextClick={() => to('register')}
            bottomText="Don't have an account? Register"
        />
    )
}

Login = reduxForm({
    form: 'loginReduxForm',
    validate,
})(Login);

const selector = formValueSelector('loginReduxForm')
Login = connect(state => {
    const userNameValue = selector(state, 'username')
    const passwordValue = selector(state, 'password')
    return {
        userNameValue,
        passwordValue
    }
})(Login)

export default Login;
