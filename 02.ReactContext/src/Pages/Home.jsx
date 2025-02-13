import SongDetail from "../Components/SongDetail"
import SongList from "../Components/SongList/SongList"
import { SongProvider } from "../Context/SongContext"
import "./Home.css"

const Home = () => {
  return (
    <SongProvider>
  <div className="home-container">
    <div className='left'>
        <p>Song List</p>
     <SongList />
    </div>
    <div className='right'>
        <p>Song Detail</p>
        <SongDetail />
    </div>
  </div>
  </SongProvider>
  )
}

export default Home