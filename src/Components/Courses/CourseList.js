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
         
          <div className="border  border-gray-500 shadow-md rounded-lg overflow-hidden max-w-[500px] lg:w-[500px] md:w-[800px] sm:w-[700px] w-[500px] mb-6 mt-10">
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
