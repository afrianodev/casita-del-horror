import React from 'react'

function RecommendMovie() {
  return (
    <div className="relative mx-8 my-2 rounded-md min-h-[500px] overflow-hidden bg-[url('tested.webp')] bg-center bg-cover">

        <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 60%)'
        }}
        ></div>

        <div className='flex relative z-10 p-8 justify-between items-center h-full'>
            <div className="text-white flex flex-col">
                <h2 className="text-4xl font-bold mb-4">Historias que no te atreves a contar</h2>
                <p className="mb-6 max-w-lg">
                This is the synopsis of the movie. It stays fixed over the moving background.
                </p>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md w-max">
                    Ver película
                </button>
            </div>
            <div className='text-white flex gap-4 self-end'>
                <div>left</div>
                <div>right</div>
            </div>
        </div>
      
    </div>
  )
}

export default RecommendMovie