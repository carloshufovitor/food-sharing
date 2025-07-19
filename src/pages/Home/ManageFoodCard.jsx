import React from 'react';
import { Link } from 'react-router-dom'; // use `react-router-dom` not `react-router`

const ManageFoodCard = ({ food }) => {
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
          to={`/update-tip-details/${food._id}`}
          className="mr-4 btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]">
          Edit
        </Link>
        <button
          className="btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageFoodCard;
