import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './chatbotStyleOverrides.css';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [typedMessage, setTypedMessage] = useState('');

  const stripEmojis = (str: string): string => str
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      '',
    )
    .replace(/\s+/g, ' ')
    .trim();

  const handleNewUserMessage = async (newMessage: string): Promise<void> => {
    console.log('user typed message: ', typedMessage);

    setConversation([...conversation, `You: ${newMessage}`]);

    try {
      const response = await axios.post(
        'https://isabellahoch-portfolio-backend.onrender.com/api/chatbot/text-input',
        {
          message: stripEmojis(newMessage),
        },
      );

      const botResponse = response.data.response;
      addResponseMessage(botResponse);

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      setConversation([...conversation, `Bot: ${botResponse}`]);
    } catch (error) {
      console.error('Error communicating with backend:', error);
    }
  };

  useEffect(() => {
    const welcomeMessage = 'Hello and welcome to my portfolio website! What can I help you with?';
    addResponseMessage(welcomeMessage);
    setConversation([...conversation, `Bot: ${welcomeMessage}`]);
  }, []);

  return (
    <Widget
      title="Chatbot"
      subtitle="(Isabell)AI Assistant"
      handleNewUserMessage={handleNewUserMessage}
      showBadge={false}
      autofocus={false}
      handleTextInputChange={setTypedMessage}
      emojis
    />
  );
};

export default Chatbot;
