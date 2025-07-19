import { useEffect, useState } from "react";

const MyFoodRequest = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  // ❌ Remove this line:
  // if (!product) return <p>Loading...</p>;

  // ✅ Optional: Show message if product is not found at all
  if (!product) return <p>No product selected</p>;

  // ✅ Show the product directly
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-green-600">Requested Food</h2>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">{product.foodName}</h3>
        <p>{product.description}</p>
        <p className="text-sm">Pickup Location: {product.pickupLocation}</p>
        <p className="text-sm">Expire At: {product.expiredDate}</p>
      </div>
    </div>
  );
};

export default MyFoodRequest;
