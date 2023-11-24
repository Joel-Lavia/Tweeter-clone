import reply from '../images/Reply.png'
import retweet from '../images/Retweet.png'
import react from '../images/React.png'
import buton from '../images/Buton.png'
function TweetAction({btnreply,btnretweet,btnreact}){
return(
<div className='tweet-actions'>

<div className='tweet-action'>
<a href="#"><img src={reply} alt="" /></a>
<span>{btnreply}</span>
</div>

<div className='tweet-action'>
<a href="#"><img src={retweet} alt="" /></a>
<span>{btnretweet}</span>
</div>

<div className='tweet-action'>
<a href="#"><img src={react} alt="" /></a>
<span>{btnreact}</span>
</div>

<div className='tweet-action'>
<a href="#"><img src={buton} alt="" /></a>
<span></span>
</div>

</div>
);
}
export default TweetAction