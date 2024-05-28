import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { home } from "../data/Data";
import { Heading } from "../common/Heading";
import { BiCart, BiHeart } from "react-icons/bi";
import { Model } from "../common/Model";
import { useFavorites } from "../pages/FavoritesContext";

export const Feature = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assuming 768px as the threshold for desktop

  const handleOpen = (productid) => {
    setIsModalOpen(productid);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth > 768); // Assuming 768px as the threshold for desktop
    };

    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const renderImages = () => {
    return home.map((val, key) => (
      <div className="features flex gap-8 mt-8" key={key}>
        <div className="overflow-hidden relative m-2">
          <div className="image-container relative">
            <img src={val.img} alt={val.title} className="w-full" />
            <div className="hidden absolute bottom-0 bg-red-700 opacity-65 hover:opacity-100 w-full text-center text-white pt-4 pb-4 transition-all">
              <div className="flex justify-center align-middle">
                <button className="text-2xl">
                  <BiCart />
                </button>
                <button
                  type="button"
                  className="whitespace-nowrap uppercase"
                  onClick={() => handleOpen(val.id)}
                >
                  {val.btn}
                </button>
              </div>
            </div>
            <div className="tag absolute top-0 z-10">
              <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                {val.tag}
              </p>
            </div>
            <div
              className="hidden absolute bg-white top-0 right-0 p-4 m-4"
              onClick={() => toggleFavorite(val.id)}
            >
              <div>
                <BiHeart
                  className={`text-2xl ${
                    favorites.includes(val.id)
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="product-details text-center mt-2">
            <p className="mb-2">{val.short_description}</p>
            <p className="mb-2">{val.title}</p>
            <div className="flex justify-center mb-2 text-yellow-700">
              {val.rating &&
                val.rating.map((star, index) => <p key={index}>{star.icon}</p>)}
            </div>
            <p className="text-red-600">${val.price}</p>
          </div>
        </div>
      </div>
    ));
  };

  if (isDesktop) {
    // Render Slider for desktop
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };

    return (
      <div>
        <div>
          <Heading
            heading={"Fashion-Frontier Collections"}
            subheading={"Featured products"}
            description={"Our Best Products In The Market"}
          />
        </div>
        <div className="w-10/12 m-auto">
          <Slider {...settings}>{renderImages()}</Slider>
        </div>
        <Model
          isModalOpen={isModalOpen !== null}
          data={home.find((feature) => feature.id === isModalOpen)}
          handleClose={handleClose}
        />
      </div>
    );
  } else {
    // Render individual images for mobile
    return (
      <div>
        <div>
          <Heading
            heading={"Fashion-Frontier Collections"}
            subheading={"Featured products"}
            description={"Our Best Products In The Market"}
          />
        </div>
        <div className="w-10/12 m-auto">{renderImages()}</div>
        <Model
          isModalOpen={isModalOpen !== null}
          data={home.find((feature) => feature.id === isModalOpen)}
          handleClose={handleClose}
        />
      </div>
    );
  }
};
