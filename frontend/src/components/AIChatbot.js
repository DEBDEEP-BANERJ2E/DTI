import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/AIChatbot.module.css';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [responses, setResponses] = useState([]); // Array to hold bot responses
    const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing
    const [utterance, setUtterance] = useState(null); // To store the current utterance
    const [siriVoice, setSiriVoice] = useState(null);

    useEffect(() => {
        // Check available voices and find one similar to Siri
        const voices = window.speechSynthesis.getVoices();
        const samanthaVoice = voices.find((voice) => voice.name === 'Samantha');
        if (samanthaVoice) setSiriVoice(samanthaVoice);
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (inputValue.trim() === '') return;

        setMessages((prev) => [...prev, { type: 'user', text: inputValue }]);
        console.log('User message sent:', inputValue);

        try {
            const response = await fetch('http://localhost:5001/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Bot response:', data.response);
                setMessages((prev) => [...prev, { type: 'bot', text: data.response }]);
                setResponses((prev) => [...prev, data.response]); // Store the response in the array
                playAudio(data.response); // Automatically play the response
            } else {
                console.error('Error from server:', data.error);
                setMessages((prev) => [...prev, { type: 'bot', text: data.error }]);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setInputValue('');
    };

    const playAudio = (text) => {
        if (utterance) window.speechSynthesis.cancel(); // Cancel any previous utterance

        // Format text to create natural pauses
        const formattedText = text.replace(/[,;:.]/g, "$& ");

        const newUtterance = new SpeechSynthesisUtterance(formattedText);
        newUtterance.voice = siriVoice || newUtterance.voice; // Set to Samantha if available
        newUtterance.rate = 0.95;    // Slightly slower for a clear Siri-like tone
        newUtterance.pitch = 1.0;    // Neutral pitch for calm tone
        newUtterance.volume = 0.9;   // Soft but audible volume

        newUtterance.onend = () => setIsPlaying(false); // Reset playing state when done

        setUtterance(newUtterance); // Store the current utterance
        window.speechSynthesis.speak(newUtterance); // Speak the formatted text
        setIsPlaying(true); // Set playing state to true
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel(); // Pause if already playing
            setIsPlaying(false);
        } else {
            if (responses.length > 0) {
                const lastResponse = responses[responses.length - 1]; // Get the last response
                playAudio(lastResponse); // Play audio for the last response
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
