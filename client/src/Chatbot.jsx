import React, { useEffect, useRef } from 'react';

const Chatbot = () => {
  const chatbotRef = useRef(null);

  useEffect(() => {
    // Cargar el script de Dialogflow Messenger
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    // Crear el elemento df-messenger
    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('intent', 'mensajeinicial');
    dfMessenger.setAttribute('chat-title', 'Chatbot02');
    dfMessenger.setAttribute('agent-id', 'c626dcf6-489d-4ed1-a4d5-c5ca36f67c33');
    dfMessenger.setAttribute('language-code', 'es');

    // Agregar el df-messenger al contenedor
    if (chatbotRef.current) {
      chatbotRef.current.appendChild(dfMessenger);
    }
  }, []);

  return <div ref={chatbotRef}></div>;
};

export default Chatbot;