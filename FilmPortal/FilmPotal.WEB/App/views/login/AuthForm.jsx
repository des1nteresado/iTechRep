import React from 'react';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { login } from '../../services/authenticationService.js'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';

const BottomText = styled(Button)`
  && {
    margin-bottom: 10px;
    font-size: 13px;
  }
`
const AuthForm = props => {
    return (
        <Paper className="paper" >
            <form className="loginForm" data-method="post" onSubmit={(e) => {
                e.preventDefault();
                props.dispatch(login({ username: props.userNameValue, password: props.passwordValue }));
            }}>
                <Field name="username" variant='outlined' component={props.renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={props.renderTextField} label="Password" />
                <Link to='/registration' style={{ textDecoration: 'none' }}>
                    <BottomText color='primary' >{props.bottomText}</BottomText>
                </Link>
                <button type="submit" className="loginButton" disabled={props.invalid || props.submitting || props.pristine}>LOGIN</button>
            </form>
        </Paper>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(mapDispatchToProps)(AuthForm) 