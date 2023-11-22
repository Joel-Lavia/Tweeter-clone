import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import FirstTweet from '../components/FirstTweet';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <div>
      <FirstTweet />
      </div>
    </main>
  );
}

export default Home;