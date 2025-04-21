import { randomMovies, pipeArray, eliArray, random10Movies } from '../api/moviesData';
import Recomendations from './Recomendations';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MoviesCont({ onMovieSelect, onMovieTitle }) {
  // const [activeIndex, setActiveIndex] = useState(movies[0]);
  // const [centerSlide, setCenterSlide] = useState(0);
  // const [currentArray, setCurrentArray] = useState(movies);

  // const handleCategorySelect = (category) => {
  //   switch (category) {
  //     case 'nueva':
  //       setCurrentArray(nuevoArray);
  //       break;
  //     case 'slasher':
  //       setCurrentArray(slasherArray);
  //       break;
  //     case 'clasica':
  //       setCurrentArray(clasicaArray);
  //       break;
  //     case 'psicologica':
  //       setCurrentArray(psicologicaArray);
  //       break;
  //     case 'sangrienta':
  //       setCurrentArray(sangrientaArray);
  //       break;
  //     case 'paranormal':
  //       setCurrentArray(paranormalArray);
  //       break;
  //     default:
  //       setCurrentArray(nuevoArray);
  //   }
  // };

  // const handleSlideChange = (e) => {
  //   const movingIndex = (e.realIndex);
  //   console.log(`This is the first slider on the Swiper: ${movingIndex}`)
  //   const currentSlider = (movingIndex + Math.floor(5 / 2)) % movies.length;
  //   console.log(`This is the center index: ${currentSlider}`);
  //   setActiveIndex(movies[currentSlider]);
  //   setCenterSlide(currentSlider);
  // };

  // useEffect(() => {
  //   console.log('this is the new2 center slide log:' + centerSlide);
  // }, [centerSlide]);

  const handleMovieClick = (movie) => {
    onMovieSelect(movie.url)
    onMovieTitle(movie.title)
  }

  return (
    <div className="mx-auto w-[100vw] mt-[2%]">

      <Recomendations
      secTitle={'Recomendaciones random'}
      moviesArray={random10Movies}
      onChange={handleMovieClick}
      />
      <Recomendations
      secTitle={'Recomendaciones Pipe'}
      moviesArray={pipeArray}
      onChange={handleMovieClick}
      />
      <Recomendations
      secTitle={'Recomendaciones Eliza'}
      moviesArray={eliArray}
      onChange={handleMovieClick}
      />
      <Recomendations
      secTitle={'Todas las películas'}
      moviesArray={randomMovies}
      onChange={handleMovieClick}
      />

      {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        // slidesPerView={5}
        initialSlide={centerSlide}
        breakpoints={breakpoints}
        coverflowEffect={{
          rotate: 30,
          stretch: -20,
          depth: 300,
          modifier: 1,
          // slideShadows: true,
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Keyboard, EffectCoverflow]}
        className="mySwiper mt-6"
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperInstance}
      >
        {currentArray.map((movie, index) => (
          <SwiperSlide key={index}>

            <div className="h-64 w-44 overflow-hidden mx-auto -mt-20 cursor-pointer" onClick={() => onMovieSelect(movie.url, index)} >
              <img src={movie.src} className="w-full h-full object-cover" alt={movie.title} />
            </div>
              
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-col text-white'>
        <h2 className="text-white text-center -mt-20 mb-4 text-xl">{activeIndex.title}</h2>
        <p className='w-[80%] mx-auto text-center font-sans text-base mb-4 h-[6rem]'>{activeIndex.sinopsis}</p>
        <div className='flex gap-4 text-xs mt-2 mx-auto'>
          <p>{activeIndex.director}</p>
          <p>{activeIndex.año}</p>
          <p>{activeIndex.duracion}</p>
        </div>
        <div></div>

      </div> */}
    </div>
  );
}