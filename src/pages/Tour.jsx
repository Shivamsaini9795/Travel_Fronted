import React, { useState } from "react";

const Tour = () => {
  const [category, setCategory] = useState("All Tours");

  const categories = [
    "All Tours",
    "Domestic",
    "International",
    "Spiritual",
    "Adventure"
  ];

  const tours = [
    {
      title: "Journey to Spain",
      about: "International Cultural Tour",
      price: 35000,
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763659976/Spain_f03udh.jpg",
      category: "International",
      description: "Explore Spain's beautiful cities, vibrant culture, historic landmarks, and delicious cuisine on this amazing journey. Ideal for cultural enthusiasts and travelers who love European vibes."
    },
    {
      title: "Golden Triangle Tour",
      about: "India Heritage Tour",
      price: 18000,
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763660386/Golden_Triangle_Tour_u50oyh.jpg",
      category: "Domestic",
      description: "Visit Delhi, Agra, and Jaipur to experience India's rich heritage, magnificent forts, and cultural landmarks. Perfect for history lovers and first-time travelers to India."
    },
    {
      title: "Char Dham Yatra",
      about: "Spiritual Pilgrimage",
      price: 40000,
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763660520/Char_Dham_Yatra_tuo5sy.jpg",
      category: "Spiritual",
      description: "A spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath to seek blessings and peace of mind. Suitable for devotees and nature lovers alike."
    },
    {
      title: "Goa Beach Trip",
      about: "Relaxing Beach Vacation",
      price: 15000,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Domestic",
      description: "Relax on the sunny beaches of Goa, enjoy water sports, nightlife, and explore Portuguese heritage. Ideal for families and friends seeking fun and leisure."
    },
    {
      title: "Bali Adventure",
      about: "Adventure & Nature",
      price: 50000,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Adventure",
      description: "Experience Bali's adventure sports, scenic landscapes, temples, and tropical culture on this exciting trip. Great for thrill-seekers and travelers looking for adventure."
    },
  ];

  const filteredTours = category === "All Tours" ? tours : tours.filter(t => t.category === category);

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">

      {/* Breadcrumb */}
      <div className="text-xl font-semibold px-5 mt-5 text-center">
        <span className="text-blue-500">Home | </span> Tours
      </div>

      {/* Heading */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Popular Tours</h1>
        <div className="text-red-500 font-bold text-2xl">______</div>
      </div>

      {/* Categories Menu */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              category === cat ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-6">
        {filteredTours.map((tour, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img src={tour.img} alt={tour.title} className="w-full h-60 object-cover" />

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-bold mb-1">{tour.title}</h2>
                <span className="text-sm text-gray-500 mb-2">{tour.about}</span>
                <p className="text-gray-700 text-sm mb-3">{tour.description}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-500 font-bold text-lg">₹{tour.price.toLocaleString()}</span>
                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">{tour.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
