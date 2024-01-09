import { useState } from "react";

function TweetLike({likeImg,nbr}) {
 const [counter,setCount] = useState(0);  
 const [like,setLike] = useState(false);

 const situationCountLike = ()=>{
 if(counter === 0) {
setCount(counter+1);
setLike(true);
 }
 else if(like === like){
setCount(counter-1)
setLike(false);
 }
 } 
 return(
<div>
    <button className='tweet-action' onClick={situationCountLike}><img src={likeImg} alt="likeImg" />{counter+nbr}</button>
 </div>
 );
}
export default TweetLike;