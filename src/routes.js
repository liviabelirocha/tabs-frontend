import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SubmitForm from "./pages/SubmitForm";
import Gear from "./pages/Gear";
import Login from "./pages/Login";
import AllTabs from "./pages/AllTabs";
import SongTab from "./pages/SongTab";
import SearchTab from "./pages/SearchTab";

function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={Login} />
        <PrivateRoute path="/admin/submit" component={SubmitForm} />

        <Route path="/gear" component={Gear} />
        <Route path="/tabs" exact component={AllTabs} />
        <Route path="/tabs/:instrument/:author/:song/:id" component={SongTab} />
        <Route path="/search" component={SearchTab} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
