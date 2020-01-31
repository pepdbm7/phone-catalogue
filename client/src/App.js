import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Catalogue from "./components/Catalogue";
import Phone from "./components/Phone";

const App = ({ history }) => (
  <>
    <Switch>
      <Route exact path="/" render={() => <Landing history={history} />} />
      <Route path="/catalogue" render={() => <Catalogue history={history} />} />
      <Route path="/phone" render={() => <Phone history={history} />} />
    </Switch>
  </>
);

export default withRouter(App);
