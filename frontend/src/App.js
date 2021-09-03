import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import PositiveSharing from "pages/PositiveSharing";
import Resources1 from "pages/Resources1"
import Signup from "pages/Signup"
import Main from "pages/Main"

import user from "./reducers/user";

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/pos_sharing" component={PositiveSharing}/> 
         <Route path="/resources_1" component={Resources1} />
         <Route path="/signup" component={Signup} />
         <Route path="/main" component={Main} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
