import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';

export default function Recomendations({secTitle, moviesArray, onMovieSelect, onMovieTitle}) {
  const breakpoints = {
    200: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  const handleMovieClick = (movie) => {
    onMovieSelect(movie.url)
    onMovieTitle(movie.title)
  }


  return(<>
  <div className='w-[100vw] mt-8'>
      <h2 className='text-white text-4xl ml-6'>{secTitle}</h2>
  </div>
  <div className='w-[90vw] mx-auto'>
  <Swiper
      // effect={'coverflow'}
      grabCursor={true}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={breakpoints}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      modules={[Navigation, Keyboard, EffectCoverflow]}
      className="mySwiper"
    >
      {moviesArray.map((movie, index)=>(
      <SwiperSlide key={index}>
      <div className='mt-8 mx-auto w-[200px] h-[300px] flex flex-col mb-10 cursor-pointer' onClick={() => handleMovieClick(movie)}>
          <img className='shadow-lg w-[200px] h-[250px]' src={movie.src} alt={movie.title} loading='lazy' />
          <h2 className='text-white text-2xl text-start max-[80%]:'>{movie.title}</h2>
          <p className='text-white text-xs mt-1 text-start'>{movie.año}</p>
      </div>
      </SwiperSlide>
      ))}
  </Swiper>
  </div>
    
    </>)
}