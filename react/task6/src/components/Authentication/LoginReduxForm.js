import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import validateEmail from '../../validEmail';
import Button from '@material-ui/core/Button';
import { FormStyle, FormWrapperStyle, ButtonStyle, TextStyle } from '../../views/Counter/style';
import Typography from '@material-ui/core/Typography';

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
  if (values.password != null && !(values.password.length >= 6)) {

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
  const { handleSubmit, pristine, submitting, emailValue, passwordValue } = props;
  console.log(selector)
  return (
    <form style={FormStyle} onSubmit={handleSubmit}>
      <div style={FormWrapperStyle}>
        <Field name="email" component={renderTextField} label="Email" />
        <Field name="password" component={renderTextField} label="Password" />
        <Button type='submit' style={ButtonStyle} disabled={pristine || submitting}> Submit </Button>
      </div>
      <div style={TextStyle}>
        <Typography variant="h5">
          Email: {emailValue}
        </Typography>
        <Typography variant="h5">
          Password: {passwordValue}
        </Typography>
      </div>
    </form>
  )
}

LoginReduxForm = reduxForm({
  form: 'loginReduxForm', // a unique identifier for this form
  validate,
})(LoginReduxForm);

// Decorate with connect to read form values
const selector = formValueSelector('loginReduxForm') // <-- same as form name
LoginReduxForm = connect(state => {
  // can select values individually
  const emailValue = selector(state, 'email')
  const passwordValue = selector(state, 'password')
  return {
    emailValue,
    passwordValue
  }
})(LoginReduxForm)

export default LoginReduxForm;