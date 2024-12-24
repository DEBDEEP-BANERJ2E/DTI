import React, { useState } from 'react';
import styles from '../styles/Universitypro.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';

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
        <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.btn} ${styles.request}`}>Request More Details</button>
        </a>
        <Link to="/form">
          <button className={`${styles.btn} ${styles.shortlist}`}>Apply now</button>
        </Link>

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
            {['overview', 'programs',  'rankingsAndRatings', 'campusLocations', 'similarUniversities'].map((item) => (
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

          {activeContent === 'rankingsAndRatings' && (
            <div id="rankingsAndRatings">
              <h2 className={styles.contentTitle}>Rankings and Ratings</h2>
              <div className={styles.ratingsContainer}>
                <div className={styles.ratingItem}>
                  <strong>Academic Reputation:</strong> <span>9.8/10</span>
                </div>
                <div className={styles.ratingItem}>
                  <strong>Faculty Quality:</strong> <span>9.7/10</span>
                </div>
                <div className={styles.ratingItem}>
                  <strong>Student Satisfaction:</strong> <span>9.5/10</span>
                </div>
                <div className={styles.commentsSection}>
                  <h3>Student Reviews</h3>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9733; "MIT offers unparalleled opportunities in research and innovation. The faculty is incredibly supportive!" - Jane D.</p>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9734; "Great campus life and resources. The workload is intense but rewarding." - John S.</p>
                  <p>&#9733;&#9733;&#9733;&#9734;&#9734; "High academic standards but sometimes challenging to balance studies and personal life." - Maria L.</p>
                </div>
              </div>
            </div>
          )}

          {activeContent === 'campusLocations' && (
            <div id="campusLocations">
              <h2 className={styles.contentTitle}>Campus Locations</h2>
              <p className={styles.contentText}>MIT's main campus is located in Cambridge, Massachusetts, USA, along the Charles River. The campus spans 168 acres and features state-of-the-art facilities, cutting-edge laboratories, and iconic architecture.</p>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11797.756424498405!2d-71.10036769198783!3d42.36009195786106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf14b006d%3A0x6e014d56f6b95210!2sMassachusetts%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1703091017829!5m2!1sen!2sus"
                  width="600"
                  height="450"

                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}
          {activeContent === 'similarUniversities' && (
            <div id="similarUniversities">
              <h2 className={styles.contentTitle}>Similar Universities</h2>
              <ul className={styles.similarList}>
                {['Stanford University', 'Harvard University', 'California Institute of Technology (Caltech)', 'University of Cambridge', 'University of Oxford'].map((uni) => (
                  <li key={uni}>{uni}</li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Universitypro;
