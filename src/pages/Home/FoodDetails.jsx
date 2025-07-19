import React, { use } from "react";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const FoodDetails = () => {
  const { user } = use(AuthContext);
  const food = useLoaderData();
  console.log("here is the all info", food);

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: food?.name,
      image: food?.image,
      foodId: food?.foodId,
      email: user?.email,
      location: food?.location,
      postedAt: food?.postedAt,
      description: form.description.value,
    };
    console.log(formData);
    fetch("http://localhost:3000/request-food", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after creating user in the db", data);
        if (data.insertedId) {
          toast.success("Requested successfully");
        }
      });
  };

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
                <span className="font-bold">Pickup Location: </span>{" "}
                {food.location}
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
        <div className="text-center ">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-[#73B21A] text-white hover:bg-white hover:text-black"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Request
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <h2 className="text-xl font-bold text-center my-4">
                    Please request your food
                  </h2>

                  <form onSubmit={handleRequest} className="fieldset">
                    <label className="label font-bold">Food Name</label>
                    <input
                      type="text"
                      value={food?.name || ""}
                      readOnly
                      name="name"
                      className="input"
                      placeholder="Kacchi Biryani"
                    />

                    <label className="label font-bold">Food Image</label>
                    <input
                      type="text"
                      value={food?.image || ""}
                      readOnly
                      name="image"
                      className="input"
                      placeholder="Write your photo url"
                    />
                    <label className="label font-bold">Food ID</label>
                    <input
                      type="text"
                      value={food?.id || ""}
                      readOnly
                      name="foodId"
                      className="input"
                      placeholder="food id"
                    />

                    <label className="label font-bold">User Email</label>
                    <input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      name="email"
                      className="input"
                      placeholder="user email"
                    />

                    <label className="label font-bold">Pickup Location</label>
                    <input
                      type="text"
                      value={food?.location || ""}
                      readOnly
                      name="location"
                      className="input"
                      placeholder="Write your Pickup Location"
                    />

                    <label className="label font-bold">Expired Date/Time</label>
                    <input
                      value={food?.postedAt || ""}
                      readOnly
                      type="date"
                      name="postedAt"
                      className="input"
                      placeholder="Write your expired date"
                    />

                    <label className="label font-bold">Additional Notes</label>
                    <textarea
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

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
