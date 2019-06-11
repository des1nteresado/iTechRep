import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormStyle, FormButStyle, FormWrapperStyle } from '../Counter/style'
import Button from '@material-ui/core/Button';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default class Login extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        id: 'outlined-email-input',
        value: '',
        type: 'email',
        label: 'Email',
        name: 'email',
        margin: 'normal',
        variant: 'outlined',
        autoComplete: 'email',
        helperText: '',
        error: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        id: 'outlined-password-input',
        value: '',
        type: 'password',
        label: 'Password',
        name: 'password',
        margin: 'normal',
        variant: 'outlined',
        autoComplete: "current-password",
        helperText: '',
        error: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = e.target.value;
    control.error = !this.validateControl(control.value, control.validation);

    if (control.error && control.type === 'email') {
      control.helperText = 'Invalid email adress.';
    } else if (control.error && control.type === 'password') {
      control.helperText = 'Min. pass length 6 characters.';
    }
    else {
      control.helperText = '';
    }

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = !formControls[name].error && isFormValid;
    })

    this.setState({
      formControls, isFormValid
    });
  }

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <TextField
          key={controlName + index}
          type={control.type}
          id={control.id}
          value={control.value}
          label={control.label}
          name={control.name}
          margin={control.margin}
          variant={control.variant}
          autoComplete={control.autoComplete}
          helperText={control.helperText}
          error={control.error}
          onChange={e => this.onChangeHandler(e, controlName)}
        />
      )
    });
  }

  render() {
    return (
      <form style={FormStyle} onSubmit={this.submitHandler}>
        <div style={FormWrapperStyle}>
          {
            this.renderInputs()
          }
          <Button style={FormButStyle} variant="contained" onClick={this.loginHandler} disabled={!this.state.isFormValid} > Send </Button>
        </div>
      </form>
    )
  }
}