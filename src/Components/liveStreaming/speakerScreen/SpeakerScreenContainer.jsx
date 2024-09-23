import { MeetingProvider } from "@videosdk.live/react-sdk";
import React from "react";
// import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
import { authToken } from "../Api";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

import MeetingInfo from "../mediaControl/MeetingInfo";
import MicVideo from "../mediaControl/MicVideo";
import ChatView from "../../Contents/LiveClasses/ChatView";
const SpeakerScreenContainer = () => {

  const { meetingId } = useParams();
  // const param=()
  // const param=window?.location?.search?.name;
  const { search } = useLocation();
  const name = new URLSearchParams(search).get("name");
  // console.log(queryParams);

  // const name="Abhishek";

  return (
    // <DashboardLayoutBasic>
      <div className=" flex-start w-full container mx-auto">
        <MeetingProvider
          token={authToken}
          config={{
            meetingId,
            name: name,
            micEnabled: true,
            webcamEnabled: true,
            mode: "CONFERENCE"
          }}
          // className="w-[50%] flex p-6"
          joinWithoutUserInteraction
        >

          <MeetingInfo />
          <div className="mx-auto w-full">
            <MicVideo />
          </div>
          {/* Livew view which shows through camera */}
          <div className="flex justify-between rounded-sm w-[90%] mx-auto">
            <ParticipantsGridContainer />
            <ChatView/>
          </div>
          {/* it contains only mic and webcam */}
          {/* <div className="">
            <MicVideo />
          </div> */}

          {/* media control */}
          {/* <div className="bg-red-400 w-fit mx-auto my-0">
            <MediaControlsContainer meetingId={meetingId} className="absolute top-7" />
          </div> */}
        </MeetingProvider>
      </div>

    // </DashboardLayoutBasic>

  );
};

export default SpeakerScreenContainer;
