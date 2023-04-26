import "./home.css"
import {data} from "../../data/data"
import Header from "../../component/header"
import Banner from "../../component/banner/banner"
import Card from "../../component/card"
import Footer from "../../component/footer"

function Home() {
    return (
        <main>
            <Header/>
            <Banner/>
            <div className="gallery">
                {
                    data.map((logement, i) => 
                        <Card 
                            key={i}
                            title = {logement.title}
                            cover = {logement.cover}
                            id = {logement.id}
                        />
                    )
                }    
            </div>
            <Footer/>
        </main>
    ) 
}
  
export default Home