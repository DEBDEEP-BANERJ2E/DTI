import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginSignUp.module.css';

function Login({ userType }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5001/api/${userType}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (!response.ok) {
                const data = await response.json();
                setMessage(data.message);
                /*setMessage(data.message || 'Login failed. Please try again.');*/
                return;
            }
    
            setMessage('Login successful! Redirecting...');
            const data = await response.json();
            console.log(data);
    
            
                // Redirect to the appropriate dashboard
            if (userType === 'admin') {
                navigate('/admin-dashboard');
            } else if (userType === 'university') {
                navigate('/university-dashboard');
            } else if (userType === 'student') {
                navigate('/student-dashboard');
            }
    
        } catch (error) {
            setMessage('Failed to connect to the server. Please try again later.');
            console.error('Error:', error);
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
                    style={{ paddingRight: '0px', 
                        width: '255px', 
                        paddingLeft: '15px',
                        height: '45px', 
                        borderWidth: '0.1px',  // For a thicker border
                        borderRadius: '4px', // For rounded corners
                        borderStyle: 'solid', // Define the border style (solid, dotted, etc.)
                        borderColor: 'black' }}
                    required
                />
                <div style={{ position: 'relative', marginTop: '10px' }}>
                    <input
                        type={showPassword ? 'text' : 'password'} // Toggle between text and password types
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{ paddingRight: '0px', 
                            width: '255px', 
                            height: '45px', 
                            paddingLeft: '15px',
                            borderWidth: '0.1px',  // For a thicker border
                            borderRadius: '4px', // For rounded corners
                            borderStyle: 'solid', // Define the border style (solid, dotted, etc.)
                            borderColor: 'black' }} // Space for the eye icon
                    /><br></br>
                    <span
                        onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                        style={{
                            position: 'absolute',
                            right: '8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                        }}
                    >
                        {showPassword ? 'Hide' : 'Show'} {/* Eye icon */}
                    </span>
                </div><br></br>
                <button className={styles.loginRegisterButton} type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
//'🙈' : '👁️'