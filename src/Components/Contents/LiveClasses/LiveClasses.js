import React, { useEffect, useState } from "react";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import LiveCard from "./LiveClasstable";
import toast from "react-hot-toast";
import api from "../../../Api/ApiConfig";
const LiveClasses = () => {
  const [search, setSearch] = useState("");
  const [classData, setClassData] = useState();
  console.log(classData);
  
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const HandleSearch = (e) => {
    setSearch(e?.target?.value);
  };
  const getAllLiveClass = async () => {
    const responce = await api.get(`/api/liveclass/getAllLiveClass`);
    // const responce = await axios.get(
    //   `${API_BASE_URL}/api/liveclass/getAllLiveClass`
    // );
    if (responce) {
      setClassData(responce?.data?.classes);
    }
  };

  useEffect(() => {
    getAllLiveClass();
  }, []);

  useEffect(() => {
    const filteredResults = classData?.filter((item) =>
      item?.title?.toLowerCase()?.includes(search?.toLowerCase())
    );
    setTimeout(() => {
      if (filteredResults?.length > 0 && search !== "") {
        setClassData(filteredResults);
      } else {
        getAllLiveClass();
      }
    }, 500);
  }, [search]);

  const deleteClass = async (id) => {
    try {
      const res = await api.delete(`/api/liveclass/deleteClass/${id}`);
      // const res = await axios.delete(
      //   `${API_BASE_URL}/api/liveclass/deleteClass/${id}`
      // );
      if (res?.status === 200) {
        toast.success("Deleted successfully");
        getAllLiveClass();
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("Error while deleting class", error);
    }
  };

  return (
    <>
      <DashboardLayoutBasic>
        <div className="w-full">
          <div className=" border-b md:w-[98%] mx-auto -mt-6">
            <p
              className="text-left px-1 py-1 hover:bg-gray-100 w-fit cursor-pointer rounded flex justify-center items-center font-semibold"
              onClick={goBack}
            >
              <IoIosArrowBack className="text-lg" /> Back
            </p>
          </div>

          <div className=" flex justify-between mx-4 md:mx-12 my-4">
            <div>
              <h1 className=" text-2xl md:text-4xl text-left">Live Courses</h1>
              <p className=" text-base md:text-lg text-left">
                Welcome to Live Class Dashboard
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <Link to={"/contents/createLiveClass"}>
                <button className=" px-1 md:px-4 md:py-3 py-1 text-sm bg-green-500 rounded-md text-white hover:bg-green-600 font-semibold flex justify-center items-center gap-1">
                  CREATE NEW COURSE
                </button>
              </Link>
            </div>
          </div>
          {/* search and filter */}
          <div className="w-[100%] md:w-[52%] my-4  md:ml-10 flex  items-center gap-1  ">
            <div className="w-[70%] ">
              <input
                type="text"
                className="px-3 py-2 border outline-blue-200 text-base md:text-lg rounded-md w-[90%] md:w-[25rem]"
                name="search"
                value={search}
                onChange={HandleSearch}
                placeholder="Search by title"
              />
            </div>
            {/* <div className="w-[30%]">
              <button
                type="submit"
                className="px-4 py-2 mx-2 md:text-lg bg-blue-500 rounded-md text-white hover:bg-blue-600 font-medium"
              >
                Serach
              </button>
            </div> */}
          </div>
        </div>
        <div className="w-[21rem] my-4 mx-4 sm:w-[33rem] lg:w-[50rem]  xl:w-[60rem] ">
          <LiveCard data={classData} deleteClass={deleteClass} />
        </div>
      </DashboardLayoutBasic>
    </>
  );
};
export default LiveClasses;
