// AboutContent.js
import NavigationBar from "../components/NavigationBar"; // Adjust the path based on your file structure
import backgroundImage from "./page-bg.png"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import { Helmet } from 'react-helmet-async';


import React from "react";

function AboutPage() {
 
  return (
    <div
      className="bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
            <Helmet>
        <title>About AnswerMillion - Transforming Your Calls</title>
        <meta name="description" content="Discover how AnswerMillion revolutionizes call management with advanced AI technology. Empowering businesses with efficient communication solutions." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.answermillion.com/about" />
        <meta property="og:title" content="About AnswerMillion - AI Communication Innovators" />
        <meta property="og:description" content="Learn about AnswerMillion's mission to transform call management using AI technology. Join the future of seamless communication." />
 
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.answermillion.com/about" />
        <meta property="twitter:title" content="About AnswerMillion - Leading in AI Call Management" />
        <meta property="twitter:description" content="Explore AnswerMillion's approach to revolutionizing business communication with AI. Enhancing efficiency and engagement." />
       </Helmet>
     
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
