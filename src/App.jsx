import { useState } from 'react';
import './App.css';
import MoviesCont from './assets/components/MoviesCont';
import Header from './assets/components/Header';
import MoviePlayer from './assets/components/MoviePlayer';
import Previews from './assets/components/Previews';
import Footer from './assets/components/Footer';
import Categories from './assets/components/Categories';
import Recomendations from './assets/components/Recomendations';
import { movies } from './api/moviesData';

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
    <div className='bg-black h-[100vh] w-[100vw] overflow-x-hidden'>
      <Header />
      <Previews />
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
      <Categories categorie={'Criaturas'}>
        <Recomendations
        secTitle={'Prueba'}
        moviesArray={movies}
         />
      </Categories> 
      <Footer />
    </div>
  );
}

export default App;
