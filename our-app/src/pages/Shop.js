import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { feateures } from "../data/Data";
import { BiCart, BiHeart } from "react-icons/bi";
import { Model } from "../common/Model";
import { useFavorites } from "./FavoritesContext";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { favorites, toggleFavorite } = useFavorites();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");

    if (categoryParam) {
      setCategory(categoryParam);
    }

    let filtered = feateures;
    if (categoryParam) {
      filtered = filtered.filter(
        (product) => product.category === categoryParam
      );
    }

    if (searchParam) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchParam.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [location.search]);

  const handleOpen = (productid) => {
    setIsModalOpen(productid);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("category", newCategory);
    navigate(`/shop?${searchParams.toString()}`);
  };

  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="flex justify-center mb-8">
          <div style={{ marginRight: "20px" }}>
            <button
              className={`mx-2 bg-gray-300 px-6 py-3 rounded-full font-semibold w-24 ${
                category === "Womens"
                  ? "bg-blue-500 text-gray-600"
                  : "bg-gray-100 text-white"
              }`}
              onClick={() => handleCategoryChange("Womens")}
            >
              Womens
            </button>
          </div>
          <button
            className={`mx-2 bg-gray-300 px-6 py-3 rounded-full font-semibold w-24 ${
              category === "Mens"
                ? "bg-blue-500 text-gray-600"
                : "bg-gray-100 text-white"
            }`}
            onClick={() => handleCategoryChange("Mens")}
          >
            Mens
          </button>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-4 gap-8">
          {filteredProducts.map((val, key) => (
            <div className="features flex gap-8 mt-8" key={key}>
              <div className="overflow-hidden relative m-2">
                <div className="image-container relative">
                  <img src={val.img} alt={val.category} className="w-full" />
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
                    className="absolute top-0 right-0 p-4 m-4 cursor-pointer"
                    onClick={() => toggleFavorite(val.id)}
                  >
                    <BiHeart
                      className={`text-2xl ${
                        favorites.includes(val.id)
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
                <div className="product-details text-center mt-2">
                  <p className="mb-2">{val.short_description}</p>
                  <p className="mb-2">{val.title}</p>
                  <div className="flex justify-center mb-2 text-yellow-700">
                    {val.rating &&
                      val.rating.map((star, index) => (
                        <p key={index}>{star.icon}</p>
                      ))}
                  </div>
                  <p className="text-red-600">${val.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
          <div className="flex flex-col items-center justify-center m-10">
            <p className="text-xl text-gray-600 mb-4">No products found.</p>
            <img
              src="../images/NothinHere.png"
              width={400}
              height={400}
              alt="nothing"
            />
          </div>
        )}
      </div>
        
      <Model
        isModalOpen={isModalOpen !== null}
        data={feateures.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Shop;
