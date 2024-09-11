import React from 'react';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import { Link, useNavigate } from 'react-router-dom';

//icons
import { FiRepeat } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import BlogList from './BlogList';
// import { CiFilter } from "react-icons/ci";

const Blog = () => {
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return (
    <>
      <DashboardLayoutBasic>
        <div className=" w-[90%] ">
          <div className=" border-b w-[90%] -mt-5">
            <p className="text-left md:ml-3 px-2 py-1 hover:bg-gray-100 w-fit cursor-pointer rounded flex justify-center items-center font-semibold"
              onClick={goBack}>
              <IoIosArrowBack className="text-lg" /> Back
            </p>
          </div>

          <div className=" flex justify-between w-[90vw] mx-4 md:mx-12 my-4">
            <div>
              <h1 className=" text-2xl md:text-4xl text-left">Blog</h1>
              <p className=" text-base md:text-lg">Welcome to Blog Dashboard</p>
            </div>

            <div className="flex items-center gap-2">
              {/* <button className="px-4 py-3 bg-gray-200 rounded-md hover:bg-gray-300 font-semibold flex justify-center items-center gap-2">
                <FiRepeat className="text-lg" /> REORDER
              </button> */}
              <Link to={'/contents/add-blog'}>
              <button className=" px-2 md:px-4 py-3 bg-green-500 rounded-md text-white hover:bg-green-600 font-semibold flex justify-center items-center gap-1">
                <IoMdAdd className="text-xl text-white font-bold" /> CREATE
              </button>
              </Link>
            </div>

          </div>
          {/* search and filter */}
          <div className="w-[90%] mx-auto flex gap-1  ">
            <form className="">
              <input
                type="text"
                className="px-3 py-2 border outline-blue-200 text-base md:text-lg rounded-md w-[60%] md:w-[25rem]"
                name="search"
                placeholder="Search by title"
              />

              <button type="submit" className="px-4 py-2 mx-2 md:text-lg bg-blue-500 rounded-md text-white hover:bg-blue-600 font-medium">Serach</button>
              {/* <button className="px-4 py-2 md:text-lg border-2 border-blue-300 rounded-md text-slate-600 hover:bg-gray-200 font-semibold flex justify-center items-center gap-2">
                    <CiFilter className="text-lg"/>Add Filter
                </button> */}
            </form>
          </div>
        </div>
        <div className='w-[90%] mx-auto my-4'>
          <BlogList/>
        </div>
      </DashboardLayoutBasic>
    </>
  );
}

export default Blog;
