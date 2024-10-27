import React from 'react';
import UnivAbout from './UnivAbout';
import UnivPrograms from './UnivPrograms';
import UnivAdmissions from './UnivAdmissions';
import UnivContact from './UnivContact';
import Research from './Research';
import CampusLife from './CampusLife';
import UnivHeader from './UnivHeader';
import UnivFooter from './UnivFooter';
import Placement from './Placement';
import '../styles/UnivProfile.css'; // Importing the CSS file
import ScholarshipPortal from './ScholarshipPortal';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import universityData from '../json/universityData.json';
import AIChatbot from './AIChatbot';

const UniversityProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleApplyClick = () => {
        navigate('/upload'); // Redirect to Upload.js (assuming the route is set up correctly)
    };

    const renderPage = () => {
        switch (location.pathname) {
            case '/about':
                return <UnivAbout />;
            case '/programs':
                return <UnivPrograms />;
            case '/admissions':
                return <UnivAdmissions />;
            case '/research':
                return <Research />;
            case '/campus-life':
                return <CampusLife />;
            case '/contact':
                return <UnivContact />;
            case '/scholarship-portal':
                return <ScholarshipPortal />;
            case '/placement':
                return <Placement />;
            default:
                return (
                    <div>
                        <section id="admission">
                            <h2>Admission Procedure</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                            <ul>
                                <li><strong>Step 1:</strong> Online Application</li>
                                <li><strong>Step 2:</strong> Document Verification</li>
                                <li><strong>Step 3:</strong> Entrance Exam</li>
                                <li><strong>Step 4:</strong> Interview</li>
                            </ul>
                        </section>

                        <section id="programs">
                            <h2>Programs Provided</h2>
                            <ul>
                                <li>Bachelor of Technology (BTech)</li>
                                <li>Bachelor of Science (BSc)</li>
                                <li>Bachelor of Commerce (BCom)</li>
                                <li>Master of Business Administration (MBA)</li>
                            </ul>
                        </section>

                        <section id="fees">
                            <h2>Fees and Scholarship</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Program</th>
                                        <th>Fees (per annum)</th>
                                        <th>Scholarship</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTech</td>
                                        <td>Rs. 1,50,000</td>
                                        <td>Up to 50% tuition fee waiver</td>
                                    </tr>
                                    <tr>
                                        <td>BSc</td>
                                        <td>Rs. 1,00,000</td>
                                        <td>Up to 30% tuition fee waiver</td>
                                    </tr>
                                    <tr>
                                        <td>BCom</td>
                                        <td>Rs. 80,000</td>
                                        <td>Up to 20% tuition fee waiver</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>Rs. 2,00,000</td>
                                        <td>Up to 40% tuition fee waiver</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section id="placements">
                            <h2>Placements</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                            <ul>
                                <li><strong>Top Recruiters:</strong> Google, Microsoft, Amazon</li>
                                <li><strong>Average Salary Package:</strong> Rs. 6,00,000 per annum</li>
                                <li><strong>Placement Percentage:</strong> 90%</li>
                            </ul>
                            <button 
                                onClick={handleApplyClick}
                                className="btn" 
                                style={{ 
                                    color: 'black', 
                                    textDecoration: 'none', 
                                    padding: '10px 20px', 
                                    backgroundColor: '#f0f0f0', 
                                    border: '1px solid black', 
                                    borderRadius: '5px' 
                                }}>
                                Apply
                            </button>
                        </section>

                        <footer>
                            <p>&copy; 2024 College Information. All rights reserved.</p>
                        </footer>
                    </div>
                ); // Default content or homepage for university profile
        }
    };

    return (
        <div>
            <UnivHeader />
            <main>
                {renderPage()}
            </main>
            <UnivFooter />
            <AIChatbot />
        </div>
    );
};

export default UniversityProfile;
