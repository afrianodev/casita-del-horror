import React, { useState } from 'react';
import VideoIntro from "./components/VideoIntro"
import Home from './pages/Home'


function App() {
  const [showVideoIntro, setShowVideoIntro] = useState(true);

  const handleVideoEnd = () => {
    setShowVideoIntro(false);
  };

  return (
    <div>
      {showVideoIntro ? (
        <VideoIntro onVideoEnd={handleVideoEnd} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App
