import React, { useState } from 'react';
import { createNewRoom } from '../../liveStreaming/Api';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import axios from 'axios';
import config from '../../../config/config';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

const CreateLiveClass = () => {
    // const [appData, setAppData] = useState({ meetingId: null, mode: null });
    const [meetingId, setMeetingId] = useState(null);
    const createClick = async () => {
        const meetingId = await createNewRoom();

        // setAppData({ mode: "CONFERENCE", meetingId });
        setMeetingId(meetingId);
    };

    
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            time: '',
            date: '',
        },
        onSubmit: async (values) => {
            try {
                const responce = await axios.post(`${config?.url}liveclass/createliveClass`, {
                meetingId,
                title: values?.title,
                description: values?.description,
                time: values?.time,
                date: values?.date,
            });
            if(responce?.data?.status===true){
                toast.success(responce?.data?.message);
                
            }
            // console.log(responce);
            } catch (error) {
                toast.error(error?.message);
                console.log("Error while creating a class",error);
            }
            
        }
    })
    return (
        <>
            <DashboardLayoutBasic>
                <div className='bg-blue-200 px-4 py-4 rounded-md w-[100%] md:w-[60%] m-6'>
                    {/*create meeting form */}
                    <button
                        onClick={createClick}
                        className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'
                    >Create Meeting Room</button>

                    <form onSubmit={formik.handleSubmit}>
                        <p>Meeting Id:
                            <span>
                                {meetingId }
                            </span></p>
                        <div className='flex flex-col justify-start'>
                            <label htmlFor="title">Title of Class</label>
                            <input
                                type="text"
                                id="title"
                                name='title'
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                className='border border-blue-200 px-3 py-1 rounded my-2'
                                placeholder="Enter title of class"
                            />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                name='description'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className='border border-blue-200 px-3 py-1 rounded my-2'
                                placeholder="Enter title of class"
                            />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <label htmlFor="time">Time Of Class</label>
                            <input
                                type="time"
                                id="time"
                                name='time'
                                onChange={formik.handleChange}
                                value={formik.values.time}
                                className='border border-blue-200 px-3 py-1 rounded my-2'
                                placeholder="Enter Class time"
                            />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <label htmlFor="date">Date of Class</label>
                            <input
                                type="date"
                                id='date'
                                name='date'
                                onChange={formik.handleChange}
                                value={formik.values.date}
                                className='border border-blue-200 px-3 py-1 rounded my-2'
                                placeholder="Enter Class date"
                            />
                        </div>

                        <button type="submit" className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Create Class</button>
                    </form>
                </div>
            </DashboardLayoutBasic>
        </>

    );
}

export default CreateLiveClass;
