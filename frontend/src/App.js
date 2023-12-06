import React from 'react';
import Header from './components/Header'; // Adjust the path as necessary
import Footer from './components/Footer'; // Adjust the path as necessary
import Features from './components/Features'; // Adjust the path as necessary


import './App.css'; // Or your main Tailwind CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Footer />
      {/* Other content will go here */}
    </div>
  );
}

export default App;
