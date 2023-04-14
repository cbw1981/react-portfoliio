import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  // Define state for current page and set current page as initial state
  const [currentPage, setCurrentPage] = useState('aboutMe');

  // Function to handle changing current page
  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {/* Render components based on current page state */}
        {currentPage === 'aboutMe' && <AboutMe />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
