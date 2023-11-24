import imgcnn from '../images/tweet-profile-photo.png';
import nytimes from '../images/Tweet2.png';
import sheet from '../images/tweet-image.png';
import mascoteTwetterImg from '../images/MascoteImg.png'
import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweet from '../components/Tweet';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor  />
      <div>
      <Tweet reply1={57} retweet={144} react={123}  tweettitle={"CNN"} tweettitleDetail={"@CNN . 7m"} tweetimg={imgcnn} tweetText={'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'}/>
      <Tweet reply1={19} retweet={48} react={482}  tweettitle={"The New York Times"} tweettitleDetail={"@nytimes . 2h"} tweetimg={nytimes} tweetText={'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land'} tweetSheet={sheet}/>
      <Tweet reply1={'6.8k'} retweet={'36.8k'} react={'267.1k'} tweetimg={mascoteTwetterImg} tweettitle={"Tweeter"} tweettitleDetail={"@Tweeter . oct 29"} tweetText={'BIG NEWS lol jk still Twitter'} />
      <Tweet reply1={'118.7k'} retweet={'785.4k'} react={'3.3M'} tweetimg={mascoteTwetterImg} tweettitle={"Tweeter"} tweettitleDetail={"@Tweeter . oct 4"} tweetText={'hello literally everyone'} />
      <Tweet reply1={'118.7k'} retweet={'785.4k'} react={'3.3M'} tweetimg={mascoteTwetterImg} tweettitle={"Tweeter"} tweettitleDetail={"@Tweeter . oct 4"} tweetText={'hello literally everyone'} tweetSheet={sheet}/>
      
      </div>
    </main>
  );
}

export default Home;