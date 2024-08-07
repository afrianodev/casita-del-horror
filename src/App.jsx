import { useState } from 'react';
import './App.css';
import MoviesCont from './assets/components/MoviesCont';
import Header from './assets/components/Header';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movieUrl) => {
    setSelectedMovie(movieUrl);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='container bg-black'>
      <Header />
      {selectedMovie ? (
        <div>
          <iframe
            src={selectedMovie}
            title="Movie Player"
            className="w-full h-screen"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
          ></iframe>
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded"
          >
            Back
          </button>
        </div>
      ) : (
        <MoviesCont onMovieSelect={handleMovieSelect} />
      )}
    </div>
  );
}

export default App;
