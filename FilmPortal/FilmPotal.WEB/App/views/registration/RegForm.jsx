import React from 'react';
import { bindActionCreators } from 'redux';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { registration } from '../../services/registrationService.js';

const RegForm = props => {
    return (
        <Paper className="paper" >
            <form className="registrForm" data-method="post" onSubmit={(e) => {
                e.preventDefault();
                props.dispatch(registration({ username: props.userNameValue, password: props.passwordValue }));
            }}>
                <Field name="username" variant='outlined' component={props.renderTextField} label="Username" />
                <Field name="password" type="password" variant='outlined' component={props.renderTextField} label="Password" />
                <Field name="confirmPassword" type="password" variant='outlined' component={props.renderTextField} label="Confirm password" />
                <button type="submit" className="registrButton" disabled={props.invalid || props.submitting || props.pristine}> REGISTRATION </button>
            </form>
        </Paper>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        registration: bindActionCreators(registration, dispatch)
    }
}

export default connect(mapDispatchToProps)(RegForm) 