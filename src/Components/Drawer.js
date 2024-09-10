import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";


export function DemoPageContent({ pathname, children }) {
  console.log(pathname, "pathname");
  console.log(children, "children")
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
  
      {children} {/* Render children here */}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node, // Add this line to include children
};
