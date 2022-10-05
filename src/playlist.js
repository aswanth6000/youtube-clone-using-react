import React from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Playlist from "./components/playlist/plist";
import "./main.css";
function App() {
  return (
    <div className="app">
      <div className="nav">
      <Navbar />
      </div>
      <div className="card">
      <Sidebar />
      </div>
      <Playlist/>
    </div>
  );
}

export default App;
