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
  console.log(participantIds);
  

  const speakers = useMemo(() => {
    // const speakerParticipants = [...participants.values()].filter(
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
      <div className=" flex w-[100%] bg-blue-50 min-h-[30rem] h-[80vh] justify-center items-center">
      
        {/* {participantIds.map((participantId,index) =>{
          return(
            (
              <SingleParticipantContainer key={index}
                {...{ participantId}}
              />
            ))}
          )
        }  */}
        {speakers?.map((e,index) =>{
          return(
            (
              <SingleParticipantContainer key={index}
                participantId={ e?.id}
              />
            ))}
          )
        } 
        
      </div>
    // </DashboardLayoutBasic>

  );
};

export default ParticipantsGridContainer;
