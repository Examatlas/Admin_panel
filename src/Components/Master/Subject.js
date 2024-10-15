import React, { useEffect, useState } from "react";
import DashboardLayoutBasic from "../DashboardLayoutBasic";
import api from "../../Api/ApiConfig";
import toast from "react-hot-toast";

const Subject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [subjectId, setSubjectId] = useState();
  const handleInputChange = (e) => {
    setSubjectName(e.target.value);
  };

  const getAllSubject = async () => {
    try {
      const res = await api.get(`/api/subject/getSubject?per_page=10`);
      if (res?.status === 200) {
        setSubjectData(res?.data?.data);
      }
    } catch (error) {
      console.log("Error while fetching subject", error);
    }
  };

  useEffect(() => {
    getAllSubject();
  }, []);

  const getSubjectById = async (id) => {
    setSubjectId(id);
    const subject = subjectData?.find((data) => data?._id === id);
    setSubjectName(subject?.title);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api?.post(`/api/subject/addSubject`, {
        title: subjectName,
      });
      if (res?.status === 200) {
        toast?.success(res?.data?.message);
        getAllSubject();
        setSubjectName("");
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("Error while submitting subject", error);
    }
  };
  const handleUpdate=async(e)=>{
    e.preventDefault();
    try {
        
    } catch (error) {
        
    }
  };

  const deleteSubject = async (id) => {
    try {
      const res = await api.delete(`/api/subject/deleteSubject/${id}`);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        getAllSubject();
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("Error while delete subject", error);
    }
  };

  return (
    <>
      <DashboardLayoutBasic>
        {/* Form with input for subject */}
        <form className="mt-8 p-6">
          <label className="block text-xl font-semibold mb-6">
            Enter Subject Name
          </label>
          <input
            type="text"
            value={subjectName}
            onChange={handleInputChange}
            placeholder="Type subject name here"
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          {subjectName === "" ? (
            <>
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          ) : (
            <>
           <button
                type="submit"
                className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                onClick={handleUpdate}
              >
                update
              </button>
            </>
          )}
        </form>
        {/* List of all subjects */}
        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Subject Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjectData &&
                  subjectData?.map((item) => {
                    return (
                      <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={item?._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item?.title}
                        </th>
                        <td className="px-6 py-4 ">
                          <button
                            className="px-4 py-2 mx-2 rounded bg-red-500 hover:bg-red-600 active:bg-red-600 text-white"
                            title="Delete"
                            onClick={() => deleteSubject(item?._id)}
                          >
                            Delete
                          </button>
                          <button
                            className="px-4 py-2 mx-2 rounded bg-green-500 hover:bg-green-600 active:bg-green-600 text-white"
                            title="Edit"
                            onClick={() => {
                              getSubjectById(item?._id);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayoutBasic>
    </>
  );
};

export default Subject;
