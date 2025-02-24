import HeadComp from "../../Components/HeadComp"
import MultipleCardComp from "../../Components/MultipleCardComp"
import DetailCardComp from "../../Components/DetailCardComp"
import { ItemsProvider } from "../../Context/ItemsContext"
import { defaultAllowedOrigins } from "vite"

const Home = () => {
  return (
    <ItemsProvider>
    <div className="HomePadre">

        <div className="HomeHead">
            <HeadComp></HeadComp>
        </div>
        <div className="HomeDetail">
            <DetailCardComp></DetailCardComp>
        </div>
        <div className="HomeCards">
            <MultipleCardComp></MultipleCardComp>
        </div>
    </div>
    </ItemsProvider>



  )
}

export default Home

