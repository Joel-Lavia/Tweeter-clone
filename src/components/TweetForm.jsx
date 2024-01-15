import img from "../images/img.png";
import gif from "../images/Gif.png";
import pol from "../images/Poll.png";
import emoji from "../images/Emoji.png";
import schedule from "../images/Schedule.png";
import { useContext, useState } from "react";


function TweetForm() {
  // const Context = useContext(ContextGlobal);
  const [textinput,setText] = useState('');
  const textValue = (e) =>{
    setText(e.target.value)
  } 
  return (
    <section>
      <form action="" className="tweet-editor-form">
        <input
          type="text"
          name="textinput"
          id="textinput"
          className="tweet-editor-input"
          placeholder="What's happening ?"
          onChange={textValue}
         value={textinput}
        />
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
          {/* <button className="button ml-80 mb-5">Tweet</button> */}
        </div>
      </form>
    </section>
  );
}
export default TweetForm;
