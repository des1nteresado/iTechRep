import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import AuthForm from '../../views/login/AuthForm.jsx';
import { login, logout } from '../../services/authenticationService.js'
import Account from '../../components/Account.jsx'
import {validate} from './validLogin.js'

class Login extends React.Component {
    renderTextField = ({
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

    render() {
        const { pristine, submitting, userNameValue, passwordValue, invalid } = this.props;
        let isLogged = this.props.user.isLogged;
        return (
            <React.Fragment>
                {isLogged ?
                    <Account
                        user={this.props.user}
                        logout={this.props.logout} /> :
                    < AuthForm
                        renderTextField={this.renderTextField}
                        userNameValue={userNameValue}
                        passwordValue={passwordValue}
                        pristine={pristine}
                        submitting={submitting}
                        invalid={invalid}
                        bottomText="Don't have an account? Register"
                    />
                }
            </React.Fragment>
        )
    }
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

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
        logout: bindActionCreators(logout, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
