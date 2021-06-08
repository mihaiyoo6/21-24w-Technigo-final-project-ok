import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import user from "./reducers/user";
import Form from "./components/Form"

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });



export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
         <Route exact path="/" />
         <Route path="/signup" component={Form} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
