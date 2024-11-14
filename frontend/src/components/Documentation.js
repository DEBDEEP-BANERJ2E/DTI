// src/Documentation.js
import React from 'react';
import styles from '../styles/Documentation.module.css';

const Documentation = () => {
    return (
        <div className={styles.documentationContainer}>
            <h2 className={styles.title}>Online University Admission Webapp Documentation</h2>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>1. Introduction</h3>
                <p>Purpose: This web application is designed to streamline the university admission process, enabling prospective students to apply, track applications, and receive admission notifications efficiently.</p>
                <p>Target Audience: Applicants, university admissions staff, and administrative personnel.</p>
                <p>Technologies Used:</p>
                <ul>
                    <li>Frontend: HTML, CSS, JavaScript (React)</li>
                    <li>Backend: Node.js (Express)</li>
                    <li>Database: MongoDB</li>
                    <li>Authentication: JWT (JSON Web Tokens)</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>2. Requirements</h3>
                <p>System Requirements:</p>
                <ul>
                    <li>Browser: Latest version of Chrome, Firefox, Safari, or Edge</li>
                    <li>Backend: Node.js 14+</li>
                    <li>Database: MongoDB 4.4+</li>
                    <li>Other: Internet connection and university-specific credentials (for administrators)</li>
                </ul>
                <p>Dependencies:</p>
                <ul>
                    <li>npm packages: Express, Mongoose, JWT, bcrypt, React, Axios</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>3. Installation and Setup</h3>
                <h4>Local Setup</h4>
                <ol>
                    <li>Clone the Repository: <code>git clone &lt;repository-url&gt;</code></li>
                    <li>Navigate to the Directory: <code>cd online-university-admission-webapp</code></li>
                    <li>Install Dependencies: Run <code>npm install</code> in both the frontend and backend directories.</li>
                    <li>Environment Variables: Create a <code>.env</code> file in the root directory for environment variables like <code>DATABASE_URL</code>, <code>JWT_SECRET</code>, and <code>PORT</code>.</li>
                    <li>Start Application:
                        <ul>
                            <li>Backend: <code>npm run server</code></li>
                            <li>Frontend: <code>npm start</code> (from the frontend directory)</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>4. Architecture</h3>
                <p>This app follows an MVC (Model-View-Controller) structure:</p>
                <ul>
                    <li>Frontend: React-based UI components handle user interactions.</li>
                    <li>Backend: Node.js and Express handle API requests, authentication, and business logic.</li>
                    <li>Database: MongoDB stores applicant data, admission records, and user credentials.</li>
                </ul>
                <p>Folder Structure:</p>
                <ul>
                    <li><code>frontend/</code>: Contains React components and styles.</li>
                    <li><code>backend/</code>: Contains server code, controllers, routes, and models.</li>
                    <li><code>public/</code>: Stores static assets.</li>
                    <li><code>config/</code>: Contains configuration files.</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>5. API Documentation</h3>
                <h4>Authentication Endpoints</h4>
                <ul>
                    <li><code>POST /api/auth/login</code>: User login endpoint.</li>
                    <li><code>POST /api/auth/register</code>: Registration for new users.</li>
                </ul>
                <h4>Admission Endpoints</h4>
                <ul>
                    <li><code>GET /api/applications</code>: Fetch all applications for an authenticated user.</li>
                    <li><code>POST /api/applications</code>: Submit a new application.</li>
                    <li><code>PUT /api/applications/:id</code>: Update application status.</li>
                    <li><code>DELETE /api/applications/:id</code>: Delete an application.</li>
                </ul>
            </section>

            <section className={styles.section}>
    <h3 className={styles.sectionTitle}>8. User Manual</h3>
    
    <h4>Homepage</h4>
    <p>The homepage provides the main entry point for users. Upon visiting, users will have the option to log in through OAuth authentication. Clicking the login button will redirect them to the appropriate login page based on their user type.</p>

    <h4>User Types</h4>
    <p>Once logged in, there are three types of users:</p>
    <ul>
        <li><strong>Students:</strong> After login, students are redirected to their student dashboard.</li>
        <li><strong>University Professionals:</strong> University professionals are given access to the analytics page for viewing relevant data.</li>
        <li><strong>Admins:</strong> Admin users can access the analytics page, manage user data, and oversee the platform's operations.</li>
    </ul>

    <h4>Student Dashboard</h4>
    <p>After logging in as a student, the following features are available:</p>
    <ol>
        <li><strong>Deadline Management:</strong> Students can view and manage important deadlines related to their courses and applications.</li>
        <li><strong>Course List:</strong> A detailed list of available courses that students can enroll in.</li>
        <li><strong>Branch List:</strong> A list of branches available at the university for course selection.</li>
        <li><strong>Program List:</strong> Students can view different programs offered by the university.</li>
        <li><strong>College Comparison:</strong> A feature that allows students to compare their current college with others. This data is stored in the local storage for future reference.</li>
        <li><strong>Document Upload:</strong> Students have a personal and financial document section where they can upload required documents. This section allows secure file uploads.</li>
    </ol>

    <h4>Submit and Pay Page</h4>
    <p>Once the student has filled out all necessary forms, they can navigate to the "Submit and Pay" page. This is where they can submit their application and proceed with payment for any associated fees.</p>

    <h4>University Professional and Admin Analytics</h4>
    <p>Both university professionals and admin users have access to an analytics page containing relevant data for managing and monitoring the platform:</p>
    <ul>
        <li><strong>University Analytics:</strong> University professionals can analyze application data, student performance, and other key metrics.</li>
        <li><strong>Admin Analytics:</strong> Admin users can view overall platform data, manage user accounts, and monitor system performance.</li>
    </ul>

    <h4>Other Pages</h4>
    <p>In addition to the main dashboard and analytics pages, the following pages are available:</p>
    <ul>
        <li><strong>Search Universities:</strong> This page allows users to search for universities based on different criteria such as location, programs, and more.</li>
        <li><strong>Scholarship Portal:</strong> Users can access scholarships and financial aid opportunities through the scholarship portal.</li>
        <li><strong>Upload Documents:</strong> A dedicated page for users (students, professionals, and admins) to upload relevant documents such as personal or academic records.</li>
    </ul>

    <h4>Settings and Profile</h4>
    <p>Each user type has a <strong>Settings</strong> and <strong>Profile</strong> page where they can manage their account information, update personal details, and configure their preferences on the platform.</p>
</section>

        </div>
    );
};

export default Documentation;
