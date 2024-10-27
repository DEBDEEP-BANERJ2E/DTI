import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        "Heritage Institute of Technology",
        "Massachusetts Institute of Technology (MIT), USA - 99.3",
        "University of Cambridge, UK - 99.2",
        "University of Oxford, UK - 98.9",
        "Harvard University, USA - 98.3",
        "Stanford University, USA - 98.1",
        "Imperial College London, UK - 97.8",
        "ETH Zurich, Switzerland - 93.3",
        "National University of Singapore (NUS), Singapore - 92.7",
        "UCL (University College London), UK - 92.4",
        "University of California, Berkeley (UCB), USA - 90.4",
        "University of Chicago, USA - 90.3",
        "University of Pennsylvania, USA - 89.4",
        "Cornell University, USA - 89.3",
        "The University of Melbourne, Australia - 87.9",
        "California Institute of Technology (Caltech), USA - 87.8",
        "Yale University, USA - 87.7",
        "Peking University, China - 87.0",
        "Princeton University, USA - 87.0",
        "The University of New South Wales (UNSW Sydney), Australia - 86.7",
        "The University of Sydney, Australia - 86.7",
        "University of Toronto, Canada - 86.3",
        "The University of Edinburgh, UK - 86.1",
        "Columbia University, USA - 85.9",
        "Université PSL, France - 85.8",
        "Tsinghua University, China - 84.9",
        "Nanyang Technological University, Singapore (NTU), Singapore - 84.5",
        "The University of Hong Kong, Hong Kong - 84.5",
        "Johns Hopkins University, USA - 84.5",
        "The University of Tokyo, Japan - 84.3",
        "University of California, Los Angeles (UCLA), USA - 83.8",
        "McGill University, Canada - 83.7",
        "The University of Manchester, UK - 82.2",
        "University of Michigan-Ann Arbor, USA - 81.7",
        "Australian National University (ANU), Australia - 81.5",
        "University of British Columbia, Canada - 81.5",
        "EPFL – École polytechnique fédérale de Lausanne, Switzerland - 80.4",
        "Technical University of Munich, Germany - 80.0",
        "Institut Polytechnique de Paris, France - 79.5",
        "New York University (NYU), USA - 79.5",
        "King’s College London, UK - 79.3",
        "Seoul National University, South Korea - 78.5",
        "Monash University, Australia - 78.2",
        "The University of Queensland, Australia - 78.1",
        "Zhejiang University, China - 77.8",
        "The London School of Economics and Political Science (LSE), UK - 76.9",
        "Kyoto University, Japan - 76.3",
        "Delft University of Technology, Netherlands - 76.2",
        "Northwestern University, USA - 76.2",
        "The Chinese University of Hong Kong (CUHK), Hong Kong - 76.2",
        "Fudan University, China - 74.4",
        "Indian Institute of Technology Kharagpur (IIT KGP)",
        "Jadavpur University",
        "Indian Statistical Institute (ISI), Kolkata",
        "Bengal Engineering and Science University, Shibpur (BESU)",
        "Calcutta Institute of Technology",
        "University of Engineering and Management (UEM), Kolkata",
        "Techno India University",
        "RCC Institute of Information Technology",
        "Netaji Subhas Engineering College (NSEC)",
        "Murshidabad College of Engineering and Technology",
        "Haldia Institute of Technology",
        "Government College of Engineering and Textile Technology, Serampore",
        "Kalyani Government Engineering College",
        "Birla Institute of Technology, Kolkata",
        "Guru Nanak Institute of Technology",
        "Narula Institute of Technology",
        "West Bengal University of Technology (WBUT)",
        "Durgapur Institute of Advanced Technology and Management (DIATM)",
        "JIS College of Engineering",
        "Indian Institute of Technology Madras (IIT Madras)",
        "Indian Institute of Technology Delhi (IIT Delhi)",
        "Indian Institute of Technology Bombay (IIT Bombay)",
        "Indian Institute of Technology Kanpur (IIT Kanpur)",
        "Indian Institute of Technology Roorkee (IIT Roorkee)",
        "Indian Institute of Technology Guwahati (IIT Guwahati)",
        "National Institute of Technology Tiruchirappalli (NIT Trichy)",
        "National Institute of Technology Surathkal (NIT Surathkal)",
        "Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar)",
        "Indian Institute of Technology Bhilai (IIT Bhilai)",
        "National Institute of Technology Warangal (NIT Warangal)",
        "Indian Institute of Technology Jammu (IIT Jammu)",
        "National Institute of Technology Calicut (NIT Calicut)",
        "National Institute of Technology Rourkela (NIT Rourkela)",
        "National Institute of Technology Durgapur (NIT Durgapur)",
        "Thapar Institute of Engineering and Technology",
        "Indian Institute of Information Technology Allahabad (IIIT Allahabad)",
        "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
        "Vellore Institute of Technology (VIT)",
        "Delhi Technological University (DTU)",
        "IIIT Hyderabad (Indraprastha Institute of Information Technology)",
        "National Institute of Technology Silchar (NIT Silchar)",
        "M.S. Ramaiah Institute of Technology",
        "PSG College of Technology",
        "Jawaharlal Nehru Technological University, Hyderabad",
        "Indian Institute of Technology (Indian School of Mines) Dhanbad (IIT ISM Dhanbad)",
        "Guru Nanak Dev Engineering College",
        "Rajiv Gandhi Technical University",
        "National Institute of Technology Agartala (NIT Agartala)",
        "Shoolini University of Biotechnology and Management Sciences",
        "SRM Institute of Science and Technology",
        "Vignan's Foundation for Science, Technology & Research",
        "Amity University, Noida",
        "Banasthali Vidyapith",
        "National Institute of Technology Kurukshetra (NIT Kurukshetra)",
        "Sant Longowal Institute of Engineering and Technology",
        "COEP Technological University",
        "Jawaharlal Nehru Technological University, Anantapur",
        "HBTU Kanpur (Harcourt Butler Technical University)",
        "L.D. College of Engineering",
        "SASTRA Deemed University",
        "Sri Krishna College of Engineering and Technology",
        "Utkal University",
        "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
        "Indira Gandhi Institute of Aeronautics",
        "JNTU College of Engineering",
        "University College of Engineering, Osmania University",
        "Amrita Vishwa Vidyapeetham"
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
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
           <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Your CheckList</h1>
           <br></br>
           <div style={{ marginLeft: '2rem'}}>
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">University List</h2>
            
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <div className="flex mb-4 space-x-4">
                    <select
                        value={selectedUniversity}
                        onChange={(e) => setSelectedUniversity(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400 transition duration-300"
                    >
                        Add University
                    </button>
                </div>
                <ul className="list-disc pl-6 mb-2">
                    {universities.map((university, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-900">{university}</span>
                            <button
                                onClick={() => handleRemoveUniversity(university)}
                                style={{ marginRight: '9rem' }}
                                className="text-red-500 hover:text-red-700 font-bold ml-4 transition duration-300"
                                title="Remove University"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Course List</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <div className="flex mb-4 space-x-4">
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                        className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-400 transition duration-300"
                    >
                        Add Course
                    </button>
                </div>
                <ul className="list-disc pl-6 mb-2">
                    {courses.map((course, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-900">{course}</span>
                            <button
                                onClick={() => handleRemoveCourse(course)}
                                style={{ marginRight: '9rem' }}
                                className="text-red-500 hover:text-red-700 font-bold ml-4 transition duration-300"
                                title="Remove Course"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Branch List</h2>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex mb-4 space-x-4">
                    <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                        className="bg-gradient-to-r from-red-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-400 transition duration-300"
                    >
                        Add Branch
                    </button>
                </div>
                <ul className="list-disc pl-6 mb-2">
                    {branches.map((branch, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-900">{branch}</span>
                            <button
                                onClick={() => handleRemoveBranch(branch)}
                                style={{ marginRight: '9rem' }}
                                className="text-red-500 hover:text-red-700 font-bold ml-4 transition duration-300"
                                title="Remove Branch"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default ChartCard;
