import img from "../images/img.png";
import gif from "../images/Gif.png";
import pol from "../images/Poll.png";
import emoji from "../images/Emoji.png";
import schedule from "../images/Schedule.png";
import { useContext } from "react";
import { ContextGlobal } from "./DataSharing";
import { useForm } from "react-hook-form";
import profilePhoto from "../images/profile-photo.png";
import group from "../images/Group.png";
import axios from "axios";
// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
// import Data from "../data/initial-data.json";

function TweetForm() {
  const { addTweet,dataValue} = useContext(ContextGlobal);
  

  // const handelTweet = () => {
  //   // axios.post("http://localhost:3000/", addTweet)
  //   // .then((response) => setDataValue([response.data, ...dataValue]) );
  //   setDataValue([addTweet, ...dataValue]);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
 
  const handelCreateTweet = (data) => {

    const createTweet = {
        id: dataValue.length + 1,
        avatar: profilePhoto,
        nomTweet: "Bradley Ortiz",
        certification: group,
        lienTweet: "@bradley_",
        tweetSetence: data.tweet,
        btn: {
          numbeeReply: 0,
  
          numberRetweet: 0,
  
          numberReact: 0,
        },
  }
  addTweet(createTweet);
  reset();
}

  return (
    <section>
      <form
        onSubmit={handleSubmit((data) => handelCreateTweet(data))}
        className="tweet-editor-form"
      >
        <input
          type="text"
          name="textinput"
          id="textinput"
          className="tweet-editor-input"
          placeholder="What's happening ?"
          {...register("tweet", {
            require: true,
            maxLength: 25,
          })}
        />
        {errors.tweet && <p className="text-red-600">Tweet</p>}

        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <button>
              <img src={img} alt="button dowlan img" />
            </button>
            <button>
              <img src={gif} alt="button dowlan img" />
            </button>
            <button>
              <img src={pol} alt="button dowlan img" />
            </button>
            <button>
              <img src={emoji} alt="button dowlan img" />
            </button>
            <button>
              <img src={schedule} alt="button dowlan img" />
            </button>
          </div>
          <button type="submit" className="button ml-80 mb-5">Tweet</button>
        </div>
      </form>
    </section>
  );
}
export default TweetForm;
