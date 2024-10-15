import "./App.css";
import Login from "./Components/Auth/login";
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
import { Toaster } from "react-hot-toast";
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
import ClassDetails from "./Components/Contents/LiveClasses/ClassDetails";
import AddBook from "./Components/ECommerce/AddBook";
import EditBook from "./Components/ECommerce/EditBook";
import ScheduleLiveCourses from "./Components/Contents/LiveClasses/ScheduleLiveCourses";
import EditLiveCourse from "./Components/Contents/LiveClasses/EditLiveCourse";
import OrderReceive from "./Components/ECommerce/OrderReceive";
import Signup from "./Components/Auth/Signup";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Master/Subject"
            element={
              <ProtectedRoute>
                <Subject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Master/MasterCategory/Category"
            element={
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Master/MasterCategory/Sub-Category"
            element={
              <ProtectedRoute>
                <SubCategory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ECommerce/EBooks"
            element={
              <ProtectedRoute>
                <EBooks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ECommerce/Books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ECommerce/addBook"
            element={
              <ProtectedRoute>
                <AddBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ECommerce/editBook/:bookId"
            element={
              <ProtectedRoute>
                <EditBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ECommerce/orderRecieve"
            element={
              <ProtectedRoute>
                <OrderReceive />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contents/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/CourseForm"
            element={
              <ProtectedRoute>
                <CourseForm />
              </ProtectedRoute>
            }
          />
          {/* live class routes */}
          <Route
            path="/contents/liveclasses"
            element={
              <ProtectedRoute>
                <LiveClasses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/liveStreaming"
            element={
              <ProtectedRoute>
                <LiveHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/createLiveClass"
            element={
              <ProtectedRoute>
                <CreateLiveClass />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/liveclass/schedule/:courseId"
            element={
              <ProtectedRoute>
                <ScheduleLiveCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/live/:meetingId/:courseId/:classId"
            element={
              <ProtectedRoute>
                <SpeakerScreenContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/liveclasse/:classId"
            element={
              <ProtectedRoute>
                <ClassDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/update-live-course/:courseId"
            element={
              <ProtectedRoute>
                <EditLiveCourse />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contents/TestSeries"
            element={
              <ProtectedRoute>
                <TestSeries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/MockTest"
            element={
              <ProtectedRoute>
                <MockTest />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contents/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/add-blog"
            element={
              <ProtectedRoute>
                <AddBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/edit-blog/:blogId"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/current-affairs/:currentAffairId"
            element={
              <ProtectedRoute>
                <EditCurrentAffairs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contents/current-affairs"
            element={
              <ProtectedRoute>
                <CurrentAffairs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/add-ca"
            element={
              <ProtectedRoute>
                <AddCA />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Bundles"
            element={
              <ProtectedRoute>
                <Bundles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Batch"
            element={
              <ProtectedRoute>
                <Batch />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contents/Podcasts"
            element={
              <ProtectedRoute>
                <Podcasts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Webinar"
            element={
              <ProtectedRoute>
                <Webinar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/DigitalProducts"
            element={
              <ProtectedRoute>
                <DigitalProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/FreeResource"
            element={
              <ProtectedRoute>
                <FreeResource />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Telegram"
            element={
              <ProtectedRoute>
                <Telegram />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Utilities"
            element={
              <ProtectedRoute>
                <Utilities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/LegacyQuestionPool"
            element={
              <ProtectedRoute>
                <LegacyPool />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/QuestionPool"
            element={
              <ProtectedRoute>
                <QuestionPool />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Subscriptions"
            element={
              <ProtectedRoute>
                <Subscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Newsfeed"
            element={
              <ProtectedRoute>
                <Newsfeed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Communities"
            element={
              <ProtectedRoute>
                <Communities />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/contents/Categories" element={<Categories />} /> */}
          <Route
            path="/contents/Segments"
            element={
              <ProtectedRoute>
                <Segments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/Tags"
            element={
              <ProtectedRoute>
                <Tags />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Website&Apps/Website"
            element={
              <ProtectedRoute>
                <Website />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Website&Apps/MobileApps"
            element={
              <ProtectedRoute>
                <MobileApp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Website&Apps/Branding"
            element={
              <ProtectedRoute>
                <Branding />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Website&Apps/Embeddables"
            element={
              <ProtectedRoute>
                <Embeddables />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Website&Apps/Language"
            element={
              <ProtectedRoute>
                <Language />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Website&Apps/SignUpSettings"
            element={
              <ProtectedRoute>
                <SignUpSetting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Website&Apps/CustomFields"
            element={
              <ProtectedRoute>
                <CustomFields />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Messenger"
            element={
              <ProtectedRoute>
                <Messenger />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Coupons"
            element={
              <ProtectedRoute>
                <Coupons />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/RefferalCode"
            element={
              <ProtectedRoute>
                <RefferalCode />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Integrations"
            element={
              <ProtectedRoute>
                <Integrations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Affiliates"
            element={
              <ProtectedRoute>
                <Affiliates />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Forms"
            element={
              <ProtectedRoute>
                <Forms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Marketing/Cta"
            element={
              <ProtectedRoute>
                <Cta />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Users/Contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Users/Groups"
            element={
              <ProtectedRoute>
                <Groups />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Users/learners"
            element={
              <ProtectedRoute>
                <Learners />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Users/Sub-Admins"
            element={
              <ProtectedRoute>
                <SubAdmins />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/BoardcastMessage"
            element={
              <ProtectedRoute>
                <Boardcast />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/CustomField"
            element={
              <ProtectedRoute>
                <CustomField />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/DigitalEvaluation"
            element={
              <ProtectedRoute>
                <DigitalEvaluation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/Enrollments"
            element={
              <ProtectedRoute>
                <Enrollments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/Exports"
            element={
              <ProtectedRoute>
                <Exports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/Invoices"
            element={
              <ProtectedRoute>
                <Invoices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/LegacyReports"
            element={
              <ProtectedRoute>
                <LegacyReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/LiveClass"
            element={
              <ProtectedRoute>
                <LiveClass />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/LiveClassLegacy"
            element={
              <ProtectedRoute>
                <LiveClassLegacy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/MessangerInsights"
            element={
              <ProtectedRoute>
                <MessangerInsights />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/PaymentGateways"
            element={
              <ProtectedRoute>
                <PaymentGateways />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/Progress&Scores"
            element={
              <ProtectedRoute>
                <ProgressScores />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/ResourceUsage"
            element={
              <ProtectedRoute>
                <ResourceUsage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/Sales&Marketing"
            element={
              <ProtectedRoute>
                <SalesMarketing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/SchoolPayouts"
            element={
              <ProtectedRoute>
                <SchoolPayouts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports/Transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Manage/AnswerReviews"
            element={
              <ProtectedRoute>
                <AnswerReview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Manage/CourseEncryption"
            element={
              <ProtectedRoute>
                <CourseEncryption />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Manage/Discussions"
            element={
              <ProtectedRoute>
                <Discussions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Manage/Rating&Reviews"
            element={
              <ProtectedRoute>
                <RatingReview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Manage/LegacyAnswerReview"
            element={
              <ProtectedRoute>
                <LegacyAnswerReview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Manage/LearnerSupport"
            element={
              <ProtectedRoute>
                <LearnerSupport />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Add-Ons"
            element={
              <ProtectedRoute>
                <AddOns />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PrivacyMonitor"
            element={
              <ProtectedRoute>
                <PrivacyMonitor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SubSchools"
            element={
              <ProtectedRoute>
                <SubSchools />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Settings"
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
