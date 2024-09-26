import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import { MdDelete } from "react-icons/md";

import img from '../../../Image/download.png';
// import SpeakerScreenContainer from '../../liveStreaming/speakerScreen/SpeakerScreenContainer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config/config';
import API_BASE_URL from '../../../config';
import toast from 'react-hot-toast';
import { Key } from '@mui/icons-material';

export default function LiveCard({ data, deleteclassName }) {

  console.log(data, deleteclassName);

  // console.log(data?.data?.meetingId);
  // const joinclassName=()=>{
  //   return <SpeakerScreenContainer meetingId={data?.data?.meetingId}/>
  // }

  // const deleteclassName=async(id)=>{
  //   try {
  //     const res=await axios.delete(`${API_BASE_URL}/api/liveclassName/deleteclassName/${id}`);
  //     console.log(res?.data);

  //     toast.success("Deleted successfully");

  //   } catch (error) {
  //     toast.error(error?.message);
  //     console.log("Error while deleting className",error);
  //   }
  // }
  return (
    <>

      <div className="relative overflow-x-auto shadow-md my-2 lg:w-full mx-auto">
        <table className="w-full overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='border border-black rounded-lg'>
              <th scope="col" className="border border-black w-[10px] text-center">
                {/* <span className="sr-only">S.No</span> */}
                S.No
              </th>
              <th scope="col" className="text-center font-bold py-3 border border-black">
                Name of Course
              </th>
              <th scope="col" className="text-center py-3 border border-black">
                Image
              </th>
              <th scope="col" className="text-center py-3 border border-black">
                Schedule
              </th>
              <th scope="col" className="text-center py-3 border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data && data?.map((item, index) => {
                return (
                  // <>
                  <tr className="bg-white border border-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                    <td className="border border-black px-3 text-lg font-bold">
                      {index + 1}.
                    </td>
                    <td className="border border-black text-center py-4 w-[15rem] font-semibold text-gray-900 dark:text-white">
                      {item?.title}
                    </td>
                    <td className="border border-black p-2 min-w-[15rem] w-[20rem] h-[10rem] ">
                      <img src={img} className="w-full max-w-full max-h-full" alt="Apple Watch" />
                    </td>
                    <td className="border border-black px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <Link to={`/contents/liveclass/schedule/${item?._id}`} className="font-medium mx-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">Schedule</Link>
                    </td>
                    <td className="border border-black mx-auto w-[10rem] px-6 py-4">
                      <a href="#" className="font-medium mx-1 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white">Edit</a>
                      <a href="#" className="font-medium mx-1 px-2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white">Delete</a>
                    </td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>
      </div>
    </>
  );
}