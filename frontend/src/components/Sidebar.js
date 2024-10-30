import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../styles/Sidebar.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    return (
        <div>
            {/* Hamburger icon to toggle the sidebar */}
            <button className={styles.hamburgerButton} onClick={toggleSidebar}>
                <i className="fas fa-bars"></i> {/* Three horizontal line icon */}
            </button>

            {/* Sidebar Container - shown only when isSidebarOpen is true */}
            {isSidebarOpen && (
                <div className={styles.sidebarContainer}>
                    <nav>
                        <ul className={styles.menuList}>
                        <h2 className={styles.sectionHeader}>Dashboard</h2>
                        <li className={styles.menuItem}>
                        <Link to="/search-results" className={styles.menuLink}>
                            <i className={`fas fa-university ${styles.menuIcon}`}></i>
                            Search Universities
                        </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/upload" className={styles.menuLink}>
                                <i className={`fas fa-file-upload ${styles.menuIcon}`}></i>
                                Upload Documents
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/settings" className={styles.menuLink}>
                                <i className={`fas fa-cog ${styles.menuIcon}`}></i>
                                Settings
                            </Link>
                        </li>
                            <li className={styles.menuItem}>
                                <Link to="/payment" className={styles.menuLink}>
                                    <i className={`fas fa-file-invoice-dollar ${styles.menuIcon}`}></i>
                                    Billing
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link to="/login" className={styles.menuLink}>
                                <i className={`fas fa-headset ${styles.menuIcon}`}></i>
                                    Helpdesk
                                </Link>
                            </li>

                            <h2 className={styles.sectionHeader}>Account Pages</h2>
                            <li className={styles.menuItem}>
                                <Link to="/univpro" className={styles.menuLink}>
                                    <i className={`fas fa-user ${styles.menuIcon}`}></i>
                                    Profile
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link to="/logincss" className={styles.menuLink}>
                                    <i className={`fas fa-user-plus ${styles.menuIcon}`}></i>
                                    Sign Up Now
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.helpSection}>
                        <p className={styles.helpText}>Need help?</p>
                        <Link to="/documentation" className={styles.helpButton}>Documentation</Link>
                        <Link to="/billing" className={styles.upgradeButton}>Upgrade to Pro</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
