import React from "react";
import { useFavorites } from "./FavoritesContext"; // Adjust the import path
import { feateures } from "../data/Data"; // Import your products data
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteProducts = feateures.filter((product) =>
    favorites.includes(product.id)
  );

  console.log("Favorite Products:", favoriteProducts);

  return (
    <div className="w-10/12 m-auto">
      <h2 className="text-4xl my-4 text-center text-red-600" >Your Favorites</h2>
      {favoriteProducts.length === 0 ? (
        
        <div className="flex justify-center items-center m-10">
        {/* <img src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg" width={400} height={400}></img> */}
        <img src="../images\NothinHere.png" className="flex justify-center items-center m-10" width={400} height={400}></img>
        {/* <p className="">You have no favorite items.</p> */}
        </div>
       
      ) : (
        <div className="grid grid-cols-4 gap-8">
          {favoriteProducts.map((product) => (
            <div className="features flex gap-8 mt-8" key={product.id}>
              <div className="overflow-hidden relative m-2">
                <div className="image-container relative">
                  <img
                    src={product.img}
                    alt={product.category}
                    className="w-full"
                  />
                  <div className="hidden absolute bottom-0 bg-red-700 opacity-65 hover:opacity-100 w-full text-center text-white pt-4 pb-4 transition-all">
                    <div className="flex justify-center align-middle">
                      <Link to={`/product/${product.id}`} className="text-2xl">
                        <BiHeart />
                      </Link>
                      <button
                        type="button"
                        className="whitespace-nowrap uppercase"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        {product.btn}
                      </button>
                    </div>
                  </div>
                  <div className="tag absolute top-0 z-10">
                    <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                      {product.tag}
                    </p>
                  </div>
                  <div
                    className="absolute top-0 right-0 p-4 m-4 cursor-pointer"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <BiHeart
                      className={`text-2xl ${
                        favorites.includes(product.id)
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
                <div className="product-details text-center mt-2">
                  <p className="mb-2">{product.short_description}</p>
                  <p className="mb-2">{product.title}</p>
                  <div className="flex justify-center mb-2 text-yellow-700">
                    {product.rating &&
                      product.rating.map((star, index) => (
                        <p key={index}>{star.icon}</p>
                      ))}
                  </div>
                  <p className="text-red-600">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
