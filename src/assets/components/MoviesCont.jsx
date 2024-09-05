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
    850: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="mx-auto w-[100vw] mt-[2%]">
      {/* <div className='flex gap-2 text-white justify-center mx-2'>
        <div className='border-2 hover:bg-gray-900 active:bg-gray-800 active:text-black rounded-xl p-2 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('psicologica')}>Psicológicas</div>
        <div className='border-2 hover:bg-gray-900 active:bg-gray-800 active:text-black rounded-xl p-2 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('paranormal')}>Paranormal</div>
        <div className='border-2 hover:bg-mid-gray active:bg-dark-gray rounded-xl p-2 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('nueva')}>Sangrientas</div>
        <div className='border-2 hover:bg-gray-900 active:bg-gray-800 active:text-black rounded-xl p-2 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('clasica')}>Clásicas</div>
        <div className='border-2 hover:bg-gray-900 active:bg-gray-800 active:text-black rounded-xl p-2 w-[15%] flex items-center justify-center cursor-pointer select-none' onClick={() => handleCategorySelect('slasher')}></div>
      </div> */}
      <div className='w-[100vw]'>
        <h2 className='text-white text-4xl ml-4'>Recomendaciones random</h2>
      </div>
      <div className='flex'>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[0].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[0].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[0].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[7].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[7].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[7].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[28].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[28].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[28].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[72].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[72].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[72].año}</p>
        </div>
      </div>
      <div className='w-[100vw] mt-8'>
        <h2 className='text-white text-4xl ml-4'>Recomendaciones Pipe</h2>
      </div>
      <div className='flex'>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[81].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[81].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[81].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[84].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[84].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[84].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[12].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[12].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[12].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[33].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[33].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[33].año}</p>
        </div>
      </div>
      <div className='w-[100vw] mt-8'>
        <h2 className='text-white text-4xl ml-4'>Recomendaciones Eliza</h2>
      </div>
      <div className='flex'>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[19].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[19].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[19].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[79].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[79].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[79].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[82].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[82].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[82].año}</p>
        </div>
        <div className='mt-6 mx-auto w-[200px] h-[300px] flex flex-col mb-10'>
          <img className='shadow-lg w-[200px] h-auto' src={movies[3].src} alt="" />
          <h2 className='text-white text-2xl text-start'>{movies[3].title}</h2>
          <p className='text-white text-xs mt-1'>{movies[3].año}</p>
        </div>
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

      </div>
    </div>
  );
}