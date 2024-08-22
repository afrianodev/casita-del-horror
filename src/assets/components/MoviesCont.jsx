import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';
import { movies } from '../../api/moviesData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

let nuevoArray = movies

export default function MoviesCont({ onMovieSelect, initialSlide, onMovieChange }) {
  const [activeIndex, setActiveIndex] = useState(movies[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [centerSlide, setCenterSlide] = useState(0);
  const [currentArray, setCurrentArray] = useState(movies);

  let slasherArray = movies.filter(movie => movie.categorias.includes('slasher'));
  let clasicaArray = movies.filter(movie => movie.categorias.includes('clasica'));
  let psicologicaArray = movies.filter(movie => movie.categorias.includes('psicologica'));
  let sangrientaArray = movies.filter(movie => movie.categorias.includes('sangrienta'));
  let paranormalArray = movies.filter(movie => movie.categorias.includes('paranormal'));
  let currentMovies = movies;

  const handleCategorySelect = (category) => {
    switch (category) {
      case 'nueva':
        setCurrentArray(nuevoArray);
        break;
      case 'slasher':
        setCurrentArray(slasherArray);
        break;
      case 'clasica':
        setCurrentArray(clasicaArray);
        break;
      case 'psicologica':
        setCurrentArray(psicologicaArray);
        break;
      case 'sangrienta':
        setCurrentArray(sangrientaArray);
        break;
      case 'paranormal':
        setCurrentArray(paranormalArray);
        break;
      default:
        setCurrentArray(nuevoArray);
    }
  };

  const handleSlideChange = (e) => {
    const movingIndex = (e.realIndex);
    console.log(`This is the first slider on the Swiper: ${movingIndex}`)
    const currentSlider = (movingIndex + Math.floor(5 / 2)) % movies.length;
    console.log(`This is the center index: ${currentSlider}`);
    setActiveIndex(movies[currentSlider]);
    setCenterSlide(currentSlider);
  };

  useEffect(() => {
    console.log('this is the new2 center slide log:' + centerSlide);
  }, [centerSlide]);


  const breakpoints = {
    200: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="w-[98vw] h-[79%] bg-gray-950 rounded-3xl mx-auto mt-[2%]">
      <div className='flex gap-2 text-white justify-center mx-2'>
        <div className='bg-gray-900 hover:bg-gray-800 active:bg-gray-600 active:text-black rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('nueva')}>Nuevas</div>
        <div className='bg-gray-900 hover:bg-gray-800 active:bg-gray-600 active:text-black rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('clasica')}>Clásicos</div>
        <div className='bg-gray-900 hover:bg-gray-800 active:bg-gray-600 active:text-black rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('psicologica')}>Psicológicas</div>
        <div className='bg-gray-900 hover:bg-gray-800 active:bg-gray-600 active:text-black rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('paranormal')}>Paranormal</div>
        <div className='bg-gray-900 hover:bg-gray-800 active:bg-gray-600 active:text-black rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('slasher')}>Slasher</div>
      </div>
      <Swiper
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
        className="mySwiper"
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

      </div>
    </div>
  );
}