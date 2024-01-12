import img from "../images/img.png";
import gif from "../images/Gif.png";
import pol from "../images/Poll.png";
import emoji from "../images/Emoji.png";
import schedule from "../images/Schedule.png";
import { useState } from "react";

function TweetForm() {
const [inputValue, setInputValue] = useState("");
const [result, setResult] = useState(""); 
const renderValue = (e) =>{
e.preventDefault();
setResult(inputValue)
}
const renderResult = (e) =>{
setInputValue(e.target.value)
setResult("")
}
return(
<section>
<form onSubmit={renderValue} action="" className="tweet-editor-form">
        <input
          type="text"
          name=""
          id=""
          className="tweet-editor-input"
          placeholder="What's happening ?"
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
          <button type="submit" className="button ml-80 mb-5">Tweet</button>
        </div>
    </form>
</section>
)
}
export default TweetForm