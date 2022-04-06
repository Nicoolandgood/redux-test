import { GET_JOKE_FAIL, GET_JOKE_REQUEST, GET_JOKE_SUCCESS } from "../actions";

const initialState = {
    joke: "Sorry, no joke for today... :(",
};

const jokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_JOKE_SUCCESS:
        case GET_JOKE_FAIL:
        case GET_JOKE_REQUEST:
            return {...state, joke: action.text};
        default:
            return state;
    }
}

export default jokeReducer;