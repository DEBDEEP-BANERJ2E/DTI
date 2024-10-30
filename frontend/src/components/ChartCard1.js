import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const ChartCard1 = () => {
    const sampleStudents = [
        { name: "Alice Johnson", university: "MIT", course: "Computer Science" },
        { name: "Bob Smith", university: "Harvard University", course: "Business Administration" },
        { name: "Charlie Brown", university: "Stanford University", course: "Mechanical Engineering" },
        { name: "Daisy Miller", university: "Yale University", course: "Psychology" },
        { name: "Ethan Allen", university: "University of Chicago", course: "Physics" }
    ];

    const [sortField, setSortField] = useState('name');
    const [filterUniversity, setFilterUniversity] = useState('');
    const [filterCourse, setFilterCourse] = useState('');

    const universities = [...new Set(sampleStudents.map(student => student.university))];
    const courses = [...new Set(sampleStudents.map(student => student.course))];

    const sortedStudents = [...sampleStudents].sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
    });

    const filteredStudents = sortedStudents.filter(student => 
        (!filterUniversity || student.university === filterUniversity) &&
        (!filterCourse || student.course === filterCourse)
    );

    const studentsByUniversity = universities.map(university => sampleStudents.filter(student => student.university === university).length);
    const studentsByCourse = courses.map(course => sampleStudents.filter(student => student.course === course).length);

    const barData = {
        labels: universities,
        datasets: [
            {
                label: 'Students per University',
                data: studentsByUniversity,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            }
        ]
    };

    const pieData = {
        labels: courses,
        datasets: [
            {
                label: 'Students per Course',
                data: studentsByCourse,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
            }
        ]
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Student User List & Admin Analytics</h2>

            {/* Filters and Sorting */}
            <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                    <select
                        value={filterUniversity}
                        onChange={(e) => setFilterUniversity(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="">Filter by University</option>
                        {universities.map((university, index) => (
                            <option key={index} value={university}>
                                {university}
                            </option>
                        ))}
                    </select>
                    <select
                        value={filterCourse}
                        onChange={(e) => setFilterCourse(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="">Filter by Course</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                    <select
                        value={sortField}
                        onChange={(e) => setSortField(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="name">Sort by Name</option>
                        <option value="university">Sort by University</option>
                        <option value="course">Sort by Course</option>
                    </select>
                </div>
            </div>

            {/* Student List Table */}
            <div className="bg-white p-4 rounded-lg shadow mb-8 overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">University Applied</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Course Selected</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{student.university}</td>
                                <td className="border border-gray-300 px-4 py-2">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Charts Section */}
            <div className="flex justify-between mt-8">
                <div className="w-1/3 p-4 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Students per University</h3>
                    <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
                </div>
                <div className="w-1/3 p-4 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Students per Course</h3>
                    <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
                </div>
            </div>
        </div>
    );
};

export default ChartCard1;
