import imgcnn from '../images/tweet-profile-photo.png'
import group from '../images/Group.png'
import TweetAction from './TweetAction';

function Tweet() {
   return(
 <section className='tweet'>

<a href="#" className='tweet-avatar'>
  <img src={imgcnn} alt="" />
</a>

 <div className='tweet-body'>

<p className='tweet-title'>
  <span className='tweet-title-author'>CNN</span>
  <a href="#"><img src={group} alt="group"/></a>
  <span className='tweet-title-details'>@CNN .7m</span>
 </p>

<p className='tweet-text'>
President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
</p>
<TweetAction/>
 </div>

 </section>
   );
}
export default Tweet