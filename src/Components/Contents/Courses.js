import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import DashboardLayoutBasic from "../DashboardLayoutBasic"; // Adjust the import path as needed

const courses = [
  { id: 1, title: "Introduction to React", description: "Learn the basics of React." },
  { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript." },
  { id: 3, title: "UI/UX Design", description: "Principles of UI/UX design." },
  // Add more courses as needed
];

const Courses = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <DashboardLayoutBasic>
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Available Courses
        </Typography>
        {courses.map((course) => (
          <Box
            key={course.id}
            sx={{
              mb: 2,
              p: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              width: '100%',
              maxWidth: 600,
              cursor: 'pointer',
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={() => handleCourseClick(course.id)}
          >
            <Typography variant="h6">{course.title}</Typography>
            <Typography>{course.description}</Typography>
          </Box>
        ))}
      </Box>
    </DashboardLayoutBasic>
  );
};

Courses.propTypes = {
  courses: PropTypes.array,
};

export default Courses;
