import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import user from "./reducers/user";
import Home from "./components/Home"
import PositiveSharing from "components/PositiveSharing";
import Directory from "components/Directory"
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
         <Route path="/signup" component={Home} />
         <Route path="/pos_sharing" component={PositiveSharing} />
         <Route path="/directory" component={Directory} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
