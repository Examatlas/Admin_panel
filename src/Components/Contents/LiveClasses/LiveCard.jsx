import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { MdDelete } from "react-icons/md";

import img from '../../../Image/download.png';
// import SpeakerScreenContainer from '../../liveStreaming/speakerScreen/SpeakerScreenContainer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config/config';
import API_BASE_URL from '../../../config';
import toast from 'react-hot-toast';
import { Key } from '@mui/icons-material';

export default function LiveCard({ data, deleteClass }) {
  // console.log(data,deleteClass);

  // console.log(data?.data?.meetingId);
  // const joinClass=()=>{
  //   return <SpeakerScreenContainer meetingId={data?.data?.meetingId}/>
  // }

  // const deleteClass=async(id)=>{
  //   try {
  //     const res=await axios.delete(`${API_BASE_URL}/api/liveclass/deleteClass/${id}`);
  //     console.log(res?.data);

  //     toast.success("Deleted successfully");

  //   } catch (error) {
  //     toast.error(error?.message);
  //     console.log("Error while deleting class",error);
  //   }
  // }
  return (
    // UGC NET/SET JRF Psychology Foundation Course (Dec 2024)
    <Card className='m-4 w-[250px] md:w-[300px] cursor-pointer relative '>
      <button className='bg-red-500 text-white px-3 py-1 rounded-full text-xs absolute left-2 top-2'>
        Live
      </button>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom component="p" className='text-xl font-bold text-left' style={{fontWeight:"600"}}>
          {data?.title}
        </Typography>
        {/* {data?.tags && data?.tags?.map((item, index) => {
          return (
            <div key={index} className='flex flex-row  gap-1 ' style={{display:"flex"}}>
              <div className='w-fit flex text-xs text-gray-800 '>{item}</div>
            </div>
          )
        })} */}
        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start'>
          {data?.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start my-1' >
          BY : <span className=' font-bold my-1'>{data?.teacher}</span>
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start'>
          {data?.time}
        </Typography> */}
      </CardContent>
      <CardActions className='flex justify-between mx-2'>
        <Link to={`/contents/live/${data?.meetingId}?name=${data?.title}`}>
          <button className='px-2 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600'>Join as Host</button>
        </Link>
        <MdDelete
          title='Delete Class'
          onClick={() => deleteClass(data?._id)}
          className='text-red-500 hover:text-red-600 active:text-red-600 text-2xl' />
      </CardActions>
    </Card>
  );
}