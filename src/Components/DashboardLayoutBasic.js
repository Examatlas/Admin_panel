import React from "react"; // Ensure React is imported
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useNavigate } from 'react-router-dom';
import NAVIGATION from "./navigation"; // Ensure NAVIGATION is correctly imported
import { DemoPageContent } from "./Drawer"; // Ensure the path is correct for DemoPageContent

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayoutBasic(props) {
  const { window, children } = props;
  const [pathname, setPathname] = React.useState("/dashboard");
  const navigate = useNavigate();

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        setPathname(String(path));
        navigate(path);
      },
    };
  }, [pathname, navigate]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://examatlas.com/assets/images/logo.png" alt="ExamAtlas" className="ml-16 h-16 w-20" />,
        title: "",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname}>
          {children} {/* Render children here */}
        </DemoPageContent>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node, // Add this line to include children
};

export default DashboardLayoutBasic;
