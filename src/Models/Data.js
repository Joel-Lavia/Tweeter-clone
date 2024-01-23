import group from "../images/Group.png";
import sheet from "../images/tweet-image.png";
import cnn from "../images/tweet-profile-photo.png";
import nytimes from "../images/Tweet2.png";
import twetterMascote from "../images/MascoteImg.png";
import { FaRegComment } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

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
      replyImg:FaRegComment,
      numbeeReply: 57,

      retweetImg:LiaRetweetSolid,
      numberRetweet: 144,

      reactImg:CiHeart,
      numberReact: 123,

      btnDowlandImg:PiDownloadSimpleLight
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
      replyImg:FaRegComment,
      numbeeReply: 112,

      retweetImg:LiaRetweetSolid,
      numberRetweet: 76,

      reactImg:CiHeart,
      numberReact: 4872,

      btnDowlandImg:PiDownloadSimpleLight,
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
      replyImg:FaRegComment,
      numbeeReply: 159,

      retweetImg:LiaRetweetSolid,
      numberRetweet: 98,

      reactImg:CiHeart,
      numberReact: 21,

      btnDowlandImg:PiDownloadSimpleLight,
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
      replyImg:FaRegComment,
      numbeeReply: 178,

      retweetImg:LiaRetweetSolid,
      numberRetweet: 458,

      reactImg:CiHeart,
      numberReact: 492,

      btnDowlandImg:PiDownloadSimpleLight,
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
      replyImg:FaRegComment,
      numbeeReply: 1912,

      retweetImg:LiaRetweetSolid,
      numberRetweet: 4458,

      reactImg:CiHeart,
      numberReact: 4825,

      btnDowlandImg:PiDownloadSimpleLight,
    },
  },
];

export default data;
