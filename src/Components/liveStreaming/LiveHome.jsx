import React, { useState } from "react";
// import SpeakerScreenContainer from "./speakerScreen/SpeakerScreenContainer";
import SpeakerScreenContainer from './speakerScreen/SpeakerScreenContainer';
// import ViewerScreenContainer from "./ViewerScreenContainer";
import ViewerScreenContainer from "./ViewerScreenContainer";
// import WelcomeScreenContainer from "./WelcomeScreenContainer";
import WelcomeScreenContainer from "./WelcomeScreenContainer";

// import SpeakerScreenContainer from "./screens/speakerScreen/SpeakerScreenContainer";
// import ViewerScreenContainer from "./screens/ViewerScreenContainer";
// import WelcomeScreenContainer from "./screens/WelcomeScreenContainer";

const LiveHome = () => {
  const [appData, setAppData] = useState({ meetingId: null, mode: null });

  return appData.meetingId ? (
    appData.mode === "CONFERENCE" ? (
      <SpeakerScreenContainer meetingId={appData.meetingId} />
    ) : (
      <ViewerScreenContainer meetingId={appData.meetingId} />
    )
  ) : (
    <WelcomeScreenContainer setAppData={setAppData} />
  );
};

export default LiveHome;
