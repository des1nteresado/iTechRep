import React from 'react';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import { FormStyleRedux, FormStyle, ButtonStyle } from '../../style.js';
import { login } from '../../services/authenticationService.js'
import { connect } from 'react-redux';

const AuthForm = props => {
    const { pristine, submitting, userNameValue, passwordValue, invalid, renderTextField } = props;
    return (
        <React.Fragment>
            <form style={FormStyleRedux} data-method="post" onSubmit={(e) => {
                console.log({ username: userNameValue, password: passwordValue });
                e.preventDefault();
                props.dispatch(login(userNameValue, passwordValue));
            }}>
                <Field name="username" variant='outlined' component={renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />

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