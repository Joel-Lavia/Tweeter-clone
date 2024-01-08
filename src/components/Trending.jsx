import imgMore from '../icons/more.png'
function Trending() {
return(
<div>
<p className='trendMore'><span className='subtitle-trend'>Trending in Turkey</span><span><img src={imgMore} alt="more img" /></span></p>
<p className='tag'>#SQUID</p>
<p className='subtitle-trend'>2,066 twetts</p>
</div>
);
}
export default Trending