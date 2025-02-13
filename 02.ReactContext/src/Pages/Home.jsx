import SongDetail from "../Components/SongDetail"
import SongList from "../Components/SongList/SongList"

const Home = () => {
  return (
    <div className="Home-conteiner">Home
    <div className='left'>
        <p>Song List</p>
     <SongList />
      </div>
      <div className='right'>
        <p>Song Detail</p>
        <SongDetail />
      </div>
    </div>
  )
}

export default Home