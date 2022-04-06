// Enum of possible actions
export const actionTypes = Object.freeze({
    plus: "plus",
    minus: "minus",
    reset: "reset",
    save: "save",
});

export const incrementCounter = () => {
    return {
        type: actionTypes.plus,
    };
};

export const decrementCounter = () => {
    return {
        type: actionTypes.minus,
    };
};

export const resetCounter = () => {
    return {
        type: actionTypes.reset,
    }
}

export const saveCounter = () => {
    return {
        type: actionTypes.save,
    }
}