import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function EmailModal({ isOpen, onClose }) {
  console.log("reCAPTCHA site key:", process.env.REACT_APP_RECAPTCHA_SITE_KEY);

  const [email, setEmail] = useState("");

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the reCAPTCHA token is set
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA to submit the form.");
      return; // Exit the function early
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/waiting-list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, recaptchaToken }),
        }
      );

      const data = await response.json(); // Always parse the JSON response body

      if (response.ok) {
        alert("Successfully added to the waiting list!");
        onClose(); // Close the modal on successful submission
      } else if (response.status === 409) {
        alert(data.message); // "Email already exists in the waiting list"
      } else if (response.status === 401) {
        alert(data.message); // "Failed reCAPTCHA verification"
      } else {
        alert("Failed to add to the waiting list.");
      }

      // After submission, reset the reCAPTCHA
      recaptchaRef.current.reset();
      setRecaptchaToken(""); // Clear the token from state
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Join the Waiting List
          </h3>
          <div className="mt-2 px-7 py-3">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 w-full border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="bg-light-aqua text-white font-bold py-2 px-4 rounded-lg w-full mt-4"
              >
                Submit
              </button>
              <div className="recaptcha-wrapper">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  onChange={onRecaptchaChange}
                />
              </div>
            </form>
          </div>

          <div className="items-center px-4 py-3">
            <button
              className="bg-white text-gray-700 font-bold py-2 px-4 rounded-md text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailModal;
