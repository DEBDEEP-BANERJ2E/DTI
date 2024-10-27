import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styling
import '../styles/InfoCard.module.css'; // Import custom styling
import { useUniversity } from '../context/UniversityProvider';

const CollegeComparator = () => {
    const colleges = [
        { name: 'College A', rank: 1, location: 'Location A', acceptanceRate: '20%' },
        { name: 'College B', rank: 2, location: 'Location B', acceptanceRate: '30%' },
        { name: 'College C', rank: 3, location: 'Location C', acceptanceRate: '25%' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">College Comparator</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Rank</th>
                        <th className="border px-4 py-2">Location</th>
                        <th className="border px-4 py-2">Acceptance Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college) => (
                        <tr key={college.name}>
                            <td className="border px-4 py-2">{college.name}</td>
                            <td className="border px-4 py-2">{college.rank}</td>
                            <td className="border px-4 py-2">{college.location}</td>
                            <td className="border px-4 py-2">{college.acceptanceRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Sample university deadlines
const universityDeadlines = [
    { name: 'University A', deadline: new Date(2024, 10, 1) }, // November 1, 2024
    { name: 'University B', deadline: new Date(2024, 10, 15) }, // November 15, 2024
    { name: 'University C', deadline: new Date(2024, 11, 1) }, // December 1, 2024
    { name: 'University D', deadline: new Date(2024, 11, 10) }, // December 10, 2024
];

const DeadlineManagement = () => {
    const [selectedUniversity, setSelectedUniversity] = useState(universityDeadlines[0]);
    const [date, setDate] = useState(new Date());
    const { selectedUniversities, addUniversity } = useUniversity();

    const isDeadline = (dateToCheck) => {
        return selectedUniversities.some(ud => 
            ud.deadline.toDateString() === dateToCheck.toDateString()
        );
    };

    const handleUniversityChange = (e) => {
        const selected = universityDeadlines.find(ud => ud.name === e.target.value);
        setSelectedUniversity(selected);
    };

    return (
        <div className="flex">
            <style>
                {`
                .highlight {
                    background-color: #fea136 !important;
                    color: black;
                }
                `}
            </style>
            <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
                <h2 className="text-xl font-bold mb-2">Deadline Management</h2>
                <div className="mb-4">
                    <label className="block text-lg font-bold mb-2">Select University:</label>
                    <select
                        value={selectedUniversity.name}
                        onChange={handleUniversityChange}
                        className="border rounded p-2"
                    >
                        {universityDeadlines.map(ud => (
                            <option key={ud.name} value={ud.name}>
                                {ud.name} - Deadline: {ud.deadline.toDateString()}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => addUniversity(selectedUniversity)}
                        className="ml-4 bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700"
                    >
                        Add
                    </button>
                </div>

                <Calendar
                    onChange={setDate}
                    value={date}
                    tileClassName={({ date }) =>
                        isDeadline(date) ? 'highlight' : null
                    }
                />
                <p className="mt-2 text-gray-600">Selected date: {date.toDateString()}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-1/2 ml-6">
                <h2 className="text-xl font-bold mb-2">Selected Universities</h2>
                <ul>
                    {selectedUniversities.map((university, index) => (
                        <li key={index} className="text-gray-700 mb-2">
                            {university.name} - Deadline: {university.deadline.toDateString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const InfoCard = () => {
    return (
        <div className="p-6">

            {/* Render College Comparator and Deadline Management */}
            <CollegeComparator />
            <div style={{ marginTop: '2rem'}}> 
                <DeadlineManagement />
                </div>
            
        </div>
    );
};

export default InfoCard;
