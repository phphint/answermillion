// AboutContent.js
import NavigationBar from "../components/NavigationBar"; // Adjust the path based on your file structure
import backgroundImage from "./page-bg.png"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary

import React from "react";

function AboutPage() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full min-h-screen ">
        {/* Primary Navigation at the top */}
        <NavigationBar />

        {/* Additional header content aligned to the left and centered vertically */}
        <div className="flex-grow flex items-center mt-10 md:mt-40">
          <div className=" text-left pl-4 md:pl-0">
            <h1 className="text-4xl font-bold mb-2 text-light">
              About AnswerMillion
            </h1>
            <h3 className="text-3xl font-bold mb-2 text-light">
              Transforming <span className="text-light-aqua">Your Calls</span>
            </h3>
            <p className="mb-4 text-light">
              At AnswerMillion.com, we're dedicated to revolutionizing the way
              businesses handle their call management. Our innovative approach
              integrates advanced AI technology, providing precise and efficient
              communication solutions.
            </p>
            <p className="mb-4 text-light">
              Our mission is to empower businesses with smart, reliable, and
              accessible call handling services that ensure no opportunity is
              missed and every client interaction is meaningful.
            </p>
            <p className="mb-4 text-light">
              Join us as we step into the future of seamless communication,
              where every call is an opportunity to excel and grow.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
