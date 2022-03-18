import "./App.css";
import OrderTabs from "./Components/Tab/Tab";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FinishedData from "./Components/Form/FinishedData";

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
      <Route path="/tailor-copy" element={<FinishedData />}></Route>
    </Routes>
  );
}

export default App;
