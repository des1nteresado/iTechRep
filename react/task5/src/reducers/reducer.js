import initialState from '../initialStateForm';

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INPUTS_ERROR':
            action.control.error = !action.validateControl(action.control.value, action.control.validation);
            if (action.control.error && action.control.type === 'email') {
                action.control.helperText = 'Invalid email adress.';
            } else if (action.control.error && action.control.type === 'password') {
                action.control.helperText = 'Min. pass length 6 characters.';
            }
            else {
                action.control.helperText = '';
            }
            action.formControls[action.controlName] = action.control;
            return {...state, formControls: action.formControls};
    }
    return state;
};