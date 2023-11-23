import group from '../images/Group.png';
import TweetAction from './TweetAction';

function Tweet({tweettitle,tweettitleDetail,tweetimg,tweetText,tweetSheet,a}) {
  const nomber = 12;
   return(
 <section className='tweet'>

<a href="#" className='tweet-avatar'>
  <img src={tweetimg} alt="" />
</a>

 <div className='tweet-body'>

<p className='tweet-title'>
  <span className='tweet-title-author'>{tweettitle}</span>
  <a href="#"><img src={group} alt="group"/></a>
  <span className='tweet-title-details'>{tweettitleDetail}</span>
 </p>

<p className='tweet-text'>
{tweetText}
</p>
<a href="#" className='tweet-image'>
<img src={tweetSheet} alt="" />

</a>

<TweetAction reply1={'12'}/>
 </div>

 </section>
   );
}
export default Tweet