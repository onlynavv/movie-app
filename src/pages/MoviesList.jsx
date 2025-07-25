import React, { useMemo, useState } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import { useMoviesContext } from '../context/moviesContext';
import './MoviesList.css';

function MoviesList() {
  const { moviesData: { movies, loading, error } } = useMoviesContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(['All']);
  const getAllGenres = useMemo(() => {
    if(!Array.isArray(movies)) return ['All'];
    const allGenres = new Set();
    movies.forEach(movie => {
      movie.genre.forEach(genre => allGenres.add(genre));
    });
    return ['All', ...Array.from(allGenres)];
  }, [JSON.stringify(movies)]);

  const filteredMovies = useMemo(() => {
    if (!Array.isArray(movies)) return [];
    return movies
      .filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(movie => 
        selectedGenre.includes('All') ||
        movie.genre.some(genre => selectedGenre.includes(genre))
      );
  }, [JSON.stringify(movies), searchTerm, selectedGenre]);
  
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Movies List</h1>
      <div className='filter-container'>
        <input type="text" 
          placeholder="Search movies..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value) } 
        />
        <div className='genre-filter'>
          {
          getAllGenres.length > 0 && getAllGenres.map((genre, index) => (
            <label key={index}>
              <input
                name='genre'
                type="checkbox"
                value={genre}
                checked={selectedGenre.includes(genre)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedGenre([...selectedGenre, genre]);
                  } else {
                    setSelectedGenre(selectedGenre.filter((item) => item !== genre));
                  }
                }}
              />
              {genre}
            </label>
          ))
        }
        </div>
      </div>
      <div className='movies-list'>
        {filteredMovies?.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.name}
            image={movie.videoImage}
            totalViews={movie.totalViews}
            prevViews={movie.prevTotalViews}
            provider={movie.provider}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
