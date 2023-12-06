import React, { useState } from "react";
import backgroundImage from "./mascot.png"; // Adjust path as necessary
import "../App.css"; // Or your main Tailwind CSS file
import NavigationBar from './NavigationBar'; // Adjust the path based on your file structure
import EmailModal from './EmailModal'; // Import the EmailModal component


function Header() {

    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <header className="min-h-screen">
      {/* Full page height background container */}
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full">
          {/* Primary Navigation at the top */}
          <NavigationBar />


          {/* Additional header content aligned to the left and centered vertically */}
          <div className="flex-grow flex items-center mt-40">
            <div className="w-1/2 text-left pl-4 md:pl-0">
              <h1 className="text-4xl font-bold mb-2 text-light">
                AI Answering Service
              </h1>
              <h3 className="text-3xl font-bold mb-2 text-light">
                Transforming <span className="text-light-aqua">Your Calls</span>
              </h3>

              <p className="  mb-4 text-light">
                Join AnswerMillion.com and step into{" "}
                <span className="text-light-aqua">
                  the future of call management, where advanced AI technology
                  ensures every communication is handled with precision and
                  efficiency.
                </span>
              </p>

              <button className="bg-light-aqua text-light font-bold py-2 px-4 rounded-lg"  onClick={openModal}>
                Join Waiting List
              </button>
            </div>
          </div>
        </div>
      </div>

            {/* Email Modal */}
            <EmailModal isOpen={isModalOpen} onClose={closeModal} />



    </header>
  );
}

export default Header;
