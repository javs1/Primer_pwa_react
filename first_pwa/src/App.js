import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './pages/Home';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
