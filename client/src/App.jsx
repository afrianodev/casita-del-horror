import React, { useState } from 'react';
import VideoIntro from "./components/VideoIntro"

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
        <h1>La casita del horror</h1>
      )}
    </div>
  );
}

export default App
