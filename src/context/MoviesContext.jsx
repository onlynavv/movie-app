import React, { createContext, useContext, useEffect, useState } from 'react'

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([{
    movies:[],
    error: null,
    loading: true,
  }]);
  const [viewerCount, setViewerCount] = useState([{
    viewCountData: [],
    error: null,
    loading: true,
  }]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setMoviesData({ ...moviesData, loading: true });
        setViewerCount({ ...viewerCount, loading: true });
        const response = await Promise.allSettled([
          fetch('https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data'),
          fetch('https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data')
        ]);

        const [moviesRes, viewershipRes] = response;

        if (moviesRes.status === "fulfilled" && moviesRes.value.ok) {
          const movieData = await moviesRes.value.json();
          setMoviesData((prev) => ({ ...prev, movies: movieData, error: null, loading: false }));
        }else {
          const errorMsg = (moviesRes.status === "rejected" || !moviesRes.value.ok) && 'Failed to fetch movies';
          setMoviesData((prev) => ({ ...prev, error: errorMsg, loading: false }));
        }
        if (viewershipRes.status === "fulfilled" && viewershipRes.value.ok) {
          const viewerCountData = await viewershipRes.value.json();
          setViewerCount((prev) => ({ ...prev, viewCountData: viewerCountData, error: null, loading: false }));
        }else {
          const errorMsg = (viewershipRes.status === "rejected" || !viewershipRes.value.ok) && 'Failed to fetch viewer count';
          setViewerCount((prev) => ({ ...prev, error: errorMsg, loading: false }));
        }

      } finally {
        setMoviesData((prev) => ({ ...prev, loading: false }));
        setViewerCount((prev) => ({ ...prev, loading: false }));
      }
    };
    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ moviesData, viewerCount }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('use within the provider');
  }
  return context;
};