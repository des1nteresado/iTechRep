import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import AuthForm from '../../views/login/AuthForm.jsx';
import { login, logout, getUser } from '../../services/userService.js'
import Account from '../../components/Account.jsx'
import { validate } from './validLogin.js'
import { deleteComment } from '../../services/filmService.js'

class Login extends React.Component {
    componentDidMount() {
        if (this.props.user.isLogged) {
            this.props.getUser(this.props.user.userId);
        }
    }

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
        let isLogged = this.props.user.isLogged;
        return (
            <React.Fragment>
                {isLogged ?
                    <Account
                        user={this.props.user}
                        logout={this.props.logout}
                        deleteComment={this.props.deleteComment}
                    /> :
                    < AuthForm
                        renderTextField={this.renderTextField}
                        userNameValue={this.props.userNameValue}
                        passwordValue={this.props.passwordValue}
                        pristine={this.props.pristine}
                        submitting={this.props.submitting}
                        invalid={this.props.invalid}
                        user={this.props.user}
                        login={this.props.login}
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
        getUser: bindActionCreators(getUser, dispatch),
        deleteComment: bindActionCreators(deleteComment, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
