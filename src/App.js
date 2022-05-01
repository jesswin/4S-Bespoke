import "./App.css";
import OrderTabs from "./Components/Tab/Tab";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TailorCopy from "./Components/Form/TailorCopy";
import CustomerStyle from "./Components/Form/Details/CustomerStyle";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1> Max Bani</h1>
            <OrderTabs />
          </div>
        }
      ></Route>
      <Route path="/tailor-copy" element={<TailorCopy />}></Route>
      <Route path="/customer-styling" element={<CustomerStyle />}></Route>
    </Routes>
  );
}

export default App;
