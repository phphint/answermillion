import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter

import TermsOfService from "./pages/TermsOfServicePage";
import PrivacyPolicy from "./pages/PrivacyPage";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component



import "./App.css"; // Or your main Tailwind CSS file

function App() {
  return (
    <BrowserRouter>
          <ScrollToTop /> {/* Include the ScrollToTop component */}

      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<div>route test</div>} />

          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />

          {/* Add more routes as needed */}
        </Routes>

        {/* Other content will go here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
