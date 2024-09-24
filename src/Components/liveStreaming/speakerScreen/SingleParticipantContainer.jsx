import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";
import MicVideo from "../mediaControl/MicVideo";
import MeetingInfo from "../mediaControl/MeetingInfo";
// import MicVideo from "../mediaControl/MicVideo";

const SingleParticipantContainer = ({ participantId }) => {

  const { micOn, micStream, isLocal, displayName, webcamStream, webcamOn } =
    useParticipant(participantId);
    const {hlsState}=useMeeting();

  const audioPlayer = useRef();

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (!isLocal && audioPlayer.current && micOn && micStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(micStream.track);

      audioPlayer.current.srcObject = mediaStream;
      audioPlayer.current.play().catch((err) => {
        if (
          err.message ===
          "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
        ) {
          console.error("audio" + err.message);
        }
      });
    } else {
      audioPlayer.current.srcObject = null;
    }
  }, [micStream, micOn, isLocal, participantId]);

  return (
    // <div style={{ height: 200, width: 360, position: "relative" }} className="m-0">
    <div style={{}} className="relative min-h-[20rem] md:min-w-[50rem] w-[100%] h-full flex flex-col ">
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
      <div
        style={{ position: "absolute", background: "#ffffffb3", padding: 8 }}
        className=" top-0 left-0 z-30"
      >
        <p className="">Name: {displayName}</p>
        <p>Webcam: {webcamOn ? "on" : "off"}</p>
        <p>Mic: {micOn ? "on" : "off"}</p>
        <p>HLS State: {hlsState}</p>
      </div>
      {webcamOn ? (
        <ReactPlayer
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          className="border absolute top-0 left-0 object-cover w-[100%] h-[90%] bg-cover"
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      ) : (
        <div className="bg-gray-600 w-full h-[90vh] text-white flex justify-center items-center">
          <p className=" text-[4rem] h-[10rem] rounded-full bg-gray-500 w-[10rem] flex justify-center items-center">{displayName?.at(0)}</p>
        </div>)
      }
      <div className="absolute bottom-4  w-full">
        <MicVideo participantId={participantId} />
        {/* <MeetingInfo/> */}
      </div>

    </div>
  );
};

export default SingleParticipantContainer;
