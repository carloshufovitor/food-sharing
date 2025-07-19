import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ManageFoodCard from "../Home/ManageFoodCard";

const ManageMyFoods = () => {
  const loadedFoods = useLoaderData();
  const [foods, setFoods] = useState(loadedFoods);
  console.log(foods);
  return (
    <div className="overflow-x-auto my-10 max-w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mt-8 mb-10">
        My Food Request
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>PickUp Location</th>
            <th>Expired Date</th>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food) => (
            <ManageFoodCard
              key={food._id}
              food={food}
              foods={foods}
              setFoods={setFoods}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFoods;
