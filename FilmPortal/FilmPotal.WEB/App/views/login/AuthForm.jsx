import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { FormStyleRedux, FormStyle, ButtonStyle } from '../../style.js';
import authSubmit from '../../services/authenticationService.js'

const AuthForm = props => {
    const { pristine, submitting, userNameValue, passwordValue, invalid, renderTextField } = props;
    return (
        <React.Fragment>
            <form style={FormStyleRedux} onSubmit={() => authSubmit({ username: userNameValue, password: passwordValue })}>
                <Field name="username" variant='outlined' component={renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />

                <button type="submit" style={ButtonStyle} disabled={invalid || submitting || pristine}  >
                    SEND
      </button>
            </form>
        </React.Fragment>
    );
};

AuthForm.propTypes = {
    renderTextField: PropTypes.func.isRequired
}

export default AuthForm;