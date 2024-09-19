import { MeetingProvider } from "@videosdk.live/react-sdk";
import React from "react";
// import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
import { authToken } from "../Api";
import { useParams } from "react-router-dom";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

import MeetingInfo from "../mediaControl/MeetingInfo";
import MicVideo from "../mediaControl/MicVideo";
const SpeakerScreenContainer = () => {
  
  const { meetingId } = useParams();
  const name="Abhishek";

  return (
    <DashboardLayoutBasic>
      <div className=" flex-start w-full container mx-auto">
        <MeetingProvider
          token={authToken}
          config={{
            meetingId,
            name: name,
            micEnabled: true,
            webcamEnabled: true,
            mode:"CONFERENCE"
          }}
          className="w-[50%] bg-green-500 flex p-6"
          joinWithoutUserInteraction
        >
         
          <MeetingInfo/>
          {/* Livew view which shows through camera */}
          <div className=" border rounded-sm w-[80%] h-[30rem] mx-auto">
            <ParticipantsGridContainer />
          </div>
          {/* it contains only mic and webcam */}
          <div className="">
          <MicVideo/>
          </div>
          
          {/* media control */}
          {/* <div className="bg-red-400 w-fit mx-auto my-0">
            <MediaControlsContainer meetingId={meetingId} className="absolute top-7" />
          </div> */} 
        </MeetingProvider>
      </div>

    </DashboardLayoutBasic>

  );
};

export default SpeakerScreenContainer;
