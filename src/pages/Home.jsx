import React from 'react'
import MoviesList from './MoviesList'
import ViewerShipChart from '../components/Chart/ViewerShipChart/ViewerShipChart'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Movie App</h1>
      <p>Discover the latest movies and their viewership statistics.</p>
      <ViewerShipChart />
      <MoviesList />
    </div>
  )
}

export default Home