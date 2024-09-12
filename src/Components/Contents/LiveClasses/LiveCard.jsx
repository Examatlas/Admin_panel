import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img from '../../../Image/download.png';

export default function LiveCard() {
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
        UGC NET/SET JRF Psychology Foundation Course (Dec 2024)
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-start'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <input type='text'/>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}