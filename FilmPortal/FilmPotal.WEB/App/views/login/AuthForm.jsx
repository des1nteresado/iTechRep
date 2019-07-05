import React from 'react';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import { FormStyleRedux, FormStyle, ButtonStyle } from '../../style.js';
import authSubmit from '../../services/authenticationService.js'
import { connect } from 'react-redux';

const AuthForm = props => {
    const { pristine, submitting, userNameValue, passwordValue, invalid, renderTextField } = props;
    return (
        <React.Fragment>
            <form style={FormStyleRedux} data-method="post" onSubmit={(e) => {
                console.log({ username: userNameValue, password: passwordValue });
                props.dispatch(authSubmit({ username: userNameValue, password: passwordValue }));
                e.preventDefault();
            }}>
                <Field name="username" variant='outlined' component={renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />

                <button type="submit" style={ButtonStyle} disabled={invalid || submitting || pristine}  >
                    SEND
      </button>
            </form>
        </React.Fragment>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        authSubmit: bindActionCreators(authSubmit, dispatch)
    }
}

export default connect(mapDispatchToProps)(AuthForm) 