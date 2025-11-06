import React from "react";
import { NavLink } from "react-router";
import { useNavigate } from 'react-router';

const SareeCard = ({ saree }) => {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3" onClick={()=> navigate(`../saree/${saree.id}`)}>
      <img
        src={saree.image}
        alt={saree.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{saree.name}</h2>
        <p className="text-pink-600 font-medium">৳{saree.price}</p>
        <p className="text-gray-500 text-sm">Occasion: {saree.occasion}</p>
        {/* <NavLink to={`/saree/${saree.id}`}>
        </NavLink> */}
          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-2 transition cursor-pointer">
            view details
          </button>
      </div>
    </div>
  );
};

export default SareeCard;
