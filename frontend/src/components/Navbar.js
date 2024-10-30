// src/components/Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Import as a module


const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(`.${styles.navbar}`); // Use styles object
            
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add(styles.scrolled); // Add module-scoped class
                } else {
                    navbar.classList.remove(styles.scrolled); // Remove module-scoped class
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Link to="/">UniQuest</Link>
            </div>
            <ul className={styles.navbarLinks}>
                <li><Link to="/login">Login/Sign-up</Link></li>
                <li><Link to="/student-dashboard">Student Dashboard</Link></li>
                <li><Link to="/university-dashboard">University Dashboard</Link></li>
                <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
                <li><Link to="/search-results">Search Universities</Link></li>
                <li><Link to="/scholarship-portal">Scholarship Portal</Link></li>
                <li><Link to="/univpro">University Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
