import { Constants, useMeeting } from '@videosdk.live/react-sdk';
import React, { useMemo } from 'react';

const MeetingInfo = () => {
    const {meetingId,hlsState,startHls,stopHls}=useMeeting();

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
    
    
    return (
        <div>
            <div className="flex w-full my-4 justify-between px-6">
                <div className="flex flex-col justify-start">
                    <p>MeetingId: 
                        {meetingId}
                    </p>
                    <p>HLS state: 
                        {hlsState}
                    </p>
                </div>
                <div>
                    <button
                        className="px-4 py-2 rounded-md bg-red-500 active:bg-red-600 text-white "
                    onClick={_handleToggleHls}
                    >
                        {isHlsStarted||isHlsPlayable ? "Leave" : "Go Live"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default MeetingInfo;
