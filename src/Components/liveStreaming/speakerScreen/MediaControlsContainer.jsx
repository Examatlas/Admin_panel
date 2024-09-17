import { useMeeting, Constants } from "@videosdk.live/react-sdk";
import React, { useMemo } from "react";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

const MediaControlsContainer = () => {
  const { toggleMic, toggleWebcam, startHls, stopHls, hlsState, meetingId } =
    useMeeting();

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
    // <DashboardLayoutBasic>
      <div className="mx-4 my-10 bg-red-200 p-6 w-fit">
        <p>MeetingId: {meetingId}</p>
        <p>HLS state: {hlsState}</p>
        {isHlsPlayable && <p>Viewers will now be able to watch the stream.</p>}
        <button
          onClick={toggleMic}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
        >Toggle Mic</button>
        <button
          onClick={toggleWebcam}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 mx-2"
        >Toggle Webcam</button>
        <button
          className="px-4 py-2 rounded-md bg-green-500 text-white "
          onClick={_handleToggleHls}>
          {isHlsStarted ? "Stop Hls" : "Start Hls"}
        </button>
      </div>
    // </DashboardLayoutBasic>

  );
};

export default MediaControlsContainer;
