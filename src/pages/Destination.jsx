import React, { useState } from "react";

export default function Destination() {
  const [selectedTirth, setSelectedTirth] = useState(null);

  const topTirthsthal = [
    { 
      name: "Varanasi",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763653884/banaras_zyrd6k.jpg",
      description: "Varanasi is one of the oldest living cities in the world, famous for its ghats and spiritual significance. Explore Kashi Vishwanath Temple, Assi Ghat, Manikarnika Ghat, and Sarnath for spiritual and cultural experiences.",
      requirements: [
        "Comfortable cotton clothing for hot weather",
        "Modest attire for temple visits",
        "Camera for ghats and cultural activities",
        "Local guide recommended for exploring ghats safely"
      ],
      temperature: "Summer: 32–40°C, Winter: 8–20°C",
      related: ["Sarnath", "Kashi Vishwanath Temple", "Assi Ghat"]
    },
    { 
      name: "Mathura",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763655126/mathura_ouuao2.jpg",
      description: "Mathura is the birthplace of Lord Krishna, known for its temples, vibrant festivals, and cultural richness. Visit Dwarkadhish Temple, Govardhan Hill, and enjoy local sweets and handicrafts.",
      requirements: [
        "Comfortable shoes for temple walks",
        "Respectful attire covering shoulders and knees",
        "Carry water bottle and light snacks",
        "Best time to visit is during festivals for cultural experience"
      ],
      temperature: "Summer: 35–45°C, Winter: 7–22°C",
      related: ["Vrindavan", "Govardhan Hill", "Kusum Sarovar"]
    },
    { 
      name: "Haridwar",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763655231/haridwar_kbfmvj.jpg",
      description: "Haridwar is a sacred city on the banks of the Ganges, famous for Kumbh Mela and evening aarti at Har Ki Pauri. Experience spiritual rituals, ghats, and local markets.",
      requirements: [
        "Comfortable walking shoes for ghats",
        "Modest clothing for temple and rituals",
        "Carry reusable water bottle",
        "Be cautious of crowded areas during festivals"
      ],
      temperature: "Summer: 25–40°C, Winter: 10–20°C",
      related: ["Rishikund", "Mansa Devi Temple", "Chandi Devi Temple"]
    },
    { 
      name: "Rishikesh",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763655319/Rishikesh_mswtz1.jpg",
      description: "Rishikesh, the Yoga capital of the world, offers rafting, trekking, and yoga retreats amidst the Himalayas. Visit Laxman Jhula, Ram Jhula, Beatles Ashram, and Neer Garh Waterfall.",
      requirements: [
        "Comfortable trekking shoes",
        "Yoga mat if attending sessions",
        "Rafting gear available on rent",
        "Light clothing for summer, warm clothes for winter"
      ],
      temperature: "Summer: 20–35°C, Winter: 5–20°C",
      related: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Neer Garh Waterfall"]
    },
    { 
      name: "Ayodhya",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763655521/Ayodhya_acfrnx.jpg",
      description: "Ayodhya, the birthplace of Lord Rama, features ancient temples and spiritual sites. Visit Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan for a cultural experience.",
      requirements: [
        "Modest attire for temple visits",
        "Carry water bottle",
        "Best time: October–March",
        "Shoes removal before entering temples"
      ],
      temperature: "Summer: 30–40°C, Winter: 10–25°C",
      related: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan"]
    },
    { 
      name: "Dwarka",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763655626/Dwarka_g1gzpj.jpg",
      description: "Dwarka is an ancient city known for Dwarkadhish Temple and its association with Lord Krishna. Explore Bet Dwarka island by boat and visit Rukmini Devi Temple.",
      requirements: [
        "Modest attire for temple visits",
        "Boat ride optional to Bet Dwarka island",
        "Carry light snacks and water",
        "Best time: October–March"
      ],
      temperature: "Summer: 28–38°C, Winter: 12–28°C",
      related: ["Nageshwar Jyotirlinga", "Bet Dwarka", "Rukmini Devi Temple"]
    },
    { 
      name: "Chitrakoot",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763655942/Chitrakoot_uvjrtm.jpg",
      description: "Chitrakoot is a spiritual city with scenic waterfalls, ghats, and historical significance in Ramayana. Visit Ramghat, Bharat Milap Mandir, and Sati Anusuya Ashram for a divine experience.",
      requirements: [
        "Comfortable walking shoes",
        "Light clothing in summer, warm in winter",
        "Carry water for sightseeing",
        "Stay near ghats for better experience"
      ],
      temperature: "Summer: 30–40°C, Winter: 8–22°C",
      related: ["Ramghat", "Bharat Milap Mandir", "Sati Anusuya Ashram"]
    },
    { 
      name: "KaichiDham",
      img: "https://res.cloudinary.com/dokijn7ni/image/upload/v1763656078/Kaichidham_sh9dwh.jpg",
      description: "KaichiDham, located in the Himalayas, is famous for spiritual significance and scenic beauty. Trekking, nature trails, and nearby temples enhance the pilgrimage experience.",
      requirements: [
        "Warm clothing (Himalayan region is cold)",
        "Trekking shoes if planning to hike",
        "First aid kit and personal medicines",
        "Check weather conditions before traveling"
      ],
      temperature: "Summer: 15–25°C, Winter: 0–10°C",
      related: ["Nearby temples and pilgrimage routes", "Nature trails", "Himalayan viewpoints"]
    },
  ];

  return (
    <>
      {/* GAP for global navbar */}
      <div className="h-[70px]"></div>

      {/* BREADCRUMB */}
      <div className="h-[60px] bg-white w-full flex justify-center items-center">
        <h3 className="text-red-600">
          <a href="/" className="text-black hover:text-red-500">Home |</a> Destination
        </h3>
      </div>

      {/* Top 8 Tirthsthal */}
      <div className="flex flex-wrap justify-center gap-5 py-6 px-4">
        {topTirthsthal.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelectedTirth(item)}
            className="w-[300px] h-[300px] relative group cursor-pointer"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover rounded shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
              <div className="bg-green-600 text-white px-4 py-2 rounded">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Tirthsthal Modal */}
      {selectedTirth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50 overflow-auto">
          <div className="bg-white rounded shadow-md max-w-3xl w-full mx-4 p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-700 text-xl font-bold hover:text-red-500"
              onClick={() => setSelectedTirth(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedTirth.name}</h2>
            <p className="text-gray-700 mb-4">{selectedTirth.description}</p>

            <h3 className="font-semibold text-lg mb-2">Requirements before visiting:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {selectedTirth.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg mb-2">Average Temperature:</h3>
            <p className="text-gray-700 mb-4">{selectedTirth.temperature}</p>

            <h3 className="font-semibold text-lg mb-2">Related Places:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {selectedTirth.related.map((place, idx) => (
                <li key={idx}>{place}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
