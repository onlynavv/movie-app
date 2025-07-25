import React from 'react'
import { Link } from 'react-router-dom'
import { LOGOS } from '../../constants/constants';
import './MovieCard.css'
import { calculateTrendingValue } from '../../utils/utils';

const MovieCard = ({name, image, totalViews, prevViews, provider}) => {
  const providerLogo = LOGOS.find(logo => logo.name.toLowerCase() === provider.toLowerCase());
  const { diff, arrow } = calculateTrendingValue(totalViews.total, prevViews.total);
  return (
    <Link to={`/movie/${name}`} className='movie-card-link'>
        <div className='movie-card'>
        <img src={image} alt={name} />
        <div className='movie-card-info'>
          <h2>{name}</h2>
          <p>{totalViews.total} views <span className={`trending-block ${arrow}`}>{diff} {arrow === 'increase' ? '📈' : '📉'}</span></p>
          {providerLogo ? (
            <img src={providerLogo.image} alt={provider} className="provider-logo" />
          ) : (
            <p>Provider: {provider}</p>
          )}
        </div>
        </div>
    </Link>
  )
}

export default MovieCard