import "./App.css";
import OrderTabs from "./Components/Tab/Tab";
import React from "react";
import { Route, Switch } from "react-router-dom";
import TailorCopy from "./Components/Form/TailorCopy";
import CustomerStyle from "./Components/Form/Details/CustomerStyle";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <h1> Max Bani</h1>
          <OrderTabs />
        </div>
      </Route>
      <Route exact path="/tailor-copy">
        <TailorCopy />
      </Route>
      <Route exact path="/customer-styling">
        <CustomerStyle />
      </Route>
    </Switch>
  );
}

export default App;
