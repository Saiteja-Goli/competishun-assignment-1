import React from 'react';
import { useFavorite } from './FavoriteContext';

const Favorites = () => {
  const { favorites } = useFavorite();
  console.log(favorites)

  return (
    <div>
      <h2>Favourites</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
      }}> {favorites.map((favorite, index) => (
        <div style={{
          border: "0px solid black",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          padding: "50px 0 50px 0px",
          margin: "0 0px",
          borderRadius: "20px"
        }} key={index}>
          <img src={favorite.poster_path} alt="Movie" />
          <h5>TITLE : {favorite.title}</h5>
          <h6>{favorite.release_date}</h6>
        </div>
      ))}</div>
    </div>
  );
}

export default Favorites;