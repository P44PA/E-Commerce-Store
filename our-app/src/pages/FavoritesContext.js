import React, { createContext, useContext, useState } from "react";

// Create a Context for the favorites
const FavoritesContext = createContext();

// Create a provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId];
      console.log("Updated Favorites:", newFavorites);
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Create a custom hook to use the FavoritesContext
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
