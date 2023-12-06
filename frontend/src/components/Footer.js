import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Copyright notice */}
        <p>&copy; {new Date().getFullYear()} AnswerMillion. All Rights Reserved.</p>

        {/* Links */}
        <div>
          <a href="/terms" className="font-medium  mr-4">Terms of Service</a>
          <a href="/privacy" className="font-medium ">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
