import { useState } from "react";
import MoviePlayer from "../components/MoviePlayer";
import { paranormalArray, paranormal10Array, paranormalposesionesArray, paranormalEmbrujadosArray } from "../api/moviesData";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recomendations from "../components/Recomendations";

export default function Paranormal() {
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
        <Categories categorie={'Paranormal'}>
            <Recomendations
            secTitle={'Recomendaciones de Paranormal'}
            moviesArray={paranormal10Array}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Posesiones'}
            moviesArray={paranormalposesionesArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Lugares embrujados'}
            moviesArray={paranormalEmbrujadosArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Todas las de Paranormal'}
            moviesArray={paranormalArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
        </Categories>
        <Footer />
        </>
      )}
    </>)
}