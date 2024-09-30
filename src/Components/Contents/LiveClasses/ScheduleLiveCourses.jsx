import React, { useEffect, useState } from 'react';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import DatePicker from '../../common/DatePicker';
import axios from 'axios';
import API_BASE_URL from '../../../config';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { formatDate, formatTime } from '../../../utils/DateFormater';

const ScheduleLiveCourses = () => {
    const { courseId } = useParams();
    const [schedule, setSchedule] = useState({
        title: "",
        date: "",
        time: "",
    });
    const [scheduledData, setScheduledData] = useState();
    
    // const [buttonsState, setButtonsState] = useState(
    //     () => scheduledData ? scheduledData.map(() => true) : [] // Fallback to empty array
    // );
    


    const getAllScheduledCourseByCourseId = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/liveclass/getAllScheduledCourseByCourseId/${courseId}`);
            if (res?.status === 200) {
                setScheduledData(res?.data?.courses)
            }
        } catch (error) {
            console.log("Error while fetching scheduled class data", error);
        }
    }
    useEffect(() => {
        getAllScheduledCourseByCourseId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchedule({ ...schedule, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${API_BASE_URL}/api/liveclass/scheduleLiveCourse`, {
                courseId,
                title: schedule?.title,
                date: schedule?.date,
                time: schedule?.time,
            });

            if (res?.status === 201) {
                toast.success(res?.data?.message);
                getAllScheduledCourseByCourseId();
            }
        } catch (error) {
            console.log("Error while scheduling class", error);
        }
    };

    const createMeeting = async (scheduledClassId) => {
        try {
            const res = await axios.patch(`${API_BASE_URL}/api/liveclass/createMeeting/${scheduledClassId}`);

            if (res?.status === 200) {
                toast.success(res?.data?.message);
                getAllScheduledCourseByCourseId();
            }
        } catch (error) {
            console.log(error);
            toast?.error(error?.message);
        }
    }



    useEffect(() => {
        // Parse the meeting time from the backend
        scheduledData?.forEach((item, index) => {

            const [hours, minutes] = item?.time?.split(":").map(Number);
            const today = new Date();
            const parsedMeetingTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);

            const fiveMinutesBeforeMeeting = new Date(parsedMeetingTime);
            fiveMinutesBeforeMeeting.setMinutes(fiveMinutesBeforeMeeting.getMinutes() - 5);

            const checkTime = () => {
                const currentTime = new Date();
                const timeDifference = fiveMinutesBeforeMeeting - currentTime;
                // If current time is equal to or greater than 5 minutes before meeting, enable the button
                if (timeDifference <= 5) {
                    // setButtonsState((prevState) => {
                    //     if (!Array.isArray(prevState)) return prevState;
                    //     const newState = [...prevState];
                    //     newState[index] = false; // Enable the button for this meeting
                    //     console.log("Checking index", newState[index]);

                    //     return newState;
                    // });
                    clearInterval(intervalId);
                    createMeeting(item?._id);
                }
            };
            const intervalId = setInterval(checkTime, 1000);
            return () => clearInterval(intervalId);
        });

    }, [scheduledData]);




    return (
        <div>
            <DashboardLayoutBasic>
                <h1 className='text-2xl text-black font-bold text-start w-[90%] '>Schedule Live Courses</h1>
                <div className="relative overflow-x-auto shadow-md my-2 w-[21rem] sm:w-[33rem] lg:w-[50rem]  xl:w-[65rem]  mx-auto">
                    <table className="w-full overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='border border-black rounded-lg'>
                                <th scope="col" className="border border-black w-[10px] text-center">
                                    {/* <span className="sr-only">S.No</span> */}
                                    S.No
                                </th>
                                <th scope="col" className="text-center font-bold py-3 border border-black">
                                    Title
                                </th>
                                <th scope="col" className="text-center py-3 border border-black">
                                    Date
                                </th>
                                <th scope="col" className="text-center py-3 border border-black">
                                    Time
                                </th>
                                <th scope="col" className="text-center py-3 border border-black">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border border-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                <td className="border border-black px-3 text-center  font-bold">
                                    1.
                                </td>
                                <td className="border border-black text-center py-4 w-[10rem]  dark:text-white">

                                    <input
                                        type="text"
                                        name='title'
                                        value={schedule?.title}
                                        onChange={handleChange}
                                        placeholder='Enter Title of Class'
                                        className='px-2 py-1 rounded-lg border text-base outline-blue-200'
                                        required
                                    />

                                </td>

                                <td className="border border-black p-2 text-center w-[10rem] ">
                                    <input
                                        type='date'
                                        name='date'
                                        value={schedule?.date}
                                        onChange={handleChange}
                                        className='px-2 py-1 rounded-lg border text-base outline-blue-200'
                                        required
                                    />
                                </td>

                                <td className="border border-black w-[10rem] text-center text-gray-900 dark:text-white">
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        value={schedule?.time}
                                        onChange={handleChange}
                                        className='px-2 py-1 rounded-lg border text-base outline-blue-200'
                                        required
                                    />
                                </td>
                                <td className="border border-black mx-auto text-center w-[10rem] py-4">
                                    <button
                                        onClick={handleSubmit}
                                        className="font-medium mx-4 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white">
                                        Create Meeting
                                    </button>
                                    {/* <a href="#" className="font-medium mx-1 px-2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white">Live</a> */}
                                </td>
                            </tr>
                            {
                                scheduledData && scheduledData?.map((item, index) => {
                                    return (

                                        <tr key={index} className="bg-white border border-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                            <td className="border border-black px-3 text-center font-bold">
                                                {index + 2}.
                                            </td>
                                            <td className="border border-black text-center py-4 w-[10rem]  dark:text-white">
                                                {
                                                    item?.title && item?.title
                                                }
                                            </td>

                                            <td className="border border-black p-2 text-center w-[10rem] ">
                                                {
                                                    item?.date && formatDate(item?.date)
                                                }
                                            </td>

                                            <td className="border border-black w-[10rem] text-center text-gray-900 dark:text-white">
                                                {
                                                    item?.time && formatTime(item?.time)
                                                }
                                            </td>
                                            <td className="border border-black mx-auto w-[10rem] text-center py-4">
                                                {
                                                    item?.meetingId &&
                                                    <button
                                                        className="font-medium mx-1 px-2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white disabled:bg-red-300"
                                                    >
                                                        <Link to={`/contents/live/${item?.meetingId}/${item?.courseId}/${item?._id}`}>
                                                            Go Live
                                                        </Link>

                                                    </button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </DashboardLayoutBasic>
        </div>
    );
}

export default ScheduleLiveCourses;
