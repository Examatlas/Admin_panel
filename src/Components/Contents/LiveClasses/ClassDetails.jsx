import React, { useEffect, useState } from 'react';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../config';

const ClassDetails = () => {
    const [Class,setClass]=useState();
    const {classId}=useParams();
    // console.log(classId);
    const getClassById=async()=>{
        try {
            const res=await axios.get(`${API_BASE_URL}/api/liveclass/getClassById/${classId}`);
            if(res?.status==200){
                setClass(res?.data?.classs);
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getClassById();
    },[]);

    function createMarkup() {
        return {__html: Class?.description};
      }
  return (
    <div>
      <DashboardLayoutBasic>
        <div>
            <h1>{Class?.title}</h1>
        </div>
        <div>
            <div className='prose' dangerouslySetInnerHTML={createMarkup()}/>
            {/* <div className='prose' dangerouslySetInnerHTML={{__html:<p style="color:red">Hello</p>}}/> */}
            {/* <div className='prose' >{Class?.description}</div> */}

        </div>

        <div>
            Teacher
        </div>
        <div>
            <button>Create a live meeting</button>
        </div>
      </DashboardLayoutBasic>
    </div>
  );
}

export default ClassDetails;
