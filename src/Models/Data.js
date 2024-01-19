import group from "../images/Group.png";
import sheet from "../images/tweet-image.png";
import cnn from "../images/tweet-profile-photo.png";
import nytimes from "../images/Tweet2.png";
import twetterMascote from "../images/MascoteImg.png";
import reply from "../images/Reply.png";
import retweet from "../images/Retweet.png";
import react from "../images/React.png";
import btndowland from "../images/Buton.png";

const data = [

  {
    id: 1,
    avatar: cnn,
    nomTweet: "CNN",
    certification: group,
    lienTweet: "@CNN . 7m",
    tweetSetence:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    btn: {
      replyImg: reply,
      numbeeReply: 57,

      retweetImg: retweet,
      numberRetweet: 144,

      reactImg: react,
      numberReact: 123,

      btnDowlandImg: btndowland,
    },
  },

  {
    id: 2,
    avatar: nytimes,
    nomTweet: "The New York Times",
    certification: group,
    lienTweet: "@nytimes . 2h",
    tweetSetence:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    tweetimg: sheet,

    btn: {
      replyImg: reply,
      numbeeReply: 19,

      retweetImg: retweet,
      numberRetweet: 48,

      reactImg: react,
      numberReact: 482,

      btnDowlandImg: btndowland,
    },
  },
  {
    id: 3,
    avatar: twetterMascote,
    nomTweet: "Tweeter",
    certification: group,
    lienTweet: "@Tweeter . oct 29",
    tweetSetence: "BIG NEWS lol jk still Twitter",

    btn: {
      replyImg: reply,
      numbeeReply: 123,

      retweetImg: retweet,
      numberRetweet: 123,

      reactImg: react,
      numberReact:1234,

      btnDowlandImg: btndowland,
    },
  },

  {
    id: 4,
    nomTweet: "Tweeter",
    avatar: twetterMascote,
    certification: group,
    lienTweet: "@Tweeter . oct 4",
    tweetSetence: "hello literally everyone",

    btn:{
      replyImg: reply,
      numbeeReply:1253,

      retweetImg: retweet,
      numberRetweet:1237,

      reactImg: react,
      numberReact:1237,

      btnDowlandImg: btndowland,
    },
  },

  {
    id: 5,
    avatar: twetterMascote,
    nomTweet: "Tweeter",
    certification: group,
    lienTweet: "@Tweeter . oct 4",
    tweetSetence: "hello literally everyone",
    tweetimg: sheet,

    btn: {
      replyImg: reply,
      numbeeReply:1231,

      retweetImg: retweet,
      numberRetweet:1230,

      reactImg: react,
      numberReact:1231,

      btnDowlandImg: btndowland,
    },
  },
];

export default data;
