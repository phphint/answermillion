import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        
        {/* Links */}
        <div className="mb-4"> {/* Margin bottom for spacing */}
          <Link to="/terms" className="font-medium mr-4">Terms</Link>
          <Link to="/privacy" className="font-medium">Privacy</Link>
        </div>

        {/* Copyright notice */}
        <p className="text-sm">&copy; {new Date().getFullYear()} AnswerMillion. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
