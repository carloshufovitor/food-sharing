import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our website. These Terms and Conditions govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <p>
          You must use this website in compliance with all applicable laws and regulations. You agree not to engage in any activity that may harm the website or interfere with other users' experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content, trademarks, and intellectual property on this site belong to us or our licensors. You may not reproduce or use any part of the content without prior written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p>
          We are not responsible for any damages that result from the use or inability to use our website or services, including any loss of data or profit.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page and are effective immediately upon posting.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@foodshring.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
