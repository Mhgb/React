import React from "react";

function MovieCard({movie}) {
    return(
        <div className='movie-card'>
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img src={movie.Poster != 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}></img>
            </div>
            <div>
              <p>{movie.Type}</p>
              <h2>{movie.Title}</h2>
            </div>            
        </div>
    );
}

export default MovieCard;