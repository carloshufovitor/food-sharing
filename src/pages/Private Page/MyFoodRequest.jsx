import React from "react";
import { useLoaderData } from "react-router";

const MyFoodRequest = () => {
    const foods = useLoaderData()
 console.log('here is requested data', foods)
 
  return (
     <div className="max-w-11/12 mx-auto my-30">
         <h2 className='text-3xl font-bold text-center mt-8 mb-10'>My Food Request</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {foods.map((food) => (
    <a
      key={food.id}
      className="block border border-gray-300 shadow rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700"
      href="#"
    >
      <div className="relative flex items-center overflow-hidden">
        <img
          className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
          src={food.image} 
          alt={food.name}
        />

        <div className="grow p-4 ms-32 sm:ms-48">
          <div className="min-h-24 flex flex-col justify-center">
            <h3 className="font-semibold text-md text-base-content">
              {food.name}
            </h3>
            <h3 className="font-semibold text-sm text-base-content">
              Pickup Location: {food.location}
            </h3>
            <h3 className="font-semibold text-sm text-base-content">
              Expired Date: {food.postedAt}
            </h3>
            <p className="mt-1 text-sm text-base-content">
              {food.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  ))}
</div>

    </div>
  );
};

export default MyFoodRequest;
