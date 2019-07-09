import React from 'react';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { FormStyleRedux, FormStyle, ButtonStyle } from '../../style.js';
import { login } from '../../services/authenticationService.js'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@material-ui/core'

const BottomText = styled(Button)`
  && {
    margin-bottom: 20px;
  }
`
const AuthForm = props => {
    const { pristine, submitting, bottomText, userNameValue, passwordValue, invalid, renderTextField } = props;
    return (
        <React.Fragment>
            <form style={FormStyleRedux} data-method="post" onSubmit={(e) => {
                e.preventDefault();
                props.dispatch(login({ username: userNameValue, password: passwordValue }));
            }}>
                <Field name="username" variant='outlined' component={renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />
                <Link to='/registration' style={{ textDecoration: 'none' }}>
                     <BottomText color='primary' size='small'>{bottomText}</BottomText>
                </Link>
                <button type="submit" style={ButtonStyle} disabled={invalid || submitting || pristine}  >
                    LOGIN
      </button>
            </form>
        </React.Fragment>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(mapDispatchToProps)(AuthForm) 