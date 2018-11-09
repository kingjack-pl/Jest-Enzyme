import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';
import rootReducer from "./reducers/index";

export default ({ children, initalState }) => {

	const store = createStore(rootReducer, initalState, applyMiddleware(ReduxPromise) );

	return (
        <Provider store={store}>
			{ children }
        </Provider>
	)
}
