// ScholarshipPortal.js (React Component)
import React from "react";
import "../styles/ScholarshipPortal.module.css"; // External CSS or inline styles can remain unchanged
import AIChatbot from "./AIChatbot";

const ScholarshipCard = ({ featured, daysToGo, title, award, eligibility, lastUpdated }) => {
    return (
        <div className="bg-white p-4 shadow rounded">
            <div className="flex justify-between items-center mb-2">
                {featured && <span className="bg-green-500 text-white px-2 py-1 rounded">Featured</span>}
                {daysToGo ? (
                    <span className="bg-red-500 text-white px-2 py-1 rounded">{daysToGo} days to go</span>
                ) : (
                    <span className="bg-gray-500 text-white px-2 py-1 rounded">{lastUpdated}</span>
                )}
            </div>
            <h2 className="font-bold mb-2">{title}</h2>
            <p className="mb-2">
                <strong>Award:</strong> {award}
            </p>
            <p className="mb-2">
                <strong>Eligibility:</strong> {eligibility}
            </p>
            <p className="text-gray-500 text-sm">Last Updated On {lastUpdated}</p>
        </div>
    );
};

const ScholarshipPortal = () => {
    const scholarships = [
        {
            featured: true,
            daysToGo: 5,
            title: "COLLEGE BOARD 90% FEE WAIVER PROGRAM",
            award: "Up to 100% tuition fee waiver",
            eligibility: "Class 12",
            lastUpdated: "18-09-2024",
        },
        {
            featured: true,
            daysToGo: 5,
            title: "COLLEGE BOARD 50% FEE WAIVER PROGRAM",
            award: "50% SAT Fee Reduction",
            eligibility: "Class 12 students (Annual Income INR 4 L-10L)",
            lastUpdated: "18-09-2024",
        },
        {
            featured: false,
            lastUpdated: "4 November 2024",
            title: "FREE COACHING FOR DNT STUDENTS UNDER SEED SCHEME",
            award: "Coaching fees of up to ₹ 120,000",
            eligibility: "DNT students seeking coaching for entrance exams after Class 12",
        },
        {
            featured: false,
            daysToGo: 3,
            title: "INSPIRE SCHOLARSHIP FOR HIGHER EDUCATION (SHE) 2024",
            award: "₹5,000 monthly and ₹20,000 mentorship grant",
            eligibility: "Class 12 passed students",
            lastUpdated: "11-09-2024",
        },
        {
            featured: false,
            daysToGo: 3,
            title: "TATA CAPITAL PANKH SCHOLARSHIP PROGRAM FOR CLASS 11 AND 12 STUDENTS 2024-25",
            award: "Up to INR 10,000",
            eligibility: "Class 11 and 12 students",
            lastUpdated: "27-09-2024",
        },
        {
            featured: false,
            daysToGo: 3,
            title: "TATA CAPITAL PANKH SCHOLARSHIP PROGRAM FOR DIPLOMA/POLYTECHNIC AND GENERAL GRADUATION 2024-25",
            award: "Up to INR 12,000",
            eligibility: "Diploma/Polytechnic or general graduation students",
            lastUpdated: "27-09-2024",
        },
    ];

    return (
        <div>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-3xl font-bold px-1">UniScholar</span>
                    </div>
                    <nav className="flex space-x-4">
                        <a href="/login" className="text-blue-700 font-bold hover:bg-blue-100 transition duration-200 rounded px-5 py-3">Scholarships</a>
                        <a href="/login" className="text-blue-700 font-bold hover:bg-blue-100 transition duration-200 rounded px-5 py-3">Student Services</a>
                        <a href="/login" className="text-blue-700 font-bold hover:bg-blue-100 transition duration-200 rounded px-5 py-3">Results</a>
                        <a href="/login" className="text-blue-700 font-bold hover:bg-blue-100 transition duration-200 rounded px-5 py-3">Become A Partner</a>
                        <a href="/login" className="text-blue-700 font-bold hover:bg-blue-100 transition duration-200 rounded px-5 py-3">Education Loan Support</a>
                    </nav>
                    <div className="flex space-x-4">
                        <a href="/login" className="text-blue-900 font-bold hover:bg-blue-100 transition duration-200 rounded px-5 py-3"><i className="fas fa-th"></i> Explore</a>
                    </div>
                </div>
            </header>
            <div className="container mx-auto px-4 py-6 flex">
                <aside className="w-1/4 bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold mb-4">Filters</h2>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Categories</h3>
                        <div>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Upto Class 8
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Class 9
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Class 10
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Class 11
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Class 12
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Graduation
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Post Graduation
                            </label>
                            <label className="block mb-2">
                                <input type="checkbox" className="mr-2" /> Post Graduation Diploma
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Select Country</h3>
                        <select className="w-full p-2 border rounded">
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Gender</h3>
                        <select className="w-full p-2 border rounded">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Religion</h3>
                        <select className="w-full p-2 border rounded">
                            <option>Hindu</option>
                            <option>Muslim</option>
                            <option>Christian</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">State</h3>
                        <select className="w-full p-2 border rounded">
                            <option>Delhi</option>
                            <option>Maharashtra</option>
                            <option>Uttar Pradesh</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Course</h3>
                        <select className="w-full p-2 border rounded">
                            <option>Engineering</option>
                            <option>Medical</option>
                            <option>Arts</option>
                        </select>
                    </div>
                </aside>
                <main className="w-3/4 ml-6">
                    <h1 className="text-2xl font-bold mb-4">Scholarships</h1>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search Scholarships..."
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {scholarships.map((scholarship, index) => (
                            <ScholarshipCard key={index} {...scholarship} />
                        ))}
                    </div>
                </main>
            </div>
            <AIChatbot />
        </div>
    );
};

export default ScholarshipPortal;
