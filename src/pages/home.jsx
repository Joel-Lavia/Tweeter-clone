import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Data from "../components/Data";

function Home() {
  return (
    <main className="timeline">
    <Header />
    <TweetEditor />
    <Data />
    </main>
  );
}

export default Home;
