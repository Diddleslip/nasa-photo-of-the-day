import React from "react";
import "./App.css"; 
import TestFunc from "./CardFolder/NASACard"
import MainNav from "./TitleNav-Folder/TitleNav"

export default function App() {

  return (
    <div className="App">
      <MainNav/>
      <TestFunc/>
    </div>
  );
}
