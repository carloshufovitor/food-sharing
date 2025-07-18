import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/featured-foods")
      .then(res => setFoods(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {foods.map(food => (
        <div key={food._id} className="p-4 shadow-md border rounded">
          <img src={food.image} alt={food.name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-xl font-bold">{food.name}</h2>
          <p>Price: ${food.price}</p>
          <p>Quantity: {food.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedFoods;
