import settingimg from '../icons/Settings.png'
import iconSeach from '../icons/Search.png'
import Trending from './Trending';
import Follow from './Follow';
function Trends() {
return(
<section>
<p> <img src={iconSeach} alt="iconSeach.png" /> <input type="seach"  placeholder="Seach Twitter" /></p>

<div>
<p>Trends for you <img src={settingimg} alt="Settings.png" /></p>
<Trending/>
<button>Show more</button>
</div>

<div>
<Follow/>
</div>

</section>
);
}
export default Trends