import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Clock from "./pages/clock";
import GlobalStyles from "./components/shared/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Home />
        <Switch>
          <Route
            path="/timezone/:timezone/:country?/:city?"
            render={({ match }) => <Clock {...match} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
