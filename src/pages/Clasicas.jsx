import { useState } from "react";
import { clasicaArray, clasicaViejitasArray, clasicaModernasArray, clasica10Array } from "../api/moviesData";
import MoviePlayer from "../components/MoviePlayer";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recomendations from "../components/Recomendations";

export default function Clasicas() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');

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
        <Categories categorie={'Clásicas'}>
            <Recomendations
            secTitle={'Recomendación de Clásicas'}
            moviesArray={clasica10Array}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Clásicas viejitas'}
            moviesArray={clasicaViejitasArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Clásicas más modernas'}
            moviesArray={clasicaModernasArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Todas las clásicas'}
            moviesArray={clasicaArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
        </Categories>
        <Footer />
        </>
      )}
    </>)
}