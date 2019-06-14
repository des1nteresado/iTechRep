import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import validateEmail from '../../validEmail';
import { FormStyleRedux, ButtonStyle, TextStyle } from '../../views/Counter/style';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


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
  const { handleSubmit, pristine, submitting, emailValue, passwordValue, invalid } = props;
  return (
    <React.Fragment>
      <form style={FormStyleRedux} onSubmit={handleSubmit}>
        <Field name="email" variant='outlined' component={renderTextField} label="Email" />
        <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />
        <Link to={{
          pathname: '/login-redux-form/success', state: {
            store: {
              email:
                emailValue, password: passwordValue
            }
          }
        }} style={{ textDecoration: 'none' }}>
          <button type="submit" style={ButtonStyle} disabled={invalid || submitting || pristine}  >
            SEND
        </button>
        </Link>
      </form>
      <div style={TextStyle}>
        <Typography variant="h5">
          Email: {emailValue}
        </Typography>
        <Typography variant="h5">
          Password: {passwordValue}
        </Typography>
      </div>
    </React.Fragment>
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