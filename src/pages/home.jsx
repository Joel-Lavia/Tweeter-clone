import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Twett from "../components/Tweet";
import DataSharing from "../components/DataSharing";
function Home() {
  return (
    <main className="timeline">
      <Header />
        <TweetEditor />
        <Twett />
    </main>
  );
}

export default Home;
