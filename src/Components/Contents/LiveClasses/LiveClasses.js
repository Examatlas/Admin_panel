import React, { useEffect, useState } from "react";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

//icons
// import { FiRepeat } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
// import { CiFilter } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import LiveCard from "./LiveCard";

import { createNewRoom } from "../../liveStreaming/Api";
import axios from "axios";
import config from "../../../config/config";
import API_BASE_URL from "../../../config";
import toast from "react-hot-toast";
const LiveClasses = () => {
  // const[classData,setClassData]=useState();
  const[classData,setClassData]=useState();
  const [appData, setAppData] = useState({ meetingId: null, mode: null });
  // console.log(appData,"App data");
  
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // const createClick = async () => {
  //   const meetingId = await createNewRoom();

  //   setAppData({ mode: "CONFERENCE", meetingId });
  // };

  const getAllLiveClass=async()=>{
    const responce=await axios.get(`${config?.url}liveclass/getAllLiveClass`);
    if(responce){
      setClassData(responce?.data?.classes)
    }
  }

  useEffect(()=>{
    getAllLiveClass();
  },[]);

  const deleteClass=async(id)=>{
    try {
      const res=await axios.delete(`${API_BASE_URL}/api/liveclass/deleteClass/${id}`);
      console.log(res?.data);

      toast.success("Deleted successfully");
      getAllLiveClass();
      
    } catch (error) {
      toast.error(error?.message);
      console.log("Error while deleting class",error);
    }
  };

  return (
    <>
      <DashboardLayoutBasic>
        <div className="w-full">
          <div className=" border-b w-[98%] mx-auto -mt-6">
            <p
              className="text-left px-1 py-1 hover:bg-gray-100 w-fit cursor-pointer rounded flex justify-center items-center font-semibold"
              onClick={goBack}
            >
              <IoIosArrowBack className="text-lg" /> Back
            </p>
          </div>

          <div className=" flex justify-between mx-4 md:mx-12 my-4">
            <div>
              <h1 className=" text-2xl md:text-4xl text-left">Live Classes</h1>
              <p className=" text-base md:text-lg text-left">
                Welcome to Live Class Dashboard
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              {/* <button className="px-2 md:px-4 md:py-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300 font-semibold flex justify-center items-center gap-2">
                <FiRepeat className="text-lg" /> REORDER
              </button> */}
              <Link to={"/contents/createLiveClass"}>
                <button 
                // onClick={createClick}
                className=" px-1 md:px-4 md:py-3 py-1 text-sm bg-green-500 rounded-md text-white hover:bg-green-600 font-semibold flex justify-center items-center gap-1">
                  <IoMdAdd className="text-lg md:text-xl text-white font-bold" />{" "}
                  CREATE NEW MEETING
                </button>
              </Link>
            </div>
          </div>
          {/* search and filter */}
          <div className="w-[100%] md:w-[52%] my-4  md:ml-10 flex  items-center gap-1  ">
            <form className=" w-[90%]">
              <input
                type="text"
                className="px-3 py-2 border outline-blue-200 text-base md:text-lg rounded-md w-[90%] md:w-[25rem]"
                name="search"
                placeholder="Search by title"
              />

              
            </form>
            <div className="flex items-center gap-2 w-[100%]">
                <button
                  type="submit"
                  className="px-4 py-2 mx-2 md:text-lg bg-blue-500 rounded-md text-white hover:bg-blue-600 font-medium"
                >
                  Serach
                </button>
                
              </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {
            classData && classData.map((data,index)=>{
              return(
                <LiveCard key={index} data={data} deleteClass={deleteClass}/>
              )
            })
          }
           
        </div>
      </DashboardLayoutBasic>
    </>
  );
};
export default LiveClasses;
