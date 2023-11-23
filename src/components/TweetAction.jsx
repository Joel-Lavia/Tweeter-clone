import reply from '../images/Reply.png'
import retweet from '../images/Retweet.png'
import react from '../images/React.png'
import buton from '../images/Buton.png'
function TweetAction({reply1}){
return(
<div className='tweet-actions'>

<div className='tweet-action'>
<a href="#"><img src={reply} alt="" /></a>
<span>{reply1}</span>
</div>

<div className='tweet-action'>
<a href="#"><img src={retweet} alt="" /></a>
<span>144</span>
</div>

<div className='tweet-action'>
<a href="#"><img src={react} alt="" /></a>
<span>184</span>
</div>

<div className='tweet-action'>
<a href="#"><img src={buton} alt="" /></a>
<span>57</span>
</div>

</div>
);
}
export default TweetAction