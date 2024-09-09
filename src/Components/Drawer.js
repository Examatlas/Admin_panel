import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
//   {
//     segment: 'contents',
//     title: 'Contents',
//     icon: <AutoAwesomeMosaicIcon />,
//   },
  {
    kind: 'divider',
  },
//   {
//     kind: 'header',
//     title: 'Analytics',
//   },


// content section
{
    segment: 'contents',
    title: 'Contents',
    icon: <GridViewIcon/>,
    children: [
      {
        segment: 'courses',
        title: 'Courses',
        icon: <DescriptionIcon />,
      },
     
      {
        segment: 'liveClasses',
        title: 'live classes',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'mocktest',
        title: 'Mock Test',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'testSeries',
        title: 'Test Series',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Bundles',
        title: 'Bundles',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Batch',
        title: 'Batch',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Ebooks',
        title: 'Ebooks',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Podcasts',
        title: 'Podcasts',
        icon: <DescriptionIcon />,
      },{
        segment: 'Webinar',
        title: 'Webinar',
        icon: <DescriptionIcon />,
      },{
        segment: 'DigitalProducts',
        title: 'Digital Products',
        icon: <DescriptionIcon />,
      },{
        segment: 'FreeResource',
        title: 'Free Resource',
        icon: <DescriptionIcon />,
      },{
        segment: 'Telegram',
        title: 'Telegram',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Utilities',
        title: 'Utilities',
        icon: <DescriptionIcon />,
      },{
        segment: 'legacyQuestionPool',
        title: 'legacy Question Pool',
        icon: <DescriptionIcon />,
      },{
        segment: 'QuestionPool',
        title: 'Question Pool',
        icon: <DescriptionIcon />,
      },{
        segment: 'Subscriptions',
        title: 'Subscriptions',
        icon: <DescriptionIcon />,
      },{
        segment: 'Newsfeed',
        title: 'Newsfeed',
        icon: <DescriptionIcon />,
      },{
        segment: 'Communities',
        title: 'Communities',
        icon: <DescriptionIcon />,
      },{
        segment: 'Categories',
        title: 'Categories',
        icon: <DescriptionIcon />,
      },{
        segment: 'Segments',
        title: 'Segments',
        icon: <DescriptionIcon />,
      },{
        segment: 'Tags',
        title: 'Tags',
        icon: <DescriptionIcon />,
      }
    ]
},

// for website section
  {
    segment: 'Website&Apps',
    title: 'Website & Apps',
    icon: < LanguageIcon />,
    children: [
      {
        segment: 'Website',
        title: 'Website',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'MobileApps',
        title: 'Mobile Apps',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Branding',
        title: 'Branding',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Embeddables',
        title: 'Embeddables',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Language',
        title: 'Language',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'SignupSettings',
        title: 'Sign up Settings',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'CustomFields',
        title: 'Custom Fields',
        icon: <DescriptionIcon />,
      },
    ],
  },


// for marketing section
  {
    segment: 'marketing',
    title: 'Marketing',
    icon: < VolumeDownIcon />,
    children: [
      {
        segment: 'Messenger',
        title: 'Messenger',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Coupons',
        title: 'Coupons',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Wallet',
        title: 'Wallet',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'RefferalCode',
        title: 'Refferal Code',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Integrations',
        title: 'Integrations',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Affiliates',
        title: 'Affiliates',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Forms',
        title: 'Forms',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'CTA',
        title: 'CTA',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Events',
        title: 'Events',
        icon: <DescriptionIcon />,
      },
    ],
  },


// for user section
{
    segment: 'Users',
    title: 'Users',
    icon: < PersonOutlineIcon />,
    children: [
      {
        segment: 'Learners',
        title: 'Learners',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Groups',
        title: 'Groups',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Sub-Admins',
        title: 'Sub-Admins',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Contacts',
        title: 'Contacts',
        icon: <DescriptionIcon />,
      },
    ],
  },


// for Report section 
{
    segment: 'Reports',
    title: 'Reports',
    icon: < SignalCellularAltIcon />,
    children: [
      {
        segment: 'Enrollments',
        title: 'Enrollments',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Transactions',
        title: 'Transactions',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'PaymentGateways',
        title: 'Payment Gateways',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Invoices',
        title: 'Invoices',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Progress&Scores',
        title: 'Progress & Scores',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Sales&Marketing',
        title: 'Sales & Marketing',
        icon: <DescriptionIcon />,
      }, {
        segment: 'LiveClassLegacy',
        title: 'Live Class -Legacy',
        icon: <DescriptionIcon />,
      }, {
        segment: 'LiveClass',
        title: 'Live Class',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Custom Fields',
        title: 'Custom Fields',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'DigitalEvaluation',
        title: 'Digital Evaluation',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Legacy Reports',
        title: 'Legacy Reports',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Exports',
        title: 'Exports',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Boardcast Message',
        title: 'Boardcast Message',
        icon: <DescriptionIcon />,
      }, {
        segment: 'Resource Usage',
        title: 'Resource Usage',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Messanger Insights',
        title: 'Messanger Insights',
        icon: <DescriptionIcon />,
      }, {
        segment: 'School Payouts',
        title: 'School Payouts',
        icon: <DescriptionIcon />,
      },
    ],
  },


// for manage section
{
    segment: 'Manage',
    title: 'Manage',
    icon: < ViewInArIcon />,
    children: [
      {
        segment: 'Course Encryption',
        title: 'Course Encryption',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Discussions',
        title: 'Discussions',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Rating&Reviews',
        title: 'Rating & Reviews',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'LegacyAnswerReview',
        title: 'Legacy Answer Review',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'AnswerReviews',
        title: 'Answer Reviews',
        icon: <DescriptionIcon />,
      }, {
        segment: 'LearnerSupport',
        title: 'Learner Support',
        icon: <DescriptionIcon />,
      }, 
    ],
  },

  {
    segment: 'Add-Ons',
    title: 'Add-Ons',
    icon: <AddToPhotosOutlinedIcon />,
  },
  {
    segment: 'PrivacyMonitor',
    title: 'Privacy Monitor',
    icon: <VisibilityOutlinedIcon />,
  },
  {
    segment: 'SubSchools',
    title: 'Sub-Schools',
    icon: <SchoolOutlinedIcon />,
  },
  {
    segment: 'Settings',
    title: 'Settings',
    icon: <SettingsOutlinedIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
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


function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
