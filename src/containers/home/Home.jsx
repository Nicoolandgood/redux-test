import { useEffect } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter, saveCounter } from '../../store/actions/counter';
import { getJoke } from '../../store/actions/joke';
import './Home.css';

const Home = (props) => {
    useEffect(() => {
        props.onGetJoke();
    }, []);

    return (
        <div id="home">
            <h4>Counter: </h4>
            <div id="numbers">
                <span id="current">Count: {props.value}</span>
                <span id="saved">Saved count: {props.saved ?? "None"}</span>
            </div>
            <div id="button-group">
                <button onClick={props.onIncrement}>+</button>
                <button onClick={props.onDecrement}>-</button>
                <button onClick={props.onReset}>reset</button>
                <button onClick={props.onSave}>save</button>
            </div>
            <h4>Joke of the day:</h4>
            <p>
                {props.joke}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        value: state.counterReducer.value,
        saved: state.counterReducer.saved,
        joke: state.jokeReducer.joke,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(incrementCounter()),
        onDecrement: () => dispatch(decrementCounter()),
        onReset: () => dispatch(resetCounter()),
        onSave: () => dispatch(saveCounter()),
        onGetJoke: () => dispatch(getJoke()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);