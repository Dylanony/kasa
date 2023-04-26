import "./carousel.css"
import SlideCarousel from "../slideCarousel/Index"
import { useState } from 'react'

function Carousel(props, state) {
    let pictures = props.children
    const [numSlide, setNumSlide] = useState(0)
    const plusSildes = function(increment)
    {
        let myNumSlide = (numSlide+increment)
        if(myNumSlide>=props.children.length) {
            myNumSlide=0
        }else if(myNumSlide<0) {
            myNumSlide=props.children.length-1
        }
        setNumSlide(myNumSlide)
    }
    return (
        <div className="slideshow-container">
            <div className="mySlides fade">
                {pictures.map((picture, index) => {
                    return (<SlideCarousel actif={numSlide===index} key={index}>{picture}</SlideCarousel>)
                    })}
            </div>
            {props.children.length>1 && <><div className="direction">
                <a className="prev" href="#" onClick={() => {plusSildes(-1)}}>
                    <img src="/assets/left.png" className="img_arrow" alt="fléche directionnel"/>
                </a>
                <a className="next" onClick={() => {plusSildes(1)}}>
                    <img src="/assets/right.png" className="img_arrow" alt="fléche directionnel"/>
                </a>
            </div>
            <div className="count">
             <span>{numSlide+1}/{props.children.length}</span>
            </div></>}
        </div>
    ) 
}
  
export default Carousel