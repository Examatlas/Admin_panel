// import React from 'react';
// import img4 from "../../Image/img4.png";

// // Sample data
// const courses = [
//   {
//     id: 1,
//     title: "Introduction to Programming",
//     price: "$199",
//     image: img4,
//     encryption: true
//   },
//   {
//     id: 2,
//     title: "Advanced JavaScript",
//     price: "$299",
//     image: img4,
//     encryption: false
//   },
//   {
//     id: 3,
//     title: "React for Beginners",
//     price: "$249",
//     image: img4,
//     encryption: true
//   }
// ];

// // CourseCard component
// const CourseCard = ({ course }) => (


// // CourseCard component
// <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-[1000px] lg:w-[1000px] md:w-[800px] sm:w-[700px] w-[500px] mb-6">
//   <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
//   <div className="p-4">
//     <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//     <p className="text-gray-600 mb-2">Price: {course.price}</p>
//     <p className="text-gray-600">Encryption: {course.encryption ? 'Yes' : 'No'}</p>
//   </div>
// </div>

// );


// const CoursesList = () => (
//   <div className="flex flex-col md:flex-row lg:ml-[330px]  gap-5 mt-10 p-4">
//     {courses.map(course => (
//       <CourseCard key={course.id} course={course} className="mr-4" />
//     ))}
//   </div>
// );

// export default CoursesList;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import API_BASE_URL from '../../config';

// // CourseCard component
// const CourseList = () => {
//   const [course, setCourse] = useState()

//   const fetchAllCourse = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/api/course/getAllCourse`);
//       setCourse(response?.data?.newCourse)
//     }
//     catch (error) {
//       console.log("errors when fetching courses", error);
//     }
//   }

//   useEffect(() => {
//     fetchAllCourse();
//   }, [])



// return (
//   <>
//     {course?.map((item, index) => {
//       return (
        // <div key={index}>
        //   <div className="bg-black shadow-md rounded-lg overflow-hidden max-w-[1000px] lg:w-[1000px] md:w-[800px] sm:w-[700px] w-[500px] mb-6">
        //     <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
        //     <div className="p-4">
        //       <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        //       <p className="text-gray-600 mb-2">Price: {item.price}</p>
        //       <p className="text-gray-600">Encryption: {item.encryption ? 'Yes' : 'No'}</p>
        //     </div>
        //   </div>

        // </div>
//       )
//     })}

//   </>
// )
// }
// export default CourseList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config';

const CourseList = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllCourse = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/course/getAllCourse`);
      console.log(response.data); // Check API response structure
      setCourse(response?.data?.course || []);
      console.log("Courses set to state:", response?.data?.newCourse);
    } catch (error) {
      console.error("Error fetching courses", error);
      setError("Failed to fetch courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    
      {course.length > 0 ? (
        course.map((item) => (
          <div key={item._id}>
         
          <div className="border  border-gray-500 shadow-md rounded-lg overflow-hidden max-w-[1000px] lg:w-[1000px] md:w-[800px] sm:w-[700px] w-[500px] mb-6 mt-10">
            <img className="w-full h-48 object-cover" src={item.image} />
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-2">{item.title}</h2>
              <p className="text-black mb-2">Price: {item.price}</p>
              <p className="text-black">Encryption: {item.encryption ? 'Yes' : 'No'}</p>
            </div>
          </div>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </>
  );
};

export default CourseList;
