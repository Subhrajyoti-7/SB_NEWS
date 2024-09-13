import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="home" country="in" category="" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/home" element={<News setProgress={setProgress} key="home" country="in" category="" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country="in" category="business" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" country="in" category="general" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" country="in" category="health" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country="in" category="science" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country="in" category="sports" pageSize="9" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country="in" category="technology" pageSize="9" apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;