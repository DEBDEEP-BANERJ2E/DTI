import React, { useState, useContext, useEffect } from 'react';
import { ChatContext } from '../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/AIChatbot.module.css';

const AIChatbot = () => {
    const { messages, addMessage } = useContext(ChatContext);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [responses, setResponses] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [utterance, setUtterance] = useState(null);
    const [siriVoice, setSiriVoice] = useState(null);

    // Load voices and set Samantha voice when available
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            const samanthaVoice = voices.find((voice) => voice.name === 'Samantha');
            if (samanthaVoice) setSiriVoice(samanthaVoice);
        };

        // Initial load and listener for any changes in available voices
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (inputValue.trim() === '') return;

        addMessage({ type: 'user', text: inputValue });

        try {
            const response = await fetch('http://localhost:5001/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue }),
            });

            const data = await response.json();
            if (response.ok) {
                addMessage({ type: 'bot', text: data.response });
                setResponses((prev) => [...prev, data.response]);
                playAudio(data.response);
            } else {
                addMessage({ type: 'bot', text: data.error });
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setInputValue('');
    };

    const playAudio = (text) => {
        if (utterance) window.speechSynthesis.cancel();

        const formattedText = text.replace(/[,;:.]/g, "$& ");
        const newUtterance = new SpeechSynthesisUtterance(formattedText);
        newUtterance.voice = siriVoice || newUtterance.voice; // Use Samantha if available
        newUtterance.rate = 0.9; // Slow down for a calm tone
        newUtterance.pitch = 0.95; // Lower pitch for a grounded sound
        newUtterance.volume = 0.9; // Slightly reduced volume for a softer delivery
        newUtterance.onend = () => setIsPlaying(false);

        setUtterance(newUtterance);
        window.speechSynthesis.speak(newUtterance);
        setIsPlaying(true);
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel(); // Pause if already playing
            setIsPlaying(false);
        } else {
            if (responses.length > 0) {
                const lastResponse = responses[responses.length - 1];
                playAudio(lastResponse);
            }
        }
    };

    return (
        <div>
            <div className={styles.chatIcon} onClick={toggleChat}>
                <FontAwesomeIcon icon={faRobot} />
            </div>

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h4>Chatbot</h4>
                        <button className={styles.closeChat} onClick={toggleChat}>X</button>
                    </div>
                    <div className={styles.chatBody}>
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'user' ? styles.userMessage : styles.botMessage}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className={styles.chatFooter}>
                        <input
                            type="text"
                            className={styles.chatInput}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button 
                            className={styles.playButton} 
                            onClick={togglePlayPause}
                        >
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </button>
                        <button className={styles.sendButton} onClick={handleSend}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIChatbot;
