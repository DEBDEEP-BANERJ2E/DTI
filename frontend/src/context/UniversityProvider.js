// src/context/UniversityProvider.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/storageUtils';

const UniversityContext = createContext();

export const useUniversity = () => useContext(UniversityContext);

export const UniversityProvider = ({ children }) => {
    const [selectedUniversities, setSelectedUniversities] = useState([]);

    // Load data from local storage when the app starts
    useEffect(() => {
        const savedUniversities = loadFromLocalStorage('selectedUniversities');
        if (savedUniversities) {
            setSelectedUniversities(
                savedUniversities.map(univ => ({
                    ...univ,
                    deadline: new Date(univ.deadline) // Convert stored string to Date object
                }))
            );
        }
    }, []);

    // Save data to local storage whenever selectedUniversities changes
    useEffect(() => {
        saveToLocalStorage('selectedUniversities', selectedUniversities);
    }, [selectedUniversities]);

    const addUniversity = (university) => {
        if (!selectedUniversities.some(ud => ud.name === university.name)) {
            setSelectedUniversities([...selectedUniversities, university]);
        }
    };

    const removeUniversity = (universityName) => {
        setSelectedUniversities(prev => prev.filter(uni => uni.name !== universityName));
    };

    return (
        <UniversityContext.Provider value={{ selectedUniversities, addUniversity, removeUniversity }}>
            {children}
        </UniversityContext.Provider>
    );
};
