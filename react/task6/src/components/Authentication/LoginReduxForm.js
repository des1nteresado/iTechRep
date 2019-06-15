import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import validateEmail from '../../validEmail';
import AuthFormReduxForm from '../../views/Authentication/AuthFormReduxForm';


const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (values.password && !(values.password.length >= 6)) {

    errors.password = 'Too short'
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

let LoginReduxForm = props => {
  const { handleSubmit, pristine, submitting, emailValue, passwordValue, invalid } = props;
  return (
    <AuthFormReduxForm
      renderTextField={renderTextField}
      handleSubmit={handleSubmit}
      emailValue={emailValue}
      passwordValue={passwordValue}
      pristine={pristine}
      submitting={submitting}
      invalid={invalid}
    />
  )
}

LoginReduxForm = reduxForm({
  form: 'loginReduxForm',
  validate,
})(LoginReduxForm);

const selector = formValueSelector('loginReduxForm')
LoginReduxForm = connect(state => {
  const emailValue = selector(state, 'email')
  const passwordValue = selector(state, 'password')
  return {
    emailValue,
    passwordValue
  }
})(LoginReduxForm)

export default LoginReduxForm;