import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:name" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
