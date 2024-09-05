export default function Previews() {
    return(
    <div className="relative h-[550px] md:h-[400px] w-[100%] md:w-[100%] overflow-hidden mt-2">
        <iframe
          className="absolute -top-36 md:-top-40 -left-60 md:left-0 w-[300%] md:w-full h-[800px]"
          src="https://www.youtube.com/embed/oO0DvpIWhd0?autoplay=1&mute=1&controls=0&loop=1&playlist=oO0DvpIWhd0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
  
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-[600px] md:h-[250px]">
          <h1 className="text-white text-4xl">Aquí iria titulo de pelicula recomendada</h1>
          <p>Aqui algun texto de la sinopsis y demas info</p>
          <p>Aqui espacio para las fotos</p>
          <p>Aqui los botones</p>
        </div>
    </div>)
}