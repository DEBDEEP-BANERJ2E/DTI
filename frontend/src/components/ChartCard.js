import React, { useState } from 'react';

const ChartCard = () => {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState('');

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');

    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');

    const universityOptions = [
        "Harvard University",
        "Stanford University",
        "MIT",
        "California Institute of Technology",
        "University of Chicago",
        "Columbia University",
        "Yale University",
        "University of Pennsylvania",
        "Princeton University",
        "University of California, Berkeley",
        "Heritage Institute of Technology"
    ];

    const courseOptions = [
        "Computer Science",
        "Business Administration",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Biology",
        "Mathematics",
        "Physics",
        "Psychology",
        "Graphic Design"
    ];

    const branchOptions = [
        "Undergraduate",
        "Postgraduate",
        "PhD",
        "Diploma",
        "Certificate"
    ];

    const handleAddUniversity = () => {
        if (selectedUniversity && !universities.includes(selectedUniversity)) {
            setUniversities([...universities, selectedUniversity]);
            setSelectedUniversity('');
        }
    };

    const handleRemoveUniversity = (universityToRemove) => {
        setUniversities(universities.filter(university => university !== universityToRemove));
    };

    const handleAddCourse = () => {
        if (selectedCourse && !courses.includes(selectedCourse)) {
            setCourses([...courses, selectedCourse]);
            setSelectedCourse('');
        }
    };

    const handleRemoveCourse = (courseToRemove) => {
        setCourses(courses.filter(course => course !== courseToRemove));
    };

    const handleAddBranch = () => {
        if (selectedBranch && !branches.includes(selectedBranch)) {
            setBranches([...branches, selectedBranch]);
            setSelectedBranch('');
        }
    };

    const handleRemoveBranch = (branchToRemove) => {
        setBranches(branches.filter(branch => branch !== branchToRemove));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">University List</h2>
            <div className="flex mb-4">
                <select 
                    value={selectedUniversity} 
                    onChange={(e) => setSelectedUniversity(e.target.value)} 
                    className="border rounded p-2 mr-2"
                >
                    <option value="">Select a university</option>
                    {universityOptions.map((university, index) => (
                        <option key={index} value={university}>
                            {university}
                        </option>
                    ))}
                </select>
                <button 
                    onClick={handleAddUniversity} 
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Add University
                </button>
            </div>
            <ul className="list-disc pl-5">
                {universities.map((university, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-800">{university}</span>
                        <button 
                            onClick={() => handleRemoveUniversity(university)} 
                            className="text-red-500 ml-2"
                        >
                            &minus;
                        </button>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mb-2 mt-6">Course List</h2>
            <div className="flex mb-4">
                <select 
                    value={selectedCourse} 
                    onChange={(e) => setSelectedCourse(e.target.value)} 
                    className="border rounded p-2 mr-2"
                >
                    <option value="">Select a course</option>
                    {courseOptions.map((course, index) => (
                        <option key={index} value={course}>
                            {course}
                        </option>
                    ))}
                </select>
                <button 
                    onClick={handleAddCourse} 
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Add Course
                </button>
            </div>
            <ul className="list-disc pl-5">
                {courses.map((course, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-800">{course}</span>
                        <button 
                            onClick={() => handleRemoveCourse(course)} 
                            className="text-red-500 ml-2"
                        >
                            &minus;
                        </button>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mb-2 mt-6">Branch List</h2>
            <div className="flex mb-4">
                <select 
                    value={selectedBranch} 
                    onChange={(e) => setSelectedBranch(e.target.value)} 
                    className="border rounded p-2 mr-2"
                >
                    <option value="">Select a branch</option>
                    {branchOptions.map((branch, index) => (
                        <option key={index} value={branch}>
                            {branch}
                        </option>
                    ))}
                </select>
                <button 
                    onClick={handleAddBranch} 
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Add Branch
                </button>
            </div>
            <ul className="list-disc pl-5">
                {branches.map((branch, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-800">{branch}</span>
                        <button 
                            onClick={() => handleRemoveBranch(branch)} 
                            className="text-red-500 ml-2"
                        >
                            &minus;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChartCard;
