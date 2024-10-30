// src/components/StudentDashboard.js
import React from 'react';
import MainContent from './MainContent';
import AIChatbot from './AIChatbot';
import Navbar from './Navbar';

function StudentDashboard() {
    return (
        <div>
            <Navbar />
            <MainContent />
            <AIChatbot />
        </div>
    );
}

export default StudentDashboard;

