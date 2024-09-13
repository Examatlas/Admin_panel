import React from 'react';
import img4 from "../../Image/img4.png";

// Sample data
const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    price: "$199",
    image: img4,
    encryption: true
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    price: "$299",
    image: img4,
    encryption: false
  },
  {
    id: 3,
    title: "React for Beginners",
    price: "$249",
    image: img4,
    encryption: true
  }
];

// CourseCard component
const CourseCard = ({ course }) => (


// CourseCard component
<div className="bg-white shadow-md rounded-lg overflow-hidden max-w-[1000px] lg:w-[1000px] md:w-[800px] sm:w-[700px] w-[500px] mb-6">
  <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
    <p className="text-gray-600 mb-2">Price: {course.price}</p>
    <p className="text-gray-600">Encryption: {course.encryption ? 'Yes' : 'No'}</p>
  </div>
</div>

);


const CoursesList = () => (
  <div className="flex flex-col md:flex-row lg:ml-[330px]  gap-5 mt-10 p-4">
    {courses.map(course => (
      <CourseCard key={course.id} course={course} className="mr-4" />
    ))}
  </div>
);

export default CoursesList;
