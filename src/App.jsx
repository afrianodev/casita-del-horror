import { useState } from 'react';
import './App.css';
import MoviesCont from './assets/components/MoviesCont';
import Header from './assets/components/Header';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState(null); // State for current movie data

  const handleMovieSelect = (movieUrl, movieUrlIndex) => {
    setSelectedMovie(movieUrl);
    setCurrentSlideIndex(movieUrlIndex);
  };

  const handleMovieChange = (movie) => {
    setCurrentMovie(movie); // Update current movie data
  };

  const handleBack = () => {
    setSelectedMovie(null);
    setCurrentMovie(null); // Clear movie data when going back
  };

  return (
    <div className='bg-gray-900 h-[100vh] w-[100vw] overflow-x-hidden'>
      <Header />
      {selectedMovie ? (
        <div className='w-[98vw] h-[80vh] bg-gray-950 rounded-3xl mx-auto mt-5'>
          <div className='flex gap-10 justify-center'>
            <button
              onClick={handleBack}
              className="bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center text-white"
            >
              Volver
            </button>
            <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center text-white'>
              Info
            </div>
          </div>
          <iframe
            src={selectedMovie}
            title="Movie Player"
            className="w-[90%] h-[85%] mx-auto mt-4"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
          ></iframe>
        </div>
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
