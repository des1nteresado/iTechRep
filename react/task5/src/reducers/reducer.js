import initialState from '../initialStateForm';
import { SET_INPUTS_ERROR, SET_DATA } from '../actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUTS_ERROR:
            return { ...state, formControls: action.formControls };
        case SET_DATA:
            return { ...state, data: action.data }
        default:
    }
    return state;
};
