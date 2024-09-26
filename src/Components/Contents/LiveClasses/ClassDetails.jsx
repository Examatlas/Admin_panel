import React, { useEffect, useState } from 'react';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../config';

const ClassDetails = () => {
    const [Class, setClass] = useState();
    const { classId } = useParams();
    // console.log(classId);
    const getClassById = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/liveclass/getClassById/${classId}`);
            if (res?.status == 200) {
                setClass(res?.data?.classs);
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getClassById();
    }, []);

    function createMarkup() {
        return { __html: Class?.description };
    }
    return (
        <div>
            <DashboardLayoutBasic>
                <div className='w-[90%] mx-auto shadow-xl border rounded-md px-4 py-3'>
                    <div className='bg-green-400 w-full'>
                        <h1>{Class?.title}</h1>
                    </div>
                    <div className='bg-orange-400 w-full'>
                       <div className='prose w-[10rem]  bg-red-400 px-10' style={{width:"100%"}}>
                        <div className='w-full' dangerouslySetInnerHTML={createMarkup()} />
                    </div> 
                    </div>
                    

                    <div>
                        Teacher
                    </div>
                    <div>
                        <button>Create a live meeting</button>
                    </div>
                </div>

            </DashboardLayoutBasic>
        </div>
    );
}

export default ClassDetails;
