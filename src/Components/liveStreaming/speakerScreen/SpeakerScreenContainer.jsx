import { MeetingProvider } from "@videosdk.live/react-sdk";
import React from "react";
import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
// import { authToken } from "../../api";
import { authToken } from "../Api";
import { useLocation, useParams } from "react-router-dom";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

// const SpeakerScreenContainer = ({ meetingId }) => {
const SpeakerScreenContainer = () => {
  const { meetingId } = useParams();

  return (
    <DashboardLayoutBasic>
      <div className="bg-blue-200 flex-start w-full container mx-auto">
        <MeetingProvider
          token={authToken}
          config={{
            meetingId,
            name: "C.V. Raman",
            micEnabled: true,
            webcamEnabled: true,
          }}
          className="w-[50%] bg-green-500 flex p-6"
          joinWithoutUserInteraction
        >
          <MediaControlsContainer meetingId={meetingId} className="absolute top-7"/>
          <ParticipantsGridContainer />
        </MeetingProvider>
      </div>

    </DashboardLayoutBasic>

  );
};

export default SpeakerScreenContainer;
