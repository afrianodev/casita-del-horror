import MoviePlayer from "../components/MoviePlayer"
import Header from "../components/Header"
import Previews from "../components/Previews"
import MoviesCont from "../components/MoviesCont"
import Footer from "../components/Footer"

import { useState } from "react"
import Recomendations from "../components/Recomendations"
import { random10Movies, randomMovies, pipeArray, eliArray, ultimasMovies } from "../api/moviesData"
import PopUpMovieInfo from "../components/PopUpMovieInfo"

export default function Home() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [popUp, setPopUp] = useState(false)
    const [poster, setPoster] = useState(null)
    const [title, setTitle] = useState(null)
    const [sinopsis, setSinopsis] = useState(null)
    const [year, setYear] = useState(null)
    // const [currentSlideIndex, setCurrentSlideIndex] = useState(5);
    // const [currentMovie, setCurrentMovie] = useState(null); // State for current movie data
  
    const handleMovieSelect = (movieUrl) => {
      setSelectedMovie(movieUrl);
    };
  
    const handleMovieTitle = (movieTitle) => {
      setTitle(movieTitle)
    }

    const handleMoviePoster = (moviePoster) => {
      setPoster(moviePoster)
    }

    const handleMovieSinopsis = (movieSinopsis) => {
      setSinopsis(movieSinopsis)
    }

    const handleMovieYear = (movieYear) => {
      setYear(movieYear)
    }

    return(<>
    {selectedMovie && 
        <MoviePlayer
        movieSel={selectedMovie}
        movieTitle={title}
        setSelectedMovie={setSelectedMovie}
    />}
    {popUp && <PopUpMovieInfo onClose={()=> setPopUp(false)}
    moviePoster={poster}
    // movieSinopsis={}
    movieTitle={title}
    movieSinopsis={sinopsis}
    movieYear={year}
    />}
    {!selectedMovie && 
    <>
    <Header />
    <Previews
    onMovieSelect={handleMovieSelect}
    onMovieTitle={handleMovieTitle}
    />
    <Recomendations
    secTitle={'Últimas agregadas'}
    moviesArray={ultimasMovies}
    onMovieSelect={handleMovieSelect}
    onMovieTitle={handleMovieTitle}
    onOpen={()=> setPopUp(true)}
    onMoviePoster={handleMoviePoster}
    onMovieSinopsis={handleMovieSinopsis}
    onMovieYear={handleMovieYear}
    />
    <Recomendations 
    secTitle={'Recomendaciones random'}
    moviesArray={random10Movies}
    onMovieSelect={handleMovieSelect}
    onMovieTitle={handleMovieTitle}
    onOpen={()=> setPopUp(true)}
    onMoviePoster={handleMoviePoster}
    onMovieSinopsis={handleMovieSinopsis}
    onMovieYear={handleMovieYear}
    />
    <Recomendations 
    secTitle={'Recomendaciones Pipe'}
    moviesArray={pipeArray}
    onMovieSelect={handleMovieSelect}
    onMovieTitle={handleMovieTitle}
    onOpen={()=> setPopUp(true)}
    onMoviePoster={handleMoviePoster}
    onMovieSinopsis={handleMovieSinopsis}
    onMovieYear={handleMovieYear}
    />
    <Recomendations 
    secTitle={'Recomendaciones Eliza'}
    moviesArray={eliArray}
    onMovieSelect={handleMovieSelect}
    onMovieTitle={handleMovieTitle}
    onOpen={()=> setPopUp(true)}
    onMoviePoster={handleMoviePoster}
    onMovieSinopsis={handleMovieSinopsis}
    onMovieYear={handleMovieYear}
    />
    <Recomendations 
    secTitle={'Todas las películas'}
    moviesArray={randomMovies}
    onMovieSelect={handleMovieSelect}
    onMovieTitle={handleMovieTitle}
    onOpen={()=> setPopUp(true)}
    onMoviePoster={handleMoviePoster}
    onMovieSinopsis={handleMovieSinopsis}
    onMovieYear={handleMovieYear}
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
    }
    </>)
}