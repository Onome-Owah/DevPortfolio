import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Ensure this is the correct path
import Skills from './components/Skills'; // Ensure this is the correct path
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
