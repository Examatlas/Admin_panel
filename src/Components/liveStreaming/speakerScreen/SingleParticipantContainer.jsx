import { useParticipant } from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";
// import MicVideo from "../mediaControl/MicVideo";

const SingleParticipantContainer = ({ participantId }) => {
  console.log(participantId);
  
  const { micOn, micStream, isLocal, displayName, webcamStream, webcamOn } =
    useParticipant(participantId);

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
    <div style={{ }} className=" p-2 w-[15rem] h-[15rem] flex  border m-1 ">
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
      <div
        style={{ position: "absolute", background: "#ffffffb3", padding: 8 }}
      >
        <p className="">Name: {displayName}</p>
        <p>Webcam: {webcamOn ? "on" : "off"}</p>
        <p>Mic: {micOn ? "on" : "off"}</p>
      </div>
      {webcamOn && (
        <ReactPlayer
          playsinline 
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
      {/* <MicVideo/> */}
    </div>
  );
};

export default SingleParticipantContainer;
