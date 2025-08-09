import React from "react";
import { useLoaderData } from "react-router";
import LottieAnimation from "./LottieAnimation";
import { toast, ToastContainer } from "react-toastify";

const UpdatedFoodDetails = () => {
  const food = useLoaderData();
  console.log("updaded user", food);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      image: form.image.value,
      quantity: form.quantity.value,
      location: form.location.value,
      description: form.description.value,
      postedAt: form.postedAt.value,
      price: form.price.value,
      category: form.category.value,
    };
    console.log(formData);

    fetch(`https://food-sharing-website-server-lovat.vercel.app/updated-food-details/${food._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Your Information Updated Successfully");
        } else {
          toast.warning("No changes were made");
        }
      });
  };

  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 max-w-11/12 mx-auto justify-center">
      <div>
        <LottieAnimation></LottieAnimation>
      </div>
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center my-4">
            Update Your Food Information
          </h2>

          <form onSubmit={handleUpdateUser} className="fieldset">
            <label className="label font-bold">Food Name</label>
            <input
              defaultValue={food.name}
              //   readOnly
              type="text"
              name="name"
              className="input"
              placeholder="Kacchi Biryani"
            />

            <label className="label font-bold">Food Image</label>
            <input
              type="text"
              defaultValue={food.image}
              name="image"
              className="input"
              placeholder="Write your photo url"
            />

            <label className="label font-bold">Food Quantity</label>
            <input
              type="text"
              defaultValue={food.quantity}
              name="quantity"
              className="input"
              placeholder="write quantity"
            />

            <label className="label font-bold">Pickup Location</label>
            <input
              type="text"
              defaultValue={food.location}
              name="location"
              className="input"
              placeholder="Write your Pickup Location"
            />
            <label className="label font-bold">Price</label>
            <input
              type="text"
              defaultValue={food.price}
              name="price"
              className="input"
              placeholder="Write food price"
            />
            <label className="label font-bold">Category</label>
            <input
              type="text"
              defaultValue={food.category}
              name="category"
              className="input"
              placeholder="Write food category"
            />

            <label className="label font-bold">Expired Date/Time</label>
            <input
              type="date"
              defaultValue={food.postedAt}
              name="postedAt"
              className="input"
              placeholder="Write your expired date"
            />

            <label className="label font-bold">Additional Notes</label>
            <textarea
              defaultValue={food.description}
              name="description"
              className="textarea h-24"
              placeholder="Comments"
            ></textarea>

            <button
              type="submit"
              className="btn btn-neutral mt-4 bg-[#73B21A] hover:bg-[#008236]"
            >
              Submit
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default UpdatedFoodDetails;
