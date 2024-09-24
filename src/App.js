import "./App.css";
import Login from "./Components/login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

import LiveClasses from "./Components/Contents/LiveClasses/LiveClasses";

import MockTest from "./Components/Contents/MockTest";
import Bundles from "./Components/Contents/Bundles";
import Batch from "./Components/Contents/Batch";
import TestSeries from "./Components/Contents/TestSeries";
import Podcasts from "./Components/Contents/Podcasts";
import DigitalProducts from "./Components/Contents/DigitalProducts";
import Webinar from "./Components/Contents/Webinar";
import FreeResource from "./Components/Contents/FreeResource";
import Utilities from "./Components/Contents/Utilities";
import Telegram from "./Components/Contents/Telegram";
import Newsfeed from "./Components/Contents/Newsfeed";
import LegacyPool from "./Components/Contents/LegacyPool";
import QuestionPool from "./Components/Contents/QuestionPool";
import Subscription from "./Components/Contents/Subscription";
import Communities from "./Components/Contents/Communities";

import Segments from "./Components/Contents/Segments";
import Tags from "./Components/Contents/Tags";
import Website from "./Components/Website&Apps/Website";
import MobileApp from "./Components/Website&Apps/MobileApp";
import Branding from "./Components/Website&Apps/Branding";
import Embeddables from "./Components/Website&Apps/Embeddable";
import Language from "./Components/Website&Apps/Language";
import SignUpSetting from "./Components/Website&Apps/SignUpSetting";
import CustomFields from "./Components/Website&Apps/CustomFields";
import Messenger from "./Components/Marketing/Messenger";
import Coupons from "./Components/Marketing/Coupons";
import Wallet from "./Components/Marketing/Wallet";
import RefferalCode from "./Components/Marketing/RefferalCode";
import Integrations from "./Components/Marketing/Integrations";
import Affiliates from "./Components/Marketing/Affiliates";
import Cta from "./Components/Marketing/Cta";
import Forms from "./Components/Marketing/Forms";
import Events from "./Components/Marketing/Events";
import Contacts from "./Components/Users/Contact";
import Groups from "./Components/Users/Groups";
import Learners from "./Components/Users/learners";
import SubAdmins from "./Components/Users/SubAdmins";
import Boardcast from "./Components/Reports/BoardCastMessage";
import CustomField from "./Components/Reports/CustomFields";
import DigitalEvaluation from "./Components/Reports/DigitalEvaluation";
import Enrollments from "./Components/Reports/Enrollments";
import Exports from "./Components/Reports/Exports";
import Invoices from "./Components/Reports/Invoices";
import LegacyReports from "./Components/Reports/legacyReports";
import LiveClass from "./Components/Reports/LiveClass";
import LiveClassLegacy from "./Components/Reports/liveClasslegacy";
import MessangerInsights from "./Components/Reports/MessangerInsights";
import PaymentGateways from "./Components/Reports/PaymentGateways";
import ProgressScores from "./Components/Reports/Progress&Scores";
import ResourceUsage from "./Components/Reports/ResourceUsage";
import SalesMarketing from "./Components/Reports/Sales&Marketing";
import SchoolPayouts from "./Components/Reports/SchoolPayouts";
import Transactions from "./Components/Reports/Transactions";
import AnswerReview from "./Components/Manage/AnswerReview";
import CourseEncryption from "./Components/Manage/CourseEncryption";
import Discussions from "./Components/Manage/Discussions";
import RatingReview from "./Components/Manage/RatingReview";
import LegacyAnswerReview from "./Components/Manage/LegacyAnswerReview";
import LearnerSupport from "./Components/Manage/learnerSupport";
import AddOns from "./Components/AddOns";
import PrivacyMonitor from "./Components/PrivacyMonitor";
import SubSchools from "./Components/SubSchools";
import Setting from "./Components/Setting";
import Blog from "./Components/Contents/Blog/Blog";
import AddBlog from "./Components/Contents/Blog/AddBlog";

import Courses from "./Components/Courses/Courses";
import CourseForm from "./Components/Courses/CourseForm";

import CurrentAffairs from "./Components/Contents/currentAffairs/CurrentAffairs";
import AddCA from "./Components/Contents/currentAffairs/AddCA";
import {Toaster} from 'react-hot-toast';
import LiveHome from "./Components/liveStreaming/LiveHome";
import CreateLiveClass from "./Components/Contents/LiveClasses/CreateLiveClass";
import SpeakerScreenContainer from "./Components/liveStreaming/speakerScreen/SpeakerScreenContainer";
import EditBlog from "./Components/Contents/Blog/EditBlog";
import EditCurrentAffairs from "./Components/Contents/currentAffairs/EditCurrentAffair";
import Subject from "./Components/Master/Subject";
import Category from "./Components/Master/MasterCategory/Category";
import SubCategory from "./Components/Master/MasterCategory/SubCategory";
import EBooks from "./Components/ECommerce/EBooks";
import Books from "./Components/ECommerce/Books";


