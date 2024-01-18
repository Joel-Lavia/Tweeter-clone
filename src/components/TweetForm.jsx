import img from "../images/img.png";
import gif from "../images/Gif.png";
import pol from "../images/Poll.png";
import emoji from "../images/Emoji.png";
import schedule from "../images/Schedule.png";
import { useContext, useState } from "react";
import { ContextGlobal } from "./DataSharing";

function TweetForm() {
  const [inputValue,setInputValue] = useState('');
  const textValue = (e) =>{
    setInputValue(e.target.value)
  } 
const constex = () => useContext(ContextGlobal);

  
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
         value={inputValue}
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
          <button className="button ml-80 mb-5" onClick={(e) => {e.preventDefault();constex()}}>Tweet</button>
        </div>
      </form>
    </section>
  );
}
export default TweetForm;
