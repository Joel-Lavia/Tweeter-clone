import img from '../images/img.png'
import gif from '../images/Gif.png'
import pol from '../images/Poll.png'
import emoji from '../images/Emoji.png'
import schedule from '../images/Schedule.png'
import imgProfil from '../images/profile-photo.png';
import Avatar from './Avatar';

function TweetEditor({imgtwettavatar}){
    return (
    <section className='tweet-editor'>
        <Avatar avatarImg={imgProfil}/>
        <form action="" className='tweet-editor-form'>
        <input type="text" name="" id="" className='tweet-editor-input' placeholder="What's happening ?" />

        <div className='tweet-editor-buttons'>
        <div className='tweet-editor-actions'>
        <a href="#"><img src={img} alt=""/></a>
        <a href="#"><img src={gif} alt=""/></a>
        <a href="#"><img src={pol} alt=""/></a>
        <a href="#"><img src={emoji} alt=""/></a>
        <a href="#"><img src={schedule} alt=""/></a>
        </div>
        <button className='button'>Tweet</button>
        </div>
        </form>
    </section>

    );
}
export default TweetEditor