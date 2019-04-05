import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index.reducer";

const inititalState = {};

const store = createStore(
    reducers,
    inititalState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
