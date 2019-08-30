import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import RegForm from '../../views/registration/RegForm.jsx';
import { validate } from './validData.js'

class Register extends React.Component {
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
        return (
            <React.Fragment>
                < RegForm
                    renderTextField={this.renderTextField}
                    userNameValue={this.props.userNameValue}
                    passwordValue={this.props.passwordValue}
                    pristine={this.props.pristine}
                    submitting={this.props.submitting}
                    invalid={this.props.invalid}
                />
            </React.Fragment>
        )
    }
}

Register = reduxForm({
    form: 'loginReduxForm',
    validate,
})(Register);

const selector = formValueSelector('loginReduxForm')
Register = connect(state => {
    const userNameValue = selector(state, 'username')
    const passwordValue = selector(state, 'password')
    return {
        userNameValue,
        passwordValue
    }
})(Register)

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register)
