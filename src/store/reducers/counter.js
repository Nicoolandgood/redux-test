import { actionTypes } from "../actions";

const initialState = {
    value: 0,
    saved: null,
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.plus:
            return {...state, value: ++state.value };
        case actionTypes.minus:
            return {...state, value: --state.value };
        case actionTypes.reset:
            return {...state, value: 0};
        case actionTypes.save:
            return {...state, saved: state.value };
        default:
            return state;
    }
};

export default counterReducer;