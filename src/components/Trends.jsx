import settingimg from '../icons/Settings.png'
import Trending from './Trending';
import Follow from './Follow';
import Btnshomore from './Btnshowmore';
import Seach from './Seach';
function Trends() {
return(
<section>
<Seach/>
<div className='section-trend'>
<p className='trends'><span>Trends for you</span><img src={settingimg} alt="Settings.png" /></p>


<p className='tradindList'>
<Trending/>
</p>

<p className='tradindList'>
<Trending/>
</p>

<p className='tradindList'>
<Trending/>
</p>

 <p className='tradindList'>
 <Trending/>
 </p>

<Btnshomore/>
</div>

<div>
<Follow/>
</div>

</section>
);
}
export default Trends