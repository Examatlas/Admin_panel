import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img from '../../../Image/download.png';
import SpeakerScreenContainer from '../../liveStreaming/speakerScreen/SpeakerScreenContainer';
import { Link } from 'react-router-dom';

export default function LiveCard(data) {
  console.log(data?.data?.meetingId);
  // const joinClass=()=>{
  //   return <SpeakerScreenContainer meetingId={data?.data?.meetingId}/>
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
        <Typography gutterBottom  component="p" className='text-xl font-bold text-left'>
        {data?.data?.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start'>
          {data?.data?.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start'>
          {data?.data?.date}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start'>
          {data?.data?.time}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/contents/live/${data?.data?.meetingId}`}>
        <button className='px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600'>Join as Host</button>
        </Link>
      </CardActions>
    </Card>
  );
}