
import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { ImBlog } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";


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
  
    {
      kind: 'divider',
    },
  


 // for category section 
 {
  segment: 'Master',
  title: 'Master',
  icon: < DashboardIcon />,
  children: [
    {
      segment: 'Subject',
      title: 'Subject',
      icon: <DescriptionIcon />,
    },
    {
      segment:'MasterCategory',
      title: 'Master Category',
      icon: <DescriptionIcon />,
      children:[
        {
          segment : 'Category',
          title : 'Category',
          icon : <DescriptionIcon/>
        },
        {
          segment : 'Sub-Category',
          title : 'Sub Category',
          icon: <DescriptionIcon/>
        }
      ]
    }
  ],
},




  
  // content section
  {
      segment: 'contents',
      title: 'Contents',
      icon: <GridViewIcon/>,
      children: [
        {
          segment: 'courses',
          title: 'Courses',
        //   path: '/contents/courses'
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
          segment: 'blog',
          title: 'Blog',
          icon: <ImBlog />,
        },
        {
          segment: 'current-affairs',
          title: 'Current Affairs',
          icon: <IoNewspaperOutline />,
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




 // for category section 
 {
  segment: 'ECommerce',
  title: 'ECommerce',
  icon: < DashboardIcon />,
  children: [
    {
      segment: 'EBooks',
      title: 'EBooks',
      icon: <DescriptionIcon />,
    },
    {
      segment: 'Books',
      title: 'Books',
      icon: <DescriptionIcon />,
    },
    // {
    //   segment:'MasterCategory',
    //   title: 'Master Category',
    //   icon: <DescriptionIcon />,
    //   children:[
    //     {
    //       segment : 'Category',
    //       title : 'Category',
    //       icon : <DescriptionIcon/>
    //     },
    //     {
    //       segment : 'Sub-Category',
    //       title : 'Sub Category',
    //       icon: <DescriptionIcon/>
    //     }
    //   ]
    // }
  ],
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
          segment: 'CustomField',
          title: 'Custom Fields',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'DigitalEvaluation',
          title: 'Digital Evaluation',
          icon: <DescriptionIcon />,
        }, {
          segment: 'LegacyReports',
          title: 'Legacy Reports',
          icon: <DescriptionIcon />,
        }, {
          segment: 'Exports',
          title: 'Exports',
          icon: <DescriptionIcon />,
        }, {
          segment: 'BoardcastMessage',
          title: 'Boardcast Message',
          icon: <DescriptionIcon />,
        }, {
          segment: 'ResourceUsage',
          title: 'Resource Usage',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'MessangerInsights',
          title: 'Messanger Insights',
          icon: <DescriptionIcon />,
        }, {
          segment: 'SchoolPayouts',
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
          segment: 'CourseEncryption',
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

  export default NAVIGATION