import { MeetingProvider } from "@videosdk.live/react-sdk";
import React, { useEffect, useState } from "react";
// import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
import { authToken } from "../Api";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

import MeetingInfo from "../mediaControl/MeetingInfo";
import MicVideo from "../mediaControl/MicVideo";
import ChatView from "../../Contents/LiveClasses/ChatView";
import API_BASE_URL from "../../../config";
import axios from "axios";
// import { authToken } from "../Api";
import { jwtDecode } from 'jwt-decode';
import toast from "react-hot-toast";
import api from "../../../Api/ApiConfig";


const SpeakerScreenContainer = () => {
  // const [authToken,setAuthToken]=useState('');
  const { meetingId, courseId, classId } = useParams();
  const [scheduledData, setScheduledData] = useState();
  const [loading, setLoading] = useState(true);
  // console.log(scheduledData,"Speaker screen");

  const { search } = useLocation();
  const name = new URLSearchParams(search).get("name");

  // const getAllLive
  const joinNow = async () => {
    try {
      const res = await api.post(`${API_BASE_URL}/api/liveclass/joinNow`,{
        role: "admin",
        meetingId,
        scheduledClassId: classId
      });
      if (res?.status === 200) {
        setScheduledData(res?.data)
        setLoading(false);
      }else{
        toast.error(res?.data?.message);
      }
    } catch (error) {
        toast.error(error?.response?.data?.message);
      // console.log("Error while join meeting", error);
    }
  }
  useEffect(() => {
    joinNow();
  }, []);




  if (loading) {
    return <h1>Loading ...</h1>
  }
  // const decoded = jwtDecode();
  // const isTokenExpired = () => {
  //   const decoded = jwtDecode(scheduledData ? scheduledData?.token : null); // Use jwt-decode library
  //   const currentTime = Date.now() / 1000;
  //   return decoded.exp < currentTime;
  // };
  // console.log(isTokenExpired(),"This is ");
  

  return (
    // <DashboardLayoutBasic>
    <div className=" flex-start w-full h-[100%] my-10 container mx-auto">
      <MeetingProvider
        // token={authToken}
        token={scheduledData ? scheduledData?.token : null}
        config={{
          meetingId: scheduledData?.getScheduledCourse?.meetingId,
          name: scheduledData ? scheduledData?.user_name : "Presenter",
          metaData: {userId: scheduledData ? scheduledData?.userId : "dngkdfngkjd"},
          micEnabled: true,
          webcamEnabled: false,
          mode: "CONFERENCE"
        }}
        joinWithoutUserInteraction
      >
        {/* Livew view which shows through camera */}
        <div className="flex justify-between items-center h-[87vh] rounded-lg w-[100%] ">
          <ParticipantsGridContainer />
          <ChatView />
        </div>

      </MeetingProvider>
    </div>

    // </DashboardLayoutBasic>

  );
};

export default SpeakerScreenContainer;
