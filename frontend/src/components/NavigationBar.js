import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
  return (
    <nav className="pt-4 flex justify-between items-center">
      {/* Logo Text */}
      <div>
        <Link to="/" className="text-2xl font-bold text-light">
          AnswerMillion
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/about" className="font-medium text-light">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
        </Link>
        <Link to="/features" className="font-medium text-light">
          <FontAwesomeIcon icon={faStar} className="mr-2" /> Features
        </Link>
        {/* Additional primary navigation links can go here */}
      </div>
    </nav>
  );
}

export default NavigationBar;
