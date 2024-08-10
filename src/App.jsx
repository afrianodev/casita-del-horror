import { useState } from 'react';
import './App.css';
import MoviesCont from './assets/components/MoviesCont';
import Header from './assets/components/Header';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleMovieSelect = (movieUrl, movieUrlIndex) => {
    setSelectedMovie(movieUrl);
    setCurrentSlideIndex(movieUrlIndex);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='bg-gray-900 h-[100vh] w-full overflow-x-hidden'>
      <Header />
      {selectedMovie ? (
        <div>
          <iframe
            src={selectedMovie}
            title="Movie Player"
            className="w-[90vw] h-[80vh] mx-auto mt-4"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
          ></iframe>
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded"
          >
            Volver
          </button>
        </div>
      ) : (
        <MoviesCont
          onMovieSelect={(movieUrl, movieUrlIndex) => handleMovieSelect(movieUrl, movieUrlIndex)}
          initialSlide={currentSlideIndex}
        />
      )}
    </div>
  );
}

export default App;
