import axios from "axios";

export const GET_JOKE_REQUEST = "GET_JOKE_REQUEST";
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_FAIL = "GET_JOKE_FAIL";

export const getJokeRequest = () => {
    return {
        type: GET_JOKE_REQUEST,
        text: "Waiting for the joke...",
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
        text: "Error when getting the joke... :'(",
    };
};

export const getJoke = () => {
    return dispatch => {
        dispatch(getJokeRequest());
        axios.get("https://api.jokes.one/jod?category=animal")
            .then((v) => {
                dispatch(getJokeSuccess(v.data.contents.jokes[0].joke.text));
            })
            .catch(() => {
                dispatch(getJokeFail());
            });
    }
}
