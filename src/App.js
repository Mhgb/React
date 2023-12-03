import { useEffect, useState } from 'react';
import searchIcon from './search-icon.png';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=2b02307c'

function App() {

  const [movies,setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); 

    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() =>{
    searchMovies('Ironman');
  },[])

  return (
    <>
      <h1>MovieWorld</h1>
      <div className='searchMovies'>
        <input placeholder='search a movie' onChange={(e) => setSearchKeyword(e.target.value)}></input>
        <img src={searchIcon} alt='search' onClick={() => {if(searchKeyword != '') searchMovies(searchKeyword);}}></img>
      </div>
      {
        movies.length>0 
        ? (
          <div className='movies'>
            {
              movies.map((movie) => (
              <MovieCard movie={movie}/>))
            }
          </div>
        ):(
          <div className='empty'>
            <h1>No movies found</h1>
          </div>
        )
      }
    </>
  );
}

export default App;
