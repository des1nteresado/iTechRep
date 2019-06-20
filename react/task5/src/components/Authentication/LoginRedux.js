import React from 'react';
import validateEmail from '../../validEmail';
import TextField from '@material-ui/core/TextField';
import AuthFormRedux from '../../views/Authentication/AuthFormRedux'
import { connect } from 'react-redux';


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
    // store.dispatch({ type: 'SET_INPUTS_ERROR', formControls: formControls });
    this.props.setInputsError(formControls);
  }

  validateForm = (e) => {
    let isValidForm = true;
    const formControls = { ...this.props.formControls };

    Object.keys(this.props.formControls).forEach((controlName) => {
      let control = { ...this.props.formControls[controlName] };
      this.setInputsError(control, formControls, controlName);
      isValidForm &= !control.error;
    });

    if (!isValidForm)
      e.preventDefault();

    return isValidForm;
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...this.props.formControls };
    const control = { ...formControls[controlName] };
    control.value = e.target.value;
    this.setInputsError(control, formControls, controlName);

  }

  onClickButton = (e) => {
    return this.validateForm(e);
  }

  renderInputs = () => {
    return Object.keys(this.props.formControls).map((controlName, index) => {
      const control = this.props.formControls[controlName];
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
    // store.dispatch({ type: 'SET_DATA', data: { email: this.props.formControls['email'].value, password: this.props.formControls['password'].value } });
    this.props.setData({ email: this.props.formControls['email'].value, password: this.props.formControls['password'].value });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <AuthFormRedux
          formState={this.props}
          handleSubmit={this.handleSubmit}
          handleFormReset={this.handleFormReset}
          onClickButton={this.onClickButton}
          renderInputs={this.renderInputs}
        />
      </React.Fragment>
    );
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setInputsError: (formControls) => {
      dispatch({ type: 'SET_INPUTS_ERROR', formControls: formControls });
    },
    setData: (data) => {
      dispatch({ type: 'SET_DATA', data: data });
    },
  }
};

const mapStateToProps = state => ({ data: state.data, formControls: state.formControls });
export default connect(mapStateToProps, mapDispatchToProps)(LoginRedux);