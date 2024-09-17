import { MeetingProvider } from "@videosdk.live/react-sdk";
import React from "react";
import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
// import { authToken } from "../../api";
import { authToken } from "../Api";
import { useLocation, useParams } from "react-router-dom";

// const SpeakerScreenContainer = ({ meetingId }) => {
const SpeakerScreenContainer = () => {
    const {meetingId}=useParams();
    
  return (
    <MeetingProvider
      token={authToken}
      config={{
        meetingId,
        name: "C.V. Raman",
        micEnabled: true,
        webcamEnabled: true,
      }}
      joinWithoutUserInteraction
    >
      <MediaControlsContainer meetingId={meetingId} />
      <ParticipantsGridContainer />
    </MeetingProvider>
  );
};

export default SpeakerScreenContainer;
