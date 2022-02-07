import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
