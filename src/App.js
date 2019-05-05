import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./layout/layout";

import Clock from "./pages/clock";
import GlobalStyles from "./components/shared/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <GlobalStyles />
          <Switch>
            <Route
              path="/timezone/:timezone/:country?/:city?"
              render={({ match }) => <Clock {...match} />}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
