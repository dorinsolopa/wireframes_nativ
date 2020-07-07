import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { routes } from "./route";
import { Row, Col } from "antd";
import FooterCard from "../components/Footer//FooterCard";
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={true}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
