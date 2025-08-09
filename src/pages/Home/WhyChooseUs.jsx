import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white mt-16 md:mt-30 px-4 sm:px-6 lg:px-8 max-w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black">
          Why Use Our Platform?
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Food Sharing"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Features Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Feature 1 */}
            <div>
              <p className="text-xl font-semibold text-gray-800">
                🍽️ Fast & Easy Food Sharing
              </p>
              <p className="text-gray-600">
                Share or receive food in just a few clicks. No complicated
                process, no fees.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <p className="text-xl font-semibold text-gray-800">
                ✅ Verified Users & Safe Transactions
              </p>
              <p className="text-gray-600">
                All donors and receivers are verified to ensure safe and secure
                experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <p className="text-xl font-semibold text-gray-800">
                📍 Real-time Location Matching
              </p>
              <p className="text-gray-600">
                Instantly find food available near you or let others find your
                donations easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
