import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormStyle, FormWrapperStyle, ButtonStyle, TextStyle } from '../Counter/style'

function validateEmail(email) {
  let validStructure = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validStructure.test(String(email).toLowerCase());
};

export default class Login extends React.Component {
  initialState = {
    data: null,
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
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.setInputsError = this.setInputsError.bind(this);
    this.validateControl = this.validateControl.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.stringifyFormData = this.stringifyFormData.bind(this);
  }

  setInputsError = (control, formControls, controlName) => {
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
    this.setState({
      formControls
    });
  }

  validateControl = (value, validation) => {
    let isValid = true;

    if (!validation) {
      return true;
    }

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

  validateForm = (e) => {
    let isValidForm = true;
    const formControls = { ...this.state.formControls };

    Object.keys(this.state.formControls).forEach((controlName) => {
      let control = { ...this.state.formControls[controlName] };
      this.setInputsError(control, formControls, controlName);
      isValidForm &= !control.error;
    });

    if (!isValidForm)
      e.preventDefault();

    return isValidForm;
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = e.target.value;
    this.setInputsError(control, formControls, controlName);
  }

  onClickButton = (e) => {
    return this.validateForm(e);
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

  stringifyFormData = (sentData) => {
    const data = {};
    for (let key of sentData.keys()) {
      data[key] = sentData.get(key);
    }
    return JSON.stringify(data);
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    event.preventDefault();
    event.target.reset();
    this.setState({
      data: this.stringifyFormData(data)
    });
    console.log('Email: ' + this.state.formControls['email'].value + ' Password: ' + this.state.formControls['password'].value);
  }

  handleFormReset = (e) => {
    this.setState(() => this.initialState);
  }

  render() {
    return (
      <React.Fragment>
        <form style={FormStyle} onSubmit={(e) => this.handleSubmit(e)} onReset={this.handleFormReset}>
          <div style={FormWrapperStyle}>
            {
              this.renderInputs()
            }
            <Button type='submit' style={ButtonStyle} onClick={(e) => this.onClickButton(e)} > Send </Button>
          </div>
        </form>
        <div style={TextStyle}>
          <Typography variant="h5">
            Email: {this.state.formControls['email'].value}
          </Typography>
          <Typography variant="h5">
            Password: {this.state.formControls['password'].value}
          </Typography>
          <Typography variant="h5">
            Data to be sent:
          </Typography>
          <Typography variant="h5">
            {this.state.data}
          </Typography>
        </div>
      </React.Fragment>
    );
  };
};