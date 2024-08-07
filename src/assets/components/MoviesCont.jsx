export default function MoviesCont({ onMovieSelect }) {
    const movies = [
      { src: "https://m.media-amazon.com/images/M/MV5BMDRhNDhmYzItNDYzNC00YTc1LTkzYTUtMjE4ZDNhZGZkNjRkXkEyXkFqcGdeQXVyNjk3ODU5MDY@._V1_.jpg", title: "Alarido", url: "https://mega.nz/embed/tP93mL5T#VSzo1G_2CXPQI5bqUDXfLXbRTY5VKPxIEItUw5yth4Y" },
      { src: "https://m.media-amazon.com/images/M/MV5BODk0ZDI3ZjMtMTAwNC00MzY2LWI4OGItY2JmMmU0NmY4MGFjXkEyXkFqcGdeQXVyMzkwMTMxNDQ@._V1_.jpg", title: "El secreto de Marrowbone", url: "https://mega.nz/embed/tb13TYrJ#TY5nN47QS_QarFzAq12PK86bGauU81C0PFNORqIdxzw" },
      { src: "https://m.media-amazon.com/images/M/MV5BZDcyM2ZiYTYtMmFkNC00NDMxLThhMjctZjcyOTdlMGMyMjVhXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_.jpg", title: "El Extraño", url: "https://mega.nz/embed/8fNEiJhI#p8ledKnBiH1IREBYOJibJ29VMpdnDxHx4pu_K7JXbPU" },
      { src: "https://m.media-amazon.com/images/M/MV5BYjMzZDBkMWItMzM4MC00YzNmLTgzNzctMmUwOGYyZTA5MDZlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_FMjpg_UX1080_.jpg", title: "Demoniaca", url: "https://mega.nz/embed/gOcEDT7I#ezHn8eeSjYboKwh6p2N6I7wopNKLXumpKzafZSrRwkg" },
      { src: "https://m.media-amazon.com/images/M/MV5BMWZhZjYyZmItMGRmNS00OTdmLWJjNDQtNjc1YzYyYzA5ZDE0XkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_.jpg", title: "Good Boy", url: "https://mega.nz/embed/lClSnahD#Ofr5uEKzLo7KPt75imh9GPmhN5ePcd7rN2dVixPr-8Y" },
      { src: "https://m.media-amazon.com/images/M/MV5BNmMwZDg3ZDEtOWVkMi00MGM2LWI0YmItZjQ5NGViMTViMDhiXkEyXkFqcGdeQXVyNjQzMDExMDk@._V1_.jpg", title: "La última cosa que Mary vio", url: "https://mega.nz/embed/1bMGkTzL#OgMxbXQIVaby0G-zbcQT3_xyisT5K3Ysf7ZFaAihoPo" },
      { src: "https://m.media-amazon.com/images/M/MV5BNWQyMzA3NDItMDRhZi00MWUxLTgyYmYtM2I1NTI3ZTE2NjY5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", title: "Empty Man", url: "https://mega.nz/embed/hf0kTSzT#zKMA6ZTkv0rNhlL4gkh1BkRjdptKxAftI7MPYfucqhU" },
      { src: "https://m.media-amazon.com/images/M/MV5BYTQ4MDVmODUtZDA5ZC00ZDE5LTgwN2ItOTQ5YzBlOTcwMTRhXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg", title: "El CLub del odio", url: "https://mega.nz/embed/ZTsiQLoB#0dA8PlcR_bXIU0Rtxrs12-HyRaKFotIz3OtJDPqumrI" },
      { src: "https://m.media-amazon.com/images/S/pv-target-images/71bfb694a478414eff36ac9245d8a1c1baeb6418c01fc48506eefbca075e5a10.png", title: "Relic: Herencia maldita", url: "https://mega.nz/embed/kD01GQqR#pXPGpErRVu1YuabB4NJKXwIdQD54vU1e3rfMywfSQ20" },
      { src: "https://m.media-amazon.com/images/S/pv-target-images/a25489f875a64d1a352130b85b5b3da1e1b1fcc71f105c0fa66cddb4d9f29c27.jpg", title: "El ciempiés humano", url: "https://mega.nz/embed/AfNHBRqB#T1_bLRcQsgp_ABHyMLXsok7mZrfWpsGaISv81eP-YYg" },
    ];
  
    return (
      <div className="w-[90%] bg-neutral-950 rounded-3xl mx-auto shadow-md mt-2 h-[100vh] grid grid-cols-5 p-8 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            onClick={() => onMovieSelect(movie.url)}
            className="cursor-pointer"
          >
            <div className="h-64 w-44 overflow-hidden mx-auto">
              <img src={movie.src} className="w-full h-full object-cover" alt={movie.title} />
            </div>
            <h2 className="text-white text-center mt-2">{movie.title}</h2>
          </div>
        ))}
      </div>
    );
  }
  