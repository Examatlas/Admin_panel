import { useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import React from 'react';

//icons
import { IoVideocam } from "react-icons/io5";
import { IoVideocamOff } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { IoIosMicOff } from "react-icons/io";

const MicVideo = () => {
    // const { micOn, micStream, isLocal, displayName, webcamStream, webcamOn } =useParticipant(participantId);

    const {toggleMic,toggleWebcam}=useMeeting();

    const togglemic=()=>{
        toggleMic();
    }
    const togglewebcam=()=>{
        toggleWebcam();
    }
    return (
        <div>
            <div className="my-2">
                <button
                    onClick={togglemic}
                    className="px-2 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
                >
                    {/* <IoIosMic className="text-2xl" /> */}
                    toggleMic
                </button>
                <button
                    onClick={togglewebcam}
                    className="px-2 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
                >
                    {/* <IoVideocam className="text-2xl" /> */}
                    toggle webcam
                </button>

            </div>
        </div>
    );
}

export default MicVideo;
