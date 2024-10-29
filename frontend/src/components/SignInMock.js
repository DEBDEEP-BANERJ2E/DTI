// src/components/SignInMock.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SignInMock.module.css';

const SignInMock = () => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Sign in</h1>
                <p className={styles.description}>Use your Google Account</p>
                
                <div className={styles.buttons}>
                    <button className={styles.googleButton}>Sign in with Google</button>
                    <button className={styles.appleButton}>Sign in with Apple</button>
                    <button className={styles.emailButton}>Sign in with Email</button>
                </div>

                <p className={styles.terms}>
                    By continuing, you agree to Google's <Link to="#" className={styles.footerLink}>Terms of Service</Link> and <Link to="#" className={styles.footerLink}>Privacy Policy</Link>.
                </p>
                
                <p className={styles.footerText}>
                    Don't have an account? <Link to="/login" className={styles.footerLink}>Create one</Link>
                </p>
            </div>
        </div>
    );
};

export default SignInMock;
