import React from "react";

const SareeDetails = () => {
  // Example saree data (You can replace this with dynamic data later)
  const saree = {
    id: 1,
    name: "Elegant Red Silk Saree",
    pricePerDay: 1200,
    available: true,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3c2c?auto=format&fit=crop&w=900&q=80",
    description:
      "Experience timeless beauty with this handcrafted red silk saree, perfect for weddings, receptions, and festivals.",
    material: "Pure Silk",
    color: "Red",
    occasion: "Wedding / Festive",
    size: "Free Size",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-xl">
        {/* Saree Image */}
        <div className="flex justify-center items-center">
          <img
            src={saree.image}
            alt={saree.name}
            className="rounded-2xl w-full max-h-[500px] object-cover shadow-md"
          />
        </div>

        {/* Saree Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {saree.name}
            </h1>
            <p className="text-gray-600 mb-4">{saree.description}</p>

            <div className="space-y-2 mb-6">
              <p>
                <span className="font-semibold text-gray-700">Material:</span>{" "}
                {saree.material}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Color:</span>{" "}
                {saree.color}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Occasion:</span>{" "}
                {saree.occasion}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Size:</span>{" "}
                {saree.size}
              </p>
            </div>

            <div className="text-2xl font-bold text-pink-600 mb-4">
              {saree.pricePerDay} Tk / day
            </div>

            <button
              className={`w-full py-3 rounded-xl text-white font-semibold transition ${
                saree.available
                  ? "bg-pink-600 hover:bg-pink-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!saree.available}
            >
              {saree.available ? "Rent Now" : "Not Available"}
            </button>
          </div>

          {/* Delivery info */}
          <div className="mt-6 text-sm text-gray-500 border-t pt-4">
            <p>✔ Free delivery within 24 hours inside Dhaka</p>
            <p>✔ Easy return & cleaning included</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SareeDetails;
