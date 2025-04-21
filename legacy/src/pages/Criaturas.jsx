import { useState } from "react";
import { criaturasArray, criaturas10Array, criaturasAliensArray, criaturasDemoniacasArray } from "../api/moviesData";
import MoviePlayer from "../components/MoviePlayer";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recomendations from "../components/Recomendations";

export default function Criaturas() {
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
        <Categories categorie={'Criaturas'}>
            <Recomendations
            secTitle={'Recomendaciones de Criaturas'}
            moviesArray={criaturas10Array}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Criaturas demoníacas'}
            moviesArray={criaturasDemoniacasArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Aliens y mutantes'}
            moviesArray={criaturasAliensArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Todas las criaturas'}
            moviesArray={criaturasArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
        </Categories>
        <Footer />
        </>
      )}
    </>)
}