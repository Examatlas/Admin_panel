import React, { useState } from 'react';
import { createNewRoom } from '../../liveStreaming/Api';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import axios from 'axios';
import config from '../../../config/config';
import { useFormik } from 'formik';

const CreateLiveClass = () => {
    // const [appData, setAppData] = useState({ meetingId: null, mode: null });
    const [meetingId, setMeetingId] = useState(null);
    const [time, setTime] = useState();

    const createClick = async () => {
        const meetingId = await createNewRoom();

        // setAppData({ mode: "CONFERENCE", meetingId });
        setMeetingId(meetingId);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("time", time, "meeting Id", meetingId);
            const responce = await axios.post(`${config?.url}liveclass/createliveClass`, {
                // meetingId,
                time,
            });

            console.log(responce);

        } catch (error) {
            console.log(error);

        }
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            time: '',
            date: '',
        },
        onSubmit: async (values) => {
            console.log(values);
            const responce = await axios.post(`${config?.url}liveclass/createliveClass`, {
                meetingId,
                title: values?.title,
                description: values?.description,
                time: values?.time,
                date: values?.date,
            });
            alert("created");
            console.log(responce);
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
