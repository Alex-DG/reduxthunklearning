import React, { Component } from "react";
import AppContainer from "./app/containers/AppContainer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import peopleReducer from "./app/redux/reducers/peopleReducer";

const createStoreWithMiddleWare = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleWare(peopleReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
