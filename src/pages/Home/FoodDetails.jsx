import React from "react";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log("here is the all info", food);
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={food.image}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="border bg-[#73B21A] p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {" "}
                {food.name}{" "}
              </a>
              <p className="text-md dark:text-gray-600">
                {" "}
                <span className="font-bold">Price: </span> {food.price}
              </p>
              <p className="text-md dark:text-gray-600">
                {" "}
                <span className="font-bold">Category: </span> {food.category}
              </p>
              <p className="text-md dark:text-gray-600">
                {" "}
                <span className="font-bold">Quantity: </span> {food.quantity}
              </p>
              <p className="text-md dark:text-gray-600">
                {" "}
                <span className="font-bold">PostedAt: </span> {food.postedAt}
              </p>
            </div>
            <div className="dark:text-gray-800 text-white">
              <p>{food.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
