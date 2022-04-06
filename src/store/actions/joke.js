import axios from "axios";

export const GET_JOKE_REQUEST = "GET_JOKE_REQUEST";
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_FAIL = "GET_JOKE_FAIL";

export const getJokeRequest = () => {
    return {
        type: GET_JOKE_REQUEST,
        text: "Waiting...",
    };
};

export const getJokeSuccess = (joke = "New joke !") => {
    return {
        type: GET_JOKE_SUCCESS,
        text: joke,
    };
};

export const getJokeFail = () => {
    return {
        type: GET_JOKE_FAIL,
        text: "Impossible to get the joke... :'(",
    };
};

export const getJoke = () => {
    return dispatch => {
        dispatch(getJokeSuccess());
        axios.get("https://api.jokes.one/jod?category=animal")
            .then((v) => {
                dispatch(getJokeSuccess(v.data.contents.jokes[0].joke.text));
            })
            .catch(() => {
                dispatch(getJokeFail());
            });
    }
}
