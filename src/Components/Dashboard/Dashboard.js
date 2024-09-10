import React, { useState } from "react";
import PropTypes from "prop-types";
import DashboardLayoutBasic from "../DashboardLayoutBasic";
import Learners from "../Dashboard/Learners";
import Sales from "../Dashboard/Sales";
import Orders from "../Dashboard/Orders";
import Apps from "../Dashboard/Apps";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import GradeIcon from '@mui/icons-material/Grade';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Sales')

  const renderComponent = () => {
    switch (activeTab) {
      case 'Sales':
        return <Sales />
      case 'Learners':
        return <Learners />
      case 'Orders':
        return <Orders />
      case 'Apps':
        return <Apps />
      default:
        return null;
    }
  }

  return (
    <DashboardLayoutBasic>
      <div>
        <h1 className="text-2xl mr-[1000px] font-semibold">Welcome, Crown</h1>
        <div className="flex mt-7">
          <div className="flex flex-col">
            <div className="border border-gray-300 w-[800px] h-[80px] rounded-lg m-2 mr-10 ">
              <div className="flex pt-3 text-sm ">
                <p className="pl-32">Total Sales</p>
                <p className="pl-44">Products</p>
                <p className="pl-44">Learners</p>
              </div>
              <div className="flex pt-3 text-xl font-semibold">
                <p className="pl-36">₹ 0</p>
                <p className="pl-52">N/A</p>
                <p className="pl-52">N/A</p>
              </div>
            </div>

            <div className="border border-gray-300 w-[800px] h-[60px] rounded-lg m-2 mr-10 flex pt-4">
              <button className={` pl-8  ${activeTab === "Sales" ? 'text-blue-500 font-semibold' : ''}`}
                onClick={() => setActiveTab('Sales')}>Sales</button>

              <button className={`pl-8  ${activeTab === 'Learners' ? 'text-blue-500 font-semibold' : ''}`}
                onClick={() => setActiveTab('Learners')}>Learners</button>

              <button className={`pl-8  ${activeTab === 'Orders' ? 'text-blue-500 font-semibold' : ''}`}
                onClick={() => setActiveTab('Orders')}>Orders</button>

              <button className={`pl-8  ${activeTab === 'Apps' ? 'text-blue-500 font-semibold' : ''}`}
                onClick={() => setActiveTab('Apps')}>Apps</button>
            </div>
          </div>

          <div className="border border-gray-300 w-[350px] h-[150px] rounded-lg mt-2">
            <p className="p-5 pr-44 font-semibold flex">Scheduled events</p>
            <p className="pt-5">No Scheduled Events</p>
          </div>


        </div>

        <div className="flex">{renderComponent()}
          

          <div className="border border-gray-300 w-[350px] h-[420px] rounded-lg mt-2 p-5 ">
            {/* Pending Tasks Heading */}
            <p className="font-semibold text-center pr-40 text-lg ">Pending Tasks</p>

            {/* Icon and two text elements aligned in a row */}
            <div className="flex justify-center items-center mt-12">
              <HeadphonesIcon className="mr-4" /> {/* Icon with margin-right */}
              <div className="flex flex-col mr-28 ">
                <p className="font-semibold ">Support Tickets</p>
                <p className="text-sm text-gray-500">No Pending Tasks</p>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="mt-7 border-gray-300" />

            <div className="flex justify-center items-center mt-12">
              <MapsUgcIcon className="mr-4" /> {/* Icon with margin-right */}
              <div className="flex flex-col  mr-8">
                <p className="font-semibold ">UnAnswered Discussions</p>
                <p className="text-sm text-gray-500 mr-20 ">No Pending Tasks</p>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="mt-7 border-gray-300" />

            <div className="flex justify-center items-center mt-12">
              <GradeIcon className="mr-4" /> {/* Icon with margin-right */}
              <div className="flex flex-col mr-24 ">
                <p className="font-semibold ">Rating & Reviews</p>
                <p className="text-sm text-gray-500">No Pending Tasks</p>
              </div>
            </div>

           
          </div>

        </div>
      </div>
    </DashboardLayoutBasic>
  );
};

Dashboard.propTypes = {
  pathname: PropTypes.string,
};

export default Dashboard;
