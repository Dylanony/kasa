import "./logement.scss"
import {data} from "../../data/data"
import { useParams, Navigate} from "react-router-dom"
import Header from "../../component/header"
import Carousel from "../../component/carousel"
import Host from "../../component/host"
import Tag from "../../component/tag"
import Rating from "../../component/rating"
import Collaps from "../../component/collaps"
import Footer from "../../component/footer"
import Error from "../error"

function Logement() {
    const {id} = useParams();
    const detailsLogement = data.find((logement) => logement.id === id);
    if(!detailsLogement) {
        return <Error/>
    } 
    const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,

    }  = detailsLogement; 
    
    let tagList = null;
    if(tags !== undefined) {
        tagList = tags.map((tag,i) => 
            <Tag
                key={i}
                tag = {tag}
            />
        );
    };
    return (
        <div className="container">
            <Header/>
            <div className="contained">
                <div className="carrousel">
                    <Carousel>
                        {pictures.map((pictures, i) => {return (<img key={i} src={pictures} className="img_carousel"/>)})}
                    </Carousel> 
                    
                </div>
                <div className="infos_housing">
                    <div className="title_user">
                        <div className="title_housing">
                            <h2>
                                {title}
                            </h2>
                            <span>
                                {location}
                            </span>
                        </div>
                        
                        <div className="tags">
                            {tagList}    
                        </div>
                    </div>
                    <div className="tags_rating">
                        <div className="user">
                            <Host
                                name = {host.name}
                                picture = {host.picture}
                            />
                        </div>
                        
                        <div className="rating">
                            <Rating
                                note = {rating}
                            />
                        </div>
                    </div>
                </div>
                <div className="collapse">
                    <div className="description">
                        <Collaps
                            _id = {1}
                            title = "Description"
                            description = {description}
                        />
                    </div>
                    <div className="equipment">
                        <Collaps
                            _id = {2}
                            title = "Equipements"
                            description = {equipments.map((equipement, index) => {return (<span key={index}>{equipement}</span>)})}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    ) 
}
  
export default Logement