function App() {

  return (
    <>
      <Router>
        <Toaster/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/Master/Subject" element={<Subject/>}/>
          <Route path="/Master/MasterCategory/Category" element={<Category/>}/>
          <Route path="/Master/MasterCategory/Sub-Category" element={<SubCategory/>}/>

          <Route path="/ECommerce/EBooks" element={<EBooks/>}/>
          <Route path="/ECommerce/Books" element={<Books/>}/>

          <Route path="/contents/courses" element={<Courses />} />
          <Route path="/contents/CourseForm" element={<CourseForm />}/>

          <Route path="/contents/liveclasses" element={<LiveClasses />} />
          <Route path="/contents/liveStreaming" element={<LiveHome />} />
          <Route path="/contents/createLiveClass" element={<CreateLiveClass />} />
          <Route path="/contents/live/:meetingId" element={<SpeakerScreenContainer />} />


          <Route path="/contents/TestSeries" element={<TestSeries />} />
          <Route path="/contents/MockTest" element={<MockTest />} />

          <Route path="/contents/blog" element={<Blog />} />
          <Route path="/contents/add-blog" element={<AddBlog />} />
          <Route path="/contents/edit-blog/:blogId" element={<EditBlog />} />
          <Route path="/contents/current-affairs/:currentAffairId" element={<EditCurrentAffairs />} />

          <Route path="/contents/current-affairs" element={<CurrentAffairs />} />
          <Route path="/contents/add-ca" element={<AddCA />} />
          <Route path="/contents/Bundles" element={<Bundles />} />
          <Route path="/contents/Batch" element={<Batch />} />
         
          <Route path="/contents/Podcasts" element={<Podcasts />} />
          <Route path="/contents/Webinar" element={<Webinar />} />
          <Route
            path="/contents/DigitalProducts"
            element={<DigitalProducts />}
          />
          <Route path="/contents/FreeResource" element={<FreeResource />} />
          <Route path="/contents/Telegram" element={<Telegram />} />
          <Route path="/contents/Utilities" element={<Utilities />} />
          <Route path="/contents/LegacyQuestionPool" element={<LegacyPool />} />
          <Route path="/contents/QuestionPool" element={<QuestionPool />} />
          <Route path="/contents/Subscriptions" element={<Subscription />} />
          <Route path="/contents/Newsfeed" element={<Newsfeed />} />
          <Route path="/contents/Communities" element={<Communities />} />
          {/* <Route path="/contents/Categories" element={<Categories />} /> */}
          <Route path="/contents/Segments" element={<Segments />} />
          <Route path="/contents/Tags" element={<Tags />} />

          <Route path="/Website&Apps/Website" element={<Website />} />
          <Route path="/Website&Apps/MobileApps" element={<MobileApp />} />
          <Route path="/Website&Apps/Branding" element={<Branding />} />
          <Route path="/Website&Apps/Embeddables" element={<Embeddables />} />
          <Route path="/Website&Apps/Language" element={<Language />} />
          <Route
            path="/Website&Apps/SignUpSettings"
            element={<SignUpSetting />}
          />
          <Route path="/Website&Apps/CustomFields" element={<CustomFields />} />
          <Route path="/Marketing/Messenger" element={<Messenger />} />
          <Route path="/Marketing/Coupons" element={<Coupons />} />
          <Route path="/Marketing/Wallet" element={<Wallet />} />
          <Route path="/Marketing/RefferalCode" element={<RefferalCode />} />
          <Route path="/Marketing/Integrations" element={<Integrations />} />
          <Route path="/Marketing/Affiliates" element={<Affiliates />} />
          <Route path="/Marketing/Forms" element={<Forms />} />
          <Route path="/Marketing/Events" element={<Events />} />
          <Route path="/Marketing/Cta" element={<Cta />} />
          <Route path="/Users/Contacts" element={<Contacts />} />
          <Route path="/Users/Groups" element={<Groups />} />
          <Route path="/Users/learners" element={<Learners />} />
          <Route path="/Users/Sub-Admins" element={<SubAdmins />} />
          <Route path="/Reports/BoardcastMessage" element={<Boardcast />} />
          <Route path="/Reports/CustomField" element={<CustomField />} />
          <Route
            path="/Reports/DigitalEvaluation"
            element={<DigitalEvaluation />}
          />
          <Route path="/Reports/Enrollments" element={<Enrollments />} />
          <Route path="/Reports/Exports" element={<Exports />} />
          <Route path="/Reports/Invoices" element={<Invoices />} />
          <Route path="/Reports/LegacyReports" element={<LegacyReports />} />
          <Route path="/Reports/LiveClass" element={<LiveClass />} />
          <Route
            path="/Reports/LiveClassLegacy"
            element={<LiveClassLegacy />}
          />
          <Route
            path="/Reports/MessangerInsights"
            element={<MessangerInsights />}
          />
          <Route
            path="/Reports/PaymentGateways"
            element={<PaymentGateways />}
          />
          <Route path="/Reports/Progress&Scores" element={<ProgressScores />} />
          <Route path="/Reports/ResourceUsage" element={<ResourceUsage />} />
          <Route path="/Reports/Sales&Marketing" element={<SalesMarketing />} />
          <Route path="/Reports/SchoolPayouts" element={<SchoolPayouts />} />
          <Route path="/Reports/Transactions" element={<Transactions />} />
          <Route path="/Manage/AnswerReviews" element={<AnswerReview />} />
          <Route
            path="/Manage/CourseEncryption"
            element={<CourseEncryption />}
          />
          <Route path="/Manage/Discussions" element={<Discussions />} />
          <Route path="/Manage/Rating&Reviews" element={<RatingReview />} />
          <Route
            path="/Manage/LegacyAnswerReview"
            element={<LegacyAnswerReview />}
          />
          <Route path="/Manage/LearnerSupport" element={<LearnerSupport />} />

          <Route path="/Add-Ons" element={<AddOns />} />
          <Route path="/PrivacyMonitor" element={<PrivacyMonitor />} />
          <Route path="/SubSchools" element={<SubSchools />} />
          <Route path="/Settings" element={<Setting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
