import React from 'react';
import Button from '@material-ui/core/Button';
import { FormStyle, FormWrapperStyle, ButtonStyle, FormDataStyle } from '../../style';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const AuthForm = props => {
  return (
    <React.Fragment>
      <form style={FormStyle} onSubmit={(e) => props.handleSubmit(e)} onReset={props.handleFormReset}>
        <div style={FormWrapperStyle}>
          {
            props.renderInputs()
          }
          <Button type='submit' style={ButtonStyle} onClick={(e) => props.onClickButton(e)} > Send </Button>
        </div>
      </form>
      <div style={FormStyle}>
        <TextField
          id="outlined-email"
          label="Email"
          value={props.formState.formControls['email'].value}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          helperText="Real time email"
          variant="outlined"
        />
        <TextField
          id="outlined-password"
          label="Password"
          value={props.formState.formControls['password'].value}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          helperText="Real time password"
          variant="outlined"
        />
      </div>
      <div style={FormDataStyle}>
        <TextField
          id="outlined-data"
          label="Data to be sent"
          style={{ width: 450 }}
          value={props.formState.data}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
      </div>
    </React.Fragment>
  );
}

AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFormReset: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
  renderInputs: PropTypes.func.isRequired
}

export default AuthForm;