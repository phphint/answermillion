// FeaturesPage.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

import NavigationBar from "../components/NavigationBar"; // Adjust the path based on your file structure
import backgroundImage from "./page-bg.png"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import Features from '../components/Features'; // Adjust the path as necessary

 

function FeaturesPage() {
 
  return (
    <div
      className="bg-cover bg-no-repeat bg-center features-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

<Helmet>
        <title>Features - AnswerMillion's AI-Powered Call Management</title>
        <meta name="description" content="Discover the innovative features of AnswerMillion's AI call management system. Enhancing communication and efficiency for businesses." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.answermillion.com/features" />
        <meta property="og:title" content="Explore Cutting-Edge Features at AnswerMillion" />
        <meta property="og:description" content="AnswerMillion leads in AI call management with unique features designed for business efficiency and customer satisfaction." />
 
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.answermillion.com/features" />
        <meta property="twitter:title" content="AnswerMillion Features - AI Call Management Excellence" />
        <meta property="twitter:description" content="Join us in exploring the advanced features of AnswerMillion, revolutionizing business communication with AI technology." />
       </Helmet>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full min-h-screen ">
        {/* Primary Navigation at the top */}
        <NavigationBar />

        {/* Content specific to Features Page */}
        <div className="flex-grow flex items-center mt-10 md:mt-40">
          <div className="text-left pl-4 md:pl-0">
            <h1 className="text-4xl font-bold mb-2 text-light">
              Our Features
            </h1>
            <p className="mb-4 text-light">
              Explore the cutting-edge features that make AnswerMillion a leader in AI-powered call management.
            </p>

          
            {/* Repeat for other features */} <Features />
          </div>
        </div>
      </div>
        {/* List features here */}
       
      <Footer />
    </div>
  );
}

export default FeaturesPage;
