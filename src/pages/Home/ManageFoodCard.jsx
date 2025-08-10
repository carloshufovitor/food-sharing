import React from "react";
import { Link } from "react-router-dom"; // use `react-router-dom` not `react-router`
import Swal from "sweetalert2";

const ManageFoodCard = ({ food, foods, setFoods }) => {
  const handleDelete = (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://food-sharing-website-server-lovat.vercel.app/manage-my-foods/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingFoods = foods.filter((item) => item._id !== id);
              setFoods(remainingFoods);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={food.image} alt="Food" />
            </div>
          </div>
        </div>
      </td>
      <td>{food.name}</td>
      <td>{food.location}</td>
      <td>{food.postedAt}</td>
      <td>{food.category}</td>
      <td>
        <Link
          to={`/update-food-details/${food._id}`}
          className="mr-4 btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]"
        >
          Edit
        </Link>
        <button
          onClick={(e) => handleDelete(e, food._id)}
          className="btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageFoodCard;
