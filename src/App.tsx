import React from "react";
import { handleLogin } from "./services/vehiclesService";

import FormCard from "./components/FormCard";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FormCard />
    </div>
  );
}

export default App;
