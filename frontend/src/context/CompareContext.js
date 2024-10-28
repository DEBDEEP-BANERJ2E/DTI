import React, { createContext, useContext, useState } from 'react';

const CompareContext = createContext();

export const useCompare = () => useContext(CompareContext);

export const CompareProvider = ({ children }) => {
    const [colleges, setColleges] = useState(() => {
        const savedColleges = localStorage.getItem('colleges');
        return savedColleges ? JSON.parse(savedColleges) : [];
    });

    const addCollege = (college) => {
        if (!colleges.some((c) => c.id === college.id)) {
            const updatedColleges = [...colleges, college];
            setColleges(updatedColleges);
            localStorage.setItem('colleges', JSON.stringify(updatedColleges));
        }
    };

    const removeCollege = (id) => {
        const updatedColleges = colleges.filter((college) => college.id !== id);
        setColleges(updatedColleges);
        localStorage.setItem('colleges', JSON.stringify(updatedColleges));
    };

    return (
        <CompareContext.Provider value={{ colleges, addCollege, removeCollege }}>
            {children}
        </CompareContext.Provider>
    );
};
