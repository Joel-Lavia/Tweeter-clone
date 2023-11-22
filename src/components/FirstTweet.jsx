import imgcnn from '../images/tweet-profile-photo.png'
import group from '../images/Group.png'
import reply from '../images/Reply.png'
import retweet from '../images/Retweet.png'
import react from '../images/React.png'
import buton from '../images/Buton.png'
function FirstTweet() {
   return(
 <section className='tweet'>
<div>
<a href="#">
<img src={imgcnn} alt="Logo CNN" />
</a>
<p>CNN</p>
<a href="#"><img src={group}alt="Group.png" /></a><p>@CNN . 7m</p>
</div>

<div>
<p>President Joe Biden touted a new agreement reached 
    with the European Union to ease Trump-era tariffs on aluminum and steel as a "major 
    breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.
    </p>
</div>

<div>
<button><img src={reply}alt="" />56</button>
<button><img src={retweet}alt="" />144</button>
<button><img src={react}alt="" />148</button>
<button><img src={buton}alt="" /></button> 
</div>
 </section>
   );
}
export default FirstTweet