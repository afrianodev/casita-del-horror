import React, { useState } from 'react';
import VideoIntro from "./components/VideoIntro"
import Chatbot from './Chatbot';

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
        <>
        <Chatbot />
        </>
      )}
    </div>
  );
}

export default App
