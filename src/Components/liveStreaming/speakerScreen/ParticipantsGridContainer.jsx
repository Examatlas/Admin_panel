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
        return participant.mode == Constants.modes;
      }
    );
    return speakerParticipants;
  }, [participants]);

  console.log(speakers,"Speaker");
  

  return (
    // <DashboardLayoutBasic>
      <div className=" flex flex-wrap justify-center items-center">
       

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
        
      </div>
    // </DashboardLayoutBasic>

  );
};

export default ParticipantsGridContainer;
