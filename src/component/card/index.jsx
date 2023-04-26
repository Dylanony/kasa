import  "./card.css"
import { Link } from 'react-router-dom'

function Card({title, cover, id}) {
    return (
        <Link to={"logement/" + id} className="card">
            <span className="title">
                {title}
            </span>
            <img src={cover} />
        </Link>
    ) 
}
  
export default Card