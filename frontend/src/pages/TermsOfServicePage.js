// TermsOfServicePage.js
import React from "react";
import { Helmet } from 'react-helmet-async';

import NavigationBar from "../components/NavigationBar"; // Adjust the path based on your file structure
import backgroundImage from "./page-bg.png"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary

function TermsOfServicePage() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center terms-of-service-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >       <NavigationBar />

<Helmet>
        <title>Terms of Service - AnswerMillion</title>
        <meta name="description" content="Read the Terms of Service for using AnswerMillion's AI-powered call management platform. Understand the rules and regulations for our services." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.answermillion.com/terms" />
        <meta property="og:title" content="Terms of Service - AnswerMillion" />
        <meta property="og:description" content="Comprehensive Terms of Service for AnswerMillion. Learn about our service rules, regulations, and user obligations." />
 
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.answermillion.com/terms" />
        <meta property="twitter:title" content="AnswerMillion's Terms of Service" />
        <meta property="twitter:description" content="Explore the terms and conditions for using AnswerMillion's services. Detailed guidelines for our users." />
       </Helmet>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full min-h-screen ">
        {/* Primary Navigation at the top */}
 

        {/* Terms of Service Content */}
        <div className="flex-grow flex items-center mt-10 bg-light p-4 rounded-lg">
        <div className="text-left pl-4 md:pl-0 ">
            <h1 className="text-4xl font-bold mb-2 text-dark ">
              Terms of Service
            </h1>
            <p className="mb-4 text-dark">
              Welcome to AnswerMillion. Please read our terms and conditions
              carefully.
            </p>
            {/* Add your terms of service details here */}
            <p className="mb-4 text-dark">
              <strong>Terms of Service</strong>
            </p>
            <p className="mb-4 text-dark">Last updated: Dec. 7th 2023</p>
            <p className="mb-4 text-dark">
              Welcome to AnswerMillion. These terms of service outline the rules
              and regulations for the use of our AI-powered call management
              platform. By accessing and using our service, you accept these
              terms and conditions in full. Do not continue to use
              AnswerMillion's service if you do not accept all of the terms and
              conditions stated on this page.
            </p>
            <p className="mb-4 text-dark">
              <strong>Service Description</strong>
              <br />
              AnswerMillion provides AI-powered call management services,
              including 24/7 call answering, message taking, call routing, call
              recording and storage, real-time call transcription, and
              AI-powered response capabilities.
            </p>
            <p className="mb-4 text-dark">
              <strong>No Liability</strong>
              <br />
              AnswerMillion shall not be held liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the service; any conduct or content of
              any third party on the service; any content obtained from the
              service; and unauthorized access, use or alteration of your
              transmissions or content, whether based on warranty, contract,
              tort (including negligence) or any other legal theory, whether or
              not we have been informed of the possibility of such damage.
            </p>
            <p className="mb-4 text-dark">
              <strong>Service Availability</strong>
              <br />
              While we aim to ensure that our service is available 24 hours a
              day, we shall not be liable if for any reason the service is
              unavailable at any time or for any period. Access to the service
              may be suspended temporarily and without notice in the case of
              system failure, maintenance or repair or for reasons beyond our
              control.
            </p>
            <p className="mb-4 text-dark">
              <strong>Changes to Terms</strong>
              <br />
              We reserve the right to amend these terms at any time. Your
              continued use of the service after any such changes constitutes
              your acceptance of the new terms.
            </p>
            <p className="mb-4 text-dark">
              <strong>Contact Us</strong>
              <br />
              If you have any questions or concerns about these terms, please
              contact us at dev@answermillion.com.
            </p>

            {/* Continue with more terms of service information as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfServicePage;
