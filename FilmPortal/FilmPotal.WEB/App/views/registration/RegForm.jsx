import React from 'react';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import { FormStyleRedux, FormStyle, ButtonStyle } from '../../style.js';
import { connect } from 'react-redux';
import { registration } from '../../services/registrationService.js';

const RegForm = props => {
    const { pristine, submitting, userNameValue, passwordValue, invalid, renderTextField } = props;
    return (
        <React.Fragment>
            <form style={FormStyleRedux} data-method="post" onSubmit={(e) => {
                console.log({ username: userNameValue, password: passwordValue });
                e.preventDefault();
                props.dispatch(registration({ username: userNameValue, password: passwordValue }));
            }}>
                <Field name="username" variant='outlined' component={renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={renderTextField} label="Password" />
                <Field name="confirmPassword" type="password" variant='outlined' component={renderTextField} label="Confirm password" />

                <button type="submit" style={ButtonStyle} disabled={invalid || submitting || pristine}  >
                    REGISTRATION
      </button>
            </form>
        </React.Fragment>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        registration: bindActionCreators(registration, dispatch)
    }
}

export default connect(mapDispatchToProps)(RegForm) 