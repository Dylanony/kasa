import banner from "../../assets/banner_home.png"
import card from "../../component/card"

function Home() {
    return (
        <main>
            <div class="banner">
                <h1>
                    Chez vous, partout et ailleurs
                </h1>
                <div class="image-banner">
                    <img src={banner} alt="paysage maritime" />
                </div>
            </div>
            <div class="gallery">
                <ul>
                    <li>
                        {card}
                    </li>
                </ul>
            </div>
        </main>
    ) 
}
  
export default Home