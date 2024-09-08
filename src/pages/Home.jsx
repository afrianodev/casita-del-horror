import MoviePlayer from "../components/MoviePlayer"
import Header from "../components/Header"
import Previews from "../components/Previews"
import MoviesCont from "../components/MoviesCont"
import Footer from "../components/Footer"

import { useState } from "react"
import Recomendations from "../components/Recomendations"
import { random10Movies, randomMovies, pipeArray, eliArray } from "../api/moviesData"

export default function Home() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    // const [currentSlideIndex, setCurrentSlideIndex] = useState(5);
    // const [currentMovie, setCurrentMovie] = useState(null); // State for current movie data
  
    const handleMovieSelect = (movieUrl) => {
      setSelectedMovie(movieUrl);
    };
  
    const handleMovieTitle = (movieTitle) => {
      setMovieTitle(movieTitle);
    }

    return(<>
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
        <Recomendations 
        secTitle={'Recomendaciones random'}
        moviesArray={random10Movies}
        onMovieSelect={handleMovieSelect}
        onMovieTitle={handleMovieTitle}
        />
        <Recomendations 
        secTitle={'Recomendaciones Pipe'}
        moviesArray={pipeArray}
        onMovieSelect={handleMovieSelect}
        onMovieTitle={handleMovieTitle}
        />
        <Recomendations 
        secTitle={'Recomendaciones Eliza'}
        moviesArray={eliArray}
        onMovieSelect={handleMovieSelect}
        onMovieTitle={handleMovieTitle}
        />
        <Recomendations 
        secTitle={'Todas las películas'}
        moviesArray={randomMovies}
        onMovieSelect={handleMovieSelect}
        onMovieTitle={handleMovieTitle}
        />
        {/* <MoviesCont
          // onMovieSelect={handleMovieSelect}
          // onMovieChange={handleMovieChange} // Pass the new callback prop
          // initialSlide={currentSlideIndex}
          // onChange={handleMovieSelect}
          onMovieSelect={handleMovieSelect}
          onMovieTitle={handleMovieTitle}
        /> */}
        <Footer />
        </>
      )}
    </>)
}