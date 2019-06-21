import React from 'react';
import validateEmail from '../../validEmail';
import TextField from '@material-ui/core/TextField';
import AuthFormRedux from '../../views/Authentication/AuthFormRedux'
import store from '../../store';

class LoginRedux extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateControl = this.validateControl.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
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
    const formControls = { ...store.getState().loginRedux.formControls };

    Object.keys(store.getState().loginRedux.formControls).forEach((controlName) => {
      let control = { ...store.getState().loginRedux.formControls[controlName] };
      store.dispatch({ type: 'SET_INPUTS_ERROR', control: control, formControls: formControls, controlName: controlName, validateControl: this.validateControl });
      isValidForm &= !control.error;
    });

    if (!isValidForm)
      e.preventDefault();

    return isValidForm;
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...store.getState().loginRedux.formControls };
    const control = { ...formControls[controlName] };
    control.value = e.target.value;
    store.dispatch({ type: 'SET_INPUTS_ERROR', control: control, formControls: formControls, controlName: controlName, validateControl: this.validateControl });
  }

  onClickButton = (e) => {
    return this.validateForm(e);
  }

  renderInputs = () => {
    return Object.keys(store.getState().loginRedux.formControls).map((controlName, index) => {
      const control = store.getState().loginRedux.formControls[controlName];
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

  handleSubmit(event) {
    store.dispatch({ type: 'SET_DATA', data: { email: store.getState().loginRedux.formControls['email'].value, password: store.getState().loginRedux.formControls['password'].value } });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <AuthFormRedux
          formState={store.getState().loginRedux}
          handleSubmit={this.handleSubmit}
          handleFormReset={this.handleFormReset}
          onClickButton={this.onClickButton}
          renderInputs={this.renderInputs}
        />
      </React.Fragment>
    );
  };
};

export default LoginRedux;