import React, { useState } from "react";
import DashboardLayoutBasic from "../DashboardLayoutBasic";

const Subject = () => {
    const [subjectName, setSubjectName] = useState('');

    const handleInputChange = (e) => {
        setSubjectName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, like sending data to an API
        console.log('Subject:', subjectName);
    };

    return (
        <>
            <DashboardLayoutBasic>
                
                {/* Form with input for subject */}
                <form onSubmit={handleSubmit} className="mt-8 p-6">
                    <label className="block text-xl font-semibold mb-6">
                        Enter Subject Name
                    </label>
                    <input 
                        type="text" 
                        value={subjectName} 
                        onChange={handleInputChange} 
                        placeholder="Type subject name here" 
                        className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-600" 
                    />
                    <button 
                        type="submit" 
                        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </DashboardLayoutBasic>
        </>
    );
};

export default Subject;
