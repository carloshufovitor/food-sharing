import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

import AOS from 'aos';
import 'aos/dist/aos.css';


const truncate = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    axios
      .get("https://food-sharing-website-server-lovat.vercel.app/featured-foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleReadMore = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (

    <div data-aos="zoom-in">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => {
        const isExpanded = expandedIds.includes(food._id);
        return (
          <div
            key={food._id}
            className="p-4 shadow-md border rounded min-h-[380px] flex flex-col justify-between"
          >
            <div>
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
                  <span className="font-bold">Expired Date:</span> {food.postedAt}
                </p>
              </div>
              <p className="mt-6">
                {isExpanded ? food.description : truncate(food.description, 100)}{" "}
                {food.description.length > 100 && (
                  <button
                    onClick={() => toggleReadMore(food._id)}
                    className="text-[#73B21A] font-semibold ml-1"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>

            <div className="card-actions flex justify-between items-center mt-6">
              <Link to={`/food-details/${food._id}`}>
                <button className="rounded bg-[#73B21A] hover:bg-[#008236] hover:text-white px-2 py-1 font-semibold">
                  Details
                </button>
              </Link>
              <div className="flex space-x-2">
                <div className="badge badge-outline hover:bg-green-700 hover:text-white">
                  Category: {food.category}
                </div>
                <div className="badge badge-outline hover:bg-green-700 hover:text-white">
                  Quantity: {food.quantity}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
   
  );
};

export default FeaturedFoods;
