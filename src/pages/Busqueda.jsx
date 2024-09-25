import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { movies } from "../api/moviesData";
import MoviePlayer from "../components/MoviePlayer";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recomendations from "../components/Recomendations";

export default function Busqueda() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';

    useEffect(() => {
        const filtered = movies.filter(movie => 
            movie.title && movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [query]);

    const handleMovieSelect = (movieUrl) => {
        setSelectedMovie(movieUrl);
    };

    const handleMovieTitle = (movieTitle) => {
        setMovieTitle(movieTitle);
    };

    return (
        <>
        {selectedMovie ? (
            <MoviePlayer
            movieSel={selectedMovie}
            movieTitle={movieTitle}
            setSelectedMovie={setSelectedMovie}
            />
        ) : (
            <>
            <Header />
            <Categories categorie={'Búsqueda'}>
                <Recomendations
                secTitle={'Resultados de búsqueda'}
                moviesArray={filteredMovies}
                onMovieSelect={handleMovieSelect}
                onMovieTitle={handleMovieTitle} />
            </Categories>
            <Footer />
            </>
        )}
        </>
    );
}
