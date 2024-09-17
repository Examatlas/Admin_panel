import { useMeeting } from "@videosdk.live/react-sdk";
import React, { useMemo } from "react";
import SingleParticipantContainer from "./SingleParticipantContainer";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

const ParticipantsGridContainer = () => {
  const { participants } = useMeeting();

  const participantIds = useMemo(
    () => [...participants.keys()],
    [participants]
  );

  return (
    // <DashboardLayoutBasic>
      <div className=" flex justify-start flex-wrap items-start bg-green-300">
        {participantIds.map((participantId) => (
          <SingleParticipantContainer
            {...{ participantId, key: participantId }}
          />
        ))}
      </div>
    // </DashboardLayoutBasic>

  );
};

export default ParticipantsGridContainer;
