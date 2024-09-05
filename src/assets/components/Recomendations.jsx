import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';

export default function Recomendations({secTitle, moviesArray}) {
    return(<>
    <div className='w-[100vw] mt-8'>
        <h2 className='text-white text-4xl ml-6'>{secTitle}</h2>
    </div>
    <div className='w-[90vw] mx-auto'>
    <Swiper
        // effect={'coverflow'}
        grabCursor={true}
        slidesPerView={5}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Navigation, Keyboard, EffectCoverflow]}
        className="mySwiper"
      >
        {moviesArray.map((movie, index)=>(
        <SwiperSlide>
        <div className='mt-8 mx-auto w-[200px] h-[300px] flex flex-col mb-10' key={index}>
            <img className='shadow-lg w-[200px] h-[250px]' src={movie.src} alt="" />
            <h2 className='text-white text-2xl text-start max-[80%]:'>{movie.title}</h2>
            <p className='text-white text-xs mt-1 text-start'>{movie.año}</p>
        </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
    
    </>)
}