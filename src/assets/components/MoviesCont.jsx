import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';
import { movies } from '../../api/moviesData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MoviesCont({ onMovieSelect, initialSlide, onMovieChange }) {
  const [activeIndex, setActiveIndex] = useState(movies[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  let currentRealIndex = 0;

  const handleSlideChange = (e) => {
    const movingIndex = (e.realIndex);
    console.log(`This is the first slider on the Swiper: ${movingIndex}`)
    const currentSlider = (movingIndex + Math.floor(5 / 2)) % movies.length;
    console.log(`This is the center index: ${currentSlider}`);
    currentRealIndex = currentSlider;
    setActiveIndex(movies[currentSlider]);
  };


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
        <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[35%] flex items-center justify-center'>Nuevas subidas</div>
        <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[20%] flex items-center justify-center'>Clásicos</div>
        <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[23%] flex items-center justify-center'>Psicológicas</div>
        <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center'>Sobrenatural</div>
        <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center'>Slasher</div>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        // slidesPerView={5}
        initialSlide={currentRealIndex}
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
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => onMovieSelect(movie.url, index)}
              className="cursor-pointer -mt-20"
            >
              <div className="h-64 w-44 overflow-hidden mx-auto">
                <img src={movie.src} className="w-full h-full object-cover" alt={movie.title} />
              </div>
              
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