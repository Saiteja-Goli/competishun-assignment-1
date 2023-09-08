import React from 'react'
import { useWatchlist } from './WatchlistContext';

const Watchlist = () => {
  const { watchlist } = useWatchlist();

  return (
    <div>
      <h2>Watchlist</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
      }}> {watchlist.map((watchlist, index) => (
        <div style={{
          border: "0px solid black",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          padding: "50px 0 50px 0px",
          margin: "0 0px",
          borderRadius: "20px"
        }} key={index}>
          <img src={watchlist.poster_path} alt="Movie" />
          <h5>TITLE : {watchlist.title}</h5>
          <h6>{watchlist.release_date}</h6>
        </div>
      ))}</div>
    </div>
  )
}

export default Watchlist
