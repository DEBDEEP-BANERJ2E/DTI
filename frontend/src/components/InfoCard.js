import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styling
import '../styles/InfoCard.module.css'; // Import custom styling
import { useUniversity } from '../context/UniversityProvider';
import { useCompare } from '../context/CompareContext';

const CollegeComparator = () => {
    const { colleges, addCollege, removeCollege } = useCompare();
    const [availableColleges, setAvailableColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState('');

    useEffect(() => {
        // Fetching data from `university.json`
        const fetchColleges = async () => {
            try {
                const response = await fetch('../json/universityData.json');
                const data = await response.json();
                console.log('Fetched data:', data);
                setAvailableColleges(data);
            } catch (error) {
                console.error('Error fetching colleges:', error);
            }
        };
        fetchColleges();
    }, []);

    const handleAddCollege = () => {
        const collegeToAdd = availableColleges.find((college) => college.name === selectedCollege);
        if (collegeToAdd) {
            addCollege(collegeToAdd);
            setSelectedCollege('');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">UniCompare</h2>

            {/* Dropdown to add colleges */}
            <div className="mb-4 flex items-center">
                <select
                    value={selectedCollege}
                    onChange={(e) => setSelectedCollege(e.target.value)}
                    className="border px-4 py-2 rounded mr-4 w-full"
                >
                    <option value="">Select a College to Add</option>
                    {availableColleges.map((college) => (
                        <option key={college.id} value={college.name}>{college.name}</option>
                    ))}
                </select>
                <button
                    onClick={handleAddCollege}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add College
                </button>
            </div>

            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Name</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Location</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">QS Ranking</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Rating</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Avg Salary</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Notable Alumni</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Courses Offered</th>
                        <th className="border px-4 py-3 text-left text-gray-600 font-semibold">Placement %</th>
                        <th className="border px-4 py-3 text-center text-gray-600 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college, index) => (
                        <tr key={college.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="border px-4 py-4 text-gray-800">{college.name}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.location}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.qsRanking}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.reviews.rating}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.placement.avgSalary}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.notableAlumni.join(', ')}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.coursesOffered.join(', ')}</td>
                            <td className="border px-4 py-4 text-gray-800">{college.placement.placementPercentage}</td>
                            <td className="border px-4 py-4 text-center">
                                <button
                                    onClick={() => removeCollege(college.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </td>
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
    const { selectedUniversities, addUniversity, removeUniversity } = useUniversity();

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
                        <li key={index} className="text-gray-700 mb-2 flex items-center">
                            {university.name} - Deadline: {university.deadline.toDateString()}
                            <button
                                onClick={() => removeUniversity(university.name)}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                −
                            </button>
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
