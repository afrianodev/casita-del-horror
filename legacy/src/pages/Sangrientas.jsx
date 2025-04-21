import { useState } from "react";

import { sangrientasArray, sangrientas10Array, sangrientasSlasherArray, sangrientasGoreArray } from "../api/moviesData";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recomendations from "../components/Recomendations";
import MoviePlayer from "../components/MoviePlayer";

export default function Sangrientas() {
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
        <Categories categorie={'Sangrientas'}>
            <Recomendations
            secTitle={'Recomendaciones sangrientas'}
            moviesArray={sangrientas10Array}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Slasher'}
            moviesArray={sangrientasSlasherArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Más gore y extremas'}
            moviesArray={sangrientasGoreArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Todas las sangrientas'}
            moviesArray={sangrientasArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
        </Categories>
        <Footer />
        </>
      )}
    </>)
}