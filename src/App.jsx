import { useState } from 'react';
import './App.css';
import MoviesCont from './assets/components/MoviesCont';
import Header from './assets/components/Header';
import MoviePlayer from './assets/components/MoviePlayer';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(5);
  const [currentMovie, setCurrentMovie] = useState(null); // State for current movie data

  const handleMovieSelect = (movieUrl, movieUrlIndex) => {
    setSelectedMovie(movieUrl);
    setCurrentSlideIndex(movieUrlIndex);
  };

  const handleMovieChange = (movie) => {
    setCurrentMovie(movie); // Update current movie data
  };

  return (
    <div className='bg-gray-900 h-[100vh] w-[100vw] overflow-x-hidden'>
      <Header />
      {selectedMovie ? (
        <MoviePlayer
        movieSel={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setCurrentMovie={setCurrentMovie} />
      ) : (
        <MoviesCont
          onMovieSelect={handleMovieSelect}
          onMovieChange={handleMovieChange} // Pass the new callback prop
          initialSlide={currentSlideIndex}
        />
      )}
    </div>
  );
}

export default App;
