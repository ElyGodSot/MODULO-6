
import SongDetail from "../Components/SongDetail/SongDetail"
import SongList from "../Components/SongList/SongList"
import { SongProvider } from "../Context/SongContext"
import Header from "../Components/Header/Headeer"

import "./Home.css"
import { useSongContext } from "../Hook/useSongContext"


const Home = () => {
  const {loading} = useSongContext()

  return (
    <SongProvider>
      
  {loading ? (
          <h1>cargangp</h1>
        ) : (
          

<>
<Header></Header>
<div className="home-container">
    <div className="left">
      <p>Song List</p>
      <SongList />
    </div>

    <div className="right">
      <p>Song Detail</p>
      <SongDetail />
    </div>
    </div>
  </>
)}

   
  </SongProvider>
  )
}

export default Home
/*

<div className='right'>
        <p>Song Detail</p>
        <SongDetail />
    </div>*/