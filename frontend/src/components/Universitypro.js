import React, { useState } from 'react';
import styles from '../styles/Universitypro.module.css'; // Import your CSS module

const Universitypro = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeContent, setActiveContent] = useState('overview');

  const toggleReadMore = () => setShowMore(!showMore);
  const showContent = (contentId) => setActiveContent(contentId);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="https://storage.googleapis.com/a1aa/image/YPqYRrQr5BruOxnFeqxy3nLk1A36RNajMw2rfgTWSmlr35qTA.jpg"
          alt="MIT logo"
          className={styles.logo}
        />
        <div className={styles.headerText}>
          <h1 className={styles.title}>Massachusetts Institute of Technology (MIT)</h1>
          <p className={styles.subtitle}>Cambridge, United States</p>
        </div>
        <img
          src="https://storage.googleapis.com/a1aa/image/xh2uvUXiVtYqBxoPbAUuBo2UGkF3aFs4nEF0WxwvyJB7du6E.jpg"
          alt="MIT campus"
          className={styles.logo}
        />
      </header>

      <div className={styles.buttonContainer}>
        <a href="about:blank" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.btn} ${styles.request}`}>Request More Details</button>
        </a>
        <a href="about:blank" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.btn} ${styles.shortlist}`}>Shortlist</button>
        </a>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <i className={`${styles.icon} fas fa-trophy`}></i>
          <span className={styles.statNumber}>#1</span>
          <span className={styles.statText}>QS World University Rankings</span>
        </div>
        <div className={styles.stat}>
          <i className={`${styles.icon} fas fa-graduation-cap`}></i>
          <span className={styles.statNumber}>1</span>
          <span className={styles.statText}>Postgraduate programs</span>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <aside className={styles.sidebar}>
          <ul className={styles.sidebarList}>
            {['overview', 'programs', 'universityInformation', 'tuitionFeeAndScholarships', 'rankingsAndRatings', 'campusLocations', 'similarUniversities'].map((item) => (
              <li
                key={item}
                className={`${styles.sidebarItem} ${activeContent === item ? styles.active : ''}`}
                onClick={() => showContent(item)}
              >
                {item.split(/(?=[A-Z])/).join(' ')}
              </li>
            ))}
          </ul>
        </aside>

        <main className={styles.mainContent}>
          {activeContent === 'overview' && (
            <div id="overview">
              <h2 className={styles.contentTitle}>About Massachusetts Institute of Technology (MIT)</h2>
              <p className={styles.contentText}>
                “Mind and Hand” is the thought-provoking motto of the Massachusetts Institute of Technology, known also as MIT. This motto enigmatically encapsulates this famous institution’s mission to advance knowledge in science, technology, and areas of scholarship that
                <span id="dots">{!showMore && '...'}</span>
                <span id="more" style={{ display: showMore ? 'inline' : 'none' }}>
                  . MIT is renowned for its rigorous academic programs, cutting-edge research, and a commitment to solving real-world problems. The institute fosters a culture of innovation and entrepreneurship, encouraging students and faculty to push the boundaries of what is possible. With a diverse community of scholars from around the globe, MIT is dedicated to making a positive impact on society through education, research, and collaboration.
                </span>
              </p>
              <button className={styles.readMoreBtn} onClick={toggleReadMore}>
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          )}

          {activeContent === 'programs' && (
            <div id="programs">
              <h2 className={styles.contentTitle}>Programs at MIT</h2>
              <ul className={styles.programList}>
                {['Computer Science and Engineering', 'Electrical Engineering and Computer Science', 'Mechanical Engineering', 'Biological Engineering', 'Chemical Engineering', 'Physics', 'Mathematics', 'Economics', 'Business Administration', 'Architecture'].map((program) => (
                  <li key={program}>{program}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional content sections would follow the same pattern as above */}
        </main>
      </div>
    </div>
  );
};

export default Universitypro;
