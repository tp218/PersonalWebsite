import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';
import Navbar from './Navbar.js';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Box } from "@mui/material";



function App() {

  //React Router For The Website
  return(
    <div>
      <Router>
        <div>

          <Box>

            <Navbar />

            <div>
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactMe />} />
              </Routes>
            </div>
          </Box>
        </div>
      </Router>
    </div>
  );
}

export default App;
