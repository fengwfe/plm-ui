import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LogoutIcon from "./components/icons/LogoutIcon";
import ItemIcon from "./components/icons/ItemIcon";
import BomIcon from "./components/icons/BomIcon";

function App() {
  return (
    <div className="App">
      <LogoutIcon style={{ paddingRight: "10px" }} />
      <ItemIcon style={{ paddingRight: "10px" }} />
      <BomIcon style={{ paddingRight: "10px" }} />
    </div>
  );
}

export default App;
