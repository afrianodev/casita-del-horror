import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';
import { movies } from '../../api/moviesData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MoviesCont({ onMovieSelect, initialSlide }) {
  const [centerMovie, setCenterMovie] = useState(movies[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex % movies.length; // Adjust for looped slides
    setCenterMovie(movies[activeIndex]);
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
              className="cursor-pointer"
            >
              <div className="h-64 w-44 overflow-hidden mx-auto">
                <img src={movie.src} className="w-full h-full object-cover" alt={movie.title} />
              </div>
              <h2 className="text-white text-center mt-2">{movie.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-col text-white'>
        <h2 className='mb-2 mx-auto'>Aquí iría el titulo de la peli</h2>
        <p className='w-[90%] mx-auto text-center'>Aqui la sinopsis de la película Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='flex gap-4 text-xs mt-2 mx-auto'>
          <p>Aqui el director</p>
          <p>Aqui el año</p>
          <p>Tiempo de duracion</p>
        </div>
        <div></div>

      </div>
    </div>
  );
}