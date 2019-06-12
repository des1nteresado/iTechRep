import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormStyle, FormWrapperStyle, ButtonStyle, TextStyle } from '../../views/Counter/style';
import PropTypes from 'prop-types'

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
          <div style={TextStyle}>
            <Typography variant="h5">
              Email: {props.formState.formControls['email'].value}
            </Typography>
            <Typography variant="h5">
              Password: {props.formState.formControls['password'].value}
            </Typography>
            <Typography variant="h5">
              Data to be sent:
            </Typography>
            <Typography variant="h5">
              {props.formState.data}
            </Typography>
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