import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const ChartCard2 = () => {
    const loggedInUniversity = "MIT"; // Example university name

    const sampleStudents = [
        { name: "Alice Johnson", university: "MIT", course: "Computer Science" },
        { name: "Brian Lee", university: "MIT", course: "Electrical Engineering" },
        { name: "Catherine Tan", university: "MIT", course: "Mechanical Engineering" },
        { name: "David Brown", university: "MIT", course: "Psychology" },
        { name: "Emily White", university: "MIT", course: "Physics" },
        { name: "Frankie Adams", university: "MIT", course: "Computer Science" },
        { name: "George Thompson", university: "MIT", course: "Psychology" },
        { name: "Hannah Moore", university: "MIT", course: "Physics" },
    ];

    const studentsForLoggedInUniversity = sampleStudents.filter(
        student => student.university === loggedInUniversity
    );

    const courses = [...new Set(studentsForLoggedInUniversity.map(student => student.course))];
    const studentsByCourse = courses.map(course => studentsForLoggedInUniversity.filter(student => student.course === course).length);

    const pieData = {
        labels: courses,
        datasets: [
            {
                label: 'Students per Course',
                data: studentsByCourse,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', 
                    'rgba(54, 162, 235, 0.6)', 
                    'rgba(255, 206, 86, 0.6)', 
                    'rgba(75, 192, 192, 0.6)'
                ],
            }
        ]
    };

    const handleApplyForPromotion = () => {
        alert("Promotion application submitted!");
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
                {loggedInUniversity} Student Applications Dashboard
            </h2>

            <div className="bg-white p-4 rounded-lg shadow mb-8 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Students Who Applied to {loggedInUniversity}</h3>
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Course Selected</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsForLoggedInUniversity.map((student, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pie Chart Section with reduced size */}
            <div className="w-2/4 p-4 bg-white rounded-lg shadow-lg mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Students per Course</h3>
                <Pie 
                    data={pieData} 
                    options={{ 
                        responsive: true, 
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            }
                        }
                    }} 
                />
            </div>

            {/* Apply for Promotion Button with improved styles */}
            <button 
                onClick={handleApplyForPromotion} 
                className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-gradient-to-l hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label="Apply for Promotion"
            >
                Apply for Promotion
            </button>
        </div>
    );
};

export default ChartCard2;
