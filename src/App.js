import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import landingPage from "pages/landingPage";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={landingPage} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
