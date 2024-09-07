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
  const [movieTitle, setMovieTitle] = useState('');
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(5);
  // const [currentMovie, setCurrentMovie] = useState(null); // State for current movie data

  const handleMovieSelect = (movieUrl) => {
    setSelectedMovie(movieUrl);
    // setCurrentSlideIndex(movieUrlIndex);
  };

  const handleMovieTitle = (movieTitle) => {
    setMovieTitle(movieTitle);
  }

  // const handleMovieChange = (movie) => {
  //   setCurrentMovie(movie); // Update current movie data
  // };

  return (
    <div className='bg-black h-[100vh] w-full overflow-x-hidden'>
      {selectedMovie ? (
        <MoviePlayer
        movieSel={selectedMovie}
        movieTitle={movieTitle}
        setSelectedMovie={setSelectedMovie}
 />
      ) : (
        <>
        <Header />
        <Previews />
        <MoviesCont
          // onMovieSelect={handleMovieSelect}
          // onMovieChange={handleMovieChange} // Pass the new callback prop
          // initialSlide={currentSlideIndex}
          // onChange={handleMovieSelect}
          onMovieSelect={handleMovieSelect}
          onMovieTitle={handleMovieTitle}
        />
        <Footer />
        </>
      )}
      {/* <Categories categorie={'Criaturas'}>
        <Recomendations
        secTitle={'Prueba'}
        moviesArray={movies}
         />
      </Categories>  */}
      
    </div>
  );
}

export default App;
