import React, { useState } from "react";
import SareeCard from "../components/SareeCard";

const sareesData = [
  {
    id: 1,
    name: "Elegant Red Silk Saree",
    price: 1200,
    image: "https://images.unsplash.com/photo-1601121141949-09c9c8f3eae5",
    occasion: "Wedding",
  },
  {
    id: 2,
    name: "Party Wear Blue Saree",
    price: 950,
    image: "https://images.unsplash.com/photo-1596464716120-6e6f8d0f2a5a",
    occasion: "Party",
  },
  {
    id: 3,
    name: "Casual Cotton Saree",
    price: 700,
    image: "https://images.unsplash.com/photo-1621786033233-5b1f1a4b18b2",
    occasion: "Casual",
  },
  {
    id: 4,
    name: "Traditional Yellow Saree",
    price: 1100,
    image: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e",
    occasion: "Festival",
  },
  {
    id: 5,
    name: "Modern Designer Saree",
    price: 1800,
    image: "https://images.unsplash.com/photo-1608138273721-fb8de6d5a6b1",
    occasion: "Party",
  },
];

const Saree = () => {
  const [search, setSearch] = useState("");
  const [occasion, setOccasion] = useState("All");

  const filteredSarees = sareesData.filter((saree) => {
    const matchSearch = saree.name.toLowerCase().includes(search.toLowerCase());
    const matchOccasion =
      occasion === "All" || saree.occasion === occasion;
    return matchSearch && matchOccasion;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Saree Collection
      </h1>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search saree..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-48 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="All">All Occasions</option>
          <option value="Wedding">Wedding</option>
          <option value="Party">Party</option>
          <option value="Festival">Festival</option>
          <option value="Casual">Casual</option>
        </select>
      </div>

      {/* Saree Cards */}
      {filteredSarees.length === 0 ? (
        <p className="text-center text-gray-500">No sarees found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSarees.map((saree) => (
            <SareeCard key={saree.id} saree={saree} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Saree;
