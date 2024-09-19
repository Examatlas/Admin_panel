import { Constants, useMeeting } from "@videosdk.live/react-sdk";
import React, { useMemo } from "react";
import SingleParticipantContainer from "./SingleParticipantContainer";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

const ParticipantsGridContainer = () => {
  const { participants } = useMeeting();
  // console.log(participants);
  
  const participantIds = useMemo(
    () => [...participants.keys()],
    
    [participants]
  );

  const speakers = useMemo(() => {
    const speakerParticipants = [...participants.values()].filter(
      (participant) => {
        return participant.mode == Constants.modes.CONFERENCE;
      }
    );
    return speakerParticipants;
  }, [participants]);

  console.log(speakers);
  

  return (
    // <DashboardLayoutBasic>
      <div className="">
        {participantIds.map((participantId,index) =>{
          return(
            // console.log(participantId)
            (
              <SingleParticipantContainer key={index}
                {...{ participantId}}
                // key: participantId
              />
            ))}
          )
        } 
        {/* (
          console.log(participantId)
          <SingleParticipantContainer
            {...{ participantId, key: participantId }}
          />
        ))} */}
      </div>
    // </DashboardLayoutBasic>

  );
};

export default ParticipantsGridContainer;
