import React from 'react';

function Features() {
  return (
    <div className="bg-dark text-white py-8 features">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* 24/7 Call Answering */}
        <div>
          <h5 className="text-aqua  font-bold mb-2">24/7 Call Answering</h5>
          <p>Our service ensures that every call is answered any time of the day, providing constant support for your clients.</p>
        </div>

        {/* Efficient Message Taking */}
        <div>
          <h5 className="text-aqua  font-bold mb-2">Efficient Message Taking</h5>
          <p>Accurate and prompt message recording, ensuring you never miss important information from your callers.</p>
        </div>

        {/* Call Routing */}
        <div>
          <h5 className="text-aqua  font-bold mb-2">Call Routing</h5>
          <p>Calls are directed to the appropriate department or individual, enhancing communication efficiency.</p>
        </div>

        {/* Call Recording and Storage */}
        <div>
          <h5 className="text-aqua  font-bold mb-2">Call Recording and Storage</h5>
          <p>Secure and compliant call recording for quality assurance and easy access to past conversations.</p>
        </div>

            {/* Real-Time Call Transcription */}
            <div>
          <h5 className="text-aqua  font-bold mb-2">Real-Time Call Transcription</h5>
          <p>Our service offers instant transcription of calls, providing accurate records for quality control, training, and compliance purposes.</p>
        </div>


         {/* AI-Powered Response */}
         <div>
          <h5 className="text-aqua  font-bold mb-2">AI-Powered Response</h5>
          <p>Utilizing sophisticated AI technology, the service provides intelligent and context-aware responses to each caller, ensuring a high-quality interaction every time.</p>
        </div>

      </div>
    </div>
  );
}

export default Features;
