// PrivacyPage.js
import React from "react";
import { Helmet } from 'react-helmet-async';

import NavigationBar from "../components/NavigationBar"; // Adjust the path based on your file structure
import backgroundImage from "./page-bg.png"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary

function PrivacyPage() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center privacy-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >  <NavigationBar />

<Helmet>
        <title>Privacy Policy - AnswerMillion</title>
        <meta name="description" content="Read AnswerMillion's Privacy Policy. Committed to protecting your personal data and respecting your privacy." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.answermillion.com/privacy" />
        <meta property="og:title" content="Privacy Policy of AnswerMillion" />
        <meta property="og:description" content="Understand how AnswerMillion handles personal data and respects user privacy. Comprehensive details on data collection, use, and security." />
 
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.answermillion.com/privacy" />
        <meta property="twitter:title" content="AnswerMillion's Privacy Policy" />
        <meta property="twitter:description" content="Discover AnswerMillion's commitment to data protection and privacy. Read our detailed Privacy Policy." />
       </Helmet>


      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full min-h-screen ">
        {/* Primary Navigation at the top */}
      

        {/* Privacy Policy Content */}
        <div className="flex-grow flex items-center mt-10">
          <div className="text-left pl-4 md:pl-0">
            <h1 className="text-4xl font-bold mb-2 text-light">
              Privacy Policy
            </h1>
            <p className="mb-4 text-light">
              We value your privacy and are committed to protecting your
              personal data. This policy outlines our practices regarding data
              collection, use, and sharing.
            </p>
            {/* Add your privacy policy details here */}
            <p className="mb-4 text-light">
              <strong>Privacy Policy</strong>
            </p>
            <p className="mb-4 text-light">Last updated: Dec. 7th 2023</p>
            <p className="mb-4 text-light">
              At AnswerMillion, we are committed to maintaining the trust and
              confidence of our visitors to our website. In this Privacy Policy,
              we’ve provided detailed information on when and why we might
              collect personal information, how we use it, and how we keep it
              secure.
            </p>
            <p className="mb-4 text-light">
              <strong>Information We Collect</strong>
              <br />
              As a visitor, you can browse our website without providing any
              personal information. We may track the Internet domain address
              from which people visit us and analyze this data for trends and
              statistics, but individual users remain anonymous unless they
              voluntarily tell us who they are.
            </p>
            <p className="mb-4 text-light">
              <strong>Third-Party Scripts and Cookies</strong>
              <br />
              Our website uses third-party services that may collect information
              used to identify you. Third-party vendors, including Google, use
              cookies to serve ads based on someone’s past visits to our
              website. Any tracking done by Google through cookies and other
              mechanisms is subject to Google’s own privacy policies.
            </p>
            <p className="mb-4 text-light">
              Note that AnswerMillion has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
            <p className="mb-4 text-light">
              <strong>Your Control Over Cookies</strong>
              <br />
              You can choose to disable or selectively turn off our cookies or
              third-party cookies in your browser settings. However, this can
              affect how you are able to interact with our site as well as other
              websites.
            </p>
            <p className="mb-4 text-light">
              <strong>Use of Personal Information</strong>
              <br />
              We may collect and use personal information for purposes such as,
              to respond to inquiries, provide services you request, and manage
              your account. We will not sell, distribute, or lease your personal
              information to third parties unless we have your permission or are
              required by law.
            </p>
            <p className="mb-4 text-light">
              <strong>Security</strong>
              <br />
              We take precautions to protect your information. When you submit
              sensitive information via the website, your information is
              protected both online and offline.
            </p>
            <p className="mb-4 text-light">
              <strong>Changes to this Privacy Policy</strong>
              <br />
              We may change this privacy policy from time to time. We encourage
              visitors to frequently check this page for any changes. Your
              continued use of this site after any change in this Privacy Policy
              will constitute your acceptance of such change.
            </p>
            <p className="mb-4 text-light">
              <strong>Contact Us</strong>
              <br />
              If you have any questions about this Privacy Policy, please
              contact us at dev@answermillion.com.
            </p>

            {/* Continue with more privacy policy information as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPage;
