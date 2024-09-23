// import React, { useState } from "react";
// import DashboardLayoutBasic from "../DashboardLayoutBasic";
// import CourseForm from "./CourseForm";
// import { useNavigate } from "react-router-dom";
// import CourseList from "./CourseList";

// const Courses = () => {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   const handleSearch = () => {
//     console.log('Searching for:', query);
//   };

//   const handleOpenForm = () => {
//     setShowForm(true);
//   };

//   const handleCreateClick = () => {
//     navigate('/contents/CourseForm');
//   };

//   return (
//     <>
//       <DashboardLayoutBasic>
//         <div className="flex flex-col md:flex-row md:items-center justify-between ">
//           <h1 className="text-3xl mt-6 font-semibold text-center">Courses</h1>
//           <button
//             className="border border-green-500 bg-green-500 text-white rounded-lg px-5  hover:bg-green-600 font-semibold mt-7 lg:ml-7 ml-0 py-1"
//             onClick={() => {
//               handleOpenForm();
//               handleCreateClick();
//             }}
//           >
//             + Create
//           </button>
//         </div>

//         <p className="mt-1 items-center">Welcome to your course dashboard</p>

//         <div className="flex flex-col md:flex-row md:items-center gap-3 mt-7">
//           <input
//             type="text"
//             placeholder="Search By Title..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="p-2 w-full md:w-80 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleSearch}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Search
//           </button>
//         </div>

//         {showForm && <CourseForm />}

//         <CourseList/>
//       </DashboardLayoutBasic>

    
//     </>
//   );
// };

// export default Courses;



import React, { useState } from "react";
import DashboardLayoutBasic from "../DashboardLayoutBasic";
import CourseForm from "./CourseForm";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList";

const Courses = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCreateClick = () => {
    navigate('/contents/CourseForm');
  };

  return (
    <DashboardLayoutBasic>
      <div className="flex flex-col md:flex-row md:items-center justify-between ">
        <h1 className="text-3xl mt-6 font-semibold text-center">Courses</h1>
        <button
          className="border border-green-500 bg-green-500 text-white rounded-lg px-5 hover:bg-green-600 font-semibold mt-7 lg:ml-7 ml-0 py-1"
          onClick={handleCreateClick}
        >
          + Create
        </button>
      </div>


      <p className="mt-1 items-center">Welcome to your course dashboard</p>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-7">
        <input
          type="text"
          placeholder="Search By Title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-full md:w-80 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>

      {showForm && <CourseForm />}

      <CourseList /> {/* Ensure this is rendering */}
    </DashboardLayoutBasic>
  );
};

export default Courses;
