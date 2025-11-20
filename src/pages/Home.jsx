import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  // Side nav
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  // Slick Slider initialize
  useEffect(() => {
    $(".slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  }, []);

  return (
    <>
      {/* GAP for Global Navbar */}
      <div className="h-[0px]"></div>

      {/* Hero Section */}
      <div className="relative mt-2">
        <img
          src="https://res.cloudinary.com/dokijn7ni/image/upload/v1763651197/Mainlogo_tmfil7.png"
          className="w-full h-auto"
          alt="main"
          loading="lazy"
        />
        <div className="absolute top-1/3 left-4 sm:left-10 text-white drop-shadow-lg">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">OPEN YOUR EYE TO</p>
          <p className="text-3xl sm:text-4xl md:text-[45px] font-bold">THE HIDDEN WORLD</p>
          <button className="mt-4 bg-orange-400 px-4 sm:px-6 py-2 rounded-md hover:bg-orange-500 text-white font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Blogging Section */}
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Blogging</h1>
        <p className="mt-2 text-lg sm:text-xl">Pick a certain destination and go ahead!</p>
        <hr className="border-red-500 w-20 mx-auto my-4" />
      </div>

      {/* Blogging Grid */}
      <div className="grid md:grid-cols-2 gap-6 p-4 md:p-6">
        <div className="relative">
          <img src="/src/assets/img/Blog1.jpg" className="w-full rounded-md" />
          <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl md:text-2xl drop-shadow-lg">
            Blue Laguna of Greece
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img src="/src/assets/img/Blog2.jpg" className="w-full rounded-md" />
            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl drop-shadow-lg">
              Journey to Spain
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/07/59/architecture-1868265_1280.jpg"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl drop-shadow-lg">
              San Francisco beauty
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/21/04/36/hot-air-balloons-5505217_960_720.jpg"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl drop-shadow-lg">
              Turkey, Cappadonia
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/15/15/48/seals-6627197_1280.jpg"
              className="w-full rounded-md"
            />
            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl drop-shadow-lg">
              Canary Islands
            </div>
          </div>
        </div>
      </div>

      {/* Hot Deals */}
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Hot Deals</h1>
        <p className="mt-2 text-lg sm:text-xl">Use our special offers for exploring the world</p>
        <hr className="border-red-500 w-20 mx-auto my-4" />
      </div>

      {/* Slick Slider */}
      <div className="slider px-4 md:px-6">
        <img src="/src/assets/img/parashoot.jpg" className="rounded-md" />
        <img src="/src/assets/img/imghome.jpg" className="rounded-md" />
        <img src="/src/assets/img/travels.jpg" className="rounded-md" />
        <img src="/src/assets/img/hello.jpg" className="rounded-md" />
      </div>

      {/* Email / Discover Section */}
      <div className="grid md:grid-cols-2 gap-6 p-6 items-center mt-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            The World Is <br /> For You Buddy!
          </h2>
          <p className="text-lg sm:text-xl mt-4">
            Discover the world by travelling to different places.
          </p>
        </div>
        <div>
          <img src="/src/assets/img/hello.jpg" className="rounded-md" />
        </div>
      </div>

      {/* India Tours */}
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">India Tours</h1>
        <p className="text-lg sm:text-xl mt-2">
          India provides a lot of opportunity to relax, learn something new and be excited.
        </p>
        <hr className="border-red-500 w-20 mx-auto my-4" />
      </div>

      {/* India Tour Grid */}
      <div className="flex flex-wrap gap-6 justify-center mt-6 px-4">
        {[
          { img: "/src/assets/img/manali.jpg", name: "Manali", link: "https://www.incredibleindia.gov.in/en/himachal-pradesh/manali" },
          { img: "/src/assets/img/Darjleeng.jpg", name: "Darjeeling" },
          { img: "/src/assets/img/Rishikesh.jpg", name: "Rishikesh & Haridwar", link: "https://www.gtholidays.in/package/haridwar-rishikesh-tour-package/" },
          { img: "/src/assets/img/ladakh.jpg", name: "Leh Ladakh", link: "https://www.lehladakhindia.com/" },
          { img: "/src/assets/img/Goa.jpg", name: "Goa", link: "https://goa-tourism.com/" },
          { img: "/src/assets/img/Kerla.jpg", name: "Kerala", link: "https://www.keralatourism.org/" },
          { img: "/src/assets/img/Udaipur.jpg", name: "Udaipur", link: "https://www.incredibleindia.gov.in/en/rajasthan/udaipur" },
          { img: "/src/assets/img/Andaman.jpg", name: "Andaman & Nicobar Islands", link: "https://www.andamantourism.gov.in/" },
        ].map((tour, i) => (
          <div key={i} className="w-64 relative group rounded-md overflow-hidden shadow-lg">
            <img src={tour.img} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              {tour.link ? (
                <a href={tour.link} target="_blank" rel="noopener noreferrer" className="text-white text-lg sm:text-xl font-semibold underline text-center">
                  {tour.name}
                </a>
              ) : (
                <p className="text-white text-lg sm:text-xl font-semibold text-center">{tour.name}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
