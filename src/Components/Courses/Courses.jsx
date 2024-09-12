import React, { useState } from "react";
import DashboardLayoutBasic from "../DashboardLayoutBasic";
import CourseForm from "./CourseForm";
import { useNavigate } from "react-router-dom";
import CoursesList from "./CourseList";

const Courses = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [showForm, setShowForm] = useState(false)


    const handleSearch = () => {
        // Logic to handle search
        console.log('Searching for:', query);
    };

    // button for form open
    const handleOpenForm = () => {
        setShowForm(true)
    }

    const handleCreateClick = () => {
        navigate('/contents/CourseForm')
    }


    return (
        <>
            <DashboardLayoutBasic>
                <div className="flex">
                    <h1 className="text-3xl mt-6 font-semibold mr-[50rem]">Courses</h1>
                    <button
                        className="border border-green-500 bg-green-500 text-white rounded-lg mr-32 px-5 mt-5 hover:bg-green-600 font-semibold"
                        onClick={() => {
                            handleOpenForm(); // First function call
                            handleCreateClick(); // Second function call
                        }}
                    >
                        + Create
                    </button>
                </div>

                <p className="mr-[56rem] mt-1">Welcome to your course dashboard</p>

                <div className="flex mr-[47rem] mt-7">
                    <input
                        type="text"
                        placeholder="Search By Title..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="p-2 w-80 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5 ml-7"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 "
                    >
                        Search
                    </button>

                </div>

               

                {showForm && (
                    <CourseForm
                    />
                )}
            </DashboardLayoutBasic>

            <CoursesList/>
        </>
    )
}
export default Courses;




