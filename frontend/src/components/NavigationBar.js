import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Image2Vector } from './image2vector.svg'; // Corrected import



function NavigationBar() {
  return (
    <nav className="pt-4 pb-4 flex justify-between items-center top-nav ">
    
      {/* Logo Text */}
      <div>
      <Link to="/" className="flex items-center text-2xl md:text-3xl font-bold text-dark">
        <Image2Vector className=" w-12 h-12 mr-2 " alt="Logo" />
 AnswerMillion
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/about" className="font-medium text-light md:text-xl">
           About
        </Link>
        <Link to="/features" className="font-medium text-light md:text-xl">
           Features
        </Link>
        {/* Additional primary navigation links can go here */}
      </div>
  
    </nav>
  );
}

export default NavigationBar;
