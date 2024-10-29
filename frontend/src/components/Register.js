import React, { useState } from 'react'; // Make sure this is included
import { useNavigate } from 'react-router-dom'; // Import useNavigate at the top
import styles from '../styles/LoginSignUp.module.css';

function Register({ userType }) {
    const navigate = useNavigate(); // Add useNavigate hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5001/api/${userType}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Registration successful! You can now log in.');
            setTimeout(() => {
                navigate(`/login?userType=${userType}`); // Automatically redirect to login page
            }, 4000); // Redirect after 4 seconds (you can adjust this delay)
        } else {
            setMessage(data.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    style={{ 
                        display: 'block', 
                        width: '100%', 
                        marginBottom: '10px', 
                        marginLeft: '0px',
                        borderWidth: '0.1px',  // For a thicker border
                        borderRadius: '4px', // For rounded corners
                        borderStyle: 'solid', // Define the border style (solid, dotted, etc.)
                        borderColor: 'black' }} // Align left
                />
                <div style={{ position: 'relative', marginBottom: '10px', marginLeft: '40px' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{ 
                            display: 'block', 
                            width: '118%',
                            height: '45px',
                            paddingLeft: '10px', 
                            marginBottom: '10px', 
                            marginLeft: '-40px',
                            borderWidth: '0.1px',  // For a thicker border
                            borderRadius: '4px', // For rounded corners
                            borderStyle: 'solid', // Define the border style (solid, dotted, etc.)
                            borderColor: 'black' }} // Align left
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            left: '170px'
                        }}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={{ 
                        display: 'block', 
                        width: '100%',
                        height: '45px',
                        paddingLeft: '10px', 
                        marginBottom: '10px', 
                        marginLeft: '0px',
                        borderWidth: '0.1px',  // For a thicker border
                        borderRadius: '4px', // For rounded corners
                        borderStyle: 'solid', // Define the border style (solid, dotted, etc.)
                        borderColor: 'black' }} // Align left
                />
                <button className={styles.loginRegisterButton} type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
