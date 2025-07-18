import React, { use } from 'react';
import { ToastContainer } from 'react-toastify';
import LottieAnimation from '../Home/LottieAnimation';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const AddFood = () => {

    const {user} =use(AuthContext)

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            name: form.name.value,
            image: form.image.value,
            quantity: form.quantity.value,
            location: form.location.value,
            description: form.description.value,

        }
        console.log(formData)

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then (data => {
            console.log(`data after creating user in the db`, data )
        })

    }

    return (
       <div className="my-20 grid grid-cols-1 md:grid-cols-2 max-w-11/12 mx-auto justify-center">
      <div>
        <LottieAnimation></LottieAnimation>
      </div>
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center my-4">
            Please add your food
          </h2>

          <form onSubmit={handleAddFood} className="fieldset">
            <label className="label font-bold">Food Name</label>
            <input
            //   value={user?.displayName || ""}
            //   readOnly
              type="text"
              name="name"
              className="input"
              placeholder="Kacchi Biryani"
            />

 <label className="label font-bold">Food Image</label>
            <input
              type="text"
              name="image"
              className="input"
              placeholder="Write your photo url"
            />

            <label className="label font-bold">Food Quantity</label>
            <input
              type="text"
              name="quantity"
              className="input"
              placeholder="How I grow tomatoes indoors"
            />

            <label className="label font-bold">Pickup Location</label>
            <input
              type="text"
              name="location"
              className="input"
              placeholder="Write your Pickup Location"
            />
           
            <label className="label font-bold">Expired Date/Time</label>
            <input
              type="text"
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
    </div>
    );
};

export default AddFood;