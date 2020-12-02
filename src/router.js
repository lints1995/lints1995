import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Brief from "./views/brief";

const routeParams = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/brief",
    component: Brief,
  },
];

export default (
  <Router>
    <Switch>
      {routeParams.map((item, index) => {
        return (
          <Route
            exact
            key={index}
            path={item.path}
            component={item.component}
          />
        );
      })}
    </Switch>
  </Router>
);
