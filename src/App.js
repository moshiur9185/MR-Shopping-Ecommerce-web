import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Navigation from './Component/Navigation/Navigation';
import Login from './Component/Login/Login';

function App() {


  return (
    <div className="App">
      {/* <button className="btn btn-success" onClick={handleGoogleSingIn}>Google</button>
      <button className="btn btn-dark" onClick={handleGitHubSingIn}>GitHub</button>
      <br />
      {
        user.name && <div>
          <h5>Welcome {user.name}</h5>
          <p>email: {user.email}</p>
          <img src={user.img} alt="" />
        </div>
      } */}
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
