import settingimg from '../icons/Settings.png'
import iconSeach from '../icons/Search.png'
import Trending from './Trending';
function Trends() {
return(
<section>
<p> <img src={iconSeach} alt="iconSeach.png" /> <input type="seach"  placeholder="Seach Twitter" /></p>

<div>
<p>Trends for you <img src={settingimg} alt="Settings.png" /></p>
<Trending/>
<button>Show more</button>
</div>

</section>
);
}
export default Trends