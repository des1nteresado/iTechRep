import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import RegForm from '../../views/registration/RegForm.jsx';
import { validate } from './validData.js'

class Registrar extends React.Component {

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
        return (
            <React.Fragment>
                < RegForm
                    renderTextField={this.renderTextField}
                    userNameValue={userNameValue}
                    passwordValue={passwordValue}
                    pristine={pristine}
                    submitting={submitting}
                    invalid={invalid}
                />
            </React.Fragment>
        )
    }
}

Registrar = reduxForm({
    form: 'loginReduxForm',
    validate,
})(Registrar);

const selector = formValueSelector('loginReduxForm')
Registrar = connect(state => {
    const userNameValue = selector(state, 'username')
    const passwordValue = selector(state, 'password')
    return {
        userNameValue,
        passwordValue
    }
})(Registrar)

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Registrar)
