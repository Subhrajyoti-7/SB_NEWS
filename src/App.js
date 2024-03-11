import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="home" country="in" category="" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/home" element={<News key="home" country="in" category="" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/business" element={<News key="business" country="in" category="business" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/general" element={<News key="general" country="in" category="general" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/health" element={<News key="health" country="in" category="health" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" pageSize="18" apiKey="33a6145e4e7d4d23a1c7a2da2c16075b" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

