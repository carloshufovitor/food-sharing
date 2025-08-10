import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="flip-left" className="max-w-11/12 mx-auto my-6 md:my-30">
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className=" text-center text-2xl font-semibold  md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-center mt-4 mb-8 dark:text-gray-600">
              Find answers to the most common questions about sharing,
              requesting, and managing food on our platform. <br /> Whether
              you're a donor or someone in need, this section will help guide
              you through the process.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg shadow-md">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  What is this food sharing platform about?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  This platform allows individuals and organizations to share
                  surplus food with those in need. Users can add, request, or
                  donate food items through the system.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg shadow-md">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  How do I share food with others?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  To share food, simply create an account, go to the "Add Food"
                  section, and fill in the details like food name, quantity,
                  expiry date, and location.
                </p>
              </details>
              <details className="w-full border rounded-lg shadow-md">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  {" "}
                  Can I edit or delete a food item I posted?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  Yes. Go to your dashboard, select the food you want to update
                  or delete, and make the necessary changes.
                </p>
              </details>
              <details className="w-full border rounded-lg shadow-md">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  {" "}
                  How can I request available food?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  Browse the available food listings and click the "Request"
                  button on your preferred item. The donor will be notified of
                  your request.
                </p>
              </details>
              <details className="w-full border rounded-lg shadow-md">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  {" "}
                  Can organizations participate in food sharing?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  Absolutely! NGOs, food banks, and restaurants are welcome to
                  share their surplus food through the platform.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default Faqs;
<div></div>;
