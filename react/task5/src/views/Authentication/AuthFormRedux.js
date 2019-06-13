import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FormStyle, FormWrapperStyle, ButtonStyle } from '../Counter/style';
import PropTypes from 'prop-types'

const AuthFormRedux = props => {
  return (
    <React.Fragment>
      <form data-method='post' action='/login-redux/success' style={FormStyle} onSubmit={(e) => props.handleSubmit(e)}>
        <div style={FormWrapperStyle}>
          {
            props.renderInputs()
          }
            <Button type='submit' style={ButtonStyle} onClick={(e) => props.onClickButton(e)} > Send </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

AuthFormRedux.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
  renderInputs: PropTypes.func.isRequired
}

export default AuthFormRedux;