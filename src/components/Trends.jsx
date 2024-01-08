import settingimg from '../icons/Settings.png'
import iconSeach from '../icons/Search.png'
import Trending from './Trending';
import Follow from './Follow';
import Btnshomore from './Btnshowmore';
function Trends() {
return(
<section>

<p className='inputSeach'><input type="seach"  placeholder='Seach Twitter' /></p>

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