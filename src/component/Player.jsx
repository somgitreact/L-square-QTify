import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Loading from './Loading';



function Player({info}) {


//const randomvalue = Math.floor(Math.random(5)*10)
//const randomvalue = Math.floor(Math.random() * 5) + 1
const [randomValue, setRandomValue] = useState(null);
const [isLoading, setIsLoading] = useState(true)
//const isFirstRender = useRef(true);
const lastInfoRef = useRef(info);

 useEffect(()=>{
// console.log("jjjj", isFirstRender);
//    if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return;
//     } 
//      function playS(){
// setRandomValue(Math.floor(Math.random() * 5)+1)
//   }
//   playS()
  if(!info){return} ;
async function playS(){
 
    
//if (lastInfoRef.current !== info) {
  let random = Math.floor(Math.random() * 5) + 1
      setRandomValue(`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${random}.mp3`);
         let addio = await fetch(`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${random}.mp3`)
    console.log(addio);
     // lastInfoRef.current = info;
   // }
  }
 playS()
 },[info])
  return (
    <div className='player'>
      <div className='songplayinfo'>
       <img src={info.img} className='playimg'/> 
       <h5>{info.nam} <span>{info.album}</span></h5>
      </div>
     {isLoading && <Loading />}
      <ReactPlayer
        slot="media"
        src={randomValue}
        controls={true}
        playing={true}
        onBuffer={() => setIsLoading(true)}    
        //onBufferEnd={() => setIsLoading(false)} 
        onReady={() => setIsLoading(false)} 
        style={{
          width: "100%",
          height: "60px",
        //   "--controls": "none",
        }}
      >
      </ReactPlayer>
 
    </div>
  )
}



export default Player
