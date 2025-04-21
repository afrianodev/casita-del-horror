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
        <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/c626dcf6-489d-4ed1-a4d5-c5ca36f67c33">
</iframe>
        </>
      )}
    </div>
  );
}

export default App
