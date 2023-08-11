import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Search from './Components/SearchDiv/Search.js';
import Footer from './Components/FooterDiv/Footer.js';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<>
        <Search /></>} />
          {/* Add more routes here if needed */}
        </Routes>
        {/* Define routes within the Routes component */}
        <Routes>
          <Route path="details/:jobData" element={<Details />} />
          {/* Add more routes here if needed */}
        </Routes>

      </Router>
      <Footer/>
    </div>
  );
}

export default App;
