import React from "react";

const Services = () => {
  return (
    <div className="w-full pt-10">

      {/* ⭐ About Us Heading */}
      <h2 className="text-center mt-10 text-3xl md:text-4xl font-bold underline">
        About Us
      </h2>

      {/* ⭐ About Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-10">

          <p className="text-lg md:text-xl leading-relaxed font-semibold">
            Welcome to our Ghumate Raho.com company, where we’ve been turning
            travel dreams into unforgettable experiences for the past{" "}
            <span className="text-red-600 font-bold">15 years</span>.
            <br /> 
            Our company is dedicated to providing exceptional travel services
            that cater to the diverse needs of our clients. Whether you're seeking
            adventure, relaxation, or cultural immersion, our expert team is
            here to ensure every journey is memorable.
            <br />
            Join us & let's create your next great travel story together.
          </p>

        </div>
      </section>

      {/* ⭐ Team Section */}
      <h3 className="text-center text-2xl md:text-3xl mt-10 font-bold underline">
        Our Team Members
      </h3>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Team Card 1 */}
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dokijn7ni/image/upload/v1763661518/Roshan_x7wt2w.jpg"
              className="w-40 h-40 object-cover"
              alt="Roshan Yadav"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xl">Roshan Yadav</h4>
                <p className="text-gray-700 font-medium">
                  "Roshan is our talented Front-End Developer, bringing designs to life with clean,
                  responsive, and user-friendly interfaces."
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Designation: <span className="font-bold">Front-End Developer</span>
                </p>
              </div>
              <div className="flex justify-around text-xl text-blue-700 mt-3">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-envelope-check-fill"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>

          {/* Team Card 2 */}
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dokijn7ni/image/upload/v1763661894/Shivam_bbiape.jpg"
              className="w-40 h-40 object-cover"
              alt="Shivam Saini"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xl">Shivam Saini</h4>
                <p className="text-gray-700 font-medium">
                  "Shivam is our skilled Backend Developer, ensuring smooth API performance
                  and secure server-side logic."
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Designation: <span className="font-bold">Backend Developer</span>
                </p>
              </div>
              <div className="flex justify-around text-xl text-blue-700 mt-3">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-envelope-check-fill"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>

          {/* ⭐ Team Card 3 - Centered */}
          {/* ⭐ Team Card 3 - Centered & Same Size */}
          {/* ⭐ Team Card 3 - Centered & Same Width */}
          <div className="md:col-span-2 flex justify-center">
            <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[500px]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                className="w-40 h-40 object-cover"
                alt="Team Member"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-xl">Soni Tiwari</h4>
                  <p className="text-gray-700 font-medium">
                    "Amit is our creative UI/UX Designer who ensures the best modern,
                    user-friendly, and visually appealing designs."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Designation: <span className="font-bold">UI/UX Designer</span>
                  </p>
                </div>
                <div className="flex justify-around text-xl text-blue-700 mt-3">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-envelope-check-fill"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
