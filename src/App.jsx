import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sangrientas from './pages/Sangrientas';
import Thriller from './pages/Thriller';
import Paranormal from './pages/Paranormal';
import Criaturas from './pages/Criaturas';
import Clasicas from './pages/Clasicas';


function App() {

  // const handleMovieChange = (movie) => {
  //   setCurrentMovie(movie); // Update current movie data
  // };

  return (
  <Router>
    <div className='bg-black h-[100vh] w-full overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thriller" element={<Thriller />} />
        <Route path="/paranormal" element={<Paranormal />} />
        <Route path="/sangrientas" element={<Sangrientas />} />
        <Route path="/criaturas" element={<Criaturas />} />
        <Route path="/clasicas" element={<Clasicas />} />
      </Routes> 
    </div>
  </Router>);
}

export default App;
