import { movies } from "../api/moviesData"

export default function Previews({onMovieSelect, onMovieTitle, onMovieSinopsis, onMovieAño, onMovieDirector}) {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]

  const handleMovieClick = (movie) => {
    onMovieSelect(movie.url)
  }

    return(
    <div className="relative h-[450px] md:h-[360px] lg:h-[400px] w-[100%] md:w-[100%] overflow-hidden mt-2">
        <iframe
          className="absolute -top-36 md:-top-40 -left-60 md:left-0 lg:-left-[130px] w-[300%] md:w-full lg:w-[120%] h-[800px]"
          src="https://www.youtube.com/embed/oO0DvpIWhd0?autoplay=1&mute=1&controls=0&loop=1&playlist=oO0DvpIWhd0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
  
        {/* Overlay Content */}
        <div className="relative ml-[5%] md:ml-[25%] lg:ml-[32%] z-10 flex justify-center items-center w-full h-[450px] md:h-[360px] lg:h-[400px] gap-4">
          <div>
            <img className="md:w-[350px] lg:w-[250px]" src={randomMovie.src} alt={randomMovie.title} />
          </div>
          <div className="flex flex-col gap-1 md:gap-4">
            <h1 className="text-[24px] font-bold md:text-4xl w-[80%] md:w-[35%]">{randomMovie.title}</h1>
            <p className="w-[80%] md:w-[35%] lg:w-[25%]">{randomMovie.sinopsis}</p>
            <div className="flex gap-2">
              <p>{randomMovie.año}</p>
              <p>{randomMovie.director}</p>
              <p>{randomMovie.duracion}</p>
            </div>
            <div className="flex gap-2">
              {/* <div className="text-white bg-red-900 w-[120px] text-center py-2 rounded-md cursor-pointer select-none">Ver Trailer</div> */}
              <div className="text-white bg-black w-[120px] text-center py-2 rounded-md cursor-pointer select-none" onClick={()=>handleMovieClick(randomMovie)}>Ver Película</div>
            </div>
          </div>
        </div>
    </div>)
}