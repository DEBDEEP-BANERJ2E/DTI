import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600"> Dashboard / Student</p>
            </div>
            <div className="flex items-center">
                <input type="text" placeholder="Type here..." className="border rounded-lg px-4 py-2 mr-4" />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Search</button>

                {/* Redirect icons to /login */}
                <Link to="/login" className="ml-4">
                    <i className="fas fa-sign-in-alt text-gray-600"></i>
                </Link>
                <Link to="/login" className="ml-4">
                    <i className="fas fa-cog text-gray-600"></i>
                </Link>
            </div>
        </div>
    );
};

export default Header;
