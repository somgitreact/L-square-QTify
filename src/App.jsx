import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screen/Home'
import { BrowserRouter } from 'react-router'
import Navigation from './navigation/Navigation'
import Details from './screen/Details'
import Navbar from './component/Navbar'
import Search from './component/Search'
import { fetchdata } from './api/allapiservice'


function App() {
  const [topdata, setTopdata]= useState([])
   const [newdata, setNewdata]= useState([])
  const [songdata, setSongdata]= useState([])
   const [gendata, setGendata]= useState([])
  

  //       const fetchDataTop = async ()=>{
  //       const responcedata = await fetchdata('albums/top')
  //       console.log(responcedata);        
  //            setTopdata(responcedata)
  //     }

  //             const fetchDataSong= async ()=>{
  //       const responcedata = await fetchdata('songs')
  //       console.log(responcedata);        
  //            setSongdata(responcedata)
  //     }

  // useEffect( function(){
  //     fetchDataTop()
  //     fetchDataSong()
  // },[])



  useEffect(() => {
  const fetchAllData = async () => {
    try {
      const [topRes, newRes, songRes, genres] = await Promise.allSettled([
        fetchdata("albums/top"),
        fetchdata("albums/new"),
        fetchdata("songs"),
        fetchdata("genres"),
      ]);

    //  console.log("++++++", genres.value.data);

     setTopdata(topRes.value);
     setNewdata(newRes.value)
     setSongdata(songRes.value);
      setGendata(genres.value.data);
     // setSongfilter(songRes.value)
    } catch (error) {
      console.error("API error:", error);
    }
  };

  fetchAllData();
}, []);

const objectAll = {topdata, newdata, songdata, gendata}

  return (
    <BrowserRouter>

    <div className=' flex flex-col'  style={{backgroundColor: 'var(--color-black)'}}>

        {/* <Header>
            <Search />
        </Header> */}
        <Navbar searchdata={[...topdata, ...newdata]} />

<Navigation objectAll={objectAll} />
   
 
    </div>
    </BrowserRouter>
  )
}

export default App
