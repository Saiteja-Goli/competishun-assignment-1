import React, { useEffect, useState } from 'react';
import { useFavorite } from './FavoriteContext';
import { useWatchlist } from './WatchlistContext';

const Movies = () => {
    const [movie, setMovie] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const { favorites, addToFavorites, removeFavoriteMovie } = useFavorite();
    const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();


    const fetchData = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ee599bc93261085f014d3dcd63a34486')
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setMovie(data.results);
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        // Filter movies based on searchQuery and update searchResults
        const filteredMovies = movie.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredMovies);
    }, [searchQuery, movie]);

    const handleOpenModal = (ele) => {
        setSelectedMovie(ele);
        console.log(ele);
    };
    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    const handlePlayNow = () => {
        alert("Movie Playing")
    }

    const handleAddToFavorites = (movie) => {
        const isFavorite = favorites.some((fav) => fav.id === movie.id);

        if (isFavorite) {
            removeFavoriteMovie(movie);
        } else {
            addToFavorites(movie);
        }
    };

    const handleWatchlist = (movie) => {
        const isWatchlisted = watchlist.some((watched) => watched.id === movie.id);

        if (isWatchlisted) {
            removeFromWatchlist(movie);
        } else {
            addToWatchlist(movie);
        }
    };
    const movieCards = { display: "grid",
     gridTemplateColumns: "1fr 1fr 1fr", 
     gap: "10px" ,
    }
    return (
        <div>
            <h1>Movies</h1>
            <input type="text" placeholder='Enter Movie Name' value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                    width: "30%",
                    height: "30px",
                    fontSize: "20px",
                    borderRadius: "10px",
                    marginBottom: "20px"
                }} />
            <div style={movieCards}>{
                searchResults.map((ele, index) => {
                    return <div key={index} style={{
                         border: "0px solid black",
                         boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                         padding:"50px 0 50px 0px",
                         margin:"0 0px",
                         borderRadius:"20px"
                         }}>
                        <img src={ele.poster_path} alt="Movie" />
                        <h5>TITLE : {ele.title}</h5>
                        <h6>{ele.release_date}</h6>
                        <button onClick={() => handleOpenModal(ele)}>Details</button>
                        <button onClick={() => handleAddToFavorites(ele)}>
                            {favorites.some((fav) => fav.id === ele.id)
                                ? 'Remove from Favorites'
                                : 'Add to Favorites'}
                        </button>
                        <button onClick={() => handleWatchlist(ele)}>
                            {watchlist.some((watched) => watched.id === ele.id)
                                ? 'Remove from Watchlist'
                                : 'Add to Watchlist'}
                        </button>

                    </div>
                })
            }
            </div>
            {selectedMovie && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <img src={selectedMovie.poster_path} alt="Movie" />
                        <h4>{selectedMovie.title}</h4>
                        <p>Overview : {selectedMovie.overview}</p>
                        <p>Release-Date :{selectedMovie.release_date}</p>
                        <p>Rating:{selectedMovie.vote_average}</p>
                        <button onClick={handlePlayNow}>PLAY NOW</button>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Movies;
