import imgProfil from '../images/profile-photo.png'
import img from '../images/img.png'
import gif from '../images/Gif.png'
import pol from '../images/Poll.png'
import emoji from '../images/Emoji.png'
import schedule from '../images/Schedule.png'

function TweetEditor(){
    return (
    <section className='tweet-editor'>
        <a href="#">
        <img src={imgProfil} className='avatar' alt="profile-photo.png"/>
        </a>
        <form action="" className='tweet-editor-form'>
        <input type="text" name="" id="" className='tweet-editor-input' placeholder="What's happening ?" />

        <div className='tweet-editor-buttons'>
        <div className='tweet-editor-actions'>
        <input type="image" src={img} alt="images" />
        <input type="image" src={gif} alt="Gif" />
        <input type="image" src={pol} alt="poll" />
        <input type="image" src={emoji} alt="emojis" />
        <input type="image" src={schedule} alt="emojis" />
        </div>
        <button className='button'>Tweet</button>

        </div>
        </form>
    </section>

    );
}
export default TweetEditor