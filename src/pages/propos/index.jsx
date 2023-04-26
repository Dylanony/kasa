import "./propos.css"
import {data_about} from "../../data/data_about"
import Header from "../../component/header"
import Banner2 from "../../component/banner2"
import Footer from "../../component/footer"
import Collaps from "../../component/collaps"

function Propos() {
    return (
        <div>
            <Header/>
            <Banner2/>
            <div className="main">
                {
                    data_about.map((about, i) => 
                        <Collaps
                            key = {i}
                            _id = {i}
                            title = {about.title}
                            description = {about.description}
                        />
                    )
                }    
            </div>
            <Footer/>
        </div>
    ) 
}
  
export default Propos