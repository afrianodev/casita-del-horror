import { useState } from "react";
import MoviePlayer from "../components/MoviePlayer";
import { thrillerArray, thriller10Array, thrillerTrastorArray, thrillerAsesinosArray } from "../api/moviesData";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recomendations from "../components/Recomendations";

export default function Thriller() {
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
        <Categories categorie={'Thriller'}>
            <Recomendations
            secTitle={'Recomendaciones Thriller'}
            moviesArray={thriller10Array}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Con Asesinos'}
            moviesArray={thrillerAsesinosArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Con trastornados'}
            moviesArray={thrillerTrastorArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
            <Recomendations
            secTitle={'Todas las de Thriller'}
            moviesArray={thrillerArray}
            onMovieSelect={handleMovieSelect}
            onMovieTitle={handleMovieTitle} />
        </Categories>
        <Footer />
        </>
      )}
    </>)
}