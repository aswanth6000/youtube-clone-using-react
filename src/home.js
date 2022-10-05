import React from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Card from "./components/cards/cards";
import "./main.css";
function App() {
  return (
    <div className="app">
      <div className="nav">
      <Navbar/>
      </div>
      <div className="card">
      <Sidebar />
      <Card/>



      </div>
    </div>
  );
}

export default App;
