// WatchlistContext.js

import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function useWatchlist() {
  return useContext(WatchlistContext);
}

export function WatchlistProvider({ children }) {
  //   const [watchlist, setWatchlist] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem("watchlistMovies");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });

  //   const addToWatchlist = (movie) => {
  //     setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  //   };
  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = [...prevWatchlist, movie];
      localStorage.setItem("watchlistMovies", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter(
        (watched) => watched.id !== movie.id
      );
      localStorage.setItem("watchlistMovies", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}
