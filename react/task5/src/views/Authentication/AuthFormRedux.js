import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FormStyle, FormWrapperStyle, ButtonStyle } from '../../style';
import PropTypes from 'prop-types'
import store from '../../store';

const AuthFormRedux = props => {
  return (
    <React.Fragment>
      <form style={FormStyle} onSubmit={(e) => props.handleSubmit(e)}>
        <div style={FormWrapperStyle}>
          {
            props.renderInputs()
          }
          <Link to={{ pathname: `${process.env.PUBLIC_URL}/login-redux/success`, state: { store: store.getState()}}} style={{ textDecoration: 'none' }}>
            <Button type='submit' style={ButtonStyle} onClick={(e) => props.onClickButton(e)} > Send </Button>
          </Link>
        </div>
      </form>
    </React.Fragment>
  );
};

AuthFormRedux.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
  renderInputs: PropTypes.func.isRequired
}

export default AuthFormRedux;