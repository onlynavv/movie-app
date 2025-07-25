import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useMoviesContext } from '../context/moviesContext';
import MovieDetail from './MovieDetail';
import React from 'react';

jest.mock('../context/moviesContext');

const mockMovie = {
  name: 'Test Movie',
  videoImage: 'test-image.jpg',
  totalViews: { total: 1234 },
  provider: 'Sky',
  description: 'test description',
  genre: ['kids', 'comedy'],
  duration: 120,
  prevTotalViews: { total: 1000 }
};

describe('MovieDetail', () => {
  it('renders movie details when movie is found', () => {
    useMoviesContext.mockReturnValue({
      moviesData: { movies: [mockMovie] }
    });
    render(
      <MemoryRouter initialEntries={[`/movie/${mockMovie.name}`]}>
        <Routes>
          <Route path="/movie/:name" element={<MovieDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Test Movie/)).toBeInTheDocument();
  });
});
