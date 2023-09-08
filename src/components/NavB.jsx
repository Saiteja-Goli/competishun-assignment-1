// import React from 'react'
// import { Link } from 'react-router-dom'


// const NavB = () => {

//     return (
//         <div >
//          <Link to="/">Home</Link>
//             <Link to="/favourites">Favourites</Link>
//             <Link to="/watchlist">Watchlist</Link>
//         </div>
//     )
// }

// export default NavB
import React from 'react';
import { Link } from 'react-router-dom';

const NavB = () => {
    return (
        <div className="navbar"> {/* Apply the "navbar" class */}
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="/watchlist">Watchlist</Link>
        </div>
    );
}

export default NavB;
