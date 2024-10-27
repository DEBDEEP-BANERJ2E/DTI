import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SalesOverview = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const [files, setFiles] = useState({
        transcripts: null,
        passport: null,
        recommendation: null,
        sop: null,
        financial: null,
        scores: null
    });

    const [selectedDocument, setSelectedDocument] = useState('transcripts');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert('Files submitted successfully!');
    };

    const handlePayment = () => {
        navigate('/payment'); // Redirect to the PaymentForm component
    };

    // Handle the file drop event
    const handleDrop = useCallback((event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length) {
            const file = droppedFiles[0];
            setFiles(prevFiles => ({
                ...prevFiles,
                [selectedDocument]: file.name // Set the name of the dropped file
            }));
        }
    }, [selectedDocument]);

    // Handle drag over event to allow drop
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            setFiles(prevFiles => ({
                ...prevFiles,
                [selectedDocument]: file.name // Set the name of the selected file
            }));
        }
    };

    return (
        <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
            maxWidth: '1200px', // Increased maxWidth to accommodate wider drag-and-drop box
            margin: 'auto' 
        }}>
            {/* Centered Heading and Subtitle */}
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800" style={{ textAlign: 'center' }}>UploadEase</h2>
            <p style={{ color: 'black', marginBottom: '20px', textAlign: 'center' }}>Your document submission process made easier</p>
    
            {/* Flex Container for Document List, Upload Section, and Drag-and-Drop Area */}
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '2rem' }}>
                {/* Required Documents Section */}
                <div style={{ flex: '1', padding: '50px', borderRight: '1px solid #ddd' }}>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>Required Documents</h1>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', color: 'black' }}>
                        <li>Transcripts</li>
                        <li>Passport Copy</li>
                        <li>Letter of Recommendation</li>
                        <li>Statement of Purpose</li>
                        <li>Proof of English Proficiency</li>
                        <li>Financial Statement</li>
                        <li>High School Diploma</li>
                        <li>GRE/GMAT Scores</li>
                        <li>Portfolio (for Art/Design courses)</li>
                    </ul>
                </div>
    
                {/* Upload Section */}
                <div style={{ flex: '1', padding: '20px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Upload Your Documents</h2>
                    <form id="upload-form" onSubmit={handleSubmit}>
                        {['transcripts', 'passport', 'recommendation', 'sop', 'financial', 'scores'].map((doc, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <label htmlFor={doc} style={{ display: 'block', marginBottom: '5px', color: 'black' }}>
                                    {doc.charAt(0).toUpperCase() + doc.slice(1).replace(/_/g, ' ')}:
                                </label>
                                <input 
                                    type="text" 
                                    id={doc} 
                                    name={doc} 
                                    value={files[doc] || ''} // Show the name of the uploaded file
                                    readOnly
                                    style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} 
                                />
                                {/* Choose File Button */}
                                <input 
                                    type="file" 
                                    onChange={handleFileChange} 
                                    style={{ marginTop: '5px', width: '100%' }} 
                                    accept=".pdf, .doc, .docx, .jpg, .png" // Specify acceptable file types
                                />
                            </div>
                        ))}
                        <button type="submit" style={{ 
                            padding: '10px 15px', 
                            backgroundColor: 'black', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: 'pointer',
                            marginTop: '20px'
                        }}>
                            Submit & Save
                        </button>
                    </form>
                </div>
    
                {/* Drag-and-Drop Section */}
                <div style={{ flex: '1', padding: '20px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Drag and Drop Your Documents</h2>
                    {/* Dropdown for Document Selection */}
                    <label style={{ display: 'block', marginBottom: '5px', color: 'black', marginTop: '2rem' }}>
                        Select Document Type:
                    </label>
                    <select 
                        value={selectedDocument} 
                        onChange={(e) => setSelectedDocument(e.target.value)} 
                        style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
                    >
                        {['transcripts', 'passport', 'recommendation', 'sop', 'financial', 'scores'].map((doc) => (
                            <option key={doc} value={doc}>
                                {doc.charAt(0).toUpperCase() + doc.slice(1).replace(/_/g, ' ')}
                            </option>
                        ))}
                    </select>
                    <div 
                        style={{ 
                            border: '2px dashed #ccc', 
                            padding: '20px', // Kept padding to maintain the size
                            //textAlign: 'center', 
                            color: 'black', 
                            height: '200px', // Maintained height for visibility
                            width: '100%', // Set to 200% as desired
                            marginBottom: '20px',
                            marginRight: '20px', // Added margin to separate from other elements
                            marginTop: '20px', // Added margin to separate from other elements
                            backgroundColor: '#f9f9f9', // Light background for better contrast
                            borderRadius: '8px', // Slightly rounded corners for better aesthetics
                            marginLeft: '0%', // Adjust margin to center the box within the new width
                            boxSizing: 'border-box' // Include padding in width calculation
                        }} 
                        onDrop={handleDrop} 
                        onDragOver={handleDragOver}
                    >
                        <p style={{ margin: 0 }}>Drag & Drop files here</p>
                    </div>
                </div>
            </div>
    
            {/* Payment Information at the Bottom */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p style={{ color: 'black', marginBottom: '2rem' }}>After submitting all documents, click below to proceed for payment.</p>
                <button type="button" onClick={handlePayment} style={{ 
                    padding: '10px 15px', 
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer' 
                }}>
                    Proceed to Payment
                </button>
                <br /><br />
            </div>
        </div>
    );
    
};

export default SalesOverview;
