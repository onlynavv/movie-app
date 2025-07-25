import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMoviesContext } from '../context/moviesContext';
import { calculateTrendingValue, formatSecsToMins } from '../utils/utils';
import ViewsChart from '../components/Chart/ViewsChart/ViewsChart';
import { LOGOS } from '../constants/constants';
import './MovieDetail.css';

function MovieDetail() {
  const { name } = useParams();
  const {moviesData: { movies }} = useMoviesContext();
  const navigate = useNavigate();

  const singleMovie = movies?.find(movie => movie.name === name);
  if (!singleMovie) {
    return <h2>Movie not found</h2>;
  }
  const durationInMinutes = formatSecsToMins(singleMovie.duration);
  const providerLogos = LOGOS.find(logo => logo.name.toLowerCase() === singleMovie.provider.toLowerCase());

  const { diff, arrow } = calculateTrendingValue(singleMovie.totalViews.total, singleMovie.prevTotalViews.total);

  return (
    <div className='movie-detail'>
      <button className='back-button' onClick={() => navigate('/')}>Back</button>
      <div>
        <h2>{singleMovie.name}</h2>
        <div className='movie-img-container'>
          <img src={singleMovie.videoImage} alt={singleMovie.name} />
          {providerLogos ? (
            <img src={providerLogos.image} alt={singleMovie.provider} className="provider-logo" />
          ) : (
            <p>{singleMovie.provider}</p>
          )}
        </div>
      </div>
      
      <div>
        <p>{singleMovie.totalViews.total} views <span className={`trending-block ${arrow}`}>{diff} {arrow === 'increase' ? '📈' : '📉'}</span></p>
        <p>{singleMovie.description}</p>
        <div>
          <p>Genre: {singleMovie.genre.join(', ')}</p>
          <p>Duration: {durationInMinutes}</p>
        </div>
      </div>
      
      <ViewsChart totalViews={singleMovie.totalViews} prevTotalViews={singleMovie.prevTotalViews} />
    </div>
  );
}

export default MovieDetail;
