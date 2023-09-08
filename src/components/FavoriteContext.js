// FavoriteContext.js

import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
//   const [favorites, setFavorites] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteMovies');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

//   const addToFavorites = (movie) => {
//     setFavorites((prevFavorites) => [...prevFavorites, movie]);
//   };
const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, movie];
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFavoriteMovie = (movie) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((fav) => fav.id !== movie.id);
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites,removeFavoriteMovie}}>
      {children}
    </FavoriteContext.Provider>
  );
}
