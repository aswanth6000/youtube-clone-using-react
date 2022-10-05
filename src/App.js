import React from "react";
import Playlist from './playlist'
import "./main.css";
import Home from './home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    // <div className="app">
    //   <div className="nav">
    //   <Navbar />
    //   </div>
    //   <div className="card">
    //   <Sidebar />
    //   <Card/>



    //   </div>
    // </div>
  

    <Router>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Explore" exact element={<Playlist />} />
    </Routes>
    </Router>
    
  );
}

export default App;
