import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import landingPage from "pages/landingPage";
import Example from "pages/Example";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
