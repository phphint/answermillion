import React from 'react';

function NavigationBar() {
  return (
    <nav className="pt-4 flex justify-between items-center">
      {/* Logo Text */}
      <div>
        <a href="/" className="text-2xl font-bold text-light">
          AnswerMillion
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <a href="#about" className="font-medium text-light">
          About
        </a>
        <a href="#features" className="font-medium text-light">
          Features
        </a>
        {/* Additional primary navigation links can go here */}
      </div>
    </nav>
  );
}

export default NavigationBar;
