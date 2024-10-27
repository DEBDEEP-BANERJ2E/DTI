import React, { useState, useEffect } from 'react';
import universityData from '../json/universityData.json';
import { Link } from 'react-router-dom';
import AIChatbot from './AIChatbot';

const SearchResults = () => {

    

    // State to store universities (since there's no fetching, we set it directly)
    const [universities, setUniversities] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [searchRanking, setSearchRanking] = useState('');
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid' mode
    const [filterUniversities, setFilterUniversities] = useState(universityData);

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", 
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", 
        "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
        "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", 
        "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
        "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", 
        "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", 
        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
        "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", 
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", 
        "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", 
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
        "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", 
        "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
        "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
        "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
        "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", 
        "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", 
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    

    // Simulate fetching data by using useEffect to set the JSON data
    useEffect(() => {
        setUniversities(universityData); // Simulates fetching
        setFilterUniversities(universityData);
    }, []);

    // Filtering Logic
    const filteredUniversities = universities.filter(university => {
        return (
            university && 
            university.name && university.name.toLowerCase().includes(searchName ? searchName.toLowerCase() : '') &&
            university.location && university.location.toLowerCase().includes(searchLocation ? searchLocation.toLowerCase() : '') &&
            (searchRanking === '' || university.qsRanking === parseInt(searchRanking)) // Filter by ranking if it's provided
        );
    });
    

    const handleCountrySelect = (country) => {
        //setSelectedCountry(country);
        const filtered = universityData.filter(university => university.location === country);
        setFilterUniversities(filtered); // Update the state with the filtered universities
    };
      

    const handleFilter = (criteria) => {
        let sortedUniversities = [...filterUniversities]; // Copy the current universities

        switch (criteria) {
            case 'nirf':
                sortedUniversities.sort((a, b) => a.nirfRanking - b.nirfRanking);
                break;
            case 'qs':
                sortedUniversities.sort((a, b) => a.qsRanking - b.qsRanking);
                break;
            case 'featured':
                sortedUniversities = sortedUniversities.filter(university => university.featured);
                break;
            default:
                break;
        }

        setFilterUniversities(sortedUniversities); // Update the state with the sorted universities
    };

    // Toggle view modes
    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

    return (
        <div>
            <AIChatbot />
            {/* Header Section */}
            <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
                <div className="text-3xl font-bold px-10">UniSearch</div>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-900 px-4 py-2 rounded">Register</button>
                    <button className="bg-white text-blue-900 px-4 py-2 rounded">Sign in</button>
                </div>
            </header>

            {/* Navigation Buttons */}
            <div className="bg-blue-900 text-white p-4 flex justify-center space-x-4">
                <button className="bg-blue-700 px-4 py-2 rounded" onClick={() => setFilterUniversities(universityData)}>Universities</button>
                <button className="px-4 py-2 rounded" onClick={() => handleFilter('nirf')}>NIRF Ranking</button>
                <button className="px-4 py-2 rounded" onClick={() => handleFilter('qs')}>QS Ranking</button>
                {/* Country selection dropdown */}
            <div className="relative inline-block text-left">
                <button 
                    className="px-4 py-2 rounded" 
                    onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                >
                    Country
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            {countries.map((country) => (
                                <button 
                                    key={country} 
                                    onClick={() => handleCountrySelect(country)} 
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
                <button className="px-4 py-2 rounded" onClick={() => handleFilter('featured')}>Featured</button>
            </div>

            {/* Search Section */}
            <div className="bg-white p-4 shadow-md flex justify-center items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search by University"
                    className="border p-2 rounded w-1/3"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by Location"
                    className="border p-2 rounded w-1/3"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by QS Ranking"
                    className="border p-2 rounded w-1/3"
                    value={searchRanking}
                    onChange={(e) => setSearchRanking(e.target.value)}
                />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Search</button>
            </div>

            {/* Breadcrumbs */}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Universities: {filteredUniversities.length} results found</h1>

                {/* Sorting and View Options */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-sort"></i>
                        <span>Sort by: Top ranks for Universities</span>
                    </div>
                    <div className="flex space-x-2">
                        <button 
                            className={`border px-4 py-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                            onClick={() => handleViewModeChange('list')}
                        >
                            List
                        </button>
                        <button 
                            className={`border px-4 py-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                            onClick={() => handleViewModeChange('grid')}
                        >
                            Grid
                        </button>
                    </div>
                </div>

                {/* Sidebar + Listings */}
                <div className="flex">
                    {/* Sidebar Section */}
                    <aside className="w-1/4 p-4 border rounded">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">Show on map</button>
                        <div className="mb-4">
                            <h2 className="font-bold mb-2">Filter by:</h2>
                            <div className="mb-2">
                                <h3 className="font-semibold">Your previous filters</h3>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Indian Universities
                                </label>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold">University Course Fee (Excl. Scholarships)</h3>
                                <div className="flex items-center space-x-2 mb-2">
                                    <button className="border px-4 py-2 rounded">Per semester</button>
                                    <button className="border px-4 py-2 rounded">Per year</button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>₹20,000</span>
                                    <input type="range" className="w-full" />
                                    <span>₹20Lakh+</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Popular filters</h3>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    IITs & NITs
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Government Universities
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Nirf Ranking Universities
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Private Universities
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Universities in West Bengal
                                </label>
                            </div>
                        </div>
                    </aside>

                    {/* University Listings */}
                    <main className="w-3/4 p-4">
                        <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-3' : ''}`}>
                            {filteredUniversities.map((university, index) => (
                                <div key={index} className={`border rounded-lg p-4 ${viewMode === 'list' ? 'flex space-x-4' : ''}`}>
                                    <div>
                                        <img
                                            src={university.image}
                                            alt={university.name}
                                            //className="w-full h-40 object-cover rounded-md"
                                            style={{ width: '300px', height: '200px', objectFit: 'cover' }} // Ensures a consistent aspect ratio
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold"><Link to={`/univproftest/${university.id}`}>{university.name}</Link>
                                        {university.featured && (
                                            <span className="bg-yellow-300 text-yellow-800 font-bold px-2 py-1 rounded ml-2">
                                                Featured
                                            </span>
                                        )}
                                        </h2>
                                        <p className="text-gray-600 mb-2">{university.location}</p>
                                        <div className="mb-2">
                                            <span className="font-semibold">QS Ranking: </span>
                                            <span>{university.qsRanking}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="font-semibold">NIRF Ranking: </span>
                                            <span>{university.nirfRanking}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="font-semibold">Phone Number: </span>
                                            <span>{university.phoneNumber}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <i className="fas fa-star text-yellow-500"></i>
                                            <span>{university.reviews.rating} ({university.reviews.count} reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
