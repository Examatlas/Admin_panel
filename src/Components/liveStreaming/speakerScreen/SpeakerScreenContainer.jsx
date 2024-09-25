import { MeetingProvider } from "@videosdk.live/react-sdk";
import React, { useState } from "react";
// import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
import { authToken } from "../Api";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

import MeetingInfo from "../mediaControl/MeetingInfo";
import MicVideo from "../mediaControl/MicVideo";
import ChatView from "../../Contents/LiveClasses/ChatView";


const SpeakerScreenContainer = () => {
// const [authToken,setAuthToken]=useState('');
  const { meetingId } = useParams();
  const { search } = useLocation();
  const name = new URLSearchParams(search).get("name");

  // const getAllLive

  return (
    // <DashboardLayoutBasic>
      <div className=" flex-start w-full h-[100%] my-10 container mx-auto">
        <MeetingProvider
          token={authToken}
          config={{
            meetingId,
            name: name,
            micEnabled: true,
            webcamEnabled: true,
            mode: "CONFERENCE"
          }}
          joinWithoutUserInteraction
        >
          {/* Livew view which shows through camera */}
          <div className="flex justify-between items-center h-[87vh] rounded-lg w-[100%] ">
            <ParticipantsGridContainer />
            <ChatView/>
          </div>
         
        </MeetingProvider>
      </div>

    // </DashboardLayoutBasic>

  );
};

export default SpeakerScreenContainer;
