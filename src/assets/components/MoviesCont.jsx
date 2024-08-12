import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';
import { movies } from './moviesData';

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

  useEffect(() => {
    if (swiperInstance) {
      const slideIndex = initialSlide % movies.length; // Adjust for looped slides
      swiperInstance.slideToLoop(slideIndex, 0, false); // Slide instantly
    }
  }, [swiperInstance, initialSlide]);

  return (
    <div className="w-[98vw] h-[89vh] bg-gray-950 rounded-3xl mx-auto mt-2">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 10,
          stretch: -20,
          depth: 300,
          modifier: 1,
          slideShadows: true,
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
    </div>
  );
}