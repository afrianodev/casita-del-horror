export default function Categories({categorie, categorieArray, children}) {
    return(
    <div className="w-[100vw]">
        <div className="relative h-[150px] md:h-[170px] lg:h-[230px] w-[100%] md:w-[100%] overflow-hidden mt-2">
            <iframe
            className="absolute top-0 md:-top-[250px] lg:-top-[200px] -left-[400px] md:left-0 w-[300%] md:w-full h-[300px] md:h-[800px]"
            src="https://www.youtube.com/embed/qwBc3mw7NTs?autoplay=1&mute=1&controls=0&loop=1&playlist=qwBc3mw7NTs"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            ></iframe>
  
            {/* Overlay Content */}
            <div className="relative mt-2 ml-[5%] text-[40px] md:text-[60px] lg:ml-[7%] lg:text-[80px] lg:h-[230px] z-10 w-full h-[150px] md:h-[170px] flex items-center text-white">
                <h2>{categorie}</h2>
            </div>
        </div>
        {children}
    </div>)
}