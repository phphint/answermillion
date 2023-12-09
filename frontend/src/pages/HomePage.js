import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";

function HomePage() {
  const organizationSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "AnswerMillion",
    url: "https://www.answermillion.com/",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "dev@answermillion.com",
        contactType: "customer support",
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>AnswerMillion - AI Answering Service</title>
        <meta
          name="description"
          content="Join AnswerMillion.com for advanced AI call management solutions. 24/7 Call Answering, Efficient Message Taking, Call Routing, and more."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.answermillion.com/" />
        <meta
          property="og:title"
          content="AnswerMillion - Transforming Your Calls with AI"
        />
        <meta
          property="og:description"
          content="Experience next-level call management with AnswerMillion's AI technology. 24/7 support, efficient communication, and more."
        />
        <meta property="og:image" content="/share-cover.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.answermillion.com/" />
        <meta
          property="twitter:title"
          content="AnswerMillion - AI-Powered Call Management"
        />
        <meta
          property="twitter:description"
          content="Revolutionize your call handling with AnswerMillion. AI-driven solutions for efficient, responsive communication."
        />
        <meta property="twitter:image" content="/share-cover.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
      </Helmet>
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
