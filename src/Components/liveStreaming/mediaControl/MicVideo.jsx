import { Constants, useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import React, { useMemo } from 'react';

//icons
import { IoVideocam } from "react-icons/io5";
import { IoVideocamOff } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { IoIosMicOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const MicVideo = ({participantId}) => {
    const navigate=useNavigate();
    const { micOn, micStream, isLocal, displayName, webcamStream, webcamOn } =useParticipant(participantId);
    console.log(micOn);
    

    const { toggleMic, toggleWebcam, end, meetingId, hlsState, startHls, stopHls } = useMeeting();

    const togglemic = () => {
        toggleMic();
    }
    const togglewebcam = () => {
        toggleWebcam();
    }

    // const {,end}=useMeeting();

    const { isHlsStarted, isHlsStopped, isHlsPlayable } = useMemo(
        () => ({
            isHlsStarted: hlsState === Constants.hlsEvents.HLS_STARTED,
            isHlsStopped: hlsState === Constants.hlsEvents.HLS_STOPPED,
            isHlsPlayable: hlsState === Constants.hlsEvents.HLS_PLAYABLE,
        }),
        [hlsState]
    );

    const _handleToggleHls = () => {
        if (isHlsStarted) {
            stopHls();
        }
        // else if (isHlsStopped) {
        else if (isHlsPlayable) {
            stopHls();
        } else if (isHlsStopped) {
            startHls({ quality: "high" });
        }
    };

    const handleEnd = () => {
        end();
        setTimeout(()=>{
            navigate("/contents/liveClasses");
        },100);
    };

    return (
        <div className=' flex md:px-[3rem] justify-between items-center'>
            {/* <div>
                <button
                    onClick={togglemic}
                    className="px-2 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
                >
                    <IoIosMic className="text-2xl" />
                </button>
            </div> */}

            <div className="my-2 flex">
                <button
                    onClick={togglemic}
                    className="px-2 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
                >
                    {micOn===true?<IoIosMicOff className="text-xl md:text-2xl"/>:<IoIosMic className="text-xl md:text-2xl" />}
                   
                    {/* toggleMic */}
                </button>
                <button
                    onClick={togglewebcam}
                    className="px-2 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
                >
                    {/* <IoVideocam className=" text-xl md:text-2xl" /> */}
                    {webcamOn===true?<IoVideocamOff className="text-xl md:text-2xl"/>:<IoVideocam className="text-xl md:text-2xl" />}
                    {/* toggle webcam */}
                </button>

                {/* <button
                    onClick={end}
                    className="px-2 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 mx-2"
                >
                    Kill Meeting
                </button> */}

            </div>

            <div className=' flex  items-center justify-center'>
                <button
                    className=" mx-2 px-1 py-1 md:px-4 md:py-2 rounded-md bg-red-500 active:bg-red-600 text-white "
                    onClick={_handleToggleHls}
                >
                    {isHlsStarted || isHlsPlayable ? "Stop Streaming" : "Go Live"}
                </button>
                <button
                    className="mx-2 px-1 py-1 md:px-4 md:py-2 rounded-md bg-red-500 active:bg-red-600 text-white "
                    onClick={handleEnd}
                >
                    {/* {isHlsStarted||isHlsPlayable ? "Stop Streaming" : "Go Live"} */}
                    End Meeting
                </button>
            </div>
        </div>
    );
}

export default MicVideo;
