import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/components/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation>
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>

            <Route path="/places/new" exact>
              <NewPlaces />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </MainNavigation>
    </Router>
  );
}

export default App;
