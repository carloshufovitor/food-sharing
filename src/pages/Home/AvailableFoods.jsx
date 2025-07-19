import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/available-foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-11/12 mx-auto mb-10">
      <h2 className="text-4xl font-bold font-[nato-serif] text-center mt-16 mb-10">
        Available Foods
      </h2>
    {/* search bar */}
      <div className="text-end my-4">
        <input
          type="text"
          placeholder="Search by food name..."
          className="border border-gray-300 px-4 py-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredFoods.map((food) => (
          <div key={food._id} className="p-4 shadow-md border rounded">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-xl font-bold">{food.name}</h2>
            <div className="flex justify-between my-2">
              <p>
                <span className="font-bold">Price:</span> {food.price}
              </p>
              <p>
                {" "}
                <span className="font-bold">Expired Date:</span> {food.postedAt}
              </p>
            </div>
            <p className="mt-6">{food.description}</p>
            <div className="card-actions justify-between items-center mt-6">
              <div className="text-center">
                <Link to={`/food-details/${food._id}`}>
                  <button className="rounded bg-[#73B21A] hover:bg-[#008236] hover:text-white px-2 py-1 font-semibold">
                    Details
                  </button>
                </Link>
              </div>
              <div>
                <div className="mr-1 badge badge-outline hover:bg-green-700 hover:text-white">
                  Category: {food.category}
                </div>
                <div className="badge badge-outline hover:bg-green-700 hover:text-white">
                  Quantity: {food.quantity}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
