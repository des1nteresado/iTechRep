import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { FormStyleRedux, FormStyle, ButtonStyle } from '../../style.js';

const AuthForm = props => {
    const { handleSubmit, pristine, submitting, emailValue, passwordValue, invalid, renderTextField } = props;
    return (
        <React.Fragment>
            <form style={FormStyleRedux} onSubmit={handleSubmit}>
                <Field name="email" variant='outlined' component={renderTextField} label="Email" />
                <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />
                <Link to={{
                    pathname: `/login-redux-form/success`, state: {
                        store: {
                            email:
                                emailValue, password: passwordValue
                        }
                    }
                }} style={{ textDecoration: 'none' }}>
                    <button type="submit" style={ButtonStyle} disabled={invalid || submitting || pristine}  >
                        SEND
      </button>
                </Link>
            </form>
            <div style={FormStyle}>
                <TextField
                    id="outlined-email"
                    label="Email"
                    value={emailValue}
                    margin="normal"
                    InputProps={{
                        readOnly: true
                    }}
                    helperText="Real time email"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password"
                    label="Password"
                    value={passwordValue}
                    margin="normal"
                    InputProps={{
                        readOnly: true
                    }}
                    helperText="Real time password"
                    variant="outlined"
                />
            </div>
        </React.Fragment>
    );
};

AuthForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    renderInputs: PropTypes.func.isRequired,
    renderTextField: PropTypes.func.isRequired
}

export default AuthForm;